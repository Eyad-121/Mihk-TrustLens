import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_4.png";
import img_2 from "./assets/images/image_5.png";
import img_3 from "./assets/images/image_6.png";
const Slide2: React.FC = () => {
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
  return <div id="slide-2" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-2" style={{
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
        left: "96px",
        top: "148.8px",
        width: "1087.68px",
        height: "86.4px",
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
          fontSize: "calc(36pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(36pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            color: "#C26B4F"
          }}>{"\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0641\u0631\u064A\u0642"}</span></p></div><img key={3} src={img_3} alt="assets/circle_person.png" style={{
        position: "absolute",
        left: "238.56px",
        top: "264px",
        width: "138.24px",
        height: "138.24px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={4} style={{
        position: "absolute",
        left: "192.48px",
        top: "436.8px",
        width: "230.4px",
        height: "48px",
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u0627\u0633\u0645 \u0627\u0644\u0639\u0636\u0648"}</span></p></div><img key={5} src={img_3} alt="assets/circle_person.png" style={{
        position: "absolute",
        left: "465.37px",
        top: "264px",
        width: "138.24px",
        height: "138.24px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={6} style={{
        position: "absolute",
        left: "419.29px",
        top: "436.8px",
        width: "230.4px",
        height: "48px",
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u0627\u0633\u0645 \u0627\u0644\u0639\u0636\u0648"}</span></p></div><img key={7} src={img_3} alt="assets/circle_person.png" style={{
        position: "absolute",
        left: "693.06px",
        top: "264px",
        width: "138.24px",
        height: "138.24px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={8} style={{
        position: "absolute",
        left: "646.98px",
        top: "436.8px",
        width: "230.4px",
        height: "48px",
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u0627\u0633\u0645 \u0627\u0644\u0639\u0636\u0648"}</span></p></div><img key={9} src={img_3} alt="assets/circle_person.png" style={{
        position: "absolute",
        left: "912.83px",
        top: "264px",
        width: "138.24px",
        height: "138.24px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={10} style={{
        position: "absolute",
        left: "866.75px",
        top: "436.8px",
        width: "230.4px",
        height: "48px",
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
          fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(20pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Tajawal', sans-serif",
            color: "#C26B4F"
          }}>{"\u0627\u0633\u0645 \u0627\u0644\u0639\u0636\u0648"}</span></p></div></div></div>;
};
export default Slide2;
