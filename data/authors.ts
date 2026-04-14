export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const authors: Author[] = [
  {
    slug: "rory-reed",
    name: "Rory Reed",
    role: "Editor",
    bio: "Rory Reed covers breaking music news, artist movements, and the cultural moments shaping what people listen to next.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "jamie-calder",
    name: "Jamie Calder",
    role: "Backstage Radar",
    bio: "Jamie Calder writes about emerging artists, local scenes, and the musicians worth catching before everyone else does.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "alex-mercer",
    name: "Alex Mercer",
    role: "Tour & Festival Writer",
    bio: "Alex Mercer covers live music, lineup culture, festival movement, and the touring ecosystem around today’s biggest artists.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "jordan-vale",
    name: "Jordan Vale",
    role: "Culture Writer",
    bio: "Jordan Vale writes about where music meets film, fashion, internet culture, and the wider pop conversation.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "casey-monroe",
    name: "Casey Monroe",
    role: "New Music Writer",
    bio: "Casey Monroe covers albums, singles, and the releases setting the tone for the week ahead.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
  },
];
