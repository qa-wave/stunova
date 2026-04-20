import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const flexiUrl = process.env.FLEXI_URL;
  const username = process.env.FLEXI_USERNAME;
  const password = process.env.FLEXI_PASSWORD;

  if (!flexiUrl || !username || !password) {
    return NextResponse.json({ error: "Flexi API not configured" }, { status: 500 });
  }

  const targetPath = path.join("/");
  const search = request.nextUrl.searchParams.toString();
  const url = `${flexiUrl}/${targetPath}.json${search ? `?${search}` : ""}`;

  const res = await fetch(url, {
    headers: {
      Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      Accept: "application/json",
    },
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
