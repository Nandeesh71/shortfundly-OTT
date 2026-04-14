"use client";

import { useMemo, useState } from "react";

const KEY = "OTT_MY_LIST";

function readList(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeList(ids: string[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(ids));
}

export default function MyListButton({ contentId }: { contentId: string }) {
  const [ids, setIds] = useState<string[]>(() => readList());
  const isSaved = useMemo(() => ids.includes(contentId), [ids, contentId]);

  const toggle = () => {
    const next = isSaved ? ids.filter((id) => id !== contentId) : [...ids, contentId];
    setIds(next);
    writeList(next);
  };

  return (
    <button
      onClick={toggle}
      className="bg-black/40 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded font-bold text-sm flex items-center gap-2 backdrop-blur-md transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      {isSaved ? "In My List" : "My List"}
    </button>
  );
}
