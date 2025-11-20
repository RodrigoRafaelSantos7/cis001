import type React from "react";

type SmartSimpleBrilliantProps = {
  /** Fixed width from Figma: 482px */
  width?: number | string;
  /** Fixed height from Figma: 300px */
  height?: number | string;
  /** Optional className to pass to root */
  className?: string;
  /** Theme palette */
  theme?: "light" | "dark";
};

/**
 * Smart · Simple · Brilliant – Calendar cards
 * Generated from Figma via MCP with exact measurements (482×300px)
 * Single-file component following the v0-ready pattern used in this repo.
 */
const SmartSimpleBrilliant: React.FC<SmartSimpleBrilliantProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "dark",
}) => {
  // Design tokens (derived from Figma local variables)
  const themeVars =
    theme === "light"
      ? {
          "--ssb-surface": "#ffffff",
          "--ssb-text": "#1b1919",
          "--ssb-border": "rgba(0,0,0,0.08)",
          "--ssb-inner-border": "rgba(0,0,0,0.12)",
          "--ssb-shadow": "rgba(0,0,0,0.12)",
        }
      : ({
          "--ssb-surface": "#333937",
          "--ssb-text": "#f8f8f8",
          "--ssb-border": "rgba(255,255,255,0.16)",
          "--ssb-inner-border": "rgba(255,255,255,0.12)",
          "--ssb-shadow": "rgba(0,0,0,0.28)",
        } as React.CSSProperties);

  return (
    <div
      aria-label="Two calendar cards with colored event rows"
      className={className}
      role="img"
      style={
        {
          width,
          height,
          position: "relative",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...themeVars,
        } as React.CSSProperties
      }
    >
      <div
        style={{
          position: "relative",
          width: "295.297px",
          height: "212.272px",
          transform: "scale(1.2)", // Added 1.2x scale transform
        }}
      >
        {/* Left tilted card group */}
        <div
          style={{
            position: "absolute",
            left: "123.248px",
            top: "0px",
            width: 0,
            height: 0,
          }}
        >
          <div style={{ transform: "rotate(5deg)", transformOrigin: "center" }}>
            <div
              style={{
                width: "155.25px",
                background: "#ffffff",
                borderRadius: "9px",
                padding: "6px",
                boxShadow:
                  "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.07)",
              }}
            >
              {/* Encontro de coros */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "rgba(224,21,130,0.1)",
                  marginTop: "3px",
                  display: "flex",
                }}
              >
                <div style={{ width: "2.25px", background: "#E01582" }} />
                <div style={{ padding: "4.5px", width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "9px",
                        color: "#9D0E5C",
                      }}
                    >
                      19:00
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "9px",
                      color: "#9D0E5C",
                    }}
                  >
                    Encontro de coros
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right card */}
        <div
          style={{
            position: "absolute",
            left: "0px",
            top: "6.075px",
            width: "155.25px",
          }}
        >
          <div
            style={{ transform: "rotate(-5deg)", transformOrigin: "center" }}
          >
            <div
              style={{
                width: "155.25px",
                background: "#ffffff",
                borderRadius: "9px",
                padding: "6px",
                boxShadow:
                  "-8px 6px 11.3px rgba(0,0,0,0.12), 0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Aniversário */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "rgba(13,74,133,0.1)",
                  display: "flex",
                  marginTop: "3px",
                }}
              >
                <div style={{ width: "2.25px", background: "#0D4A85" }} />
                <div style={{ padding: "4.5px", width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "9px",
                        color: "#0D4A85",
                      }}
                    >
                      29/11 - 21:00
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "9px",
                      color: "#0D4A85",
                    }}
                  >
                    🎂 Aniversário CIS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSimpleBrilliant;
