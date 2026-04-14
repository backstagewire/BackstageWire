import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/data/stories";
import { authors } from "@/data/authors";

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const story = stories.find((item) => item.slug === params.slug);

  if (!story) {
    notFound();
  }

  const author = authors.find((item) => item.slug === story.authorSlug);

  return (
    <main className="bg-[#070914] text-white">
      <article className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <div
          className="h-[320px] w-full rounded-3xl bg-cover bg-center md:h-[420px]"
          style={{ backgroundImage: `url(${story.image})` }}
        />

        <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
          {story.section.replace("-", " ")}
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          {story.title}
        </h1>

        <p className="mt-4 text-lg leading-8 text-white/70">{story.excerpt}</p>

        {author && (
          <Link
            href={`/author/${author.slug}`}
            className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <div
              className="h-14 w-14 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${author.image})` }}
            />
            <div>
              <p className="text-sm text-white/50">By</p>
              <p className="font-semibold text-white">{author.name}</p>
              <p className="text-sm text-white/50">{author.role}</p>
            </div>
          </Link>
        )}

        <div className="mt-10 space-y-6 text-base leading-8 text-white/80">
          {story.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
