import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { getOpenAIClient } from "@/lib/openai";
import {
  assignAuthor,
  classifySection,
  dedupeStories,
  fetchMusicCultureSourceStories,
  slugify,
  type SourceStory,
} from "@/lib/news";
import { loadArticles, saveArticles, type GeneratedArticle } from "@/lib/publish";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

type AiArticleShape = {
  title: string;
  dek: string;
  body: string;
  excerpt: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
};

async function generateArticle(story: SourceStory, section: string, authorSlug: string) {
  const client = getOpenAIClient();

  const prompt = `
You are writing for Backstage Wire, a stylish music-first publication covering pop, rock, indie culture, local scenes, festivals, releases, and culture crossovers.

Write one article based only on the sourced facts below.

Rules:
- Do not invent quotes.
- Do not invent allegations, rumors, or dates.
- Stay close to the available source information.
- Write in a modern editorial style.
- Output valid JSON only.

Section: ${section}
Author slug: ${authorSlug}

Source title: ${story.title}
Source description: ${story.description}
Source outlet: ${story.sourceName}
Source URL: ${story.url}
Published at: ${story.publishedAt ?? "Unknown"}

Return this shape:
{
  "title": "string",
  "dek": "string",
  "body": "string with 3-5 paragraphs separated by \\n\\n",
  "excerpt": "string",
  "tags": ["string"],
  "seoTitle": "string",
  "seoDescription": "string"
}
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const raw = response.output_text?.trim();

  if (!raw) {
    throw new Error("OpenAI returned empty output.");
  }

  let parsed: AiArticleShape;
  try {
    parsed = JSON.parse(raw) as AiArticleShape;
  } catch {
    throw new Error(`Could not parse model JSON: ${raw}`);
  }

  const now = new Date().toISOString();

  const article: GeneratedArticle = {
    id: crypto.randomUUID(),
    slug: slugify(parsed.title),
    title: parsed.title,
    dek: parsed.dek,
    body: parsed.body,
    excerpt: parsed.excerpt,
    section,
    authorSlug,
    featuredImage: story.image,
    publishedAt: now,
    updatedAt: now,
    sourceLinks: [{ title: story.sourceName, url: story.url }],
    tags: parsed.tags ?? [],
    seoTitle: parsed.seoTitle,
    seoDescription: parsed.seoDescription,
  };

  return article;
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const expected = process.env.CRON_SECRET;

  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "Missing CRON_SECRET" },
      { status: 500 }
    );
  }

  if (auth !== `Bearer ${expected}`) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const sourceStories = dedupeStories(await fetchMusicCultureSourceStories());

    const existingArticles = await loadArticles();
    const existingTitles = new Set(existingArticles.map((a) => a.title.toLowerCase().trim()));

    const newArticles: GeneratedArticle[] = [];

    for (const story of sourceStories.slice(0, 5)) {
      if (existingTitles.has(story.title.toLowerCase().trim())) continue;

      const section = classifySection(story.title, story.description);
      const authorSlug = assignAuthor(section);

      const article = await generateArticle(story, section, authorSlug);
      newArticles.push(article);
    }

    const merged = [...newArticles, ...existingArticles]
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .slice(0, 100);

    await saveArticles(merged);

    return NextResponse.json({
      ok: true,
      created: newArticles.length,
      total: merged.length,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown cron error";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
