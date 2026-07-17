import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;

const Slide4: React.FC = () => {
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
          position: "absolute", left: 856, top: 28, width: 316, height: 52,
          backgroundColor: "#C26B4F", borderRadius: 26,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10
        }}>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 700, fontFamily: "monospace" }}>S</span>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>الوضع الراهن</span>
        </div>

        {/* Title */}
        <div style={{ position: "absolute", left: 57, top: 100, width: 1166, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(34pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540", lineHeight: 1.2 }}>
            المنشآت الصغيرة والمتوسطة تقود رؤية 2030
          </p>
        </div>

        {/* Body text left side */}
        <div style={{ position: "absolute", left: 57, top: 210, width: 560, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(13pt * var(--pptx-font-scale,1))", color: "#526271", lineHeight: 1.7 }}>
            تعتمد البنوك في تقييم الجدارة الائتمانية على القوائم المالية والضمانات، مدعومة بمصادر رسمية مثل GOSI وZATCA وSIMAH. هذه المصادر موثوقة، لكنها تُقرأ بشكل دوري وسنوي — أي أنها تعكس صورة الأمس، لا نبض المنشأة اليوم.
          </p>
        </div>

        {/* Stat card 1 */}
        <div style={{
          position: "absolute", left: 650, top: 195, width: 554, height: 140,
          backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 12,
          display: "flex", flexDirection: "column", alignItems: "flex-end",
          justifyContent: "center", padding: "0 28px"
        }}>
          <p style={{ margin: 0, fontSize: "calc(40pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#C26B4F" }}>+99%</p>
          <p style={{ margin: "4px 0 0", fontSize: "calc(12pt * var(--pptx-font-scale,1))", color: "#526271" }}>
            من إجمالي المنشآت في السعودية منشآت صغيرة ومتوسطة
          </p>
        </div>

        {/* Stat card 2 */}
        <div style={{
          position: "absolute", left: 650, top: 355, width: 554, height: 140,
          backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 12,
          display: "flex", flexDirection: "column", alignItems: "flex-end",
          justifyContent: "center", padding: "0 28px"
        }}>
          <p style={{ margin: 0, fontSize: "calc(40pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#C26B4F" }}>35%</p>
          <p style={{ margin: "4px 0 0", fontSize: "calc(12pt * var(--pptx-font-scale,1))", color: "#526271" }}>
            مساهمة مستهدفة للمنشآت الصغيرة والمتوسطة في الناتج المحلي بحلول 2030
          </p>
        </div>

        {/* Page number */}
        <p style={{ position: "absolute", left: 38, top: 685, margin: 0, fontSize: "calc(10pt * var(--pptx-font-scale,1))", color: "#AAAAAA" }}>04</p>
      </div>
    </div>
  );
};
export default Slide4;
