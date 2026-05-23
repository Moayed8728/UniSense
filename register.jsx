/* UniSense — Create account */
const { useState, useRef, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "background": "globe",
  "accentGlow": true,
  "showTagline": true,
  "showCardCorner": true,
  "showTopbar": true
}/*EDITMODE-END*/;

/* ── Universities (curated dropdown list) ─────────────────── */
const UNIVERSITIES = [
  "ETH Zürich",
  "Imperial College London",
  "Karolinska Institutet",
  "KU Leuven",
  "Leiden University",
  "MIT",
  "National University of Singapore",
  "Peking University",
  "Sciences Po",
  "Stanford University",
  "Technical University of Munich",
  "Tsinghua University",
  "University of Cambridge",
  "University of Cape Town",
  "University of Edinburgh",
  "University of Melbourne",
  "University of Oxford",
  "University of São Paulo",
  "University of Toronto",
  "Yale University",
  "— Other / not listed —",
];

/* ── Icons ────────────────────────────────────────────────── */
const IconMark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="12" cy="12" r="7.5" />
    <ellipse cx="12" cy="12" rx="3.2" ry="7.5" />
    <path d="M4.5 12 H19.5" />
    <circle cx="17.6" cy="8" r="1.7" fill="#C00000" stroke="none" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8.5" r="3.7"/>
    <path d="M4.5 20c1.4-3.5 4.2-5.3 7.5-5.3s6.1 1.8 7.5 5.3"/>
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="2.5"/>
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/>
    <path d="M3 12h18"/>
  </svg>
);

const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15"/>
    <path d="M15 11h3a2 2 0 0 1 2 2v8"/>
    <path d="M8 8h3M8 12h3M8 16h3M18 15h.01M18 18h.01"/>
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/>
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4.5" y="10" width="15" height="10" rx="2.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/>
  </svg>
);

const IconEye = ({off}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {!off ? (<><path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/></>)
      : (<><path d="M3 3l18 18"/><path d="M10.6 6.1A10 10 0 0 1 12 6c6 0 9.5 6 9.5 6a16 16 0 0 1-3 3.6"/><path d="M6.6 7.7C4 9.6 2.5 12 2.5 12s3.5 6 9.5 6c1.3 0 2.6-.3 3.7-.7"/><path d="M14.1 14.1A3 3 0 0 1 9.9 9.9"/></>)}
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5l4.5 4.5L19 7.5"/>
  </svg>
);

const IconArrow = () => (
  <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
  </svg>
);

const IconWarn = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9.5"/><path d="M12 7v6"/><path d="M12 16.5v.5"/>
  </svg>
);

const IconChev = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const IconUpload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 16V5"/><path d="M7.5 9.5L12 5l4.5 4.5"/><path d="M5 17v1.5A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V17"/>
  </svg>
);

const IconFile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>
    <path d="M14 3v5h5"/>
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6L6 18"/>
  </svg>
);

const IconGrad = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 9l9.5-4 9.5 4-9.5 4-9.5-4z"/>
    <path d="M6 10.5v5.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5"/>
  </svg>
);

/* ── Password strength ────────────────────────────────────── */
function strengthOf(p){
  if (!p) return {score:0, label:""};
  let s = 0;
  if (p.length >= 8) s++;
  if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++;
  if (/\d/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p) || p.length >= 14) s++;
  s = Math.max(1, Math.min(4, s));
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  return { score:s, label:labels[s] };
}

