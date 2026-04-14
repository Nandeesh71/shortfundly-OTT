import Link from "next/link";

export default function SubscribePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-8">
      <h1 className="text-3xl font-bold text-white">Choose Your Plan</h1>
      <p className="mt-2 text-white/60">Testing subscription page with functional CTA routing.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/15 bg-white/5 p-6">
          <p className="text-sm text-white/70">Starter</p>
          <p className="mt-2 text-3xl font-bold">Free</p>
          <p className="mt-2 text-sm text-white/60">Access to free shorts and selected movies.</p>
          <Link href="/browse?premium=false" className="mt-5 inline-block rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20">
            Continue Free
          </Link>
        </div>
        <div className="rounded-xl border border-primary/50 bg-primary/10 p-6">
          <p className="text-sm text-primary">Premium</p>
          <p className="mt-2 text-3xl font-bold">INR 149/mo</p>
          <p className="mt-2 text-sm text-white/70">All premium originals, early drops, ad-free playback.</p>
          <Link href="/auth/signin" className="mt-5 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500">
            Start Premium
          </Link>
        </div>
      </div>
    </div>
  );
}
