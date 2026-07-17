import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;

const Slide6: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ s: 1, x: 0, y: 0 });
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth, h = el.clientHeight;
      const s = Math.min(w / 1280, h / 720);
      setLayout({ s, x: (w - 1280 * s) / 2, y: (h - 720 * s) / 2 });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: "#000" }}>
      <div style={{
        position: "absolute", width: "1280px", height: "720px", overflow: "hidden",
        transformOrigin: "top left", backgroundColor: "#FFFFFF",
        transform: `scale(${layout.s})`, left: layout.x, top: layout.y,
        fontFamily: "'Tajawal', sans-serif", direction: "rtl"
      }}>
        {/* Logo */}
        <img crossOrigin="anonymous" src={`${base}images/image_10.png`} alt="logo"
          style={{ position: "absolute", left: 44, top: 35, width: 119, height: 66, objectFit: "fill" }} />

        {/* SCQA pill */}
        <div style={{
          position: "absolute", left: 900, top: 28, width: 272, height: 52,
          backgroundColor: "#C26B4F", borderRadius: 26,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10
        }}>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 700, fontFamily: "monospace" }}>Q</span>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>السؤال</span>
        </div>

        {/* Terracotta divider */}
        <div style={{
          position: "absolute", left: 610, top: 240, width: 60, height: 5,
          backgroundColor: "#C26B4F", borderRadius: 3
        }} />

        {/* Main question text — centered */}
        <div style={{
          position: "absolute", left: 80, top: 265, width: 1120, textAlign: "center"
        }}>
          <p style={{
            margin: 0,
            fontSize: "calc(26pt * var(--pptx-font-scale,1))",
            fontWeight: 700, color: "#0A2540", lineHeight: 1.65
          }}>
            كيف يمكن للبنوك اكتشاف تعثّر المنشآت الصغيرة والمتوسطة قبل 6–12 شهراً من ظهوره في القوائم المالية، اعتماداً على بيانات حقيقية لا يمكن التلاعب بها؟
          </p>
        </div>

        {/* Page number */}
        <p style={{ position: "absolute", left: 38, top: 685, margin: 0, fontSize: "calc(10pt * var(--pptx-font-scale,1))", color: "#AAAAAA" }}>06</p>
      </div>
    </div>
  );
};
export default Slide6;
