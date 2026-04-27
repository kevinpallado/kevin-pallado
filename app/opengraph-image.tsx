import { ImageResponse } from "next/og";

export const alt = "Kevin Pallado — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f5f2ec",
          color: "#121212",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(216, 67, 21, 0.22), rgba(216, 67, 21, 0))",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#6b6864" }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: "#121212",
              color: "#f5f2ec",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            KP
          </div>
          <span>Kevin Pallado · Cagayan de Oro, PH</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              fontWeight: 500,
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Fullstack developer building&nbsp;</span>
            <span style={{ color: "#7a2310" }}>systems&nbsp;</span>
            <span>that run real businesses.</span>
          </div>
          <div style={{ fontSize: 24, color: "#2a2a2a", maxWidth: 900 }}>
            7+ years · Laravel · Python · React · AWS · Claude API · MCP
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#6b6864",
            borderTop: "1px solid #d9d4cb",
            paddingTop: 24,
          }}
        >
          <span>kevinpallado.dev</span>
          <span>Open to remote roles</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
