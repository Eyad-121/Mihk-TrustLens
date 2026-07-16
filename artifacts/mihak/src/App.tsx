import React, { useState, useEffect } from 'react';
import './index.css';

const IND = [
  "استقرار القوى العاملة",
  "الالتزام بصرف الرواتب",
  "صحة الإيراد الفعلي",
  "صحة التدفق النقدي",
  "السجل الائتماني"
];

// Icon for each indicator (visual hint in settings)
const IND_ICONS = ["👥", "💸", "📈", "💰", "🏦"];

// Description of why each matters
const IND_DESC = [
  "ثبات عدد الموظفين المسجلين في التأمينات الاجتماعية",
  "انتظام صرف الرواتب عبر نظام حماية الأجور (مدد)",
  "نمو الإيراد المُقرّ لدى هيئة الزكاة والضريبة",
  "سلامة التدفقات النقدية عبر بيانات Open Banking",
  "السجل الائتماني لدى SIMAH"
];

const DEFAULT_WEIGHTS = [20, 20, 20, 20, 20];
const SECTOR = 65;

const DB: Record<string, any> = {
  "1010574320": {
    name: "مؤسسة الأفق للمقاولات",
    ind: [88, 90, 78, 80, 84],
    alerts: [["تنبيه", "#8785d8", "تذبذب طفيف في التدفق النقدي خلال الربع الأخير ضمن الحدود الطبيعية", "Open Banking", "قبل ٩ أيام"]],
    report: "تُظهر بيانات المنشأة استقراراً تشغيلياً قوياً: قوى عاملة ثابتة والتزام منتظم بصرف الرواتب عبر نظام مدد، مع نمو مطّرد في الإيراد المُقرّ لدى هيئة الزكاة والضريبة. درجة الثقة تفوق متوسط القطاع (٦٥)، ولا توجد إشارات خطر جوهرية. يُوصى بالموافقة على التمويل بمخاطرة منخفضة."
  },
  "1010889077": {
    name: "شركة نجمة الخليج التجارية",
    ind: [62, 55, 60, 52, 61],
    alerts: [
      ["تحذير", "#dd9a34", "تأخّر صرف رواتب شهر واحد لجزء من الموظفين", "مدد / WPS", "قبل ٢١ يوماً"],
      ["تنبيه", "#8785d8", "تراجع الإيراد المُقرّ بنسبة ١٢٪ مقارنة بالربع السابق", "ZATCA", "قبل شهر"]
    ],
    report: "ترصد المنصة إشارات ضغط تشغيلي مبكرة: تأخّر في صرف رواتب شهر عبر نظام مدد، مصحوباً بتراجع في الإيراد المُقرّ لدى هيئة الزكاة والضريبة بنحو ١٢٪. القوى العاملة لا تزال مستقرة نسبياً. يُوصى بتمويل جزئي مع مخاطرة متوسطة وإعادة تقييم خلال ستة أشهر."
  },
  "1010233918": {
    name: "مصنع البيان للتعبئة والتغليف",
    ind: [30, 25, 40, 28, 45],
    alerts: [
      ["خطر", "#d1564c", "تسريح ٢٢٪ من الموظفين خلال ربع واحد", "GOSI", "قبل ١١ يوماً"],
      ["خطر", "#d1564c", "تأخّر صرف الرواتب لشهرين متتاليين", "مدد / WPS", "قبل ٦ أيام"],
      ["تحذير", "#dd9a34", "انكماش الإيراد المُقرّ بنسبة ٣١٪ خلال عام", "ZATCA", "قبل شهرين"]
    ],
    report: "تتقاطع عدة إشارات خطر تسبق ظهور التعثّر في القوائم المالية: تقلّص حاد في عدد المشتركين لدى التأمينات الاجتماعية (تسريح ٢٢٪)، وتأخّر صرف الرواتب لشهرين عبر مدد، وانكماش الإيراد المُقرّ بنسبة ٣١٪. درجة الثقة أقل بكثير من متوسط القطاع (٦٥). يُوصى بتأجيل التمويل وإعادة التقييم خلال ثلاثة أشهر."
  }
};

