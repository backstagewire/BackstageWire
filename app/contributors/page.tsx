import Link from "next/link";
import { authors } from "@/data/authors";

export default function ContributorsPage() {
  return (
    <main className="bg-[#070914] text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
          Contributors
        </p>
        <h1 className="mt-3 text-4xl font-bold">The voices behind Backstage Wire</h1>
        <p className="mt-3 max-w-2xl text-white/65">
          Writers covering music, culture, discovery, and the stories happening just offstage.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {authors.map((author) => (
            <Link
              key={author.slug}
              href={`/author/${author.slug}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${author.image})` }}
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold">{author.name}</h2>
                <p className="mt-2 text-white/60">{author.role}</p>
                <p className="mt-4 text-sm leading-7 text-white/65">{author.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
