import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_31.png";
import img_2 from "./assets/images/image_32.png";
const Slide11: React.FC = () => {
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
  return <div id="slide-11" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-11" style={{
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
        left: "576px",
        top: "182.4px",
        width: "643.2px",
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
          }}>{"\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631/\u0627\u0644\u062A\u062D\u0642\u0642:"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "96px",
        top: "302.4px",
        width: "1123.2px",
        height: "153.6px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.5",
          fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(19pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#B0765B"
          }}>{"\u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0623\u0648\u0644\u064A (MVP): \u062A\u0643\u0627\u0645\u0644 \u062A\u062C\u0631\u064A\u0628\u064A \u0645\u0639 GOSI \u0648ZATCA\u060C \u0648\u0645\u062D\u0631\u0643 \u0644\u062D\u0633\u0627\u0628 \u062F\u0631\u062C\u0629 \u0627\u0644\u062B\u0642\u0629\u060C \u0648\u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645\u060C \u0648\u062A\u0642\u0631\u064A\u0631 \u0630\u0643\u064A \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629. \u062A\u062D\u0642\u0651\u0642\u0646\u0627 \u0645\u0646 \u0645\u0646\u0637\u0642 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0648\u0631\u0628\u0637 \u0643\u0644 \u0625\u0634\u0627\u0631\u0629 \u0628\u0645\u0635\u062F\u0631\u0647\u0627 \u0639\u0628\u0631 \u062D\u0627\u0644\u0627\u062A \u0645\u0646\u0634\u0622\u062A \u0646\u0645\u0648\u0630\u062C\u064A\u0629."}</span></p></div></div></div>;
};
export default Slide11;
