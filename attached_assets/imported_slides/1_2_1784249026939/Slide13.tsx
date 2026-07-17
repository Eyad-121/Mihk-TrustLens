import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_35.png";
import img_2 from "./assets/images/image_36.png";
const Slide13: React.FC = () => {
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
  return <div id="slide-13" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-13" style={{
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
        top: "105.6px",
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
          }}>{"\u0627\u0644\u062A\u062D\u062F\u064A\u0627\u062A \u0648\u0627\u0644\u062E\u0637\u0637 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A\u0629"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "672px",
        top: "264px",
        width: "542.4px",
        height: "187.2px",
        boxSizing: "border-box",
        backgroundColor: "#ECE7E3",
        borderRadius: "15.36px",
        boxShadow: "0px 2.67px 8px rgba(191, 185, 180, 0.35)"
      }} /><div key={4} style={{
        position: "absolute",
        left: "696px",
        top: "281.28px",
        width: "494.4px",
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
          fontSize: "calc(21pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(21pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#8A83AF"
          }}>{"\u0627\u0644\u062A\u062D\u062F\u064A\u0627\u062A:"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "696px",
        top: "338.88px",
        width: "494.4px",
        height: "96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.38",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0643\u0648\u0645\u064A\u0629 (GOSI / ZATCA / Open Banking)\u060C \u0648\u0627\u0644\u062D\u0627\u062C\u0629 \u0625\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0643\u0627\u0641\u064A\u0629 \u0644\u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u062A\u0646\u0628\u0651\u0624\u064A."}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "67.2px",
        top: "264px",
        width: "542.4px",
        height: "187.2px",
        boxSizing: "border-box",
        backgroundColor: "#ECE7E3",
        borderRadius: "15.36px",
        boxShadow: "0px 2.67px 8px rgba(191, 185, 180, 0.35)"
      }} /><div key={7} style={{
        position: "absolute",
        left: "91.2px",
        top: "281.28px",
        width: "494.4px",
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
          fontSize: "calc(21pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(21pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#8A83AF"
          }}>{"\u0645\u0627 \u0646\u062D\u062A\u0627\u062C \u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A\u0647:"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "91.2px",
        top: "338.88px",
        width: "494.4px",
        height: "96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.38",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u062A\u0633\u0647\u064A\u0644 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0628\u0631\u0645\u062C\u064A\u0629 \u0631\u0633\u0645\u064A\u0629 \u0623\u0648 \u0628\u064A\u0626\u0627\u062A \u0627\u062E\u062A\u0628\u0627\u0631 (Sandbox) \u0645\u0646 \u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u062D\u0643\u0648\u0645\u064A\u0629\u060C \u0648\u0628\u0646\u0643 \u0634\u0631\u064A\u0643 \u0631\u0627\u0626\u062F \u0644\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0646\u0635\u0629."}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "672px",
        top: "484.8px",
        width: "542.4px",
        height: "182.4px",
        boxSizing: "border-box",
        backgroundColor: "#ECE7E3",
        borderRadius: "15.36px",
        boxShadow: "0px 2.67px 8px rgba(191, 185, 180, 0.35)"
      }} /><div key={10} style={{
        position: "absolute",
        left: "696px",
        top: "502.08px",
        width: "494.4px",
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
          fontSize: "calc(21pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(21pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#8A83AF"
          }}>{"\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A:"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "696px",
        top: "559.68px",
        width: "494.4px",
        height: "91.2px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.38",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#0A2540"
          }}>{"\u062E\u0627\u0631\u0637\u0629 \u0627\u0644\u0637\u0631\u064A\u0642: \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062B\u0627\u0646\u064A\u0629 \u2014 Open Banking \u0627\u0644\u062D\u064A\u0651 \u0648\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u062A\u0646\u0628\u0651\u0624\u064A\u0629 \u0648\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0642\u0637\u0627\u0639\u061B \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062B\u0627\u0644\u062B\u0629 \u2014 \u0646\u0645\u0648\u0630\u062C \u062A\u0646\u0628\u0651\u0624\u064A \u0645\u062A\u0642\u062F\u0645 \u0648API \u0644\u0643\u0644 \u0627\u0644\u0628\u0646\u0648\u0643."}</span></p></div></div></div>;
};
export default Slide13;
