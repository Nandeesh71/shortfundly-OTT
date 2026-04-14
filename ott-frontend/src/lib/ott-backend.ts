import { ottCatalog, type OttItem } from "@/lib/ott-data";

interface HomePayload {
  heroBannerItems: OttItem[];
  latestReleases: OttItem[];
  trendingNow: OttItem[];
}

function localHomePayload(): HomePayload {
  return {
    heroBannerItems: ottCatalog.slice(0, 4),
    latestReleases: ottCatalog.slice(1, 6),
    trendingNow: [...ottCatalog].sort((a, b) => b.rating - a.rating).slice(0, 6),
  };
}

export async function getHomeContent(): Promise<HomePayload> {
  const backendUrl = process.env.OTT_BACKEND_URL;
  const backendToken = process.env.OTT_BACKEND_TOKEN;

  if (!backendUrl) {
    return localHomePayload();
  }

  try {
    const response = await fetch(`${backendUrl}/content/home`, {
      headers: backendToken ? { Authorization: `Bearer ${backendToken}` } : {},
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return localHomePayload();
    }

    const data = (await response.json()) as Partial<HomePayload>;
    return {
      heroBannerItems: data.heroBannerItems ?? localHomePayload().heroBannerItems,
      latestReleases: data.latestReleases ?? localHomePayload().latestReleases,
      trendingNow: data.trendingNow ?? localHomePayload().trendingNow,
    };
  } catch {
    return localHomePayload();
  }
}

export async function getContentById(id: string): Promise<OttItem | null> {
  const backendUrl = process.env.OTT_BACKEND_URL;
  const backendToken = process.env.OTT_BACKEND_TOKEN;

  if (!backendUrl) {
    return ottCatalog.find((item) => item.id === id) ?? null;
  }

  try {
    const response = await fetch(`${backendUrl}/content/${id}`, {
      headers: backendToken ? { Authorization: `Bearer ${backendToken}` } : {},
      cache: "no-store",
    });

    if (!response.ok) {
      return ottCatalog.find((item) => item.id === id) ?? null;
    }

    return (await response.json()) as OttItem;
  } catch {
    return ottCatalog.find((item) => item.id === id) ?? null;
  }
}
