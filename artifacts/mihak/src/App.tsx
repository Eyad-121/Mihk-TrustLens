import React, { useState, useEffect, useRef } from 'react';
import './index.css';

/* ─── Constants ─── */
const IND = [
  "استقرار القوى العاملة",
  "الالتزام بصرف الرواتب",
  "صحة الإيراد الفعلي",
  "صحة التدفق النقدي",
  "السجل الائتماني",
];
const IND_ICONS = ["👥", "💸", "📈", "💰", "🏦"];
const IND_DESC = [
  "ثبات عدد الموظفين المسجلين في التأمينات الاجتماعية",
  "انتظام صرف الرواتب عبر نظام حماية الأجور (مدد)",
  "نمو الإيراد المُقرّ لدى هيئة الزكاة والضريبة",
  "سلامة التدفقات النقدية عبر بيانات Open Banking",
  "السجل الائتماني لدى SIMAH",
];
const TIPS = [
  "وقف أي تسريح إضافي للموظفين، والحفاظ على معدل دوران مستقر في عدد المشتركين لدى التأمينات الاجتماعية (GOSI).",
  "تسوية رواتب الموظفين المتأخرة فوراً عبر نظام مدد/WPS، وضمان عدم تكرار أي تأخير جديد خلال الأشهر القادمة.",
  "معالجة أسباب تراجع الإيراد المُقرّ لدى هيئة الزكاة والضريبة (ZATCA)، والتأكد من دقة واكتمال الإقرارات الضريبية.",
  "تحسين إدارة السيولة اليومية وتقليل التذبذب في التدفقات البنكية، وبناء احتياطي نقدي أوضح.",
  "تسوية أي التزامات ائتمانية متأخرة أو متعثرة لدى SIMAH، وتحسين انتظام السداد على القروض والتسهيلات القائمة.",
];
const SOURCES = ["GOSI", "ZATCA", "مدد", "Open Banking", "SIMAH"] as const;
const DEFAULT_WEIGHTS = [20, 25, 20, 20, 15];
const IND_COLORS = ['#8785d8', '#2f9e6b', '#c26b4f', '#dd9a34', '#1e1e42'];

/* ─── Data ─── */
type AlertRecord = {
  id: string; tag: string; color: string;
  text: string; source: string; time: string;
};
type Company = {
  name: string; sector: string; size: string; sectorAvg: number;
  ind: number[]; dataAvail: Record<string, boolean>;
  history: number[]; alerts: AlertRecord[]; report: string;
};

