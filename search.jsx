/* UniSense — Smart search results */
const { useState } = React;

const RELATED = [
  { term:"Software Engineering",  count:312 },
  { term:"Computer Science",      count:518 },
  { term:"Software Systems",      count:88 },
  { term:"Information Technology", count:204 },
  { term:"Computer Engineering",  count:142 },
  { term:"Embedded Software",     count:36 },
];

function App(){
  const [query, setQuery] = useState("software");
  const [saved, setSaved] = useState(new Set());

  const toggleSave = (id) => {
    const next = new Set(saved);
    next.has(id) ? next.delete(id) : next.add(id);
    setSaved(next);
  };

  // Smart search shows software-engineering programmes
  const results = PROGRAMMES.filter(p => p.id === "p5" || p.id === "p6");

  return (
    <>
      <AppBar current="discover"/>

      <main className="page">
        {/* Hero search */}
        <div style={{textAlign:"center", padding:"24px 0 8px"}}>
          <span className="eyebrow">Smart search</span>
        </div>

        <div className="search-wrap" style={{margin:"12px auto 0"}}>
          <span className="search-icon"><IconSearch size={20}/></span>
          <input
            type="text"
            placeholder="Search programmes, universities, fields…"
            value={query}
            onChange={e=>setQuery(e.target.value)}
          />
          <button className="btn glow" type="button">
            Search <IconArrow size={14}/>
          </button>
        </div>

        {/* Smart 'we also searched for' */}
        <section className="also-card">
          <div className="also-head">
            <span className="ico"><IconSparkle size={15}/></span>
            <h2>We also searched for</h2>
            <span className="sub">Your query "<b>{query}</b>" matches several adjacent fields</span>
          </div>
          <div className="also-chips">
            {RELATED.map(r => (
              <button key={r.term} type="button" className="also-chip" onClick={()=>setQuery(r.term.toLowerCase())}>
                {r.term} <span className="count">{r.count}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Results header */}
        <div className="search-result-head">
          <h2>Results <em>(87)</em></h2>
          <div className="count">Including <b>{results.length}</b> direct matches and <b>{87 - results.length}</b> from related fields</div>
        </div>

        {/* Results list */}
        <div className="results">
          {results.map(p => (
            <ProgrammeCard
              key={p.id}
              p={p}
              saved={saved.has(p.id)}
              onSave={()=>toggleSave(p.id)}
              onCompare={()=>{}}
            />
          ))}

          {/* Show one more "from related" with a divider */}
          <div style={{
            display:"flex", alignItems:"center", gap:14,
            margin:"14px 8px 6px",
            fontSize:11.5, fontWeight:700, textTransform:"uppercase", letterSpacing:".14em",
            color:"var(--muted)"
          }}>
            <span style={{flex:1, height:1, background:"var(--line)"}}/>
            From related fields
            <span style={{flex:1, height:1, background:"var(--line)"}}/>
          </div>

          {[PROGRAMMES.find(p=>p.id==="p1"), PROGRAMMES.find(p=>p.id==="p7")].map(p => (
            <ProgrammeCard
              key={p.id}
              p={p}
              saved={saved.has(p.id)}
              onSave={()=>toggleSave(p.id)}
            />
          ))}
        </div>

        <div style={{textAlign:"center", marginTop:32}}>
          <button className="btn ghost" type="button" style={{margin:0, padding:"12px 22px"}}>
            Load more results <IconChev/>
          </button>
        </div>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
