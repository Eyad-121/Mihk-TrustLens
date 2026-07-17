import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_16.png";
import img_2 from "./assets/images/image_17.png";
import img_3 from "./assets/images/image_18.png";
const Slide6: React.FC = () => {
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
  return <div id="slide-6" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-6" style={{
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
          }}>{"\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629"}</span></p></div><img key={3} src={img_3} alt="assets/ic_tech.png" style={{
        position: "absolute",
        left: "1108.8px",
        top: "246.72px",
        width: "63.36px",
        height: "63.36px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={4} style={{
        position: "absolute",
        left: "710.4px",
        top: "230.4px",
        width: "374.4px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u062A\u0643\u0627\u0645\u0644 \u0648\u0627\u062C\u0647\u0627\u062A \u062D\u0643\u0648\u0645\u064A\u0629 (APIs)"}</span></p><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u0627\u0644\u0631\u0628\u0637 \u0645\u0639 GOSI \u0648ZATCA \u0648\u0645\u062F\u062F \u0648SIMAH."}</span></p></div><img key={5} src={img_3} alt="assets/ic_tech.png" style={{
        position: "absolute",
        left: "1108.8px",
        top: "390.72px",
        width: "63.36px",
        height: "63.36px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={6} style={{
        position: "absolute",
        left: "710.4px",
        top: "374.4px",
        width: "374.4px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u062A\u0639\u0644\u0651\u0645 \u0627\u0644\u0622\u0644\u0629"}</span></p><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u062D\u0633\u0627\u0628 \u062F\u0631\u062C\u0629 \u0627\u0644\u062B\u0642\u0629 \u0648\u0627\u0644\u062A\u0646\u0628\u0651\u0624 \u0628\u0627\u0644\u062A\u0639\u062B\u0651\u0631."}</span></p></div><img key={7} src={img_3} alt="assets/ic_tech.png" style={{
        position: "absolute",
        left: "1108.8px",
        top: "534.72px",
        width: "63.36px",
        height: "63.36px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={8} style={{
        position: "absolute",
        left: "710.4px",
        top: "518.4px",
        width: "374.4px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 (NLP)"}</span></p><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u062A\u0648\u0644\u064A\u062F \u062A\u0642\u0627\u0631\u064A\u0631 \u0639\u0631\u0628\u064A\u0629 \u0644\u0644\u0645\u062D\u0644\u0644 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A."}</span></p></div><img key={9} src={img_3} alt="assets/ic_tech.png" style={{
        position: "absolute",
        left: "532.8px",
        top: "246.72px",
        width: "63.36px",
        height: "63.36px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={10} style={{
        position: "absolute",
        left: "129.6px",
        top: "230.4px",
        width: "379.2px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0627\u0644\u0645\u0635\u0631\u0641\u064A\u0629 \u0627\u0644\u0645\u0641\u062A\u0648\u062D\u0629 (Open Banking)"}</span></p><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u062A\u062F\u0641\u0642 \u0627\u0644\u0646\u0642\u062F\u064A \u0627\u0644\u062D\u064A\u0651 \u0639\u0628\u0631 \u0625\u0637\u0627\u0631 \u0633\u0627\u0645\u0627."}</span></p></div><img key={11} src={img_3} alt="assets/ic_tech.png" style={{
        position: "absolute",
        left: "532.8px",
        top: "390.72px",
        width: "63.36px",
        height: "63.36px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={12} style={{
        position: "absolute",
        left: "129.6px",
        top: "374.4px",
        width: "379.2px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0645\u062D\u0631\u0643 \u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0648\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"}</span></p><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062A: \u062E\u0637\u0631 / \u062A\u062D\u0630\u064A\u0631 / \u062A\u0646\u0628\u064A\u0647."}</span></p></div><img key={13} src={img_3} alt="assets/ic_tech.png" style={{
        position: "absolute",
        left: "532.8px",
        top: "534.72px",
        width: "63.36px",
        height: "63.36px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={14} style={{
        position: "absolute",
        left: "129.6px",
        top: "518.4px",
        width: "379.2px",
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
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#0A2540"
          }}>{"\u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u062A\u0641\u0627\u0639\u0644\u064A\u0629"}</span></p><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12.5pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#526271"
          }}>{"\u0639\u0631\u0636 \u0627\u0644\u062F\u0631\u062C\u0629 \u0648\u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0644\u0644\u0628\u0646\u0643."}</span></p></div></div></div>;
};
export default Slide6;
