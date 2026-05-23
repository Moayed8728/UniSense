/* UniSense — Saved Programmes */
const { useState } = React;

const SAVED = [
  { ...PROGRAMMES.find(p=>p.id==="p1"), savedAt:"3 hours ago"  },
  { ...PROGRAMMES.find(p=>p.id==="p2"), savedAt:"yesterday"    },
  { ...PROGRAMMES.find(p=>p.id==="p3"), savedAt:"2 days ago"   },
  { ...PROGRAMMES.find(p=>p.id==="p5"), savedAt:"5 days ago"   },
  { ...PROGRAMMES.find(p=>p.id==="p7"), savedAt:"on 14 May"    },
  { ...PROGRAMMES.find(p=>p.id==="p8"), savedAt:"on 11 May"    },
];

function SavedCard({ p, selected, onToggle, onRemove }){
  return (
    <article className={`saved-card ${selected?"selected":""}`}>
      <label className="check saved-check" onClick={e=>e.stopPropagation()}>
        <input type="checkbox" checked={selected} onChange={onToggle}/>
        <span className="box"><IconCheck size={11}/></span>
      </label>

      <div className="uni-mark">{p.initials}</div>

      <div className="body">
        <h3 className="title">{p.title}</h3>
        <div className="meta">
          <IconBuilding size={13}/> {p.uni}
          <span className="dot"/>
          <span className="country"><IconPin size={11}/> {p.country}</span>
          <span className="dot"/>
          <span className="country">{p.tuition} · {p.duration}</span>
        </div>
        <span className="savedate"><IconHeart filled size={11}/> Saved {p.savedAt}</span>
      </div>

      <div className="saved-actions">
        <a className="btn-view" href="ProgramDetails.html">
          View <IconArrow size={12}/>
        </a>
        <button className="compare-add" type="button">
          <IconCompare/> Compare
        </button>
        <button className="icon-btn-line danger" type="button" aria-label="Remove from saved" onClick={onRemove}>
          <IconTrash/>
        </button>
      </div>
    </article>
  );
}

function App(){
  const [items, setItems] = useState(SAVED);
  const [selected, setSelected] = useState(new Set(["p1","p2"]));

  const toggle = (id) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };
  const remove = (id) => {
    setItems(items.filter(p => p.id !== id));
    const next = new Set(selected); next.delete(id); setSelected(next);
  };
  const selectAll = () => setSelected(new Set(items.map(p => p.id)));
  const clear = () => setSelected(new Set());

  return (
    <>
      <AppBar current="saved"/>

      <main className="page">
        <div className="saved-head">
          <div>
            <span className="eyebrow">Bookmarks</span>
            <h1 style={{marginTop:6}}>My <span className="accent">Saved</span> programmes</h1>
            <p className="lede"><b style={{color:"var(--ink)"}}>{items.length}</b> programmes saved · select two or more to compare.</p>
          </div>
          <div style={{display:"flex", gap:10, alignItems:"center"}}>
            <button className="filters-reset" type="button" onClick={selectAll}>Select all</button>
            <button className="filters-reset" type="button" onClick={clear}>Clear</button>
          </div>
        </div>

        <div className="results">
          {items.map(p => (
            <SavedCard
              key={p.id}
              p={p}
              selected={selected.has(p.id)}
              onToggle={()=>toggle(p.id)}
              onRemove={()=>remove(p.id)}
            />
          ))}
        </div>

        {items.length === 0 && (
          <div style={{textAlign:"center", padding:"80px 20px", color:"var(--muted)"}}>
            <div style={{fontFamily:"var(--serif)", fontSize:28, color:"var(--ink)"}}>No saved programmes yet.</div>
            <p style={{marginTop:8}}>Tap the heart on any programme to keep it here.</p>
          </div>
        )}

        {/* Sticky compare bar */}
        <div className="compare-bar">
          <IconCompare size={18}/>
          <div className="meta">
            <b>{selected.size}</b> selected
            <span className="sub">{selected.size < 2 ? "Choose at least two to compare" : "Ready to compare"}</span>
          </div>
          <span style={{flex:1}}/>
          <button className="btn glow" type="button" disabled={selected.size < 2}
                  style={{margin:0, padding:"12px 22px", fontSize:14, opacity: selected.size < 2 ? .45 : 1}}
                  onClick={()=> selected.size >= 2 && (window.location.href = "Compare.html")}>
            Compare Selected ({selected.size}) <IconArrow size={14}/>
          </button>
        </div>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