function colorFor(v: number) {
  return v >= 70 ? '#2f9e6b' : v >= 50 ? '#dd9a34' : '#d1564c';
}

function deriveRec(score: number) {
  if (score >= 70) {
    return {
      verdict: ["منشأة سليمة", "#2f9e6b"],
      rec: { v: ["موافقة", "#2f9e6b"], risk: ["منخفضة", "#2f9e6b", "#eaf7f0"], limit: "حتى ٢٫٥ مليون ريال", review: "بعد ١٢ شهراً" }
    };
  } else if (score >= 50) {
    return {
      verdict: ["تحتاج مراقبة", "#dd9a34"],
      rec: { v: ["تمويل جزئي", "#dd9a34"], risk: ["متوسطة", "#dd9a34", "#fbf3e3"], limit: "حتى ٦٠٠ ألف ريال", review: "بعد ٦ أشهر" }
    };
  } else {
    return {
      verdict: ["مخاطرة مرتفعة", "#d1564c"],
      rec: { v: ["تأجيل التمويل", "#d1564c"], risk: ["مرتفعة", "#d1564c", "#faeae8"], limit: "غير موصى به حالياً", review: "بعد ٣ أشهر" }
    };
  }
}

function computeScore(ind: number[], weights: number[]): number {
  const total = weights.reduce((a, b) => a + b, 0);
  if (total === 0) return 0;
  return Math.round(ind.reduce((s, v, i) => s + v * weights[i], 0) / total);
}

/* ─── Animated Gauge ─── */
function AnimatedGauge({ score }: { score: number }) {
  const [displayed, setDisplayed] = useState(0);
  const [dashoffset, setDashoffset] = useState(597);

  useEffect(() => {
    setDisplayed(0);
    setDashoffset(597);
    const t1 = setTimeout(() => {
      setDashoffset(597 - (597 * score) / 100);
      let n = 0;
      const step = Math.max(1, Math.round(score / 38));
      const iv = setInterval(() => {
        n += step;
        if (n >= score) { n = score; clearInterval(iv); }
        setDisplayed(n);
      }, 22);
      return () => clearInterval(iv);
    }, 120);
    return () => clearTimeout(t1);
  }, [score]);

  return (
    <div className="gauge">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r="95" fill="none" stroke="#eef0f5" strokeWidth="18" />
        <circle cx="110" cy="110" r="95" fill="none" stroke={colorFor(score)} strokeWidth="18"
          strokeLinecap="round" strokeDasharray="597" strokeDashoffset={dashoffset}
          style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1), stroke .6s' }}
        />
      </svg>
      <div className="val">
        <div className="num" style={{ color: colorFor(score) }}>{displayed}</div>
        <div className="den">درجة الثقة التشغيلية</div>
      </div>
    </div>
  );
}

/* ─── Sector Bar ─── */
function AnimatedSectorBar({ score }: { score: number }) {
  const [fill, setFill] = useState(0);
  useEffect(() => {
    setFill(0);
    const t = setTimeout(() => setFill(score), 160);
    return () => clearTimeout(t);
  }, [score]);
  return (
    <div className="sectorbar">
      <div className="lbl"><span>مقارنة بمتوسط القطاع</span><span>{score} مقابل {SECTOR}</span></div>
      <div className="track">
        <div className="fill" style={{ width: `${fill}%`, background: colorFor(score) }} />
        <div className="sector" style={{ insetInlineStart: `${SECTOR}%` }} />
      </div>
    </div>
  );
}

