import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const IND = [
  "استقرار القوى العاملة",
  "الالتزام بصرف الرواتب",
  "صحة الإيراد الفعلي",
  "صحة التدفق النقدي",
  "السجل الائتماني"
];

const DEFAULT_WEIGHTS = [20, 20, 20, 20, 20]; // equal by default
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

/** Derive verdict + recommendation from a computed score */
function deriveRec(score: number) {
  if (score >= 70) {
    return {
      verdict: ["منشأة سليمة", "#2f9e6b"],
      rec: {
        v: ["موافقة", "#2f9e6b"],
        risk: ["منخفضة", "#2f9e6b", "#eaf7f0"],
        limit: "حتى ٢٫٥ مليون ريال",
        review: "بعد ١٢ شهراً"
      }
    };
  } else if (score >= 50) {
    return {
      verdict: ["تحتاج مراقبة", "#dd9a34"],
      rec: {
        v: ["تمويل جزئي", "#dd9a34"],
        risk: ["متوسطة", "#dd9a34", "#fbf3e3"],
        limit: "حتى ٦٠٠ ألف ريال",
        review: "بعد ٦ أشهر"
      }
    };
  } else {
    return {
      verdict: ["مخاطرة مرتفعة", "#d1564c"],
      rec: {
        v: ["تأجيل التمويل", "#d1564c"],
        risk: ["مرتفعة", "#d1564c", "#faeae8"],
        limit: "غير موصى به حالياً",
        review: "بعد ٣ أشهر"
      }
    };
  }
}

/** Weighted average of ind values given raw weight array */
function computeScore(ind: number[], weights: number[]): number {
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  if (totalWeight === 0) return 0;
  const weighted = ind.reduce((sum, val, i) => sum + val * weights[i], 0);
  return Math.round(weighted / totalWeight);
}

function AnimatedGauge({ score }: { score: number }) {
  const [displayedScore, setDisplayedScore] = useState(0);
  const [dashoffset, setDashoffset] = useState(597);

  useEffect(() => {
    setDisplayedScore(0);
    setDashoffset(597);
    const timeout1 = setTimeout(() => {
      setDashoffset(597 - (597 * score) / 100);
      let n = 0;
      const step = Math.max(1, Math.round(score / 38));
      const t = setInterval(() => {
        n += step;
        if (n >= score) { n = score; clearInterval(t); }
        setDisplayedScore(n);
      }, 22);
      return () => clearInterval(t);
    }, 120);
    return () => clearTimeout(timeout1);
  }, [score]);

  return (
    <div className="gauge">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r="95" fill="none" stroke="#eef0f5" strokeWidth="18" />
        <circle
          cx="110" cy="110" r="95" fill="none" stroke={colorFor(score)} strokeWidth="18"
          strokeLinecap="round" strokeDasharray="597" strokeDashoffset={dashoffset}
          style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1), stroke .6s' }}
        />
      </svg>
      <div className="val">
        <div className="num" style={{ color: colorFor(score) }}>{displayedScore}</div>
        <div className="den">درجة الثقة التشغيلية</div>
      </div>
    </div>
  );
}

function AnimatedSectorBar({ score }: { score: number }) {
  const [fillWidth, setFillWidth] = useState(0);
  useEffect(() => {
    setFillWidth(0);
    const t = setTimeout(() => setFillWidth(score), 160);
    return () => clearTimeout(t);
  }, [score]);

  return (
    <div className="sectorbar">
      <div className="lbl">
        <span>مقارنة بمتوسط القطاع</span>
        <span>{score} مقابل {SECTOR}</span>
      </div>
      <div className="track">
        <div className="fill" style={{ width: `${fillWidth}%`, background: colorFor(score) }}></div>
        <div className="sector" style={{ insetInlineStart: `${SECTOR}%` }}></div>
      </div>
    </div>
  );
}

function AnimatedIndicator({
  value, label, index, weight, onWeightChange, weightPct
}: {
  value: number;
  label: string;
  index: number;
  weight: number;
  onWeightChange: (index: number, val: number) => void;
  weightPct: number;
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
        <i style={{ color: colorFor(value) }}>{value}</i>
      </div>
      <div className="bar">
        <div style={{ background: colorFor(value), width: `${width}%` }}></div>
      </div>
      {/* Weight control row */}
      <div className="weight-row">
        <span className="weight-label">الأهمية</span>
        <div className="weight-slider-wrap">
          <input
            type="range"
            min={0}
            max={100}
            value={weight}
            onChange={(e) => onWeightChange(index, Number(e.target.value))}
            className="weight-slider"
            style={{ '--thumb-color': colorFor(value) } as React.CSSProperties}
          />
        </div>
        <span className="weight-pct" style={{ color: colorFor(value) }}>
          {weightPct}٪
        </span>
      </div>
    </div>
  );
}

