import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_9.png";
import img_2 from "./assets/images/image_10.png";
import img_3 from "./assets/images/image_11.png";
import img_4 from "./assets/images/image_12.png";
import img_5 from "./assets/images/image_13.png";
const Slide4: React.FC = () => {
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
  return <div id="slide-4" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-4" style={{
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
          }}>{"\u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0648\u062D\u0644\u0651\u0647\u0627"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "57.6px",
        top: "216px",
        width: "1164.48px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u0627\u0644\u062C\u0648\u0647\u0631: \u0627\u0644\u0628\u0646\u0648\u0643 \u062A\u0631\u0649 \u0645\u0627\u0636\u064A \u0627\u0644\u0645\u0646\u0634\u0623\u0629\u060C \u0628\u064A\u0646\u0645\u0627 \u0627\u0644\u062A\u0639\u062B\u0651\u0631 \u064A\u0628\u062F\u0623 \u0641\u064A \u062D\u0627\u0636\u0631\u0647\u0627. \u0645\u0650\u062D\u064E\u0643 \u064A\u0642\u0631\u0623 \u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0627\u0644\u062D\u064A\u0651\u0629 \u0645\u0646 \u0645\u0635\u0627\u062F\u0631 \u0631\u0633\u0645\u064A\u0629 \u0644\u0627 \u062A\u0643\u0630\u0628."}</span></p></div><img key={4} src={img_3} alt="assets/ic_bulb.png" style={{
        position: "absolute",
        left: "1128px",
        top: "321.6px",
        width: "63.36px",
        height: "61.44px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={5} style={{
        position: "absolute",
        left: "614.4px",
        top: "319.68px",
        width: "489.6px",
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0625\u0634\u0627\u0631\u0627\u062A \u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0635\u0627\u0645\u062A\u0629"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "96px",
        top: "369.6px",
        width: "1008px",
        height: "67.2px",
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
          fontSize: "calc(13.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0636\u0645\u0627\u0646\u0627\u062A \u062A\u0639\u0643\u0633 \u0627\u0644\u0623\u0645\u0633\u060C \u0628\u064A\u0646\u0645\u0627 \u0627\u0644\u062A\u0639\u062B\u0651\u0631 \u064A\u0628\u062F\u0623 \u0627\u0644\u064A\u0648\u0645 \u0628\u0625\u0634\u0627\u0631\u0627\u062A \u0645\u062B\u0644 \u062A\u0623\u062E\u0651\u0631 \u0627\u0644\u0631\u0648\u0627\u062A\u0628 \u0648\u062A\u0633\u0631\u064A\u062D \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u062A\u0631\u0627\u062C\u0639 \u0627\u0644\u0625\u064A\u0631\u0627\u062F \u0627\u0644\u0641\u0639\u0644\u064A."}</span></p></div><img key={7} src={img_4} alt="assets/ic_trend.png" style={{
        position: "absolute",
        left: "1128px",
        top: "441.6px",
        width: "63.36px",
        height: "61.44px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={8} style={{
        position: "absolute",
        left: "614.4px",
        top: "439.68px",
        width: "489.6px",
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u062F\u0631\u062C\u0629 \u062B\u0642\u0629 \u0645\u0646 \u0645\u0635\u0627\u062F\u0631 \u0644\u0627 \u062A\u064F\u0632\u0648\u064E\u0651\u0631"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "96px",
        top: "489.6px",
        width: "1008px",
        height: "67.2px",
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
          fontSize: "calc(13.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u064A\u062D\u0648\u0651\u0644 \u0645\u0650\u062D\u064E\u0643 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0643\u0648\u0645\u064A\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 (GOSI\u060C ZATCA\u060C \u0645\u062F\u062F\u060C SIMAH) \u0625\u0644\u0649 \u062F\u0631\u062C\u0629 \u062B\u0642\u0629 \u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0648\u0627\u062D\u062F\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0642\u0637\u0627\u0639."}</span></p></div><img key={10} src={img_5} alt="assets/ic_bolt.png" style={{
        position: "absolute",
        left: "1128px",
        top: "561.6px",
        width: "63.36px",
        height: "61.44px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={11} style={{
        position: "absolute",
        left: "614.4px",
        top: "559.68px",
        width: "489.6px",
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0643\u0634\u0641 \u0645\u0628\u0643\u0631 \u0648\u0642\u0631\u0627\u0631 \u0623\u062F\u0642"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "96px",
        top: "609.6px",
        width: "1008px",
        height: "67.2px",
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
          fontSize: "calc(13.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u062A\u0638\u0647\u0631 \u0642\u0628\u0644 6\u201312 \u0634\u0647\u0631\u0627\u064B \u0645\u0646 \u0638\u0647\u0648\u0631 \u0627\u0644\u062A\u0639\u062B\u0651\u0631 \u0641\u064A \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0645\u0639 \u062A\u0648\u0635\u064A\u0629 \u062A\u0645\u0648\u064A\u0644 \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u0645\u062D\u0644\u0644 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A."}</span></p></div></div></div>;
};
export default Slide4;