/* ── App ──────────────────────────────────────────────────── */
function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [role, setRole] = useState("student"); // 'student' | 'rep'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [uni, setUni] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [agree, setAgree] = useState(false);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const isRep = role === "rep";
  const pwStrength = useMemo(()=>strengthOf(pwd),[pwd]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Please enter your full name.";
    if (!email) e.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "That doesn't look like a valid email.";
    if (!pwd) e.pwd = "Choose a password.";
    else if (pwd.length < 8) e.pwd = "Use at least 8 characters.";
    if (!confirm) e.confirm = "Please confirm your password.";
    else if (confirm !== pwd) e.confirm = "Passwords don't match.";
    if (isRep){
      if (!uni) e.uni = "Select your university.";
      if (!title.trim()) e.title = "Enter your position or title.";
      if (!file) e.file = "Upload a document showing your affiliation.";
    }
    if (!agree) e.agree = "You must agree to the Terms of Service.";
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setTouched({name:true,email:true,pwd:true,confirm:true,uni:true,title:true,file:true,agree:true});
    if (Object.keys(errs).length) return;
    setLoading(true);
    setTimeout(()=> setLoading(false), 1600);
  };

  const onBlur = (k) => setTouched(s => ({...s,[k]:true}));

  const onDrop = (e) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  return (
    <div className="stage">
      <div className={`bg-layer bg-${t.background}`} />

      {t.showTopbar && (
        <div className="topbar">
          <span>© UniSense 2026 · Cambridge · Berlin · Singapore</span>
          <span className="pill"><span className="dot"/> All systems normal</span>
        </div>
      )}

      <main className="card" role="main">
        {t.showCardCorner && (
          <div className="card-corner">
            <span className="dotdot"/> EN
          </div>
        )}

        {/* Brand */}
        <div className="brand">
          <div className="mark" aria-hidden="true"><IconMark/></div>
          <div>
            <div className="wordmark">UniSense<em>.</em></div>
            {t.showTagline && (
              <div className="tagline">Find your programme — Bachelor's, Master's &amp; PhD, worldwide.</div>
            )}
          </div>
        </div>

        <div className="divider-thin"/>

        <h1>Create your <span className="accent">account</span></h1>
        <p className="sub">Join 240,000+ students and 1,800+ institutions on UniSense.</p>

        {/* Role toggle */}
        <div className="seg" role="tablist" aria-label="Account type">
          <div className={`seg-thumb ${isRep ? "right" : ""}`} aria-hidden="true"/>
          <button
            type="button"
            role="tab"
            aria-selected={!isRep}
            className={!isRep ? "is-active" : ""}
            onClick={()=>setRole("student")}
          >
            <IconGrad/> I'm a Student
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isRep}
            className={isRep ? "is-active" : ""}
            onClick={()=>setRole("rep")}
          >
            <IconBuilding/> University Rep
          </button>
        </div>

        <form onSubmit={submit} noValidate>
          {/* Full Name */}
          <div className="field">
            <label htmlFor="name">Full name</label>
            <div className={`input-wrap ${touched.name && errors.name ? "has-error" : ""}`}>
              <span className="input-icon"><IconUser/></span>
              <input id="name" type="text" placeholder="Ada Lovelace" autoComplete="name"
                     value={name} onChange={e=>setName(e.target.value)} onBlur={()=>onBlur('name')} />
            </div>
            {touched.name && errors.name && <div className="err"><IconWarn/> {errors.name}</div>}
          </div>

          {/* Email */}
          <div className="field">
            <label htmlFor="email">Email address</label>
            <div className={`input-wrap ${touched.email && errors.email ? "has-error" : ""}`}>
              <span className="input-icon"><IconMail/></span>
              <input id="email" type="email"
                     placeholder={isRep ? "you@university.edu" : "you@example.com"}
                     autoComplete="email"
                     value={email} onChange={e=>setEmail(e.target.value)} onBlur={()=>onBlur('email')}/>
            </div>
            {touched.email && errors.email && <div className="err"><IconWarn/> {errors.email}</div>}
          </div>

          {/* Password + Confirm */}
          <div className="field-grid-2">
            <div className="field">
              <label htmlFor="pwd">Password</label>
              <div className={`input-wrap ${touched.pwd && errors.pwd ? "has-error" : ""}`}>
                <span className="input-icon"><IconLock/></span>
                <input id="pwd" type={showPwd?"text":"password"} placeholder="At least 8 characters"
                       autoComplete="new-password"
                       value={pwd} onChange={e=>setPwd(e.target.value)} onBlur={()=>onBlur('pwd')}/>
                <button type="button" className="eye" onClick={()=>setShowPwd(v=>!v)}
                        aria-label={showPwd?"Hide password":"Show password"}>
                  <IconEye off={showPwd}/>
                </button>
              </div>
              {pwd && (
                <div className={`pw-strength s${pwStrength.score}`}>
                  <div className="pw-bars"><span/><span/><span/><span/></div>
                  <span className="pw-label">{pwStrength.label}</span>
                </div>
              )}
              {touched.pwd && errors.pwd && <div className="err"><IconWarn/> {errors.pwd}</div>}
            </div>

            <div className="field">
              <label htmlFor="confirm">Confirm</label>
              <div className={`input-wrap ${touched.confirm && errors.confirm ? "has-error" : ""}`}>
                <span className="input-icon"><IconLock/></span>
                <input id="confirm" type={showConfirm?"text":"password"} placeholder="Repeat password"
                       autoComplete="new-password"
                       value={confirm} onChange={e=>setConfirm(e.target.value)} onBlur={()=>onBlur('confirm')}/>
                <button type="button" className="eye" onClick={()=>setShowConfirm(v=>!v)}
                        aria-label={showConfirm?"Hide password":"Show password"}>
                  <IconEye off={showConfirm}/>
                </button>
              </div>
              {touched.confirm && errors.confirm && <div className="err"><IconWarn/> {errors.confirm}</div>}
            </div>
          </div>

          {/* Conditional: University Rep fields */}
          {isRep && (
            <div className="slide-in" style={{display:"flex", flexDirection:"column", gap:14}}>
              {/* University */}
              <div className="field">
                <label htmlFor="uni">University</label>
                <div className={`select-wrap input-wrap ${touched.uni && errors.uni ? "has-error" : ""}`} style={{padding:0,background:"transparent",border:0,boxShadow:"none"}}>
                  <span className="input-icon"><IconBuilding/></span>
                  <select id="uni" required value={uni} onChange={e=>setUni(e.target.value)} onBlur={()=>onBlur('uni')}>
                    <option value="" disabled>Select your institution…</option>
                    {UNIVERSITIES.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                  <span className="chev"><IconChev/></span>
                </div>
                {touched.uni && errors.uni && <div className="err"><IconWarn/> {errors.uni}</div>}
              </div>

              {/* Position / Title */}
              <div className="field">
                <label htmlFor="title">Position / Title</label>
                <div className={`input-wrap ${touched.title && errors.title ? "has-error" : ""}`}>
                  <span className="input-icon"><IconBriefcase/></span>
                  <input id="title" type="text" placeholder="e.g. Admissions Officer, Programme Director"
                         value={title} onChange={e=>setTitle(e.target.value)} onBlur={()=>onBlur('title')}/>
                </div>
                {touched.title && errors.title && <div className="err"><IconWarn/> {errors.title}</div>}
              </div>

              {/* File picker */}
              <div className="field">
                <label>Proof of affiliation</label>
                <label
                  className={`drop ${dragging?"dragging":""} ${file?"has-file":""}`}
                  onDragOver={e=>{e.preventDefault(); setDragging(true);}}
                  onDragLeave={()=>setDragging(false)}
                  onDrop={onDrop}
                >
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png,.webp"
                         onChange={e=> setFile(e.target.files?.[0] || null)}/>
                  <span className="ico">
                    {file ? <IconFile/> : <IconUpload/>}
                  </span>
                  <span className="drop-text">
                    {file ? (
                      <>
                        <span className="t1 filename">{file.name}</span>
                        <span className="t2">{(file.size/1024).toFixed(0)} KB · ready to upload</span>
                      </>
                    ) : (
                      <>
                        <span className="t1">Upload proof of affiliation</span>
                        <span className="t2">Staff ID, offer letter, or LinkedIn screenshot · PDF / PNG / JPG · max 10MB</span>
                      </>
                    )}
                  </span>
                  {file && (
                    <button type="button" className="clear"
                            onClick={(e)=>{e.preventDefault(); e.stopPropagation(); setFile(null);}}
                            aria-label="Remove file">
                      <IconX/>
                    </button>
                  )}
                </label>
                {touched.file && errors.file && <div className="err"><IconWarn/> {errors.file}</div>}
              </div>
            </div>
          )}

          {/* Terms */}
          <label className={`check terms ${touched.agree && errors.agree ? "has-error" : ""}`}>
            <span className="box-wrap">
              <input type="checkbox" checked={agree} onChange={e=>{ setAgree(e.target.checked); onBlur('agree');}}/>
              <span className="box"><IconCheck/></span>
            </span>
            <span>
              I agree to UniSense's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>{isRep && <>, and confirm I'm authorised to represent my institution</>}.
            </span>
          </label>
          {touched.agree && errors.agree && <div className="err" style={{marginTop:0}}><IconWarn/> {errors.agree}</div>}

          <button className={`btn ${t.accentGlow ? "glow" : ""}`} type="submit" disabled={loading}>
            {loading ? (<><span className="spinner"/> Creating your account…</>)
                     : (<>Create account <IconArrow/></>)}
          </button>
        </form>

        <div className="register">
          Already have an account?<a href="Login.html">Sign in</a>
        </div>
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Background"/>
        <TweakRadio label="Style" value={t.background}
          options={[
            {value:"plain",label:"Plain"},
            {value:"dots", label:"Dots"},
            {value:"globe", label:"Globe"},
            {value:"glow", label:"Glow"},
          ]}
          onChange={v => setTweak('background', v)} />
        <TweakSection label="Card"/>
        <TweakToggle label="Show tagline"      value={t.showTagline}    onChange={v=>setTweak('showTagline',v)}/>
        <TweakToggle label="Corner badge (EN)" value={t.showCardCorner} onChange={v=>setTweak('showCardCorner',v)}/>
        <TweakToggle label="Top status bar"    value={t.showTopbar}     onChange={v=>setTweak('showTopbar',v)}/>
        <TweakSection label="Button"/>
        <TweakToggle label="Soft glow on button" value={t.accentGlow} onChange={v=>setTweak('accentGlow',v)}/>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
