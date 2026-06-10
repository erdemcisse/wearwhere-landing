import { ImageResponse } from "next/og";

export const alt = "WearWhere — What to wear. Where to go.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG image (1200×630): WearWhere wordmark on ivory with the tagline.
 * Generated at build time; applies to every page that doesn't define
 * its own opengraph-image.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F6F1EA",
          color: "#141414",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          WearWhere
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              backgroundColor: "#FF6A4A",
              marginTop: 50,
            }}
          />
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 42,
            color: "#3A3733",
            letterSpacing: "-0.01em",
          }}
        >
          What to wear. Where to go.
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#8A8580",
          }}
        >
          iOS · Europe-first · Beta
        </div>
      </div>
    ),
    { ...size },
  );
}
