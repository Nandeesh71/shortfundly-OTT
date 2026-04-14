import Link from "next/link";
import { getContentById } from "@/lib/ott-backend";

export default async function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const movie = await getContentById(resolvedParams.id);

  return (
    <div className="min-h-screen bg-black flex flex-col pt-4 md:pt-10 px-4 md:px-8">
      <div className="w-full max-w-[1400px] mx-auto aspect-video bg-[#050505] border border-white/[0.06] rounded-xl overflow-hidden relative shadow-2xl">
        {movie?.videoUrl ? (
          <video src={movie.videoUrl} controls autoPlay className="w-full h-full object-contain" />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white/50">
            Video Content Not Available
          </div>
        )}
      </div>
      
      <div className="max-w-[1400px] mx-auto w-full py-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold">{movie?.title || "Unknown Title"}</h1>
        <div className="flex gap-3 mt-4">
          <span className="bg-white/[0.08] px-3 py-1 text-sm rounded border border-white/[0.1]">
            {movie?.year ?? 2026}
          </span>
          <span className="bg-white/[0.08] px-3 py-1 text-sm rounded border border-white/[0.1]">
            {movie?.duration ?? "Unknown duration"}
          </span>
          <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 text-sm rounded font-medium border border-yellow-500/20">
            {movie?.isPremium ? "PREMIUM" : "FREE"}
          </span>
        </div>
        <p className="text-gray-400 mt-6 max-w-3xl leading-relaxed">
          {movie?.synopsis ??
            "This title is not in the local catalog. Connect your OTT backend using OTT_BACKEND_URL and OTT_BACKEND_TOKEN in .env.local."}
        </p>
        <div className="mt-8">
          <Link href="/" className="rounded-md border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/5">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