const DB: Record<string, Company> = {
  "1010574320": {
    name: "مؤسسة الأفق للمقاولات",
    sector: "المقاولات", size: "متوسطة", sectorAvg: 68,
    ind: [88, 90, 78, 80, 84],
    dataAvail: { GOSI: true, ZATCA: true, "مدد": true, "Open Banking": true, SIMAH: true },
    history: [74, 76, 78, 79, 81, 82],
    alerts: [
      { id: "a1", tag: "تنبيه", color: "#8785d8", text: "تذبذب طفيف في التدفق النقدي خلال الربع الأخير ضمن الحدود الطبيعية", source: "Open Banking", time: "قبل ٩ أيام" },
    ],
    report: "تُظهر بيانات المنشأة استقراراً تشغيلياً قوياً: قوى عاملة ثابتة والتزام منتظم بصرف الرواتب عبر نظام مدد، مع نمو مطّرد في الإيراد المُقرّ لدى هيئة الزكاة والضريبة. درجة الثقة تفوق متوسط قطاع المقاولات، ولا توجد إشارات خطر جوهرية. يُوصى بالموافقة على التمويل بمخاطرة منخفضة.",
  },
  "1010889077": {
    name: "شركة نجمة الخليج التجارية",
    sector: "التجارة والتجزئة", size: "صغيرة", sectorAvg: 60,
    ind: [62, 55, 60, 52, 61],
    dataAvail: { GOSI: true, ZATCA: true, "مدد": true, "Open Banking": true, SIMAH: true },
    history: [70, 68, 65, 61, 59, 58],
    alerts: [
      { id: "b1", tag: "تحذير", color: "#dd9a34", text: "تأخّر صرف رواتب شهر واحد لجزء من الموظفين", source: "مدد / WPS", time: "قبل ٢١ يوماً" },
      { id: "b2", tag: "تنبيه", color: "#8785d8", text: "تراجع الإيراد المُقرّ بنسبة ١٢٪ مقارنة بالربع السابق", source: "ZATCA", time: "قبل شهر" },
    ],
    report: "ترصد المنصة إشارات ضغط تشغيلي مبكرة: تأخّر في صرف رواتب شهر عبر نظام مدد، مصحوباً بتراجع في الإيراد المُقرّ لدى هيئة الزكاة والضريبة بنحو ١٢٪. القوى العاملة لا تزال مستقرة نسبياً. درجة الثقة دون متوسط قطاع التجارة والتجزئة. يُوصى بتمويل جزئي مع مخاطرة متوسطة وإعادة تقييم خلال ستة أشهر.",
  },
  "1010233918": {
    name: "مصنع البيان للتعبئة والتغليف",
    sector: "الصناعات التحويلية", size: "صغيرة", sectorAvg: 63,
    ind: [30, 25, 40, 28, 45],
    dataAvail: { GOSI: true, ZATCA: true, "مدد": true, "Open Banking": true, SIMAH: false },
    history: [58, 52, 46, 41, 37, 34],
    alerts: [
      { id: "c1", tag: "خطر", color: "#d1564c", text: "تسريح ٢٢٪ من الموظفين خلال ربع واحد", source: "GOSI", time: "قبل ١١ يوماً" },
      { id: "c2", tag: "خطر", color: "#d1564c", text: "تأخّر صرف الرواتب لشهرين متتاليين", source: "مدد / WPS", time: "قبل ٦ أيام" },
      { id: "c3", tag: "تحذير", color: "#dd9a34", text: "انكماش الإيراد المُقرّ بنسبة ٣١٪ خلال عام", source: "ZATCA", time: "قبل شهرين" },
    ],
    report: "تتقاطع عدة إشارات خطر تسبق ظهور التعثّر في القوائم المالية: تقلّص حاد في عدد المشتركين لدى التأمينات الاجتماعية (تسريح ٢٢٪)، وتأخّر صرف الرواتب لشهرين عبر مدد، وانكماش الإيراد المُقرّ بنسبة ٣١٪. درجة الثقة أقل بكثير من متوسط قطاع الصناعات التحويلية. يُوصى بتأجيل التمويل وإعادة التقييم خلال ثلاثة أشهر.",
  },
};

/* ─── Helpers ─── */
function colorFor(v: number) {
  return v >= 70 ? '#2f9e6b' : v >= 50 ? '#dd9a34' : '#d1564c';
}
function computeScore(ind: number[], weights: number[]) {
  const total = weights.reduce((a, b) => a + b, 0);
  if (total === 0) return 0;
  return Math.round(ind.reduce((s, v, i) => s + v * weights[i], 0) / total);
}
function confidenceOf(d: Company) {
  const have = SOURCES.filter(s => d.dataAvail[s]).length;
  return Math.round((have / SOURCES.length) * 100);
}
function deriveRec(score: number) {
  if (score >= 70)
    return { verdict: ["منشأة سليمة", "#2f9e6b"] as [string, string], v: ["موافقة", "#2f9e6b"] as [string, string], risk: ["منخفضة", "#2f9e6b", "#eaf7f0"] as [string, string, string], limit: "حتى ٢٫٥ مليون ريال", review: "بعد ١٢ شهراً" };
  if (score >= 50)
    return { verdict: ["تحتاج مراقبة", "#dd9a34"] as [string, string], v: ["تمويل جزئي", "#dd9a34"] as [string, string], risk: ["متوسطة", "#dd9a34", "#fbf3e3"] as [string, string, string], limit: "حتى ٦٠٠ ألف ريال", review: "بعد ٦ أشهر" };
  return { verdict: ["مخاطرة مرتفعة", "#d1564c"] as [string, string], v: ["تأجيل التمويل", "#d1564c"] as [string, string], risk: ["مرتفعة", "#d1564c", "#faeae8"] as [string, string, string], limit: "غير موصى به حالياً", review: "بعد ٣ أشهر" };
}

