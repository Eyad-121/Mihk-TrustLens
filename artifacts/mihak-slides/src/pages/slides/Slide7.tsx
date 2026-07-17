import React, { useState, useEffect, useRef } from "react";
const base = import.meta.env.BASE_URL;

const Slide7: React.FC = () => {
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
        {/* Right panel — accent background */}
        <div style={{
          position: "absolute", left: 760, top: 0, width: 520, height: 720,
          background: "linear-gradient(160deg, #0A2540 0%, #1a3a5c 60%, #0e2d47 100%)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0
        }}>
          <p style={{ margin: 0, color: "#F2E8E7", fontSize: "calc(38pt * var(--pptx-font-scale,1))", fontWeight: 700, textAlign: "center", lineHeight: 1.3 }}>مِحَك</p>
          <p style={{ margin: "8px 0 0", color: "#C26B4F", fontSize: "calc(22pt * var(--pptx-font-scale,1))", fontWeight: 600, textAlign: "center" }}>TrustLens</p>
          <p style={{ margin: "24px 20px 0", color: "#CBD8E6", fontSize: "calc(12pt * var(--pptx-font-scale,1))", textAlign: "center", lineHeight: 1.7 }}>
            ذكاء تشغيلي يُحوّل بيانات الحكومة إلى درجة ثقة لا تُزوَّر
          </p>
        </div>

        {/* Logo */}
        <img crossOrigin="anonymous" src={`${base}images/image_10.png`} alt="logo"
          style={{ position: "absolute", left: 44, top: 35, width: 119, height: 66, objectFit: "fill" }} />

        {/* SCQA pill */}
        <div style={{
          position: "absolute", left: 490, top: 28, width: 260, height: 52,
          backgroundColor: "#C26B4F", borderRadius: 26,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10
        }}>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 700, fontFamily: "monospace" }}>A</span>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>الإجابة</span>
        </div>

        {/* Title */}
        <div style={{ position: "absolute", left: 57, top: 106, width: 680, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(32pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540", lineHeight: 1.2 }}>
            مِحَك • TrustLens
          </p>
        </div>

        {/* Body text */}
        <div style={{ position: "absolute", left: 57, top: 192, width: 680, textAlign: "right" }}>
          <p style={{ margin: 0, fontSize: "calc(12.5pt * var(--pptx-font-scale,1))", color: "#526271", lineHeight: 1.7 }}>
            منصة ذكاء تشغيلي تجلس بين المنشأة والبنك. تأخذ رقم السجل التجاري وتتكامل — بموافقة المنشأة — مع المصادر الحكومية، لتُنتج درجة ثقة تشغيلية، وتنبيهات مبكرة، وتقريراً ذكياً بالعربية.
          </p>
        </div>

        {/* Feature card 1 */}
        <div style={{
          position: "absolute", left: 57, top: 338, width: 680, padding: "18px 22px",
          backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 12,
          display: "flex", alignItems: "center", gap: 16, boxSizing: "border-box"
        }}>
          <div style={{ flex: 1, textAlign: "right" }}>
            <p style={{ margin: "0 0 6px", fontSize: "calc(15pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540" }}>درجة ثقة من مصادر لا تُزوَّر</p>
            <p style={{ margin: 0, fontSize: "calc(11.5pt * var(--pptx-font-scale,1))", color: "#526271", lineHeight: 1.5 }}>
              إلى درجة ثقة تشغيلية واحدة قابلة للمقارنة بمتوسط SIMAH و ZATCA ومدد و GOSI يحوّل مِحَك بيانات القطاع.
            </p>
          </div>
          <img crossOrigin="anonymous" src={`${base}images/image_12.png`} alt="icon"
            style={{ width: 52, height: 52, objectFit: "contain", flexShrink: 0 }} />
        </div>

        {/* Feature card 2 */}
        <div style={{
          position: "absolute", left: 57, top: 460, width: 680, padding: "18px 22px",
          backgroundColor: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 12,
          display: "flex", alignItems: "center", gap: 16, boxSizing: "border-box"
        }}>
          <div style={{ flex: 1, textAlign: "right" }}>
            <p style={{ margin: "0 0 6px", fontSize: "calc(15pt * var(--pptx-font-scale,1))", fontWeight: 700, color: "#0A2540" }}>كشف مبكر وقرار أدق</p>
            <p style={{ margin: 0, fontSize: "calc(11.5pt * var(--pptx-font-scale,1))", color: "#526271", lineHeight: 1.5 }}>
              تنبيهات تظهر قبل 6–12 شهراً من ظهور التعثّر في القوائم المالية، مع توصية تمويل جاهزة للمحلل الائتماني.
            </p>
          </div>
          <img crossOrigin="anonymous" src={`${base}images/image_13.png`} alt="icon"
            style={{ width: 52, height: 52, objectFit: "contain", flexShrink: 0 }} />
        </div>

        {/* Page number */}
        <p style={{ position: "absolute", left: 38, top: 685, margin: 0, fontSize: "calc(10pt * var(--pptx-font-scale,1))", color: "#AAAAAA" }}>07</p>
      </div>
    </div>
  );
};
export default Slide7;
