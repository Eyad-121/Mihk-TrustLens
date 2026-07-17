import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;

const Slide9: React.FC = () => {
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

  const cards = [
    { title: "محرك القواعد والتنبيهات", desc: "تصنيف الإشارات: خطر / تحذير / تنبيه.", icon: "image_11.png" },
    { title: "تكامل واجهات حكومية (APIs)", desc: "الربط مع GOSI وZATCA وSIMAH ومدد.", icon: "image_12.png" },
    { title: "المصرفية المفتوحة (Open Banking)", desc: "قراءة التدفق النقدي الحي عبر إطار ساما.", icon: "image_13.png" },
    { title: "الذكاء الاصطناعي وتعلم الآلة", desc: "حساب درجة الثقة والتنبؤ بالتعثّر.", icon: "image_11.png" },
    { title: "لوحة تحكم تفاعلية", desc: "عرض الدرجة والمؤشرات والتوصية للبنك.", icon: "image_12.png" },
    { title: "معالجة اللغة الطبيعية (NLP)", desc: "توليد تقارير عربية للمحلل الائتماني.", icon: "image_13.png" },
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
            التقنيات المستخدمة
          </p>
        </div>

        {/* 2×3 grid */}
        <div style={{
          position: "absolute", left: 57, top: 185, width: 1166,
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20
        }}>
          {cards.map(card => (
            <div key={card.title} style={{
              backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8",
              borderRadius: 12, padding: "20px 20px 18px",
              display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", justifyContent: "flex-end" }}>
                <p style={{ margin: 0, fontSize: "calc(14pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540", textAlign: "right" }}>{card.title}</p>
                <img crossOrigin="anonymous" src={`${base}images/${card.icon}`} alt="icon"
                  style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0 }} />
              </div>
              <p style={{ margin: 0, fontSize: "calc(11.5pt * var(--pptx-font-scale,1))", color: "#526271", textAlign: "right", lineHeight: 1.5 }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Page number */}
        <p style={{ position: "absolute", left: 38, top: 685, margin: 0, fontSize: "calc(10pt * var(--pptx-font-scale,1))", color: "#AAAAAA" }}>09</p>
      </div>
    </div>
  );
};
export default Slide9;
