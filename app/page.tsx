import Link from "next/link";
import { stories } from "@/data/stories";

const crowdNoise = [
  "Mk.gee",
  "Ethel Cain",
  "Clairo",
  "The Last Dinner Party",
  "Sabrina Carpenter",
  "Japanese Breakfast",
];

const sceneSignals = [
  "DIY venue buzz building in Richmond",
  "Festival undercards getting more adventurous",
  "Bedroom pop still feeding mainstream sounds",
  "Music biopics are back in the culture cycle",
];

const playlist = [
  "Mk.gee — Dream Police",
  "Clairo — Sofia",
  "Ethel Cain — American Teenager",
  "Dijon — Many Times",
  "Japanese Breakfast — Be Sweet",
];

function SectionTitle({
  eyebrow,
  title,
  blurb,
  href,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55">
          {blurb}
        </p>
      </div>

      <Link
        href={href}
        className="text-sm text-fuchsia-300 transition hover:text-fuchsia-200"
      >
        View all
      </Link>
    </div>
  );
}

function StoryCard({
  story,
}: {
  story: {
    slug: string;
    section: string;
    title: string;
    excerpt: string;
    image: string;
  };
}) {
  return (
    <Link
      href={`/article/${story.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div
        className="h-56 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${story.image})` }}
      />
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
          {story.section.replace("-", " ")}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-tight text-white transition group-hover:text-fuchsia-200">
          {story.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/65">{story.excerpt}</p>
      </div>
    </Link>
  );
}

function MiniStoryCard({
  story,
}: {
  story: {
    slug: string;
    section: string;
    title: string;
    excerpt: string;
  };
}) {
  return (
    <Link
      href={`/article/${story.slug}`}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-200 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
        {story.section.replace("-", " ")}
      </p>
      <h4 className="mt-3 text-xl font-semibold leading-tight text-white transition group-hover:text-fuchsia-200">
        {story.title}
      </h4>
      <p className="mt-3 text-sm leading-7 text-white/60">{story.excerpt}</p>
    </Link>
  );
}

export default function Home() {
  const heroStory =
    stories.find((story) => story.section === "on-stage") ?? stories[0];

  const radarPick =
    stories.find((story) => story.section === "backstage-radar") ?? stories[0];

  const newDropPick =
    stories.find((story) => story.section === "new-drop") ?? stories[0];

  const dispatchLead =
    stories.find((story) => story.section === "dispatch") ?? stories[0];

  const dispatchStories = stories
    .filter((story) => story.section === "dispatch")
    .slice(0, 3);

  const onStageStories = stories
    .filter((story) => story.section === "on-stage")
    .slice(0, 3);

  const radarStories = stories
    .filter((story) => story.section === "backstage-radar")
    .slice(0, 3);

  const greenRoomStories = stories
    .filter((story) => story.section === "green-room")
    .slice(0, 3);

  return (
    <main className="bg-[radial-gradient(circle_at_top_left,_rgba(99,36,180,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.12),_transparent_22%),linear-gradient(to_bottom,_#070914,_#090d18,_#070914)]">
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-fuchsia-200">
            Backstage Pass
          </span>
          <p className="text-sm leading-7 text-white/55">
            Music culture from the other side of the curtain.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.45fr_0.75fr]">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <Link
              href={`/article/${heroStory.slug}`}
              className="block transition hover:opacity-[0.98]"
            >
              <div
                className="relative h-[380px] bg-cover bg-center md:h-[520px]"
                style={{ backgroundImage: `url(${heroStory.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
                    Featured Story
                  </p>
                  <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.02] text-white md:text-6xl">
                    {heroStory.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/80 md:text-xl md:leading-9">
                    {heroStory.excerpt}
                  </p>
                </div>
              </div>
            </Link>

            <div className="border-t border-white/10 p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <MiniStoryCard story={radarPick} />
                <MiniStoryCard story={newDropPick} />
              </div>

              <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 md:grid-cols-3">
                {onStageStories.map((story) => (
                  <MiniStoryCard key={story.slug} story={story} />
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
                Crowd Noise
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {crowdNoise.map((artist) => (
                  <span
                    key={artist}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
                Scene Signals
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/65">
                {sceneSignals.map((signal) => (
                  <li key={signal}>• {signal}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
                The Backstage Playlist
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                What Everyone’s Listening To Today
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Updated daily by Backstage Wire
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {playlist.map((track) => (
                  <span
                    key={track}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/78"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/article/${dispatchLead.slug}`}
              className="block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${dispatchLead.image})` }}
              />
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
                  Dispatch Lead
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                  {dispatchLead.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {dispatchLead.excerpt}
                </p>
              </div>
            </Link>
          </aside>
        </div>

        <section className="mt-16 border-t border-white/10 pt-12">
          <SectionTitle
            eyebrow="Backstage Dispatch"
            title="Quick artist Q&As that feel personal, repeatable, and shareable"
            blurb="A signature Backstage Wire format designed to build artist participation and reader habit."
            href="/dispatch"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dispatchStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-12">
          <SectionTitle
            eyebrow="Backstage Radar"
            title="The artists and scenes worth catching before everyone else does"
            blurb="Discovery with a little more taste and a little less algorithm."
            href="/radar"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {radarStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-12">
          <SectionTitle
            eyebrow="Green Room"
            title="Where music, style, film, and internet culture collide"
            blurb="The stories around the songs matter too."
            href="/green-room"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {greenRoomStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
                Newsletter
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                Get the backstage pass
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                Music news, discovery, dispatches, and scene reports delivered
                with more taste and less noise.
              </p>
            </div>

            <div className="flex items-center">
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                />
                <button className="rounded-2xl bg-fuchsia-500 px-5 py-3 font-medium text-white transition hover:bg-fuchsia-400">
                  Join
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
