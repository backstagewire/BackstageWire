export type Story = {
  slug: string;
  section: "on-stage" | "backstage-radar" | "green-room" | "new-drop" | "dispatch";
  title: string;
  excerpt: string;
  body: string[];
  image: string;
};

export const stories: Story[] = [
  {
    slug: "richmonds-indie-scene-is-quietly-exploding",
    section: "backstage-radar",
    title: "Richmond’s Indie Scene Is Quietly Exploding",
    excerpt:
      "From DIY venues to viral TikTok moments, the next wave of artists is coming from unexpected places.",
    body: [
      "Richmond’s music scene has always had a strong DIY backbone, but lately that energy feels louder, more connected, and more visible outside the city itself.",
      "Smaller venues, local promoters, and artists building direct relationships with fans are creating a scene that feels organic instead of manufactured.",
      "What makes the moment interesting is not just the music itself, but the ecosystem around it — the spaces, the collaboration, and the sense that audiences want discovery again.",
    ],
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "festival-season-is-back",
    section: "on-stage",
    title: "Festival Season Is Back — Here’s What Everyone Is Watching",
    excerpt:
      "Major festivals are expanding lineups while smaller events become the place to discover the next breakout act.",
    body: [
      "Festival season is no longer just about headliners. Increasingly, the conversation starts lower on the poster, where emerging artists are gaining cult followings before mainstream coverage catches up.",
      "For fans, that means lineups feel more layered. For artists, it means exposure can come from being in the right festival ecosystem at the right moment.",
      "The most interesting story may not be who tops the bill, but who leaves with a bigger audience than they arrived with.",
    ],
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "why-music-biopics-are-dominating-pop-culture-again",
    section: "green-room",
    title: "Why Music Biopics Are Dominating Pop Culture Again",
    excerpt:
      "Studios keep returning to artist stories, and audiences keep showing up for nostalgia and mythology.",
    body: [
      "Music biopics continue to dominate because they offer more than nostalgia. They turn artists into cultural symbols and repackage familiar eras for new audiences.",
      "The strongest examples are not just about the rise to fame. They work because they tap into larger themes like ambition, reinvention, image, and control.",
      "As long as music remains central to identity, stories about musicians will keep resonating on screen.",
    ],
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "the-releases-defining-this-week",
    section: "new-drop",
    title: "The Releases Defining This Week",
    excerpt:
      "A quick read on the albums, singles, and drops shaping the mood right now.",
    body: [
      "Every release cycle has a few projects that feel bigger than streaming numbers. They shape the mood, influence conversations, and hint at where artists are heading next.",
      "This week’s strongest drops show a mix of intimacy and ambition, with artists leaning into sharper production choices and more defined visual worlds.",
      "The best new music does not just arrive. It changes the temperature around it.",
    ],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "5-backstage-questions-with-japanese-breakfast",
    section: "dispatch",
    title: "5 Backstage Questions with Japanese Breakfast",
    excerpt:
      "A quick-hit Q&A built around taste, chaos, and the songs artists carry with them.",
    body: [
      "Backstage Dispatch is built around one simple idea: ask artists the same questions and let personality do the rest.",
      "The result is a format that feels intimate without being overworked, and specific without becoming too polished.",
      "It’s the kind of recurring feature that readers recognize and artists want to share.",
    ],
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
  },
];
