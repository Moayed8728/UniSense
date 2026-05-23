/* UniSense — Admin Review Dashboard */
const { useState } = React;

const SUBS = [
  {
    id:"sub1", num:"01",
    title:"MSc Cybersecurity & Digital Forensics",
    uni:"Universiti Sains Malaysia",
    initials:"US",
    country:"Malaysia",
    submitter:"a.tan@usm.edu.my",
    submitterRole:"Programme Director",
    submitted:"3 hours ago",
    submittedDate:"23 May 2026 · 08:14",
    sourceStatus:"ok",
    sourceLabel:"Both sources verified",
    summary:"Two-year, full-time Master's covering offensive security, digital forensics, secure software engineering, and information governance. English-taught. September intake only.",
    links:[
      { lbl:"Programme handbook (PDF)", url:"usm.edu.my/computing/postgrad/cybersec-handbook-2026.pdf",     verified:true },
      { lbl:"Tuition & fee schedule",   url:"usm.edu.my/registrar/fees/2026/cybersec",                     verified:true },
    ],
    active:true,
  },
  {
    id:"sub2", num:"02",
    title:"BSc (Hons) Sustainable Architecture",
    uni:"Taylor's University",
    initials:"TU",
    country:"Malaysia",
    submitter:"m.lim@taylors.edu.my",
    submittedDate:"23 May 2026 · 06:42",
    submitted:"5 hours ago",
    sourceStatus:"warn",
    sourceLabel:"1 of 2 sources need re-fetch",
  },
  {
    id:"sub3", num:"03",
    title:"MBA · Digital Business",
    uni:"Asia Pacific University",
    initials:"AP",
    country:"Malaysia",
    submitter:"r.kumar@apu.edu.my",
    submittedDate:"22 May 2026 · 16:08",
    submitted:"yesterday",
    sourceStatus:"ok",
    sourceLabel:"Both sources verified",
  },
  {
    id:"sub4", num:"04",
    title:"MSc Robotics & Mechatronics",
    uni:"Universiti Tunku Abdul Rahman",
    initials:"UR",
    country:"Malaysia",
    submitter:"s.fong@utar.edu.my",
    submittedDate:"22 May 2026 · 11:22",
    submitted:"yesterday",
    sourceStatus:"fail",
    sourceLabel:"Source 404 — needs resubmission",
  },
  {
    id:"sub5", num:"05",
    title:"MA in Applied Linguistics",
    uni:"Universiti Putra Malaysia",
    initials:"UP",
    country:"Malaysia",
    submitter:"j.osman@upm.edu.my",
    submittedDate:"21 May 2026 · 09:15",
    submitted:"2 days ago",
    sourceStatus:"ok",
    sourceLabel:"Both sources verified",
  },
];

