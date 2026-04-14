<article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
  <Link
    href={`/article/${heroStory.slug}`}
    className="block transition hover:opacity-95"
  >
    <div
      className="relative h-[340px] bg-cover bg-center md:h-[460px]"
      style={{ backgroundImage: `url(${heroStory.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
          Featured Story
        </p>
        <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-[1.02] text-white md:text-6xl">
          {heroStory.title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-xl md:leading-9">
          {heroStory.excerpt}
        </p>
      </div>
    </div>
  </Link>

  <div className="border-t border-white/10 p-5 md:p-6">
    <div className="grid gap-4 md:grid-cols-2">
      <Link
        href={`/article/${radarPick.slug}`}
        className="rounded-2xl border border-white/10 bg-black/15 p-5 transition hover:border-white/20 hover:bg-white/5"
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
          Radar Pick
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
          {radarPick.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/65">
          {radarPick.excerpt}
        </p>
      </Link>

      <Link
        href={`/article/${newDropPick.slug}`}
        className="rounded-2xl border border-white/10 bg-black/15 p-5 transition hover:border-white/20 hover:bg-white/5"
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
          New Drop
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
          {newDropPick.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/65">
          {newDropPick.excerpt}
        </p>
      </Link>
    </div>

    <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 md:grid-cols-3">
      {onStageStories.slice(0, 3).map((story) => (
        <Link
          key={story.slug}
          href={`/article/${story.slug}`}
          className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
            {story.section.replace("-", " ")}
          </p>
          <h4 className="mt-3 text-lg font-semibold leading-tight text-white transition group-hover:text-fuchsia-200">
            {story.title}
          </h4>
          <p className="mt-3 text-sm leading-7 text-white/60">
            {story.excerpt}
          </p>
        </Link>
      ))}
    </div>
  </div>
</article>