/* ─── Indicator bar (no weight slider here — that's in Settings) ─── */
function AnimatedIndicator({ value, label, index, weightPct, isCustom }: {
  value: number; label: string; index: number; weightPct: number; isCustom: boolean;
}) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(0);
    const t = setTimeout(() => setWidth(value), 180 + index * 80);
    return () => clearTimeout(t);
  }, [value, index]);

  return (
    <div className="ind">
      <div className="top">
        <b>{label}</b>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {isCustom && (
            <span className="ind-weight-badge" style={{ background: `${colorFor(value)}18`, color: colorFor(value) }}>
              {weightPct}٪
            </span>
          )}
          <i style={{ color: colorFor(value) }}>{value}</i>
        </div>
      </div>
      <div className="bar">
        <div style={{ background: colorFor(value), width: `${width}%` }} />
      </div>
    </div>
  );
}

/* ─── Alert ─── */
function AlertItem({ alert }: { alert: any }) {
  return (
    <div className="alert">
      <span className="tag" style={{ background: alert[1] }}>{alert[0]}</span>
      <div className="body">
        <div className="txt">{alert[2]}</div>
        <div className="meta"><span>المصدر: <b>{alert[3]}</b></span><span>{alert[4]}</span></div>
      </div>
    </div>
  );
}