function App(){
  const [activeId, setActiveId] = useState("sub1");
  const [decision, setDecision] = useState("approve");
  const [reason, setReason] = useState("");

  const active = SUBS.find(s => s.id === activeId) || SUBS[0];

  return (
    <>
      <AppBar current="queue" role="admin" userName="Lila Foster"/>

      <main className="page" style={{maxWidth:1320}}>
        {/* Header */}
        <div className="adm-head">
          <div>
            <span className="eyebrow">Editorial · Review</span>
            <h1 style={{marginTop:6}}>Review <span className="accent">queue</span></h1>
            <p className="sub">Programme submissions awaiting editorial verification.</p>
          </div>
          <div className="meta">
            <span>Reviewer: <b>Lila Foster</b></span>
            <span>Shift: <b>UTC+8 · 09:00 – 17:00</b></span>
            <span>Avg. review time: <b>4 min 12 s</b></span>
          </div>
        </div>

        {/* KPI tiles */}
        <div className="kpis">
          <div className="kpi pending">
            <div className="lbl"><span className="ic"><IconClock/></span> Pending</div>
            <div className="val">14</div>
            <div className="delta"><IconChevR size={11} style={{transform:"rotate(-90deg)"}}/> 3 new today <span className="grey">since 06:00</span></div>
          </div>
          <div className="kpi approved">
            <div className="lbl"><span className="ic"><IconCheckCircle/></span> Approved (30 d)</div>
            <div className="val">82</div>
            <div className="delta"><IconChevR size={11} style={{transform:"rotate(-90deg)"}}/> +12 % vs prior 30 d</div>
          </div>
          <div className="kpi rejected">
            <div className="lbl"><span className="ic"><IconX/></span> Rejected (30 d)</div>
            <div className="val">9</div>
            <div className="delta" style={{color:"var(--muted)"}}>9.9 % rejection rate</div>
          </div>
        </div>

        {/* Split */}
        <div className="adm-split">
          {/* Submissions list */}
          <div>
            <h2 style={{fontFamily:"var(--serif)", fontWeight:400, fontSize:22, margin:"0 0 14px", letterSpacing:"-0.01em"}}>
              Pending submissions <span style={{color:"var(--muted)", fontFamily:"var(--sans)", fontSize:14, fontWeight:600}}>· {SUBS.length}</span>
            </h2>
            <div className="results" style={{maxWidth:"100%"}}>
              {SUBS.map(s => (
                <div key={s.id} className={`sub-card ${s.id===activeId?"active":""}`} onClick={()=>setActiveId(s.id)}>
                  <div className="badge-num">{s.num}</div>
                  <div className="body">
                    <h3 className="title">{s.title}</h3>
                    <div className="meta">
                      <IconBuilding/> <b>{s.uni}</b>
                      <span style={{width:3, height:3, borderRadius:"50%", background:"var(--muted-2)"}}/>
                      <IconMail/> {s.submitter || "—"}
                      <span style={{width:3, height:3, borderRadius:"50%", background:"var(--muted-2)"}}/>
                      <IconClock/> {s.submitted}
                    </div>
                    <div className="src-row">
                      <span className={`src-status ${s.sourceStatus}`}>
                        {s.sourceStatus==="ok"   && <><IconCheck size={9}/> Sources verified</>}
                        {s.sourceStatus==="warn" && <><IconWarn size={10}/> Re-fetch needed</>}
                        {s.sourceStatus==="fail" && <><IconX size={9}/> Source 404</>}
                      </span>
                      <span style={{color:"var(--muted)", fontSize:11.5}}>{s.sourceLabel}</span>
                    </div>
                  </div>
                  <button className="review" type="button">
                    Review <IconArrow size={11}/>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Review detail */}
          <div className="rev-card">
            <div className="rev-head">
              <div className="ttl-row">
                <div className="um">{active.initials}</div>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:10.5, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"var(--accent)"}}>
                    Submission · {active.num}
                  </div>
                  <h2>{active.title}</h2>
                  <div className="um-name">
                    <IconBuilding/> {active.uni}
                    <span className="dot"/>
                    <IconPin/> {active.country}
                    <span className="dot"/>
                    <IconMail/> {active.submitter}
                    <span className="dot"/>
                    <IconClock/> Submitted {active.submittedDate}
                  </div>
                </div>
              </div>
              <div className="rev-summary"><p>{active.summary || "Summary not yet generated. Click 'Generate summary' or open the source documents to review manually."}</p></div>
            </div>

            <div className="rev-section">
              <h3>Source documents · {active.links?.length || 0}</h3>
              {(active.links || []).map((l,i)=>(
                <div key={i} className="src-link-card">
                  <span className="lkico"><IconLink/></span>
                  <div className="lk-meta">
                    <div className="lk-lbl">{l.lbl}</div>
                    <div className="lk-url">{l.url}</div>
                  </div>
                  <div className="lk-actions">
                    <button type="button"><IconOpen/> Open</button>
                    <button type="button" className="verify"><IconCheck size={10}/> Verified</button>
                  </div>
                </div>
              ))}
              {!active.links && (
                <div style={{padding:"20px", background:"#fbf8f3", border:"1px dashed var(--line-2)", borderRadius:11, textAlign:"center", color:"var(--muted)", fontSize:13}}>
                  No sources attached yet.
                </div>
              )}
            </div>

            <div className="rev-section">
              <h3>Decision</h3>
              <div className="decision">
                <div className="decision-row">
                  <label className={`decision-card approve ${decision==="approve"?"selected":""}`} onClick={()=>setDecision("approve")}>
                    <span className="radio"/>
                    <div className="body">
                      <div className="ttl"><IconCheckCircle/> Approve &amp; publish</div>
                      <div className="ds">Programme meets accuracy & accreditation standards.</div>
                    </div>
                  </label>
                  <label className={`decision-card reject ${decision==="reject"?"selected":""}`} onClick={()=>setDecision("reject")}>
                    <span className="radio"/>
                    <div className="body">
                      <div className="ttl"><IconX/> Reject with reason</div>
                      <div className="ds">Send back to submitter with a note.</div>
                    </div>
                  </label>
                </div>

                <div className={`reason ${decision==="reject"?"shown":""}`}>
                  <textarea
                    placeholder="Explain what needs to change — tuition figures didn't match the official handbook; intake periods missing; etc."
                    value={reason}
                    onChange={e=>setReason(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="rev-foot">
              <span style={{fontSize:12, color:"var(--muted)"}}>
                Decision is final. Submitter is notified via email.
              </span>
              <span style={{flex:1}}/>
              <button className="ghost-btn" type="button">Skip</button>
              <button className="btn glow" type="button" style={{margin:0, padding:"12px 22px", fontSize:13.5}}>
                Submit review <IconArrow size={13}/>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
