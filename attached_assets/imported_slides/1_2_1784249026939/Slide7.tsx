import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_19.png";
import img_2 from "./assets/images/image_20.png";
import img_3 from "./assets/images/image_21.png";
const Slide7: React.FC = () => {
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
  return <div id="slide-7" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-7" style={{
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
    }}><img key={0} src={img_1} alt="assets/man1.png" style={{
        position: "absolute",
        left: "910.08px",
        top: "0px",
        width: "378.89px",
        height: "720px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={1} src={img_2} alt="assets/corner.png" style={{
        position: "absolute",
        left: "0px",
        top: "480px",
        width: "334.06px",
        height: "240px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={2} src={img_3} alt="assets/logo_light.png" style={{
        position: "absolute",
        left: "44.16px",
        top: "47.04px",
        width: "119.04px",
        height: "66.24px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={3} style={{
        position: "absolute",
        left: "288px",
        top: "196.8px",
        width: "537.6px",
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
          fontSize: "calc(40pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(40pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0648\u0635\u0641 \u0627\u0644\u0641\u0643\u0631\u0629"}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "288px",
        top: "292.8px",
        width: "537.6px",
        height: "57.6px",
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
          fontSize: "calc(26pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(26pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#8A83AF"
          }}>{"\u0645\u0650\u062D\u064E\u0643 \xB7 TrustLens"}</span></p></div><div key={5} style={{
        position: "absolute",
        left: "201.6px",
        top: "360px",
        width: "624px",
        height: "211.2px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.44",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#B0765B"
          }}>{"\u0645\u0646\u0635\u0629 \u0630\u0643\u0627\u0621 \u062A\u0634\u063A\u064A\u0644\u064A \u062A\u062C\u0644\u0633 \u0628\u064A\u0646 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0648\u0627\u0644\u0628\u0646\u0643. \u062A\u0623\u062E\u0630 \u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0648\u062A\u062A\u0643\u0627\u0645\u0644 \u2014 \u0628\u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u2014 \u0645\u0639 \u0627\u0644\u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u062D\u0643\u0648\u0645\u064A\u0629\u060C \u0644\u062A\u064F\u0646\u062A\u062C \u062F\u0631\u062C\u0629 \u062B\u0642\u0629 \u062A\u0634\u063A\u064A\u0644\u064A\u0629\u060C \u0648\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0645\u0628\u0643\u0631\u0629\u060C \u0648\u062A\u0648\u0635\u064A\u0629 \u062A\u0645\u0648\u064A\u0644\u060C \u0648\u062A\u0642\u0631\u064A\u0631\u0627\u064B \u0630\u0643\u064A\u0627\u064B \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629."}</span></p></div></div></div>;
};
export default Slide7;
