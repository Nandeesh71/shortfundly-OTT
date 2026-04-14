import { NextResponse } from "next/server";
import { getHomeContent } from "@/lib/ott-backend";

export async function GET() {
  const payload = await getHomeContent();
  return NextResponse.json(payload);
}
