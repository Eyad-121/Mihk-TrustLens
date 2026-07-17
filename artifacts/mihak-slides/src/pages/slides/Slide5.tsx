import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;

const Slide5: React.FC = () => {
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
          position: "absolute", left: 888, top: 28, width: 284, height: 52,
          backgroundColor: "#C26B4F", borderRadius: 26,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10
        }}>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 700, fontFamily: "monospace" }}>C</span>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>التعقيد</span>
        </div>

        {/* Title */}
        <div style={{ position: "absolute", left: 57, top: 100, width: 1166, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(32pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540", lineHeight: 1.2 }}>
            البنوك ترى الماضي، والتعثّر يبدأ في الحاضر
          </p>
        </div>

        {/* Body text */}
        <div style={{ position: "absolute", left: 57, top: 188, width: 1166, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(13pt * var(--pptx-font-scale,1))", color: "#526271", lineHeight: 1.6 }}>
            القوائم المالية والضمانات تعكس الأمس، بينما التعثّر يبدأ اليوم بإشارات صامتة لا تظهر في أي تقرير مالي دوري.
          </p>
        </div>

        {/* Main card: silent operational signals */}
        <div style={{
          position: "absolute", left: 57, top: 248, width: 1166, padding: "22px 28px",
          backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 12,
          display: "flex", alignItems: "flex-start", gap: 20, boxSizing: "border-box"
        }}>
          <div style={{ flex: 1, textAlign: "right" }}>
            <p style={{ margin: "0 0 10px", fontSize: "calc(16pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540" }}>
              إشارات تشغيلية صامتة
            </p>
            <p style={{ margin: 0, fontSize: "calc(12.5pt * var(--pptx-font-scale,1))", color: "#526271", lineHeight: 1.6 }}>
              تأخر صرف الرواتب، وتسريح الموظفين، وتراجع الإيراد الفعلي — إشارات تسبق التعثّر المالي بأشهر، لكنها لا تُقرأ إلا بعد فوات الأوان.
            </p>
          </div>
          <img crossOrigin="anonymous" src={`${base}images/image_11.png`} alt="icon"
            style={{ width: 60, height: 60, objectFit: "contain", flexShrink: 0, marginTop: 4 }} />
        </div>

        {/* Three indicator pills */}
        <div style={{
          position: "absolute", left: 57, top: 440, width: 1166,
          display: "flex", gap: 20, justifyContent: "flex-end"
        }}>
          {["تأخر صرف الرواتب", "تسريح الموظفين", "تراجع الإيراد الفعلي"].map(label => (
            <div key={label} style={{
              padding: "10px 28px", backgroundColor: "#FDF1EE",
              borderRadius: 30, border: "1px solid #E8C8BE"
            }}>
              <span style={{ fontSize: "calc(13pt * var(--pptx-font-scale,1))", color: "#C26B4F", fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div style={{ position: "absolute", left: 57, top: 530, width: 1166, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(13.5pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540", lineHeight: 1.6 }}>
            النتيجة: تُكتشف المشكلة غالباً بعد 6–12 شهراً من بدء التعثّر الفعلي — بعد فوات وقت التدخل.
          </p>
        </div>

        {/* Page number */}
        <p style={{ position: "absolute", left: 38, top: 685, margin: 0, fontSize: "calc(10pt * var(--pptx-font-scale,1))", color: "#AAAAAA" }}>05</p>
      </div>
    </div>
  );
};
export default Slide5;
