import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-14 md:px-8">
      <h1 className="text-3xl font-bold text-white">Forgot Password</h1>
      <p className="mt-2 text-white/60">Enter your email and we will send a reset link.</p>
      <form className="mt-8 space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30"
        />
        <button type="button" className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white hover:bg-orange-500">
          Send Reset Link
        </button>
      </form>
      <Link href="/auth/signin" className="mt-4 inline-block text-sm text-primary">
        Back to sign in
      </Link>
    </div>
  );
}
