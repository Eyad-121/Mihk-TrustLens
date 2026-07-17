import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;

const Slide10: React.FC = () => {
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
          position: "absolute", left: 912, top: 28, width: 260, height: 52,
          backgroundColor: "#C26B4F", borderRadius: 26,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10
        }}>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 700, fontFamily: "monospace" }}>A</span>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>الإجابة</span>
        </div>

        {/* Title */}
        <div style={{ position: "absolute", left: 57, top: 100, width: 1166, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(32pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540", lineHeight: 1.2 }}>
            النموذج الأولي والتحقق
          </p>
        </div>

        {/* MVP card */}
        <div style={{
          position: "absolute", left: 57, top: 200, width: 680, padding: "26px 30px",
          backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 12,
          boxSizing: "border-box"
        }}>
          <p style={{ margin: "0 0 14px", fontSize: "calc(16pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540", textAlign: "right" }}>
            الاختبار والتحقق (MVP)
          </p>
          <p style={{ margin: 0, fontSize: "calc(12.5pt * var(--pptx-font-scale,1))", color: "#526271", lineHeight: 1.7, textAlign: "right" }}>
            تحققنا من منطق المؤشرات وربط كل إشارة بمصدرها بالعربية، ومحرك لحساب درجة الثقة، ولوحة تحكم ذكية بالعربية، وتكامل تجريبي مع GOSI وZATCA.
          </p>
        </div>

        {/* 30% completion card */}
        <div style={{
          position: "absolute", left: 760, top: 200, width: 463, padding: "26px 30px",
          backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 12,
          boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-end"
        }}>
          <p style={{ margin: "0 0 16px", fontSize: "calc(16pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540" }}>
            الإنجاز
          </p>
          {/* Circle chart */}
          <div style={{ alignSelf: "center", position: "relative", width: 120, height: 120 }}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#EEEEEE" strokeWidth="12" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#C26B4F" strokeWidth="12"
                strokeDasharray={`${2 * Math.PI * 50 * 0.3} ${2 * Math.PI * 50 * 0.7}`}
                strokeDashoffset={2 * Math.PI * 50 * 0.25}
                strokeLinecap="round" />
              <text x="60" y="65" textAnchor="middle" fill="#C26B4F"
                style={{ fontSize: 22, fontWeight: 700, fontFamily: "Tajawal, sans-serif" }}>30%</text>
            </svg>
          </div>
          <p style={{ margin: "14px 0 0", fontSize: "calc(11.5pt * var(--pptx-font-scale,1))", color: "#526271", textAlign: "right", lineHeight: 1.5 }}>
            يعرض النموذج الحالي لوحة التحكم ودرجة الثقة والتقرير الذكي — بما يُظهر إنجاز ما يقارب 30% من المشروع.
          </p>
        </div>

        {/* Footer note */}
        <div style={{ position: "absolute", left: 57, top: 648, width: 1166, textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "calc(9pt * var(--pptx-font-scale,1))", color: "#AAAAAA" }}>
            كطريقة عرض: نسبة الإنجاز الفعلية للمنتج تبقى بمعزل عنها — خارطة الطريق ستستخدم إطار SCQA في الشريحة اللاحقة
          </p>
        </div>

        {/* Page number */}
        <p style={{ position: "absolute", left: 38, top: 685, margin: 0, fontSize: "calc(10pt * var(--pptx-font-scale,1))", color: "#AAAAAA" }}>10</p>
      </div>
    </div>
  );
};
export default Slide10;
