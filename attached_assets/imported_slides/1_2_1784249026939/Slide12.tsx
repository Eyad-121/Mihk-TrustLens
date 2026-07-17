import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_33.png";
import img_2 from "./assets/images/image_34.png";
const Slide12: React.FC = () => {
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
  return <div id="slide-12" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-12" style={{
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
        left: "316.8px",
        top: "163.2px",
        width: "902.4px",
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
          lineHeight: "1.2",
          fontSize: "calc(36pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(36pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0648\u0636\u064A\u062D\u064A / \u0627\u0644\u0644\u0642\u0637\u0627\u062A / \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A / \u0627\u0644\u0645\u062D\u0627\u0643\u0627\u0629:"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "288px",
        top: "508.8px",
        width: "931.2px",
        height: "86.4px",
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
            color: "#B0765B"
          }}>{"\u064A\u0639\u0631\u0636 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u062D\u0627\u0644\u064A \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0648\u062F\u0631\u062C\u0629 \u0627\u0644\u062B\u0642\u0629 \u0648\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0630\u0643\u064A \u2014 \u0628\u0645\u0627 \u064A\u064F\u0638\u0647\u0631 \u0625\u0646\u062C\u0627\u0632 \u0645\u0627 \u064A\u0642\u0627\u0631\u0628 30% \u0645\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639."}</span></p></div></div></div>;
};
export default Slide12;
