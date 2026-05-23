/* UniSense — Recommendations */
const { useState } = React;

const CRITERIA = [
  { label:"Master's",          icon:<IconGrad size={12}/> },
  { label:"Data Science",      icon:<IconBook size={12}/> },
  { label:"Malaysia",          icon:<IconPin size={12}/> },
  { label:"Under USD 6,000/yr", icon:<IconMoney size={12}/> },
];

function App(){
  const [saved, setSaved] = useState(new Set(["p1"]));
  const [compare, setCompare] = useState(new Set(["p1","p2"]));

  const toggle = (set, setter, id) => {
    const next = new Set(set);
    next.has(id) ? next.delete(id) : next.add(id);
    setter(next);
  };

  // Ranked recommendations: pick four data-science / Malaysia programmes
  const ranked = ["p1","p2","p3","p4"].map(id => PROGRAMMES.find(p => p.id === id));

  return (
    <>
      <AppBar current="recommendations"/>

      <main className="page">
        <div className="rec-head">
          <div>
            <span className="eyebrow">Tailored for you</span>
            <h1 style={{marginTop:6}}>Your <span className="accent">Recommendations</span></h1>
            <p className="lede">Ranked by fit against your saved criteria. We re-score these whenever you update your profile.</p>
          </div>
          <button className="regen" type="button">
            <IconSparkle/> Regenerate
          </button>
        </div>

        {/* Criteria strip */}
        <div className="criteria-strip">
          <span className="label">Active criteria</span>
          {CRITERIA.map(c => (
            <span key={c.label} className="criteria-chip">{c.icon} {c.label}</span>
          ))}
          <button className="criteria-edit" type="button">
            <IconEdit size={11}/> Edit
          </button>
        </div>

        {/* Ranked list */}
        <div className="results">
          {ranked.map((p, i) => (
            <ProgrammeCard
              key={p.id}
              p={p}
              rank={i + 1}
              saved={saved.has(p.id)}
              onSave={()=>toggle(saved, setSaved, p.id)}
              onCompare={()=>toggle(compare, setCompare, p.id)}
              showWhy
              showFit
            />
          ))}
        </div>

        {/* Footer compare bar */}
        {compare.size > 0 && (
          <div style={{
            position:"sticky", bottom:24, marginTop:32, zIndex:5,
            maxWidth:1080, margin:"32px auto 0",
            background:"#22191b", color:"#f6f1e9",
            border:"1px solid rgba(255,255,255,.08)",
            borderRadius:14,
            padding:"14px 20px",
            display:"flex", alignItems:"center", gap:16,
            boxShadow: "0 18px 38px -16px rgba(25,21,18,.6)",
          }}>
            <IconCompare size={16}/>
            <span style={{fontSize:13.5, fontWeight:500}}>
              <b>{compare.size}</b> programme{compare.size===1?"":"s"} ready to compare
            </span>
            <span style={{flex:1}}/>
            <a href="Compare.html" className="btn glow" style={{margin:0, padding:"10px 18px", fontSize:13.5}}>
              Compare now <IconArrow size={13}/>
            </a>
          </div>
        )}
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
