import Link from "next/link";

interface CatchAllProps {
  params: Promise<{ slug: string[] }>;
}

export default async function GenericInfoPage({ params }: CatchAllProps) {
  const { slug } = await params;
  const pageName = slug.join(" / ");

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 md:px-8">
      <h1 className="text-3xl font-bold text-white capitalize">{pageName.replaceAll("-", " ")}</h1>
      <p className="mt-3 text-white/60">
        This route is active in testing mode and ready for your final content integration.
      </p>
      <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/80">
        Page slug: <span className="text-primary">/{slug.join("/")}</span>
      </div>
      <Link href="/" className="mt-6 inline-block rounded-md border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/5">
        Back to home
      </Link>
    </div>
  );
}
