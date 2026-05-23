/* UniSense — Program Discovery (student home) */
const { useState } = React;

const COUNTRIES = ["Anywhere","Malaysia","Singapore","Indonesia","United Kingdom","Germany","Netherlands","Switzerland","United States","Canada","Australia","Japan"];
const FIELDS = ["All fields","Computer Science","Data Science","Artificial Intelligence","Software Engineering","Engineering","Business & Management","Medicine","Architecture","Psychology","Law","Physics","Biology"];

function RangeBar({ min, max, step, value, onChange, fmt = v=>v, units }){
  const [lo, hi] = value;
  const pct = v => (v - min) / (max - min) * 100;
  return (
    <div>
      <div className="range">
        <div className="track"/>
        <div className="range-fill" style={{left: `${pct(lo)}%`, width: `${pct(hi)-pct(lo)}%`}}/>
        <input type="range" min={min} max={max} step={step} value={lo}
               onChange={e=>onChange([Math.min(Number(e.target.value), hi - step), hi])}/>
        <input type="range" min={min} max={max} step={step} value={hi}
               onChange={e=>onChange([lo, Math.max(Number(e.target.value), lo + step)])}/>
      </div>
      <div className="range-values">
        <span><span className="min">{units}</span> {fmt(lo)}</span>
        <span><span className="min">{units}</span> {hi >= max ? `${fmt(hi)}+` : fmt(hi)}</span>
      </div>
    </div>
  );
}

function App(){
  const [query, setQuery] = useState("");
  const [degree, setDegree] = useState("All");
  const [country, setCountry] = useState("Anywhere");
  const [field, setField] = useState("All fields");
  const [tuition, setTuition] = useState([0, 30000]);
  const [duration, setDuration] = useState([1, 6]);
  const [sort, setSort] = useState("Relevance");
  const [saved, setSaved] = useState(new Set(["p1"]));

  const toggleSave = (id) => {
    const next = new Set(saved);
    next.has(id) ? next.delete(id) : next.add(id);
    setSaved(next);
  };

  const results = PROGRAMMES;

  return (
    <>
      <AppBar current="discover"/>
      <main className="page">
        <div className="hero">
          <h1>Find a programme that <span className="accent">fits</span> — anywhere on Earth.</h1>
          <p className="lede">38,500+ Bachelor's, Master's and PhD programmes from 1,800+ verified institutions in 92 countries.</p>

          <div className="search-wrap">
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
        </div>

        {/* Filters */}
        <section className="filters">
          <div className="filters-head">
            <div className="filters-title"><IconFilter size={14}/> Refine results</div>
            <button className="filters-reset" type="button">Reset all</button>
          </div>

          <div className="filters-grid">
            <div className="field">
              <span className="field-label">Degree level</span>
              <div className="pill-group" role="radiogroup">
                {["All","Bachelor's","Master's","PhD"].map(d => (
                  <button key={d} type="button" role="radio" aria-checked={degree===d}
                          className={degree===d?"is-active":""}
                          onClick={()=>setDegree(d)}>{d}</button>
                ))}
              </div>
            </div>

            <div className="field">
              <span className="field-label">Country</span>
              <div className="select-wrap no-icon">
                <select value={country} onChange={e=>setCountry(e.target.value)}>
                  {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                </select>
                <span className="chev"><IconChev size={14}/></span>
              </div>
            </div>

            <div className="field">
              <span className="field-label">Field of study</span>
              <div className="select-wrap no-icon">
                <select value={field} onChange={e=>setField(e.target.value)}>
                  {FIELDS.map(f => <option key={f}>{f}</option>)}
                </select>
                <span className="chev"><IconChev size={14}/></span>
              </div>
            </div>

            <div className="field">
              <span className="field-label">Tuition / year</span>
              <RangeBar min={0} max={50000} step={500} value={tuition} onChange={setTuition}
                        units="USD" fmt={v => v >= 1000 ? `${(v/1000).toFixed(v%1000?1:0)}k` : v}/>
            </div>

            <div className="field">
              <span className="field-label">Duration (years)</span>
              <RangeBar min={1} max={6} step={0.5} value={duration} onChange={setDuration}
                        units="" fmt={v => `${v} yr${v>=2?"s":""}`}/>
            </div>
          </div>
        </section>

        {/* Results header */}
        <div className="results-head">
          <div className="count"><b>{results.length.toLocaleString()}</b> programmes match · showing the best <b>8</b></div>
          <div className="sort">
            <span>Sort by</span>
            <div className="select-wrap">
              <select value={sort} onChange={e=>setSort(e.target.value)}>
                <option>Relevance</option>
                <option>Tuition: low → high</option>
                <option>Tuition: high → low</option>
                <option>Duration: shortest</option>
                <option>Most popular</option>
              </select>
              <span className="chev"><IconChev size={13}/></span>
            </div>
          </div>
        </div>

        {/* Results list */}
        <div className="results">
          {results.map(p => (
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