function AlertItem({ alert }: { alert: any }) {
  return (
    <div className="alert">
      <span className="tag" style={{ background: alert[1] }}>{alert[0]}</span>
      <div className="body">
        <div className="txt">{alert[2]}</div>
        <div className="meta">
          <span>المصدر: <b>{alert[3]}</b></span>
          <span>{alert[4]}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [searchInput, setSearchInput] = useState('1010574320');
  const [activeCr, setActiveCr] = useState('1010574320');
  const [weights, setWeights] = useState<number[]>([...DEFAULT_WEIGHTS]);
  const isCustomWeights = weights.some((w, i) => w !== DEFAULT_WEIGHTS[i]);

  const handleAnalyze = () => {
    let targetCr = searchInput.trim();
    if (!DB[targetCr]) targetCr = "1010574320";
    setActiveCr(targetCr);
    setSearchInput(targetCr);
  };

  const handleChipClick = (cr: string) => {
    setSearchInput(cr);
    setActiveCr(cr);
  };

  const handleWeightChange = (index: number, val: number) => {
    setWeights(prev => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  };

  const resetWeights = () => setWeights([...DEFAULT_WEIGHTS]);

  const d = DB[activeCr] || DB["1010574320"];
  const totalWeight = weights.reduce((a, b) => a + b, 0);

  // Live weighted score
  const computedScore = computeScore(d.ind, weights);
  const { verdict, rec } = deriveRec(computedScore);

  // Weight percentages for display (each indicator's share of total)
  const weightPcts = weights.map(w =>
    totalWeight === 0 ? 0 : Math.round((w / totalWeight) * 100)
  );

  return (
    <div className="wrap">
      <div className="topbar">
        <div className="brand">
          <div className="mark">م</div>
          <div><h1>مِحَك</h1><span>TRUSTLENS</span></div>
        </div>
        <div className="search">
          <input
            placeholder="أدخل رقم السجل التجاري…"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
          />
          <button className="btn" onClick={handleAnalyze}>تحليل</button>
        </div>
        <div className="sources">
          <div className="src"><span className="dot"></span>GOSI</div>
          <div className="src"><span className="dot"></span>ZATCA</div>
          <div className="src"><span className="dot"></span>مدد</div>
          <div className="src"><span className="dot"></span>Open Banking</div>
          <div className="src"><span className="dot"></span>SIMAH</div>
        </div>
      </div>

      <div className="chips">
        {Object.entries(DB).map(([cr, info]) => (
          <button
            key={cr}
            className={`chip ${activeCr === cr ? 'active' : ''}`}
            onClick={() => handleChipClick(cr)}
          >
            {info.name} <small>{deriveRec(computeScore(info.ind, weights)).verdict[0]}</small>
          </button>
        ))}
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
            {isCustomWeights && (
              <div className="custom-weights-badge">أوزان مخصصة</div>
            )}
            <AnimatedSectorBar score={computedScore} />
          </div>

          <div className="card fade" style={{ animationDelay: '70ms' }}>
            <h2>توصية التمويل</h2>
            <div className="rechead">
              <div className="rec-verdict" style={{ color: rec.v[1] }}>{rec.v[0]}</div>
            </div>
            <div className="rec-row">
              <span>مستوى المخاطرة</span>
              <span>
                <span className="risk-pill" style={{ color: rec.risk[1], background: rec.risk[2] }}>
                  {rec.risk[0]}
                </span>
              </span>
            </div>
            <div className="rec-row">
              <span>الحد المقترح</span>
              <span>{rec.limit}</span>
            </div>
            <div className="rec-row">
              <span>موعد إعادة التقييم</span>
              <span>{rec.review}</span>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card fade" style={{ animationDelay: '140ms' }}>
            <div className="ind-header">
              <h2>تحليل المؤشرات</h2>
              {isCustomWeights && (
                <button className="reset-weights-btn" onClick={resetWeights}>
                  إعادة تعيين الأوزان
                </button>
              )}
            </div>
            <div className="weights-hint">اسحب شريط الأهمية لكل مؤشر — تتحدث الدرجة فوراً</div>
            <div>
              {d.ind.map((val: number, i: number) => (
                <AnimatedIndicator
                  key={`${activeCr}-${i}`}
                  value={val}
                  label={IND[i]}
                  index={i}
                  weight={weights[i]}
                  onWeightChange={handleWeightChange}
                  weightPct={weightPcts[i]}
                />
              ))}
            </div>
          </div>

          <div className="card fade" style={{ animationDelay: '210ms' }}>
            <h2>التنبيهات المبكرة</h2>
            <div>
              {d.alerts.map((a: any, i: number) => (
                <AlertItem key={i} alert={a} />
              ))}
            </div>
          </div>

          <div className="card report fade" style={{ animationDelay: '280ms' }}>
            <h2 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>التقرير الذكي</span>
              <span className="ai">مُولّد بالذكاء الاصطناعي</span>
            </h2>
            <div className="body">{d.report}</div>
            <div className="sig">
              صيغ آلياً من بيانات حكومية موثّقة · {new Date().toLocaleDateString('ar-SA')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