/* ─── Alert state type ─── */
type AlertState = {
  status: 'جديد' | 'قيد المراجعة' | 'تم الحل' | 'قيد الاعتراض';
  disputeOpen: boolean;
  disputeText: string;
  disputeReason: string;
};
function initAlertStates(): Record<string, AlertState> {
  const states: Record<string, AlertState> = {};
  Object.values(DB).forEach(d => {
    d.alerts.forEach(a => {
      states[a.id] = { status: 'جديد', disputeOpen: false, disputeText: '', disputeReason: '' };
    });
  });
  return states;
}

/* ─── Sparkline ─── */
function Sparkline({ history, score }: { history: number[]; score: number }) {
  const W = 200, H = 52, PAD = 4;
  const max = Math.max(...history), min = Math.min(...history);
  const range = (max - min) || 1;
  const pts = history.map((v, i) => {
    const x = PAD + (i / (history.length - 1)) * (W - PAD * 2);
    const y = PAD + (1 - (v - min) / range) * (H - PAD * 2);
    return { x, y, v };
  });
  const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');
  const area = `M${pts[0].x},${H} ` + pts.map(p => `L${p.x},${p.y}`).join(' ') + ` L${pts[pts.length - 1].x},${H} Z`;
  const color = colorFor(score);
  const delta = history[history.length - 1] - history[history.length - 2];
  const arrow = delta > 0 ? '▲' : delta < 0 ? '▼' : '—';
  const arrowColor = delta > 0 ? '#2f9e6b' : delta < 0 ? '#d1564c' : '#6c7488';

  // Month labels: last 6 months backwards from now
  const monthLabels = Array.from({ length: 6 }, (_, i) => {
    const d = new Date();
    d.setMonth(d.getMonth() - (5 - i));
    return d.toLocaleDateString('ar-SA', { month: 'short' });
  });

  return (
    <div className="sparkwrap">
      <div className="spark-header">
        <span className="spark-title">تطور الدرجة — ٦ أشهر</span>
        <span className="spark-delta" style={{ color: arrowColor }}>{arrow} {Math.abs(delta)} نقطة عن الشهر الماضي</span>
      </div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="spark-svg">
        <defs>
          <linearGradient id={`sg-${score}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#sg-${score})`} />
        <polyline points={polyline} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={i === pts.length - 1 ? 4 : 2.5}
            fill={i === pts.length - 1 ? color : '#fff'} stroke={color} strokeWidth="1.5" />
        ))}
      </svg>
      <div className="spark-labels">
        {monthLabels.map((m, i) => <span key={i}>{m}</span>)}
      </div>
    </div>
  );
}

/* ─── Animated gauge ─── */
function AnimatedGauge({ score }: { score: number }) {
  const [displayed, setDisplayed] = useState(0);
  const [dashoffset, setDashoffset] = useState(597);
  useEffect(() => {
    setDisplayed(0); setDashoffset(597);
    const t = setTimeout(() => {
      setDashoffset(597 - (597 * score) / 100);
      let n = 0;
      const step = Math.max(1, Math.round(score / 38));
      const iv = setInterval(() => { n += step; if (n >= score) { n = score; clearInterval(iv); } setDisplayed(n); }, 22);
      return () => clearInterval(iv);
    }, 120);
    return () => clearTimeout(t);
  }, [score]);
  return (
    <div className="gauge">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r="95" fill="none" stroke="#eef0f5" strokeWidth="18" />
        <circle cx="110" cy="110" r="95" fill="none" stroke={colorFor(score)} strokeWidth="18"
          strokeLinecap="round" strokeDasharray="597" strokeDashoffset={dashoffset}
          style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1), stroke .6s' }} />
      </svg>
      <div className="val">
        <div className="num" style={{ color: colorFor(score) }}>{displayed}</div>
        <div className="den">درجة الثقة التشغيلية</div>
      </div>
    </div>
  );
}

