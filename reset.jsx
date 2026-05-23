/* UniSense — Reset password — two steps side by side for documentation */
const { useState, useMemo } = React;

function StepRequest(){
  const [email, setEmail] = useState("maya.k@um.edu.my");
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState(false);
  const err = touched && !/^\S+@\S+\.\S+$/.test(email);

  return (
    <section className="step-card">
      <div className="step-num"><span className="num">1</span> Request reset</div>
      <h2>Forgot your <span style={{fontStyle:"italic", color:"var(--accent)"}}>password</span>?</h2>
      <p className="sub">Enter the email on your UniSense account — we'll send you a secure reset link, valid for 30 minutes.</p>

      <form onSubmit={(e)=>{e.preventDefault(); setTouched(true); if(!err) setSent(true);}}>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <div className={`input-wrap ${err?"has-error":""}`}>
            <span className="input-icon"><IconMail/></span>
            <input id="email" type="email" autoComplete="email"
                   placeholder="you@university.edu"
                   value={email} onChange={e=>setEmail(e.target.value)} onBlur={()=>setTouched(true)}/>
          </div>
          {err && <div className="err"><IconWarn/> Enter a valid email address.</div>}
        </div>

        {sent ? (
          <div style={{
            marginTop:14, padding:"12px 14px",
            background:"rgba(44,141,74,.10)", color:"#1f6634",
            border:"1px solid rgba(44,141,74,.25)",
            borderRadius:11, fontSize:13.5, fontWeight:600,
            display:"flex", alignItems:"flex-start", gap:9
          }}>
            <span style={{flexShrink:0, marginTop:1}}><IconCheckCircle size={16}/></span>
            <span>Link sent. Check <b>{email}</b> — it may take a minute. Also peek inside spam.</span>
          </div>
        ) : null}

        <button className="btn glow" type="submit">
          {sent ? "Resend link" : "Send reset link"} <IconArrow/>
        </button>
      </form>

      <a className="reset-link" href="Login.html">
        <IconArrowL size={13}/> Back to sign in
      </a>
    </section>
  );
}

function StepReset(){
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showP, setShowP] = useState(false);
  const [showC, setShowC] = useState(false);
  const [touched, setTouched] = useState({});
  const s = useMemo(()=>strengthOf(pwd), [pwd]);

  const errs = {};
  if (touched.pwd && pwd.length < 8) errs.pwd = "Use at least 8 characters.";
  if (touched.confirm && confirm !== pwd) errs.confirm = "Passwords don't match.";

  const requirements = [
    { ok: pwd.length >= 8,                                       label: "At least 8 characters" },
    { ok: /[A-Z]/.test(pwd) && /[a-z]/.test(pwd),               label: "Mix of upper & lowercase" },
    { ok: /\d/.test(pwd),                                        label: "At least one number" },
    { ok: /[^A-Za-z0-9]/.test(pwd),                              label: "At least one symbol" },
  ];

  return (
    <section className="step-card">
      <div className="step-num"><span className="num">2</span> Choose a new password</div>
      <h2>Set a new <span style={{fontStyle:"italic", color:"var(--accent)"}}>password</span></h2>
      <p className="sub">Pick something memorable — we'll sign you in right after you save.</p>

      <form onSubmit={(e)=>e.preventDefault()}>
        <div className="field">
          <label htmlFor="np">New password</label>
          <div className={`input-wrap ${errs.pwd?"has-error":""}`}>
            <span className="input-icon"><IconLock/></span>
            <input id="np" type={showP?"text":"password"}
                   placeholder="At least 8 characters"
                   value={pwd} onChange={e=>setPwd(e.target.value)} onBlur={()=>setTouched(s=>({...s,pwd:true}))}/>
            <button type="button" className="eye" onClick={()=>setShowP(v=>!v)} aria-label={showP?"Hide":"Show"}>
              <IconEye off={showP}/>
            </button>
          </div>
          {pwd && (
            <div className={`pw-strength s${s.score}`}>
              <div className="pw-bars"><span/><span/><span/><span/></div>
              <span className="pw-label">{s.label}</span>
            </div>
          )}
          {errs.pwd && <div className="err"><IconWarn/> {errs.pwd}</div>}
        </div>

        <div className="field">
          <label htmlFor="cp">Confirm password</label>
          <div className={`input-wrap ${errs.confirm?"has-error":""}`}>
            <span className="input-icon"><IconLock/></span>
            <input id="cp" type={showC?"text":"password"}
                   placeholder="Repeat your new password"
                   value={confirm} onChange={e=>setConfirm(e.target.value)} onBlur={()=>setTouched(s=>({...s,confirm:true}))}/>
            <button type="button" className="eye" onClick={()=>setShowC(v=>!v)} aria-label={showC?"Hide":"Show"}>
              <IconEye off={showC}/>
            </button>
          </div>
          {errs.confirm && <div className="err"><IconWarn/> {errs.confirm}</div>}
        </div>

        {/* Requirements checklist */}
        <ul style={{listStyle:"none", padding:0, margin:"2px 0 4px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 14px"}}>
          {requirements.map((r,i)=>(
            <li key={i} style={{
              fontSize:12.5,
              color: r.ok ? "#1f6634" : "var(--muted)",
              display:"flex", alignItems:"center", gap:7,
              transition:"color .2s"
            }}>
              <span style={{
                width:16,height:16, borderRadius:"50%",
                background: r.ok ? "rgba(44,141,74,.18)" : "var(--line)",
                color: r.ok ? "#1f6634" : "var(--muted-2)",
                display:"grid", placeItems:"center", flexShrink:0,
                transition:"background .2s"
              }}>
                <IconCheck size={9}/>
              </span>
              {r.label}
            </li>
          ))}
        </ul>

        <button className="btn glow" type="submit" disabled={pwd.length < 8 || pwd !== confirm}>
          Reset password <IconArrow/>
        </button>
      </form>
    </section>
  );
}

function App(){
  return (
    <div className="stage">
      <div className="bg-layer bg-globe"/>
      <div style={{width:"100%"}}>
        {/* Brand header */}
        <div className="reset-shell-brand">
          <span className="mark sm"><IconMark size={18}/></span>
          <span className="wordmark sm">UniSense<em>.</em></span>
        </div>

        {/* Page header */}
        <div className="reset-header">
          <span className="eyebrow">Account recovery</span>
          <h1 style={{fontFamily:"var(--serif)", fontWeight:400}}>Reset your password</h1>
          <p>Two short steps — you'll be back in within a minute.</p>
        </div>

        <div className="reset-row">
          <StepRequest/>

          <div className="reset-connector" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 16h22"/><path d="M19 9l7 7-7 7"/>
            </svg>
          </div>

          <StepReset/>
        </div>

        <div style={{textAlign:"center", marginTop:40}}>
          <a href="Login.html" style={{
            display:"inline-flex", alignItems:"center", gap:8,
            fontSize:13, color:"var(--muted)", textDecoration:"none",
            padding:"8px 14px", borderRadius:8,
            border:"1px solid var(--line)", background:"rgba(255,255,255,.5)"
          }}>
            <IconArrowL size={13}/> Back to sign in
          </a>
        </div>
      </div>
    </div>
  );
}

/* Adjust grid for the connector */
const styleAdj = document.createElement('style');
styleAdj.textContent = `
  .reset-row{ grid-template-columns: 1fr 56px 1fr; }
`;
document.head.appendChild(styleAdj);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
