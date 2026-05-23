/* UniSense — Program Details */
const { useState } = React;

const REQS = [
  { b:"GPA / equivalent:", t:"3.0 / 4.0 (or upper second-class honours)." },
  { b:"English proficiency:", t:"IELTS 6.0 overall (no band below 5.5), or TOEFL iBT 80, or equivalent." },
  { b:"Foundation / pre-U:", t:"STPM 3 principals, A-Levels CCC, Australian Matriculation 70%, IB 26 points, or recognised foundation." },
  { b:"Mathematics:", t:"Credit pass at SPM (or equivalent) and Additional Maths recommended." },
  { b:"Application materials:", t:"Personal statement (≤ 500 words), two academic referees, official transcripts." },
  { b:"Interview:", t:"Optional online interview for borderline applications." },
];

function App(){
  const [saved, setSaved] = useState(false);
  const [inCompare, setInCompare] = useState(false);

  return (
    <>
      <AppBar current="discover"/>

      <main className="page">
        <a className="pd-back" href="Discover.html">
          <IconArrowL/> Back to results
        </a>

        {/* Hero */}
        <header className="pd-head">
          <div className="uni-mark">UT</div>
          <div>
            <div style={{fontSize:11.5, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", marginBottom:2}}>
              Bachelor's programme
            </div>
            <h1 className="pd-title">BSc <span style={{fontStyle:"italic", color:"var(--accent)"}}>Computer Science</span></h1>
            <div className="pd-uni">
              <IconBuilding size={15}/> Universiti Teknologi Malaysia
              <span style={{width:3, height:3, borderRadius:"50%", background:"var(--muted-2)"}}/>
              <span className="country"><IconPin size={13}/> Johor Bahru, Malaysia</span>
              <span className="views"><IconEye size={12}/> 3,148 views this month</span>
            </div>

            <div className="pd-meta-chips">
              <span className="chip"><IconCheckCircle size={11}/> Accredited by MQA</span>
              <span className="chip">English-taught</span>
              <span className="chip">On-campus + hybrid</span>
              <span className="chip ok">Scholarship available</span>
            </div>
          </div>

          <div className="pd-actions">
            <button className={`btn-save ${saved?"is-saved":""}`} onClick={()=>setSaved(s=>!s)} style={{padding:"12px 18px"}}>
              <IconHeart filled={saved}/> {saved ? "Saved" : "Save programme"}
            </button>
            <button className={`btn-save ${inCompare?"is-saved":""}`} onClick={()=>setInCompare(s=>!s)} style={{padding:"12px 18px"}}>
              <IconCompare size={14}/> {inCompare ? "In compare" : "Add to compare"}
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="pd-body">
          {/* Main column */}
          <div className="pd-main">
            {/* Programme info */}
            <section className="pd-card">
              <h2>Programme information</h2>
              <div className="info-grid">
                <div className="info"><span className="lbl">Degree level</span><span className="val"><IconGrad/> Bachelor's</span></div>
                <div className="info"><span className="lbl">Field of study</span><span className="val"><IconBook/> Computer Science</span></div>
                <div className="info"><span className="lbl">Duration</span><span className="val"><IconClock/> 4 years · 8 semesters</span></div>
                <div className="info"><span className="lbl">Tuition fee</span><span className="val"><IconMoney/> USD 4,400 – 5,200 / year</span></div>
                <div className="info"><span className="lbl">Intake periods</span><span className="val"><IconCalendar/> September · February</span></div>
                <div className="info"><span className="lbl">Application deadline</span><span className="val"><IconClock/> 15 June · 30 November</span></div>
              </div>
            </section>

            {/* Description */}
            <section className="pd-card">
              <h2>About this programme</h2>
              <p>
                UTM's BSc in Computer Science is a four-year undergraduate programme that builds a deep foundation in
                algorithms, software engineering, computer systems, and applied AI. Students complete an industry-led
                final-year project, plus a 6-month internship with partners including Petronas, Maxis, and Shopee SEA.
                Graduates leave with full eligibility for the Malaysian Board of Engineers' IT track and acceptance into
                Master's programmes worldwide.
              </p>
              <p style={{marginTop:14}}>
                The curriculum is structured around four streams — Intelligent Systems, Software Engineering, Networks &
                Security, and Multimedia &amp; HCI — letting students specialise from Year 2 onwards. Teaching is in English;
                Mandarin and Bahasa Malaysia are offered as electives.
              </p>
            </section>

            {/* Requirements */}
            <section className="pd-card">
              <h2>Admission requirements</h2>
              <ul className="req-list">
                {REQS.map((r,i)=>(
                  <li key={i}>
                    <span><IconCheck size={10}/></span>
                    <span><b>{r.b}</b> {r.t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Source */}
            <section className="pd-card">
              <h2>Official source</h2>
              <p style={{marginBottom:14, fontSize:13.5, color:"var(--muted)"}}>
                All data on this page is cross-checked against the institution's official programme handbook. Last verified 12 May 2026 by UniSense Editorial.
              </p>
              <div className="source-row">
                <span style={{
                  width:42, height:42, borderRadius:11,
                  background:"#22191b", color:"#fff",
                  display:"grid", placeItems:"center", flexShrink:0
                }}><IconLink size={18}/></span>
                <div className="src-meta">
                  <div className="src-label">University handbook</div>
                  <a className="src-url" href="#" target="_blank">
                    utm.my/computing/programmes/bsc-computer-science <IconExternal/>
                  </a>
                </div>
                <span className="verified-badge"><IconShield size={13}/> Verified</span>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="pd-side">
            <section className="pd-card">
              <h2 style={{marginBottom:6}}>At a glance</h2>
              <p style={{fontSize:13, color:"var(--muted)", marginBottom:12}}>UniSense's per-programme signals.</p>
              <div className="side-stats">
                <div className="row"><span className="lbl"><IconStar size={14}/> Student rating</span><span className="val">4.6 / 5</span></div>
                <div className="row"><span className="lbl"><IconCompass size={14}/> Acceptance rate</span><span className="val">34 %</span></div>
                <div className="row"><span className="lbl"><IconBriefcase size={14}/> Graduate employment</span><span className="val">92 %</span></div>
                <div className="row"><span className="lbl"><IconMoney size={14}/> Median starting salary</span><span className="val">RM 4,800 / mo</span></div>
                <div className="row"><span className="lbl"><IconSparkle size={14}/> Fit with your profile</span><span className="val accent">91 %</span></div>
              </div>
            </section>

            <section className="pd-card" style={{background:"linear-gradient(180deg, #22191b 0%, #0c0a08 100%)", color:"#f6f1e9", borderColor:"transparent"}}>
              <h2 style={{color:"#fff"}}>Ready to apply?</h2>
              <p style={{color:"rgba(255,255,255,.75)", fontSize:14, lineHeight:1.55, marginBottom:18}}>
                Generate a tailored application checklist and timeline for this programme.
              </p>
              <button className="btn glow" style={{margin:0, width:"100%"}}>
                Generate checklist <IconArrow size={14}/>
              </button>
              <div style={{
                fontSize:11.5, color:"rgba(255,255,255,.5)",
                marginTop:14, display:"flex", alignItems:"center", gap:6, justifyContent:"center"
              }}>
                <IconShield size={12}/> Free for verified students
              </div>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
