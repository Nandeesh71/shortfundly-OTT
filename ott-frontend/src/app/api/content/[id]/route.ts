import { NextResponse } from "next/server";
import { getContentById } from "@/lib/ott-backend";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const content = await getContentById(id);

  if (!content) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(content);
}
