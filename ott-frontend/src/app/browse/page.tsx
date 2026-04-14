import Link from "next/link";
import { ottCatalog } from "@/lib/ott-data";
import MediaCard from "@/components/ui/MediaCard";

interface BrowsePageProps {
  searchParams: Promise<{ kind?: string; premium?: string; q?: string }>;
}

export default async function BrowsePage({ searchParams }: BrowsePageProps) {
  const params = await searchParams;
  const kind = params.kind;
  const premium = params.premium;
  const query = params.q?.toLowerCase().trim() ?? "";

  const filtered = ottCatalog.filter((item) => {
    const kindMatch = kind ? item.kind === kind : true;
    const premiumMatch = premium ? String(item.isPremium) === premium : true;
    const queryMatch = query
      ? item.title.toLowerCase().includes(query) ||
        item.synopsis.toLowerCase().includes(query) ||
        item.genre.toLowerCase().includes(query)
      : true;
    return kindMatch && premiumMatch && queryMatch;
  });

  return (
    <div className="mx-auto w-full max-w-[1600px] px-4 py-10 md:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Browse</p>
          <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">New OTT Catalog</h1>
          <p className="mt-2 text-sm text-white/60">
            Filtered content from the redesigned test platform.
          </p>
        </div>
        <Link href="/" className="rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5">
          Back to home
        </Link>
      </div>

      {query ? (
        <p className="mb-4 text-sm text-white/60">
          Search results for <span className="text-white">{query}</span>
        </p>
      ) : null}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {filtered.map((item) => (
          <MediaCard
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.thumbnail}
            isPremium={item.isPremium}
            type={item.year >= 2025 ? "NEW" : undefined}
          />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          No titles matched this filter. Try a different search or category.
        </div>
      ) : null}
    </div>
  );
}