/* ─── Sector bar ─── */
function AnimatedSectorBar({ score, sectorAvg }: { score: number; sectorAvg: number }) {
  const [fill, setFill] = useState(0);
  useEffect(() => { setFill(0); const t = setTimeout(() => setFill(score), 160); return () => clearTimeout(t); }, [score]);
  return (
    <div className="sectorbar">
      <div className="lbl"><span>مقارنة بمتوسط القطاع</span><span>{score} مقابل {sectorAvg}</span></div>
      <div className="track">
        <div className="fill" style={{ width: `${fill}%`, background: colorFor(score) }} />
        <div className="sector" style={{ insetInlineStart: `${sectorAvg}%` }} />
      </div>
    </div>
  );
}

/* ─── Animated indicator bar ─── */
function AnimatedIndicator({ value, label, index, weightPct, isCustom }: {
  value: number; label: string; index: number; weightPct: number; isCustom: boolean;
}) {
  const [width, setWidth] = useState(0);
  useEffect(() => { setWidth(0); const t = setTimeout(() => setWidth(value), 180 + index * 80); return () => clearTimeout(t); }, [value, index]);
  return (
    <div className="ind">
      <div className="top">
        <b>{label}</b>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {isCustom && <span className="ind-weight-badge" style={{ background: `${colorFor(value)}18`, color: colorFor(value) }}>{weightPct}٪</span>}
          <i style={{ color: colorFor(value) }}>{value}</i>
        </div>
      </div>
      <div className="bar"><div style={{ background: colorFor(value), width: `${width}%` }} /></div>
    </div>
  );
}

