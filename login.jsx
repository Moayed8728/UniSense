/* UniSense — Sign in page */
const { useState, useRef, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "background": "globe",
  "showSSO": false,
  "accentGlow": true,
  "showTagline": true,
  "showCardCorner": true,
  "showTopbar": true
}/*EDITMODE-END*/;

/* ── Icons ────────────────────────────────────────────────── */
const IconMark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="12" cy="12" r="7.5" />
    <ellipse cx="12" cy="12" rx="3.2" ry="7.5" />
    <path d="M4.5 12 H19.5" />
    <circle cx="17.6" cy="8" r="1.7" fill="#C00000" stroke="none" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2.5"/>
    <path d="M3.5 7l8.5 6 8.5-6"/>
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4.5" y="10" width="15" height="10" rx="2.5"/>
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10"/>
  </svg>
);

const IconEye = ({off}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {!off && (<>
      <path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z"/>
      <circle cx="12" cy="12" r="2.8"/>
    </>)}
    {off && (<>
      <path d="M3 3l18 18"/>
      <path d="M10.6 6.1A10 10 0 0 1 12 6c6 0 9.5 6 9.5 6a16 16 0 0 1-3 3.6"/>
      <path d="M6.6 7.7C4 9.6 2.5 12 2.5 12s3.5 6 9.5 6c1.3 0 2.6-.3 3.7-.7"/>
      <path d="M14.1 14.1A3 3 0 0 1 9.9 9.9"/>
    </>)}
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

const IconGoogle = () => (
  <svg viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.6c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3.1-4.5 3.1-7.7z"/>
    <path fill="#34A853" d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7C4.4 19.8 7.9 22 12 22z"/>
    <path fill="#FBBC05" d="M6.2 13.6c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.2H2.7C2 8.6 1.6 10.2 1.6 11.8s.4 3.2 1.1 4.6l3.5-2.8z"/>
    <path fill="#EA4335" d="M12 5.6c1.5 0 2.9.5 4 1.5l3-3C17.2 2.5 14.8 1.6 12 1.6 7.9 1.6 4.4 3.8 2.7 7.2l3.5 2.7C7 7.4 9.3 5.6 12 5.6z"/>
  </svg>
);

const IconSSO = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7l8-3 8 3v6c0 4-3.4 6.8-8 8-4.6-1.2-8-4-8-8V7z"/>
    <path d="M9 12.5l2 2 4.5-4.5"/>
  </svg>
);

/* ── App ──────────────────────────────────────────────────── */
function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!email) errs.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "That doesn't look like a valid email.";
    if (!pwd) errs.pwd = "Enter your password.";
    setErrors(errs);
    setTouched({email:true, pwd:true});
    if (Object.keys(errs).length) return;
    setLoading(true);
    setTimeout(()=>{ setLoading(false); }, 1400);
  };

  const onBlur = (k) => setTouched(s => ({...s,[k]:true}));

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
          <div className="mark" aria-hidden="true">
            <IconMark/>
          </div>
          <div>
            <div className="wordmark">UniSense<em>.</em></div>
            {t.showTagline && (
              <div className="tagline">Find your programme — Bachelor's, Master's &amp; PhD, worldwide.</div>
            )}
          </div>
        </div>

        <div className="divider-thin"/>

        <h1>Sign in to <span className="accent">UniSense</span></h1>
        <p className="sub">Welcome back. Continue exploring 38,500+ programmes across 92 countries.</p>

        <form onSubmit={submit} noValidate>
          {/* Email */}
          <div className="field">
            <label htmlFor="email">Email address</label>
            <div className={`input-wrap ${touched.email && errors.email ? "has-error" : ""}`}>
              <span className="input-icon"><IconMail/></span>
              <input
                id="email"
                type="email"
                placeholder="you@university.edu"
                autoComplete="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                onBlur={()=>onBlur('email')}
              />
            </div>
            {touched.email && errors.email && (
              <div className="err"><IconWarn/> {errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="field">
            <label htmlFor="pwd">Password</label>
            <div className={`input-wrap ${touched.pwd && errors.pwd ? "has-error" : ""}`}>
              <span className="input-icon"><IconLock/></span>
              <input
                id="pwd"
                type={showPwd ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                value={pwd}
                onChange={e=>setPwd(e.target.value)}
                onBlur={()=>onBlur('pwd')}
              />
              <button
                type="button"
                className="eye"
                onClick={()=>setShowPwd(v=>!v)}
                aria-label={showPwd ? "Hide password" : "Show password"}
                title={showPwd ? "Hide" : "Show"}
              >
                <IconEye off={showPwd}/>
              </button>
            </div>
            {touched.pwd && errors.pwd && (
              <div className="err"><IconWarn/> {errors.pwd}</div>
            )}
          </div>

          {/* Row */}
          <div className="row">
            <label className="check">
              <input
                type="checkbox"
                checked={remember}
                onChange={e=>setRemember(e.target.checked)}
              />
              <span className="box"><IconCheck/></span>
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot">Forgot password?</a>
          </div>

          <button className={`btn ${t.accentGlow ? "glow" : ""}`} type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"/> Signing you in…
              </>
            ) : (
              <>
                Sign in <IconArrow/>
              </>
            )}
          </button>

          {t.showSSO && (
            <>
              <div className="sso-divider">or continue with</div>
              <div className="sso">
                <button type="button"><IconGoogle/> Google</button>
                <button type="button"><IconSSO/> University SSO</button>
              </div>
            </>
          )}
        </form>

        <div className="register">
          Don't have an account?<a href="#">Register</a>
        </div>
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Background"/>
        <TweakRadio
          label="Style"
          value={t.background}
          options={[
            {value:"plain",label:"Plain"},
            {value:"dots", label:"Dots"},
            {value:"globe", label:"Globe"},
            {value:"glow", label:"Glow"},
          ]}
          onChange={v => setTweak('background', v)}
        />
        <TweakSection label="Card"/>
        <TweakToggle label="Show tagline"      value={t.showTagline}    onChange={v=>setTweak('showTagline',v)}/>
        <TweakToggle label="Corner badge (EN)" value={t.showCardCorner} onChange={v=>setTweak('showCardCorner',v)}/>
        <TweakToggle label="Top status bar"    value={t.showTopbar}     onChange={v=>setTweak('showTopbar',v)}/>
        <TweakSection label="Sign-in"/>
        <TweakToggle label="Soft glow on button" value={t.accentGlow} onChange={v=>setTweak('accentGlow',v)}/>
        <TweakToggle label="Show SSO options"    value={t.showSSO}    onChange={v=>setTweak('showSSO',v)}/>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
