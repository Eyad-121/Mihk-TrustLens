import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_14.png";
import img_2 from "./assets/images/image_15.png";
const Slide5: React.FC = () => {
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
  return <div id="slide-5" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-5" style={{
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
    }}><img key={0} src={img_1} alt="assets/corner.png" style={{
        position: "absolute",
        left: "0px",
        top: "480px",
        width: "334.06px",
        height: "240px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={1} src={img_2} alt="assets/logo_light.png" style={{
        position: "absolute",
        left: "44.16px",
        top: "47.04px",
        width: "119.04px",
        height: "66.24px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={2} style={{
        position: "absolute",
        left: "355.2px",
        top: "110.4px",
        width: "864px",
        height: "96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
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
          }}>{"\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "57.6px",
        top: "211.2px",
        width: "1164.48px",
        height: "48px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u0643\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0641\u064A \u0645\u0650\u062D\u064E\u0643 \u0628\u064A\u0627\u0646\u0627\u062A \u062D\u0643\u0648\u0645\u064A\u0629 \u0631\u0633\u0645\u064A\u0629 \u063A\u064A\u0631 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0632\u0648\u064A\u0631\u060C \u062A\u064F\u062C\u0645\u064E\u0639 \u0628\u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0639\u0628\u0631 \u062A\u0643\u0627\u0645\u0644 \u0631\u0633\u0645\u064A."}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "86.4px",
        top: "273.6px",
        width: "1132.8px",
        height: "52.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0627\u0644\u0645\u0635\u0627\u062F\u0631: \u062E\u0645\u0633\u0629 \u0645\u0635\u0627\u062F\u0631 \u0631\u0633\u0645\u064A\u0629 \u2014 GOSI (\u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629 \u0648\u0627\u0644\u0631\u0648\u0627\u062A\u0628)\u060C ZATCA (\u0627\u0644\u0625\u064A\u0631\u0627\u062F \u0627\u0644\u062D\u0642\u064A\u0642\u064A)\u060C \u0645\u062F\u062F/WPS (\u0627\u0646\u062A\u0638\u0627\u0645 \u0627\u0644\u0631\u0648\u0627\u062A\u0628)\u060C Open Banking \u0639\u0628\u0631 \u0633\u0627\u0645\u0627 (\u0627\u0644\u062A\u062F\u0641\u0642 \u0627\u0644\u0646\u0642\u062F\u064A)\u060C \u0648SIMAH (\u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A).  "}</span><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u25CF"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "86.4px",
        top: "333.12px",
        width: "1132.8px",
        height: "52.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629: \u062A\u064F\u062C\u0645\u064E\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0639\u0628\u0631 \u062A\u0643\u0627\u0645\u0644 \u0631\u0633\u0645\u064A\u060C \u062B\u0645 \u062A\u064F\u0646\u0638\u064E\u0651\u0641 \u0648\u062A\u064F\u0648\u062D\u064E\u0651\u062F \u0648\u062A\u064F\u0637\u0628\u064E\u0651\u0639 \u0644\u062A\u063A\u0630\u064A\u0629 \u0645\u062D\u0631\u0643 \u062F\u0631\u062C\u0629 \u0627\u0644\u062B\u0642\u0629.  "}</span><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u25CF"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "86.4px",
        top: "392.64px",
        width: "1132.8px",
        height: "52.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0627\u0644\u062A\u062D\u062F\u064A\u0627\u062A: \u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0643\u0648\u0645\u064A\u0629 \u0648\u0631\u0628\u0637\u0647\u0627 \u0636\u0645\u0646 \u0625\u0637\u0627\u0631 \u0627\u0644\u0645\u0635\u0631\u0641\u064A\u0629 \u0627\u0644\u0645\u0641\u062A\u0648\u062D\u0629 \u064A\u062A\u0637\u0644\u0628 \u0623\u0630\u0648\u0646\u0627\u062A \u0648\u062A\u0643\u0627\u0645\u0644\u0627\u064B \u062F\u0642\u064A\u0642\u0627\u064B.  "}</span><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u25CF"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "305.08px",
        top: "532.8px",
        width: "249.6px",
        height: "110.4px",
        boxSizing: "border-box",
        backgroundColor: "#F3F3F3",
        border: "1.67px solid #C9BFD6",
        borderRadius: "13.44px"
      }} /><div key={8} style={{
        position: "absolute",
        left: "305.08px",
        top: "539.52px",
        width: "249.6px",
        height: "57.6px",
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
          fontSize: "calc(30pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(30pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"+99%"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "305.08px",
        top: "593.28px",
        width: "249.6px",
        height: "43.2px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u0645\u0646\u0634\u0622\u062A \u0635\u063A\u064A\u0631\u0629 \u0648\u0645\u062A\u0648\u0633\u0637\u0629"}</span></p></div><div key={10} style={{
        position: "absolute",
        left: "614.52px",
        top: "532.8px",
        width: "249.6px",
        height: "110.4px",
        boxSizing: "border-box",
        backgroundColor: "#F3F3F3",
        border: "1.67px solid #C9BFD6",
        borderRadius: "13.44px"
      }} /><div key={11} style={{
        position: "absolute",
        left: "614.52px",
        top: "539.52px",
        width: "249.6px",
        height: "57.6px",
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
          fontSize: "calc(30pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(30pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"35%"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "614.52px",
        top: "593.28px",
        width: "249.6px",
        height: "43.2px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u0645\u0633\u0627\u0647\u0645\u0629 \u0645\u0633\u062A\u0647\u062F\u0641\u0629 2030"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "923.09px",
        top: "532.8px",
        width: "249.6px",
        height: "110.4px",
        boxSizing: "border-box",
        backgroundColor: "#F3F3F3",
        border: "1.67px solid #C9BFD6",
        borderRadius: "13.44px"
      }} /><div key={14} style={{
        position: "absolute",
        left: "923.09px",
        top: "539.52px",
        width: "249.6px",
        height: "57.6px",
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
          fontSize: "calc(30pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(30pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"5"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "923.09px",
        top: "593.28px",
        width: "249.6px",
        height: "43.2px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u0645\u0635\u0627\u062F\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0631\u0633\u0645\u064A\u0629"}</span></p></div></div></div>;
};
export default Slide5;
