/* UniSense — Edit Profile */
const { useState } = React;

const COUNTRIES = [
  "Malaysia","Singapore","Indonesia","Thailand","Philippines","Vietnam",
  "United Kingdom","Germany","France","Netherlands","Switzerland","Sweden","Ireland",
  "United States","Canada","Australia","New Zealand","Japan","South Korea","China","India",
  "United Arab Emirates","South Africa","Brazil",
];

const FIELDS = [
  "Computer Science","Data Science","Artificial Intelligence","Software Engineering",
  "Mechanical Engineering","Electrical Engineering","Civil Engineering",
  "Business & Management","Finance","Economics","Marketing",
  "Medicine","Public Health","Pharmacy","Nursing",
  "Architecture","Industrial Design","Fine Arts",
  "Psychology","Sociology","Law","International Relations",
  "Mathematics","Physics","Chemistry","Biology","Environmental Science",
];

/* Dual-range budget slider */
function BudgetRange({ min=0, max=60000, step=500, value, onChange }){
  const [lo, hi] = value;
  const pct = v => (v - min) / (max - min) * 100;
  const setLo = v => onChange([Math.min(Number(v), hi - step), hi]);
  const setHi = v => onChange([lo, Math.max(Number(v), lo + step)]);

  return (
    <div>
      <div className="range">
        <div className="track"/>
        <div className="range-fill" style={{left: `${pct(lo)}%`, width: `${pct(hi)-pct(lo)}%`}}/>
        <input type="range" min={min} max={max} step={step} value={lo}
               onChange={e=>setLo(e.target.value)} />
        <input type="range" min={min} max={max} step={step} value={hi}
               onChange={e=>setHi(e.target.value)} />
      </div>
      <div className="range-values">
        <span><span className="min">USD</span> {lo.toLocaleString()}</span>
        <span><span className="min">USD</span> {hi >= max ? `${(max/1000).toFixed(0)}k+` : hi.toLocaleString()}</span>
      </div>
    </div>
  );
}

function App(){
  const [name, setName] = useState("Maya Karunakaran");
  const [country, setCountry] = useState("Malaysia");
  const [field, setField] = useState("Data Science");
  const [degree, setDegree] = useState("Master's");
  const [prefCountry, setPrefCountry] = useState("Malaysia");
  const [budget, setBudget] = useState([2000, 6000]);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState("2 hours ago");

  const handleSave = () => {
    setSaving(true);
    setTimeout(()=>{ setSaving(false); setSavedAt("just now"); }, 1200);
  };

  return (
    <>
      <AppBar current="profile" userName={name}/>

      <div className="page narrow">
        <div className="profile-card">
          {/* Head */}
          <div className="profile-head">
            <div className="avatar-block">
              <div className="avatar lg">MK</div>
              <button className="change" type="button">
                <IconCamera size={11}/> Change…
              </button>
            </div>
            <div className="title">
              <h1>Edit <span style={{fontStyle:"italic", color:"var(--accent)", fontFamily:"var(--serif)"}}>Profile</span></h1>
              <p className="sub">Personalise your discovery and recommendations.</p>
            </div>
          </div>

          {/* Body */}
          <div className="profile-body">

            {/* Account */}
            <div>
              <div className="section-head">
                <h2>Account</h2>
              </div>
              <div className="section-body">
                <div className="field-grid-2">
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <div className="input-wrap">
                      <span className="input-icon"><IconUser/></span>
                      <input id="name" type="text" value={name} onChange={e=>setName(e.target.value)}/>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email address</label>
                    <div className="input-wrap is-disabled">
                      <span className="input-icon"><IconMail/></span>
                      <input id="email" type="email" value="maya.karunakaran@um.edu.my" disabled/>
                    </div>
                    <span className="helper lock"><IconLock size={11}/> Cannot be changed. Verified via SSO.</span>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="country">Country of residence</label>
                  <div className="select-wrap">
                    <span className="input-icon"><IconGlobe/></span>
                    <select id="country" value={country} onChange={e=>setCountry(e.target.value)}>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <span className="chev"><IconChev size={14}/></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <div className="section-head">
                <h2>Preferences</h2>
                <span className="badge">Powers your recs</span>
              </div>
              <div className="section-body">
                <div className="field-grid-2">
                  <div className="field">
                    <label htmlFor="field">Field of study</label>
                    <div className="select-wrap">
                      <span className="input-icon"><IconBook/></span>
                      <select id="field" value={field} onChange={e=>setField(e.target.value)}>
                        {FIELDS.map(f => <option key={f} value={f}>{f}</option>)}
                      </select>
                      <span className="chev"><IconChev size={14}/></span>
                    </div>
                  </div>

                  <div className="field">
                    <label>Degree level</label>
                    <div className="pill-group" role="radiogroup" aria-label="Degree level" style={{alignSelf:"flex-start"}}>
                      {["Bachelor's","Master's","PhD"].map(d => (
                        <button key={d} type="button" role="radio" aria-checked={degree===d}
                                className={degree===d?"is-active":""}
                                onClick={()=>setDegree(d)}>
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="prefCountry">Preferred study country</label>
                  <div className="select-wrap">
                    <span className="input-icon"><IconPin/></span>
                    <select id="prefCountry" value={prefCountry} onChange={e=>setPrefCountry(e.target.value)}>
                      <option>Anywhere</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <span className="chev"><IconChev size={14}/></span>
                  </div>
                </div>

                <div className="field">
                  <label>Budget per year</label>
                  <BudgetRange value={budget} onChange={setBudget} min={0} max={60000} step={500}/>
                  <span className="helper">Tuition in USD. Living costs estimated separately on each programme.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Foot */}
          <div className="profile-foot">
            <div className="save-meta">
              <IconCheckCircle size={13}/> Last saved <b style={{color:"var(--ink-2)", fontWeight:600, marginLeft:3}}>{savedAt}</b>
            </div>
            <button className="btn lg glow" type="button" onClick={handleSave} disabled={saving} style={{minWidth:200}}>
              {saving ? (<><span className="spinner"/> Saving changes…</>) : (<>Save changes <IconArrow/></>)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
