import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kai Digital Studio — Customized Websites";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load Oswald Bold from Google Fonts
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((r) => r.text());

  const fontUrl = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1];
  const fontData = fontUrl
    ? await fetch(fontUrl).then((r) => r.arrayBuffer())
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#27187e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Oswald, sans-serif",
        }}
      >
        {/* Accent bars */}
        <div style={{ display: "flex", marginBottom: 40 }}>
          <div style={{ width: 60, height: 4, background: "#e880e5" }} />
          <div style={{ width: 60, height: 4, background: "#758bee" }} />
          <div style={{ width: 60, height: 4, background: "#c9cef4" }} />
        </div>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ fontSize: 130, fontWeight: 700, color: "#ffffff", letterSpacing: "-2px" }}>
            KAI
          </span>
          <span style={{ fontSize: 130, fontWeight: 700, color: "#e880e5" }}>.</span>
        </div>

        {/* Studio name */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#c9cef4",
            letterSpacing: "14px",
            marginTop: -8,
          }}
        >
          DIGITAL STUDIO
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: "#758bee",
            letterSpacing: "6px",
            marginTop: 28,
          }}
        >
          CUSTOMIZED WEBSITES FOR YOUR BRAND
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? { fonts: [{ name: "Oswald", data: fontData, weight: 700, style: "normal" }] }
        : {}),
    }
  );
}
