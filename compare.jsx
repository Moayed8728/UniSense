/* UniSense — Comparison */
const { useState } = React;

const A = {
  fit:94,
  title:"MSc Data Science",
  uni:"Universiti Teknologi Malaysia",
  uniShort:"UTM",
  country:"Malaysia",
  initials:"UT",
};
const B = {
  fit:88,
  title:"MSc Applied AI",
  uni:"University of Malaya",
  uniShort:"UM",
  country:"Malaysia",
  initials:"UM",
};

const ROWS = [
  { label:"Degree level",        icon:<IconGrad/>,    a:"Master's (MSc)",          b:"Master's (MSc)",          tie:true },
  { label:"Duration",            icon:<IconClock/>,   a:"1.5 years · 3 sem.",      b:"2 years · 4 sem.",        win:"a" },
  { label:"Tuition / year",      icon:<IconMoney/>,   a:"USD 5,200",               b:"USD 5,800",               win:"a" },
  { label:"Total tuition",       icon:<IconMoney/>,   a:"≈ USD 7,800",             b:"≈ USD 11,600",            win:"a" },
  { label:"Intake periods",      icon:<IconCalendar/>, a:"September · February",   b:"October · March",         tie:true },
  { label:"Minimum requirement", icon:<IconBook/>,    a:"Bachelor's CGPA ≥ 3.0",   b:"Bachelor's CGPA ≥ 3.0",   tie:true },
  { label:"IELTS",               icon:<IconCheckCircle/>, a:"6.0 (no band < 5.5)", b:"6.5 (no band < 6.0)",     win:"a" },
  { label:"Mode of study",       icon:<IconLayer/>,   a:"On-campus + hybrid",      b:"On-campus only",          win:"a" },
  { label:"Scholarship",         icon:<IconStar/>,    a:"MyBrain15, MOHE",         b:"UM Excellence (partial)", tie:false },
  { label:"Capstone / thesis",   icon:<IconBriefcase/>, a:"Industry capstone",     b:"Research thesis",         tie:false },
];

function App(){
  return (
    <>
      <AppBar current="compare"/>

      <main className="page" style={{maxWidth:1240}}>
        <div className="cmp-head">
          <span className="eyebrow">Decision support</span>
          <h1 style={{marginTop:6}}>Compare <span className="accent">Programmes</span></h1>
          <p className="lede">Side-by-side breakdown of two saved programmes with shared signals and key differences highlighted.</p>
        </div>

        <div className="cmp-table-wrap">
          <div className="cmp-scroll">
            <div className="cmp-grid">
              {/* Header row */}
              <div className="cmp-col-head spacer">
                <div style={{fontSize:11.5, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)"}}>
                  Comparing
                </div>
                <div style={{fontFamily:"var(--serif)", fontSize:32, lineHeight:1, marginTop:14, color:"var(--ink)"}}>
                  A <span style={{color:"var(--muted-2)", margin:"0 8px"}}>·</span> B
                </div>
              </div>

              {/* Program A header */}
              <div className="cmp-col-head">
                <div className="fit-badge">
                  <IconSparkle size={13}/> Fit · {A.fit}%
                </div>
                <div className="uni-row">
                  <div className="uni-mark">{A.initials}</div>
                  <div>
                    <h3 className="pname">{A.title}</h3>
                    <div className="uname"><IconBuilding size={12}/> {A.uni} <span className="country"><IconPin size={10}/> {A.country}</span></div>
                  </div>
                </div>
              </div>

              {/* Program B header */}
              <div className="cmp-col-head">
                <div className="fit-badge dim">
                  <IconSparkle size={13}/> Fit · {B.fit}%
                </div>
                <div className="uni-row">
                  <div className="uni-mark" style={{background:"#3a342e"}}>{B.initials}</div>
                  <div>
                    <h3 className="pname">{B.title}</h3>
                    <div className="uname"><IconBuilding size={12}/> {B.uni} <span className="country"><IconPin size={10}/> {B.country}</span></div>
                  </div>
                </div>
              </div>

              {/* Data rows */}
              {ROWS.map((r,i) => (
                <React.Fragment key={i}>
                  <div className="cmp-cell lbl"><span className="ico">{r.icon}</span> {r.label}</div>
                  <div className={`cmp-cell ${r.win==="a"?"win":""}`}><span className="v">{r.a}</span></div>
                  <div className={`cmp-cell ${r.win==="b"?"win":""}`}><span className="v">{r.b}</span></div>
                </React.Fragment>
              ))}

              {/* Actions row */}
              <div className="cmp-actions">
                <div className="left">
                  <button type="button"><IconExternal/> View Details · A</button>
                  <button type="button" className="danger"><IconX/> Remove · A</button>
                  <button type="button" className="danger"><IconX/> Remove · B</button>
                </div>
                <div className="right">
                  <button type="button"><IconPlus/> Add another programme</button>
                  <button type="button" className="primary"><IconPdf/> Export comparison · PDF</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Support Insights */}
        <section className="insights">
          <div className="insights-head">
            <span className="ico"><IconSparkle/></span>
            <h2>Decision Support Insights</h2>
          </div>
          <ul className="insights-list">
            <li className="ok">
              <span className="ic"><IconCheck size={12}/></span>
              <div>
                <div className="label">Shared strength · location</div>
                Both programmes are <b>based in Malaysia</b> with English-taught instruction and a tuition difference of less than USD 1,000/year — geography and language aren't a deciding factor.
              </div>
            </li>
            <li className="ok">
              <span className="ic"><IconCheck size={12}/></span>
              <div>
                <div className="label">Shared strength · entry</div>
                Identical <b>minimum CGPA (3.0)</b> means if you qualify for one, you qualify for both — apply to both as a strategic move.
              </div>
            </li>
            <li className="warn">
              <span className="ic"><IconInfo size={12}/></span>
              <div>
                <div className="label">Key difference · duration &amp; cost</div>
                MSc Data Science (UTM) is <b>6 months shorter and ~USD 3,800 cheaper in total</b>. If you value time-to-market or budget, A is the clear pick. If a research thesis matters for PhD plans, B's 2-year track is worth the trade.
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
