import Link from "next/link";
import { notFound } from "next/navigation";
import { authors } from "@/data/authors";
import { stories } from "@/data/stories";

export default function AuthorPage({
  params,
}: {
  params: { slug: string };
}) {
  const author = authors.find((item) => item.slug === params.slug);

  if (!author) {
    notFound();
  }

  const authorStories = stories.filter((story) => story.authorSlug === author.slug);

  return (
    <main className="bg-[#070914] text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
          <div
            className="h-56 w-full rounded-3xl bg-cover bg-center md:h-64"
            style={{ backgroundImage: `url(${author.image})` }}
          />

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
              Contributor
            </p>
            <h1 className="mt-3 text-4xl font-bold">{author.name}</h1>
            <p className="mt-2 text-white/60">{author.role}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              {author.bio}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold">Latest from {author.name}</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {authorStories.map((story) => (
              <Link
                key={story.slug}
                href={`/article/${story.slug}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${story.image})` }}
                />
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
                    {story.section.replace("-", " ")}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{story.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {story.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
