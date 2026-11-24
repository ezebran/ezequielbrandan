import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} · ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const [firstName, ...rest] = siteConfig.name.split(" ");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101110",
          color: "#F4F4F0",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#A0A39D", letterSpacing: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 12, height: 12, borderRadius: 12, background: "#B9FD0E" }} />
            {siteConfig.availability.available ? siteConfig.availability.label.toUpperCase() : ""}
          </div>
          <div>{siteConfig.url.replace("https://", "").toUpperCase()}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, fontWeight: 800, lineHeight: 0.88, letterSpacing: -6 }}>
          <div>{firstName?.toUpperCase()}</div>
          <div style={{ paddingLeft: 160 }}>{rest.join(" ").toUpperCase()}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #2B2E2A",
            paddingTop: 24,
            fontSize: 28,
          }}
        >
          <div>{siteConfig.role}</div>
          <div style={{ color: "#A0A39D" }}>{siteConfig.focus.join(" · ")}</div>
        </div>
      </div>
    ),
    size,
  );
}
