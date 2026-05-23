/* UniSense — Browse */
const { useState } = React;

const CATS = {
  field: [
    { name:"Computer Science",       count:"4,128", featured:true,
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/><path d="M7 10l-2 2 2 2M17 10l2 2-2 2M13 9l-2 6"/></svg>) },
    { name:"Engineering",            count:"5,612", featured:true,
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2"/></svg>) },
    { name:"Business & Management",  count:"3,442",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/><path d="M3 12h18"/></svg>) },
    { name:"Data Science",           count:"   886",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>) },
    { name:"Medicine",               count:"1,884",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><circle cx="12" cy="12" r="9.5"/></svg>) },
    { name:"Architecture",           count:"   612",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l9-15 9 15"/><path d="M7 21V14h10v7"/><path d="M3 21h18"/></svg>) },
    { name:"Law",                    count:"1,128",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7l-2 6c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5l-2-6"/><path d="M19 7l-2 6c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5l-2-6"/><path d="M9 21h6"/></svg>) },
    { name:"Psychology",             count:"   742",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3a6 6 0 0 1 8 7c-.5 2-2 3-2 5v3a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2"/><path d="M8 12H6"/><circle cx="12" cy="11" r="1"/></svg>) },
    { name:"Mathematics",            count:"   504",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/><path d="M5 12h6M14 8h6M14 16h6"/></svg>) },
    { name:"Environmental Science",  count:"   389",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 4 4 12 0 18-4-6-4-14 0-18z"/><path d="M12 3v18"/><path d="M3 12c4-4 14-4 18 0"/></svg>) },
    { name:"Fine Arts & Design",     count:"   856",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9.5"/><circle cx="7.5" cy="11" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="15.5" cy="9" r="1"/><path d="M12 21a3 3 0 0 1-3-3c0-2 2-2 2-4s-1-2-1-3"/></svg>) },
    { name:"Linguistics & Languages", count:"   421",
      icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h12"/><path d="M9 3v2c0 4-2 7-6 8"/><path d="M5 9c0 3 3 6 8 7"/><path d="M14 20l5-11 5 11"/><path d="M16 16h6"/></svg>) },
  ],
  country: [
    { name:"United Kingdom", count:"3,202", featured:true,  icon:(<IconGlobe size={22}/>) },
    { name:"Malaysia",       count:"1,012", featured:true,  icon:(<IconPin size={22}/>) },
    { name:"Singapore",      count:"   486", icon:(<IconPin size={22}/>) },
    { name:"Germany",        count:"2,840", icon:(<IconGlobe size={22}/>) },
    { name:"Netherlands",    count:"   941", icon:(<IconGlobe size={22}/>) },
    { name:"Switzerland",    count:"   528", icon:(<IconGlobe size={22}/>) },
    { name:"United States",  count:"5,420", icon:(<IconGlobe size={22}/>) },
    { name:"Australia",      count:"1,612", icon:(<IconGlobe size={22}/>) },
    { name:"Canada",         count:"1,308", icon:(<IconGlobe size={22}/>) },
    { name:"Japan",          count:"   702", icon:(<IconGlobe size={22}/>) },
    { name:"France",         count:"1,210", icon:(<IconGlobe size={22}/>) },
    { name:"South Korea",    count:"   388", icon:(<IconGlobe size={22}/>) },
  ],
  degree: [
    { name:"Bachelor's", count:"18,420", featured:true, icon:(<IconGrad size={22}/>) },
    { name:"Master's",   count:"14,890", featured:true, icon:(<IconBook size={22}/>) },
    { name:"PhD / Doctorate", count:"4,128", icon:(<IconLayer size={22}/>) },
    { name:"Diploma & Foundation", count:"1,062", icon:(<IconBriefcase size={22}/>) },
  ],
  university: [
    { name:"University of Cambridge",            count:"   324", featured:true, icon:(<IconBuilding size={22}/>) },
    { name:"National University of Singapore",   count:"   286", featured:true, icon:(<IconBuilding size={22}/>) },
    { name:"ETH Zürich",                         count:"   201", icon:(<IconBuilding size={22}/>) },
    { name:"University of Malaya",               count:"   194", icon:(<IconBuilding size={22}/>) },
    { name:"Universiti Teknologi Malaysia",      count:"   168", icon:(<IconBuilding size={22}/>) },
    { name:"Imperial College London",            count:"   312", icon:(<IconBuilding size={22}/>) },
    { name:"Technical University of Munich",     count:"   289", icon:(<IconBuilding size={22}/>) },
    { name:"Leiden University",                  count:"   142", icon:(<IconBuilding size={22}/>) },
    { name:"University of Tokyo",                count:"   178", icon:(<IconBuilding size={22}/>) },
    { name:"Stanford University",                count:"   233", icon:(<IconBuilding size={22}/>) },
    { name:"University of Toronto",              count:"   267", icon:(<IconBuilding size={22}/>) },
    { name:"University of Melbourne",            count:"   211", icon:(<IconBuilding size={22}/>) },
  ],
};

const TABS = [
  { id:"field",      label:"Field" },
  { id:"country",    label:"Country" },
  { id:"degree",     label:"Degree" },
  { id:"university", label:"University" },
];

function App(){
  const [tab, setTab] = useState("field");
  const [order, setOrder] = useState("popular");

  const items = [...CATS[tab]];
  if (order === "az") items.sort((a,b)=>a.name.localeCompare(b.name));
  if (order === "count") items.sort((a,b)=>parseInt(b.count.replace(/,/g,""))-parseInt(a.count.replace(/,/g,"")));

  const total = items.reduce((s,c)=>s+parseInt(c.count.replace(/,/g,"")),0);

  return (
    <>
      <AppBar current="browse"/>
      <main className="page">
        <div className="browse-head">
          <div>
            <span className="eyebrow">Browse</span>
            <h1 style={{marginTop:8}}>Explore <span className="accent">programmes</span></h1>
            <p className="lede">Start broad. Drill down by field, country, degree level, or institution — UniSense will narrow as you go.</p>
          </div>
        </div>

        {/* Segmented selector */}
        <div className="seg" style={{maxWidth:520, gridTemplateColumns:`repeat(${TABS.length}, 1fr)`, marginBottom:22}}>
          <div className="seg-thumb"
               style={{width:`calc(${100/TABS.length}% - ${4/TABS.length}px)`,
                       transform:`translateX(calc(${TABS.findIndex(t=>t.id===tab)*100}% + 0px))`}}/>
          {TABS.map(t => (
            <button key={t.id} type="button"
                    className={tab===t.id?"is-active":""}
                    onClick={()=>setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="browse-toolbar">
          <div className="total">
            Showing <b>{items.length}</b> {tab === "university" ? "universities" : tab === "country" ? "countries" : tab === "degree" ? "degree levels" : "fields"} ·
            {" "}<b>{total.toLocaleString()}</b> programmes total
          </div>
          <div className="order">
            <span>Order</span>
            <button className={order==="popular"?"is-active":""} onClick={()=>setOrder("popular")}>Popular</button>
            <button className={order==="count"?"is-active":""} onClick={()=>setOrder("count")}>Most programmes</button>
            <button className={order==="az"?"is-active":""} onClick={()=>setOrder("az")}><IconAtoZ size={13}/> A–Z</button>
          </div>
        </div>

        {/* Grid */}
        <div className="cat-grid">
          {items.map(c => (
            <a key={c.name} className={`cat-card ${order==="popular" && c.featured ? "featured" : ""}`} href="Discover.html">
              <div className="cat-icon">{c.icon}</div>
              <div className="cat-meta">
                <div className="cat-name">{c.name}</div>
                <div className="cat-count">{c.count.trim()} programmes</div>
              </div>
              <span className="cat-arrow"><IconArrow size={16}/></span>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
