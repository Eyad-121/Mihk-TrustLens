import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;
const Slide1: React.FC = () => {
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
  return <div id="slide-1" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-1" style={{
      position: "absolute",
      width: "1279.97px",
      height: "720px",
      overflow: "hidden",
      transformOrigin: "top left",
      color: "#FFFFFF",
      backgroundColor: "#212145",
      transform: `scale(${layout.s})`,
      left: layout.x + "px",
      top: layout.y + "px"
    }}><img crossOrigin="anonymous" key={0} src={`${base}images/image_1.png`} alt="assets/logo_dark.png" style={{
        position: "absolute",
        left: "515.52px",
        top: "96px",
        width: "249.6px",
        height: "161.28px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={1} style={{
        position: "absolute",
        left: "96px",
        top: "340.8px",
        width: "1087.68px",
        height: "91.2px",
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
          fontSize: "calc(44pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(44pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#F2E8E7"
          }}>{"\u0645\u0650\u062D\u064E\u0643 \xB7 TrustLens"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "96px",
        top: "446.4px",
        width: "1087.68px",
        height: "67.2px",
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
          fontSize: "calc(26pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(26pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#D6D1E2"
          }}>{"\u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u064A\u0642"}</span></p></div><img crossOrigin="anonymous" key={3} src={`${base}images/image_2.png`} alt="assets/alinma.png" style={{
        position: "absolute",
        left: "38.4px",
        top: "633.6px",
        width: "144px",
        height: "57.6px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img crossOrigin="anonymous" key={4} src={`${base}images/image_3.png`} alt="assets/tuwaiq.png" style={{
        position: "absolute",
        left: "1060.8px",
        top: "635.52px",
        width: "182.4px",
        height: "55.68px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /></div></div>;
};
export default Slide1;