/* ─── Settings Page ─── */
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
      <div className="settings-header">
        <div>
          <h2 className="settings-title">أوزان المؤشرات</h2>
          <p className="settings-sub">حدد أهمية كل مؤشر في حساب درجة الثقة — تنعكس التغييرات فوراً على جميع الشركات</p>
        </div>
        {isCustom && (
          <button className="reset-weights-btn" onClick={onReset}>إعادة تعيين</button>
        )}
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

              {/* Visual weight bar */}
              <div className="sc-bar-track">
                <div className="sc-bar-fill" style={{
                  width: `${weights[i]}%`,
                  background: `linear-gradient(90deg, ${color}, ${color}aa)`
                }} />
              </div>

              <div className="sc-slider-row">
                <span className="sc-min">أقل أهمية</span>
                <input
                  type="range" min={0} max={100} value={weights[i]}
                  onChange={e => onChange(i, Number(e.target.value))}
                  className="weight-slider"
                  style={{ '--thumb-color': color } as React.CSSProperties}
                />
                <span className="sc-max">أكثر أهمية</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live preview strip */}
      <div className="settings-preview-card">
        <div className="sp-title">معاينة توزيع الأوزان</div>
        <div className="sp-bar">
          {weights.map((w, i) => {
            if (total === 0) return null;
            const widthPct = (w / total) * 100;
            const colors = ['#8785d8', '#2f9e6b', '#c26b4f', '#dd9a34', '#1e1e42'];
            return (
              <div key={i} className="sp-segment" style={{
                width: `${widthPct}%`,
                background: colors[i],
                opacity: widthPct < 2 ? 0 : 1
              }} title={`${IND[i]}: ${Math.round(widthPct)}٪`} />
            );
          })}
        </div>
        <div className="sp-legend">
          {IND.map((label, i) => {
            const colors = ['#8785d8', '#2f9e6b', '#c26b4f', '#dd9a34', '#1e1e42'];
            return (
              <div key={i} className="sp-leg-item">
                <span className="sp-dot" style={{ background: colors[i] }} />
                <span>{label}</span>
                <span className="sp-leg-pct">{pcts[i]}٪</span>
              </div>
            );
          })}
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
  const [weights, setWeights] = useState<number[]>([...DEFAULT_WEIGHTS]);

  const isCustom = weights.some((w, i) => w !== DEFAULT_WEIGHTS[i]);

  const handleAnalyze = () => {
    let cr = searchInput.trim();
    if (!DB[cr]) cr = "1010574320";
    setActiveCr(cr);
    setSearchInput(cr);
    setTab('dashboard');
  };

  const handleWeightChange = (i: number, v: number) => {
    setWeights(prev => { const n = [...prev]; n[i] = v; return n; });
  };

  const resetWeights = () => setWeights([...DEFAULT_WEIGHTS]);

  const d = DB[activeCr] || DB["1010574320"];
  const computedScore = computeScore(d.ind, weights);
  const { verdict, rec } = deriveRec(computedScore);
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
          <div className="search">
            <input
              placeholder="أدخل رقم السجل التجاري…"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAnalyze()}
            />
            <button className="btn" onClick={handleAnalyze}>تحليل</button>
          </div>
        )}

        {tab === 'settings' && (
          <div className="topbar-title">إعدادات نموذج التقييم</div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {tab === 'dashboard' && (
            <div className="sources">
              <div className="src"><span className="dot"></span>GOSI</div>
              <div className="src"><span className="dot"></span>ZATCA</div>
              <div className="src"><span className="dot"></span>مدد</div>
              <div className="src"><span className="dot"></span>Open Banking</div>
              <div className="src"><span className="dot"></span>SIMAH</div>
            </div>
          )}

          {/* Tab switcher */}
          <div className="tab-switcher">
            <button
              className={`tab-btn ${tab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setTab('dashboard')}
            >
              لوحة التحكم
            </button>
            <button
              className={`tab-btn ${tab === 'settings' ? 'active' : ''}`}
              onClick={() => setTab('settings')}
            >
              الإعدادات
              {isCustom && <span className="tab-dot" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Dashboard ── */}
      {tab === 'dashboard' && (
        <>
          <div className="chips">
            {Object.entries(DB).map(([cr, info]) => {
              const s = computeScore((info as any).ind, weights);
              const v = deriveRec(s).verdict;
              return (
                <button key={cr} className={`chip ${activeCr === cr ? 'active' : ''}`}
                  onClick={() => { setSearchInput(cr); setActiveCr(cr); }}>
                  {(info as any).name} <small>{v[0]}</small>
                </button>
              );
            })}
            {isCustom && <span className="chips-custom-badge">أوزان مخصصة مفعّلة</span>}
          </div>

          <div className="grid" key={activeCr}>
            <div className="col">
              <div className="card gaugecard fade" style={{ animationDelay: '0ms' }}>
                <div className="company-name">{d.name}</div>
                <div className="company-cr">سجل تجاري: {activeCr}</div>
                <AnimatedGauge score={computedScore} />
                <div className="verdict" style={{ color: verdict[1], background: `${verdict[1]}1a` }}>
                  {verdict[0]}
                </div>
                <AnimatedSectorBar score={computedScore} />
              </div>

              <div className="card fade" style={{ animationDelay: '70ms' }}>
                <h2>توصية التمويل</h2>
                <div className="rechead">
                  <div className="rec-verdict" style={{ color: rec.v[1] }}>{rec.v[0]}</div>
                </div>
                <div className="rec-row">
                  <span>مستوى المخاطرة</span>
                  <span><span className="risk-pill" style={{ color: rec.risk[1], background: rec.risk[2] }}>{rec.risk[0]}</span></span>
                </div>
                <div className="rec-row"><span>الحد المقترح</span><span>{rec.limit}</span></div>
                <div className="rec-row"><span>موعد إعادة التقييم</span><span>{rec.review}</span></div>
              </div>
            </div>

            <div className="col">
              <div className="card fade" style={{ animationDelay: '140ms' }}>
                <h2>تحليل المؤشرات</h2>
                <div>
                  {d.ind.map((val: number, i: number) => (
                    <AnimatedIndicator
                      key={`${activeCr}-${i}`}
                      value={val} label={IND[i]} index={i}
                      weightPct={weightPcts[i]} isCustom={isCustom}
                    />
                  ))}
                </div>
                {isCustom && (
                  <div className="ind-custom-note">
                    النسب المعروضة تعكس الأوزان المخصصة ·{' '}
                    <button className="ind-settings-link" onClick={() => setTab('settings')}>
                      تعديل الأوزان
                    </button>
                  </div>
                )}
              </div>

              <div className="card fade" style={{ animationDelay: '210ms' }}>
                <h2>التنبيهات المبكرة</h2>
                <div>{d.alerts.map((a: any, i: number) => <AlertItem key={i} alert={a} />)}</div>
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
