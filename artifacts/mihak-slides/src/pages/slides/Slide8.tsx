import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;

const Slide8: React.FC = () => {
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

  const sources = [
    { name: "GOSI", desc: "القوى العاملة والرواتب" },
    { name: "ZATCA", desc: "الإيراد الحقيقي" },
    { name: "مدد / WPS", desc: "انتظام الرواتب" },
    { name: "Open Banking ساما", desc: "التدفق النقدي" },
    { name: "SIMAH", desc: "السجل الائتماني" },
  ];

  const stats = [
    { num: "5", label: "مصادر بيانات رسمية" },
    { num: "+99%", label: "غير قابلة للتزوير" },
    { icon: "✓", label: "بموافقة المنشأة" },
  ];

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
            كيف يعمل: البيانات والموافقة
          </p>
        </div>

        {/* Subtitle */}
        <div style={{ position: "absolute", left: 57, top: 178, width: 1166, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(12.5pt * var(--pptx-font-scale,1))", color: "#526271", lineHeight: 1.5 }}>
            تُوفر البيانات عبر تكامل رسمي وبموافقة المنشأة مع الجهات الحكومية، ثم تُحلَّل بالذكاء الاصطناعي لإنتاج درجة الثقة والتنبيهات وتوصية التمويل.
          </p>
        </div>

        {/* Data sources table */}
        <div style={{ position: "absolute", left: 57, top: 240, width: 620 }}>
          {sources.map((src, i) => (
            <div key={src.name} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 20px",
              backgroundColor: i % 2 === 0 ? "#FAFAFA" : "#FFFFFF",
              border: "1px solid #EEEEEE",
              borderTop: i === 0 ? "1px solid #EEEEEE" : "none",
              borderRadius: i === 0 ? "12px 12px 0 0" : i === sources.length - 1 ? "0 0 12px 12px" : 0
            }}>
              <span style={{ fontSize: "calc(13pt * var(--pptx-font-scale,1))", color: "#526271" }}>{src.desc}</span>
              <span style={{ fontSize: "calc(14pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#C26B4F" }}>{src.name}</span>
            </div>
          ))}
        </div>

        {/* Stat boxes — right */}
        <div style={{ position: "absolute", left: 700, top: 240, width: 523, display: "flex", flexDirection: "column", gap: 16 }}>
          {stats.map(st => (
            <div key={st.label} style={{
              backgroundColor: "#0A2540", borderRadius: 12, padding: "22px 28px",
              display: "flex", flexDirection: "column", alignItems: "flex-end"
            }}>
              <p style={{ margin: 0, fontSize: "calc(34pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#C26B4F" }}>{st.num || st.icon}</p>
              <p style={{ margin: "4px 0 0", fontSize: "calc(12pt * var(--pptx-font-scale,1))", color: "#CBD8E6" }}>{st.label}</p>
            </div>
          ))}
        </div>

        {/* Page number */}
        <p style={{ position: "absolute", left: 38, top: 685, margin: 0, fontSize: "calc(10pt * var(--pptx-font-scale,1))", color: "#AAAAAA" }}>08</p>
      </div>
    </div>
  );
};
export default Slide8;
