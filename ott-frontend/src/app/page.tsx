import ContentCarousel from "@/components/ui/ContentCarousel";
import HeroBanner from "@/components/ui/HeroBanner";
import Link from "next/link";
import { getHomeContent } from "@/lib/ott-backend";

export default async function HomePage() {
  const content = await getHomeContent();

  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <HeroBanner banners={content.heroBannerItems} />

      {/* Embedded Sub-Navigation directly matching the screenshot structure */}
      <div className="w-full bg-[#050505] border-b border-white/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.8)] z-20">
        <div className="flex px-4 md:px-8 py-3 gap-6 max-w-[1600px] mx-auto w-full items-center">
          <Link href="/" className="text-white font-bold text-[13px] tracking-wide border-b-2 border-[#E41E26] pb-1">Home</Link>
          <Link href="/browse?kind=short" className="text-gray-400 hover:text-white font-medium text-[13px] tracking-wide transition-colors">Short Films</Link>
          <Link href="/browse?kind=movie" className="text-gray-400 hover:text-white font-medium text-[13px] tracking-wide transition-colors">Movies</Link>
          <Link href="/browse?kind=series" className="text-gray-400 hover:text-white font-medium text-[13px] tracking-wide transition-colors">Web Series</Link>
          <Link href="/browse?premium=false" className="text-gray-400 hover:text-white font-medium text-[13px] tracking-wide transition-colors">Free</Link>
        </div>
      </div>

      <div className="z-10 pb-16 space-y-4 flex flex-col max-w-[1600px] w-full mx-auto relative mt-2">
        <ContentCarousel title="Latest Releases" items={content.latestReleases} />
        <ContentCarousel title="Trending Now" items={content.trendingNow} />
      </div>
    </div>
  );
}
