import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "stunova",
    timestamp: new Date().toISOString(),
  });
}
