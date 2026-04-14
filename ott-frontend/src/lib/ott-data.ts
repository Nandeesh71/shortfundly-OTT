export type Genre = "Drama" | "Thriller" | "Comedy" | "Documentary" | "Action" | "Romance";
export type MediaKind = "short" | "movie" | "series";

export interface OttItem {
  id: string;
  slug: string;
  title: string;
  synopsis: string;
  year: number;
  duration: string;
  language: string;
  genre: Genre;
  kind: MediaKind;
  isPremium: boolean;
  rating: number;
  thumbnail: string;
  backdrop: string;
  videoUrl: string;
}

export const ottCatalog: OttItem[] = [
  {
    id: "ott-1001",
    slug: "maya-ulagam",
    title: "Maya Ulagam",
    synopsis: "A dream researcher gets trapped in a memory loop while investigating a missing filmmaker.",
    year: 2026,
    duration: "20m",
    language: "Tamil",
    genre: "Drama",
    kind: "short",
    isPremium: true,
    rating: 8.5,
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=900&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    id: "ott-1002",
    slug: "city-of-shadows",
    title: "City of Shadows",
    synopsis: "An investigative journalist uncovers a political conspiracy inside a smart city project.",
    year: 2025,
    duration: "1h 48m",
    language: "English",
    genre: "Thriller",
    kind: "movie",
    isPremium: true,
    rating: 8.2,
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=900&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "ott-1003",
    slug: "laugh-lines",
    title: "Laugh Lines",
    synopsis: "A failed stand-up comic starts recording jokes for his daughter and goes viral overnight.",
    year: 2024,
    duration: "28m",
    language: "Hindi",
    genre: "Comedy",
    kind: "short",
    isPremium: false,
    rating: 7.9,
    thumbnail: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=900&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "ott-1004",
    slug: "one-last-frame",
    title: "One Last Frame",
    synopsis: "Two ex-lovers reunite to finish a short film that was abandoned years ago.",
    year: 2023,
    duration: "39m",
    language: "Tamil",
    genre: "Romance",
    kind: "short",
    isPremium: false,
    rating: 8.0,
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=900&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518134346374-184f9d21cea2?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: "ott-1005",
    slug: "the-silent-trial",
    title: "The Silent Trial",
    synopsis: "A legal intern discovers courtroom evidence that can alter a celebrated verdict.",
    year: 2026,
    duration: "1h 55m",
    language: "Telugu",
    genre: "Drama",
    kind: "movie",
    isPremium: true,
    rating: 8.6,
    thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=900&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "ott-1006",
    slug: "blue-harbor-files",
    title: "Blue Harbor Files",
    synopsis: "A maritime crime unit tracks smuggling operations across three coastal states.",
    year: 2024,
    duration: "6 Episodes",
    language: "Malayalam",
    genre: "Action",
    kind: "series",
    isPremium: true,
    rating: 8.1,
    thumbnail: "https://images.unsplash.com/photo-1454922915609-78549ad709bb?q=80&w=900&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
];
