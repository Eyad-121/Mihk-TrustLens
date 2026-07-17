import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;
const Slide3: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    s: 1,
    x: 0,
    y: 0
  });
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const s = Math.min(w / 1279.97, h / 720);
      setLayout({
        s,
        x: (w - 1279.97 * s) / 2,
        y: (h - 720 * s) / 2
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div id="slide-3" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-3" style={{
      position: "absolute",
      width: "1279.97px",
      height: "720px",
      overflow: "hidden",
      transformOrigin: "top left",
      color: "#000000",
      backgroundColor: "#F3F3F3",
      transform: `scale(${layout.s})`,
      left: layout.x + "px",
      top: layout.y + "px"
    }}><img crossOrigin="anonymous" key={0} src={`${base}images/image_7.png`} alt="assets/corner.png" style={{
        position: "absolute",
        left: "0px",
        top: "480px",
        width: "334.06px",
        height: "240px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img crossOrigin="anonymous" key={1} src={`${base}images/image_8.png`} alt="assets/logo_light.png" style={{
        position: "absolute",
        left: "44.16px",
        top: "47.04px",
        width: "119.04px",
        height: "66.24px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={2} style={{
        position: "absolute",
        left: "720px",
        top: "129.6px",
        width: "499.2px",
        height: "96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(40pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(40pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0627\u0644\u0645\u062D\u062A\u0648\u064A\u0627\u062A:"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "1079.04px",
        top: "249.6px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "#C26B4F",
        borderRadius: "8.64px"
      }} /><div key={4} style={{
        position: "absolute",
        left: "1079.04px",
        top: "249.6px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"01"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "662.4px",
        top: "238.08px",
        width: "388.8px",
        height: "78.72px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0641\u0631\u064A\u0642"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "1079.04px",
        top: "337.92px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "#C26B4F",
        borderRadius: "8.64px"
      }} /><div key={7} style={{
        position: "absolute",
        left: "1079.04px",
        top: "337.92px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"02"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "662.4px",
        top: "326.4px",
        width: "388.8px",
        height: "78.72px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0648\u062D\u0644\u0651\u0647\u0627"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "1079.04px",
        top: "426.24px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "#C26B4F",
        borderRadius: "8.64px"
      }} /><div key={10} style={{
        position: "absolute",
        left: "1079.04px",
        top: "426.24px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"03"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "662.4px",
        top: "414.72px",
        width: "388.8px",
        height: "78.72px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0648\u0635\u0641 \u0627\u0644\u0641\u0643\u0631\u0629"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "1079.04px",
        top: "514.56px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "#C26B4F",
        borderRadius: "8.64px"
      }} /><div key={13} style={{
        position: "absolute",
        left: "1079.04px",
        top: "514.56px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"04"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "662.4px",
        top: "503.04px",
        width: "388.8px",
        height: "78.72px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "773.76px",
        top: "249.6px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "#C26B4F",
        borderRadius: "8.64px"
      }} /><div key={16} style={{
        position: "absolute",
        left: "773.76px",
        top: "249.6px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"05"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "307.2px",
        top: "238.08px",
        width: "441.6px",
        height: "78.72px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 (\u0646\u0635\u064A\u0629 \u0648\u063A\u064A\u0631 \u0646\u0635\u064A\u0629)"}</span></p></div><div key={18} style={{
        position: "absolute",
        left: "773.76px",
        top: "337.92px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "#C26B4F",
        borderRadius: "8.64px"
      }} /><div key={19} style={{
        position: "absolute",
        left: "773.76px",
        top: "337.92px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"06"}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "307.2px",
        top: "326.4px",
        width: "441.6px",
        height: "78.72px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0643\u064A\u0641\u064A\u0629 \u062A\u0648\u0641\u064A\u0631 \u0647\u0630\u0647 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0643\u064A\u0641\u064A\u0629 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "773.76px",
        top: "426.24px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "#C26B4F",
        borderRadius: "8.64px"
      }} /><div key={22} style={{
        position: "absolute",
        left: "773.76px",
        top: "426.24px",
        width: "55.68px",
        height: "55.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"07"}</span></p></div><div key={23} style={{
        position: "absolute",
        left: "307.2px",
        top: "414.72px",
        width: "441.6px",
        height: "78.72px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0645\u0644\u062E\u0635"}</span></p></div></div></div>;
};
export default Slide3;