/* ─── Why this score? ─── */
function WhyBox({ ind, weights, score }: { ind: number[]; weights: number[]; score: number }) {
  const [open, setOpen] = useState(false);
  const total = weights.reduce((a, b) => a + b, 0) || 1;
  return (
    <div className="why-section">
      <button className="why-toggle" onClick={() => setOpen(o => !o)}>
        {open ? '▲' : '▼'} لماذا هذه الدرجة؟
      </button>
      {open && (
        <div className="why-box">
          {ind.map((v, i) => {
            const contrib = (v * weights[i] / total);
            return (
              <div className="why-row" key={i}>
                <span>{IND[i]} <span className="why-w">(وزن {weights[i]}٪)</span></span>
                <b style={{ color: colorFor(v) }}>{contrib.toFixed(1)} نقطة</b>
              </div>
            );
          })}
          <div className="why-total">
            <span>مجموع الدرجة</span>
            <span>{score}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Improvement opportunities ─── */
function Opportunities({ ind, weights, score, sectorAvg }: {
  ind: number[]; weights: number[]; score: number; sectorAvg: number;
}) {
  const target = Math.max(75, sectorAvg);
  const weak = ind
    .map((v, i) => ({ i, v, name: IND[i], tip: TIPS[i] }))
    .filter(x => x.v < 70)
    .sort((a, b) => a.v - b.v);

  if (weak.length === 0) {
    return (
      <div className="oppwrap">
        <div className="opphead"><h3>فرص التحسين</h3></div>
        <div className="oppgood">✓ لا توجد نقاط ضعف جوهرية — جميع المؤشرات ضمن النطاق الآمن</div>
      </div>
    );
  }

  return (
    <div className="oppwrap">
      <div className="opphead">
        <h3>فرص التحسين</h3>
        <small>ما يجب على المنشأة البدء بمعالجته فوراً</small>
      </div>
      {weak.map(it => {
        const priority = it.v < 40
          ? { label: 'أولوية عاجلة', color: '#d1564c' }
          : it.v < 60
          ? { label: 'أولوية متوسطة', color: '#dd9a34' }
          : { label: 'تحسين إضافي', color: '#8785d8' };
        const hyp = ind.map((v, idx) => idx === it.i ? target : v);
        const gain = Math.max(0, computeScore(hyp, weights) - score);
        return (
          <div className="oppitem" key={it.i}>
            <span className="opp-pr" style={{ background: priority.color }}>{priority.label}</span>
            <div className="opp-body">
              <div className="opp-name">{it.name} — القيمة الحالية {it.v}</div>
              <div className="opp-tip">{it.tip}</div>
              <div className="opp-metrics">
                <span>الهدف: <b>{target}</b></span>
                <span>الأثر المتوقع: <b>+{gain} نقطة</b></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Alert item ─── */
function AlertItem({ alert, state, onStatusChange, onDisputeToggle, onDisputeTextChange, onDisputeSubmit }: {
  alert: AlertRecord;
  state: AlertState;
  onStatusChange: (id: string, s: AlertState['status']) => void;
  onDisputeToggle: (id: string) => void;
  onDisputeTextChange: (id: string, t: string) => void;
  onDisputeSubmit: (id: string) => void;
}) {
  const [submitError, setSubmitError] = useState('');
  const tagColor = state.status === 'قيد الاعتراض' ? '#8785d8' : alert.color;
  const tagLabel = state.status === 'قيد الاعتراض' ? 'قيد الاعتراض' : alert.tag;

  const handleSubmit = () => {
    if (!state.disputeText.trim()) { setSubmitError('يرجى كتابة سبب الاعتراض قبل الإرسال.'); return; }
    setSubmitError('');
    onDisputeSubmit(alert.id);
  };

  return (
    <div className={`alert ${state.status === 'تم الحل' ? 'resolved' : ''}`}>
      <span className="tag" style={{ background: tagColor }}>{tagLabel}</span>
      <div className="body">
        <div className="txt">{alert.text}</div>
        <div className="meta">
          <span>المصدر: <b>{alert.source}</b></span>
          <span>{alert.time}</span>
          <span>الحالة: {state.status}</span>
        </div>
        <div className="alert-actions">
          <button
            className={state.status === 'قيد المراجعة' ? 'act-active' : ''}
            onClick={() => onStatusChange(alert.id, 'قيد المراجعة')}>قيد المراجعة</button>
          <button
            className={state.status === 'تم الحل' ? 'act-active' : ''}
            onClick={() => onStatusChange(alert.id, 'تم الحل')}>تحديد كمُحل</button>
          <button onClick={() => onDisputeToggle(alert.id)}>اعتراض المنشأة</button>
        </div>
        {state.disputeOpen && (
          <div className="disputebox">
            <textarea
              placeholder="اشرح سبب الاعتراض على هذا التنبيه…"
              value={state.disputeText}
              onChange={e => { onDisputeTextChange(alert.id, e.target.value); setSubmitError(''); }}
            />
            {submitError && <div className="dispute-error">{submitError}</div>}
            <div className="dispute-submit-row">
              <button className="btn-dispute-submit" onClick={handleSubmit}>إرسال الاعتراض</button>
            </div>
          </div>
        )}
        {state.disputeReason && (
          <div className="disputenote">
            اعتراض مُقدَّم: "{state.disputeReason}" — بانتظار مراجعة المحلل
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Settings page ─── */
function SettingsPage({ weights, onChange, onReset }: {
  weights: number[];
  onChange: (i: number, v: number) => void;
  onReset: () => void;
}) {
  const total = weights.reduce((a, b) => a + b, 0);
  const pcts = weights.map(w => total === 0 ? 0 : Math.round((w / total) * 100));
  const isCustom = weights.some((w, i) => w !== DEFAULT_WEIGHTS[i]);

  return (
    <div className="settings-page fade">
      {/* ── Weight controls ── */}
      <div className="settings-header">
        <div>
          <h2 className="settings-title">أوزان المؤشرات</h2>
          <p className="settings-sub">
            عدّل أهمية كل مؤشر في احتساب درجة الثقة التشغيلية. مثال: ارفع وزن «الالتزام بصرف الرواتب» إذا كان تأخر الرواتب مؤشر خطر حاسم في سياسة الإقراض لديكم. الأوزان تُطبَّق فوراً وتعكس على كل الشركات.
          </p>
        </div>
        {isCustom && <button className="reset-weights-btn" onClick={onReset}>إعادة تعيين</button>}
      </div>

      <div className="settings-cards">
        {IND.map((label, i) => {
          const pct = pcts[i];
          const color = pct >= 30 ? '#8785d8' : pct >= 20 ? '#1e1e42' : '#aab0c4';
          return (
            <div key={i} className="settings-card">
              <div className="sc-top">
                <div className="sc-icon">{IND_ICONS[i]}</div>
                <div className="sc-info">
                  <div className="sc-name">{label}</div>
                  <div className="sc-desc">{IND_DESC[i]}</div>
                </div>
                <div className="sc-pct" style={{ color }}>{pct}٪</div>
              </div>
              <div className="sc-bar-track">
                <div className="sc-bar-fill" style={{ width: `${weights[i]}%`, background: `linear-gradient(90deg, ${color}, ${color}aa)` }} />
              </div>
              <div className="sc-slider-row">
                <span className="sc-min">أقل أهمية</span>
                <input type="range" min={0} max={100} value={weights[i]}
                  onChange={e => onChange(i, Number(e.target.value))}
                  className="weight-slider"
                  style={{ '--thumb-color': color } as React.CSSProperties} />
                <span className="sc-max">أكثر أهمية</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Distribution preview */}
      <div className="settings-preview-card">
        <div className="sp-title">معاينة توزيع الأوزان</div>
        <div className="sp-bar">
          {weights.map((w, i) => {
            const widthPct = total === 0 ? 0 : (w / total) * 100;
            return <div key={i} className="sp-segment"
              style={{ width: `${widthPct}%`, background: IND_COLORS[i], opacity: widthPct < 2 ? 0 : 1 }}
              title={`${IND[i]}: ${Math.round(widthPct)}٪`} />;
          })}
        </div>
        <div className="sp-legend">
          {IND.map((label, i) => (
            <div key={i} className="sp-leg-item">
              <span className="sp-dot" style={{ background: IND_COLORS[i] }} />
              <span>{label}</span>
              <span className="sp-leg-pct">{pcts[i]}٪</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pricing plans ── */}
      <div className="plans-section">
        <h2 className="settings-title" style={{ fontSize: 18, marginBottom: 6 }}>خطط الوصول للبنوك وجهات التمويل</h2>
        <p className="settings-sub" style={{ marginBottom: 20 }}>اختر خطة الوصول المناسبة لحجم عمليات مؤسستكم</p>
        <div className="plans-grid">
          <div className="plan-card">
            <div className="plan-icon">🔍</div>
            <h4>استعلام فردي</h4>
            <p>دفع لكل عملية تحليل — مناسب لمراجعة طلبات تمويل فردية دون التزام شهري.</p>
            <div className="plan-tag">الأنسب للمقرضين الأفراد</div>
          </div>
          <div className="plan-card plan-card--featured">
            <div className="plan-icon">⚡</div>
            <h4>اشتراك API — تكامل مباشر</h4>
            <p>ربط محرك التقييم مباشرة بنظام إصدار القروض (LOS) لدى البنك، مع تنبيهات آلية عبر Webhook.</p>
            <div className="plan-tag plan-tag--purple">الأكثر طلباً</div>
          </div>
          <div className="plan-card">
            <div className="plan-icon">🏛️</div>
            <h4>مؤسسي — محفظة كاملة</h4>
            <p>مراقبة مستمرة لكامل محفظة العملاء مع تقارير تجميعية وتنبيهات مبكرة على مستوى القطاع.</p>
            <div className="plan-tag">للمؤسسات المالية الكبرى</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  const [tab, setTab] = useState<'dashboard' | 'settings'>('dashboard');
  const [searchInput, setSearchInput] = useState('1010574320');
  const [activeCr, setActiveCr] = useState('1010574320');
  const [crError, setCrError] = useState('');
  const [weights, setWeights] = useState<number[]>([...DEFAULT_WEIGHTS]);
  const [alertStates, setAlertStates] = useState<Record<string, AlertState>>(initAlertStates);

  const isCustom = weights.some((w, i) => w !== DEFAULT_WEIGHTS[i]);

  const handleAnalyze = () => {
    const cr = searchInput.trim();
    if (!DB[cr]) { setCrError('لا توجد بيانات لهذا السجل التجاري في النسخة التجريبية. جرّب: 1010574320'); return; }
    setCrError('');
    setActiveCr(cr);
    setTab('dashboard');
  };

  const handleWeightChange = (i: number, v: number) => {
    setWeights(prev => { const n = [...prev]; n[i] = v; return n; });
  };
  const resetWeights = () => setWeights([...DEFAULT_WEIGHTS]);

  const updateAlertStatus = (id: string, status: AlertState['status']) => {
    setAlertStates(prev => ({ ...prev, [id]: { ...prev[id], status } }));
  };
  const toggleDisputeOpen = (id: string) => {
    setAlertStates(prev => ({ ...prev, [id]: { ...prev[id], disputeOpen: !prev[id].disputeOpen } }));
  };
  const updateDisputeText = (id: string, text: string) => {
    setAlertStates(prev => ({ ...prev, [id]: { ...prev[id], disputeText: text } }));
  };
  const submitDispute = (id: string) => {
    setAlertStates(prev => ({
      ...prev,
      [id]: { ...prev[id], status: 'قيد الاعتراض', disputeReason: prev[id].disputeText, disputeOpen: false },
    }));
  };

  const d = DB[activeCr];
  const score = computeScore(d.ind, weights);
  const rec = deriveRec(score);
  const conf = confidenceOf(d);
  const missing = SOURCES.filter(s => !d.dataAvail[s]);
  const total = weights.reduce((a, b) => a + b, 0);
  const weightPcts = weights.map(w => total === 0 ? 0 : Math.round((w / total) * 100));

  return (
    <div className="wrap">
      {/* ── Top bar ── */}
      <div className="topbar">
        <div className="brand">
          <div className="mark">م</div>
          <div><h1>مِحَك</h1><span>TRUSTLENS</span></div>
        </div>

        {tab === 'dashboard' && (
          <div style={{ flex: 1, maxWidth: 520 }}>
            <div className="search">
              <input placeholder="أدخل رقم السجل التجاري…" value={searchInput}
                onChange={e => { setSearchInput(e.target.value); setCrError(''); }}
                onKeyDown={e => e.key === 'Enter' && handleAnalyze()} />
              <button className="btn" onClick={handleAnalyze}>تحليل</button>
            </div>
            {crError && <div className="cr-error">{crError}</div>}
          </div>
        )}

        {tab === 'settings' && <div className="topbar-title">إعدادات نموذج التقييم</div>}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {tab === 'dashboard' && (
            <div className="sources">
              {SOURCES.map(s => (
                <div key={s} className="src">
                  <span className={`dot ${d.dataAvail[s] ? '' : 'off'}`} />
                  {s}
                </div>
              ))}
            </div>
          )}
          <div className="tab-switcher">
            <button className={`tab-btn ${tab === 'dashboard' ? 'active' : ''}`} onClick={() => setTab('dashboard')}>لوحة التحكم</button>
            <button className={`tab-btn ${tab === 'settings' ? 'active' : ''}`} onClick={() => setTab('settings')}>
              الإعدادات{isCustom && <span className="tab-dot" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Dashboard ── */}
      {tab === 'dashboard' && (
        <>
          <div className="chips">
            {Object.entries(DB).map(([cr, info]) => {
              const s = computeScore(info.ind, weights);
              const v = deriveRec(s).verdict;
              return (
                <button key={cr} className={`chip ${activeCr === cr ? 'active' : ''}`}
                  onClick={() => { setSearchInput(cr); setActiveCr(cr); setCrError(''); }}>
                  {info.name} <small>{v[0]}</small>
                </button>
              );
            })}
            {isCustom && <span className="chips-custom-badge">أوزان مخصصة مفعّلة</span>}
          </div>

          <div className="grid" key={activeCr}>
            {/* Left column */}
            <div className="col">
              <div className="card gaugecard fade" style={{ animationDelay: '0ms' }}>
                <div className="company-name">{d.name}</div>
                <div className="company-cr">سجل تجاري: {activeCr}</div>
                <div
                  className="confpill"
                  title={missing.length ? 'مصادر غير متوفرة: ' + missing.join('، ') : 'جميع المصادر متوفرة'}
                >
                  دقة تغطية البيانات: {conf}٪{missing.length ? ` (نقص: ${missing.join('، ')})` : ''}
                </div>
                <AnimatedGauge score={score} />
                <div className="verdict" style={{ color: rec.verdict[1], background: `${rec.verdict[1]}1a` }}>{rec.verdict[0]}</div>
                <AnimatedSectorBar score={score} sectorAvg={d.sectorAvg} />
                <div className="peertxt">مجموعة النظراء: منشآت {d.size} — قطاع {d.sector}</div>
                <Sparkline history={d.history} score={score} />
              </div>

              <div className="card fade" style={{ animationDelay: '70ms' }}>
                <h2>توصية التمويل</h2>
                <div className="rechead"><div className="rec-verdict" style={{ color: rec.v[1] }}>{rec.v[0]}</div></div>
                <div className="rec-row"><span>مستوى المخاطرة</span><span><span className="risk-pill" style={{ color: rec.risk[1], background: rec.risk[2] }}>{rec.risk[0]}</span></span></div>
                <div className="rec-row"><span>الحد المقترح</span><span>{rec.limit}</span></div>
                <div className="rec-row"><span>موعد إعادة التقييم</span><span>{rec.review}</span></div>
                <Opportunities ind={d.ind} weights={weights} score={score} sectorAvg={d.sectorAvg} />
              </div>
            </div>

            {/* Right column */}
            <div className="col">
              <div className="card fade" style={{ animationDelay: '140ms' }}>
                <h2>تحليل المؤشرات</h2>
                {d.ind.map((val, i) => (
                  <AnimatedIndicator key={`${activeCr}-${i}`} value={val} label={IND[i]} index={i}
                    weightPct={weightPcts[i]} isCustom={isCustom} />
                ))}
                {isCustom && (
                  <div className="ind-custom-note">
                    النسب المعروضة تعكس الأوزان المخصصة ·{' '}
                    <button className="ind-settings-link" onClick={() => setTab('settings')}>تعديل الأوزان</button>
                  </div>
                )}
                <WhyBox ind={d.ind} weights={weights} score={score} />
              </div>

              <div className="card fade" style={{ animationDelay: '210ms' }}>
                <h2>التنبيهات المبكرة</h2>
                {d.alerts.map(a => (
                  <AlertItem key={a.id} alert={a} state={alertStates[a.id]}
                    onStatusChange={updateAlertStatus}
                    onDisputeToggle={toggleDisputeOpen}
                    onDisputeTextChange={updateDisputeText}
                    onDisputeSubmit={submitDispute} />
                ))}
              </div>

              <div className="card report fade" style={{ animationDelay: '280ms' }}>
                <h2 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>التقرير الذكي</span>
                  <span className="ai">مُولّد بالذكاء الاصطناعي</span>
                </h2>
                <div className="body">{d.report}</div>
                <div className="sig">صيغ آلياً من بيانات حكومية موثّقة · {new Date().toLocaleDateString('ar-SA')}</div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Settings ── */}
      {tab === 'settings' && (
        <SettingsPage weights={weights} onChange={handleWeightChange} onReset={resetWeights} />
      )}
    </div>
  );
}
