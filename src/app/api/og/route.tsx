import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Libuše Stuňová · Účetnictví";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2a1f12",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c8a867",
              marginBottom: "24px",
            }}
          >
            Libuše Stuňová · Účetnictví
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "400",
              fontStyle: "italic",
              color: "#f4ead4",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: "32px",
              fontSize: "18px",
              color: "#c8a867",
            }}
          >
            stunova.qawave.ai
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
