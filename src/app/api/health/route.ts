import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "fedicfinance-app",
    timestamp: new Date().toISOString(),
  });
}
