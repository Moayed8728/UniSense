/* ───────────────────────────────────────────────────────────
   UniSense — shared icons, components, and sample data
   Loaded BEFORE each page's component script. Exports to
   window so page-level Babel scripts can use them.
   ─────────────────────────────────────────────────────────── */

/* ── Icons ─────────────────────────────────────────────────── */
const IconMark = ({size=24}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="12" cy="12" r="7.5" />
    <ellipse cx="12" cy="12" rx="3.2" ry="7.5" />
    <path d="M4.5 12 H19.5" />
    <circle cx="17.6" cy="8" r="1.7" fill="#C00000" stroke="none" />
  </svg>
);

const Ico = (name, paths) => ({size=18, ...p}={}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    {paths}
  </svg>
);

const IconSearch = Ico("search",<><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-3.5-3.5"/></>);
const IconMail = Ico("mail", <><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/></>);
const IconLock = Ico("lock", <><rect x="4.5" y="10" width="15" height="10" rx="2.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/></>);
const IconUser = Ico("user", <><circle cx="12" cy="8.5" r="3.7"/><path d="M4.5 20c1.4-3.5 4.2-5.3 7.5-5.3s6.1 1.8 7.5 5.3"/></>);
const IconCheck = ({size=14, stroke=3.2}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
);
const IconArrow = ({size=16, className="arrow"}={}) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
);
const IconArrowL = ({size=16}={}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>
);
const IconChev = Ico("chev", <path d="M6 9l6 6 6-6"/>);
const IconChevR = Ico("chevR", <path d="M9 6l6 6-6 6"/>);
const IconWarn = ({size=13}={}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 7v6"/><path d="M12 16.5v.5"/></svg>
);
const IconEye = ({off, size=18}={}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {!off ? (<><path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/></>)
      : (<><path d="M3 3l18 18"/><path d="M10.6 6.1A10 10 0 0 1 12 6c6 0 9.5 6 9.5 6a16 16 0 0 1-3 3.6"/><path d="M6.6 7.7C4 9.6 2.5 12 2.5 12s3.5 6 9.5 6c1.3 0 2.6-.3 3.7-.7"/><path d="M14.1 14.1A3 3 0 0 1 9.9 9.9"/></>)}
  </svg>
);
const IconHeart = ({filled, size=14}={}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled?"currentColor":"none"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.5s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z"/>
  </svg>
);
const IconCompare = Ico("compare", <><path d="M4 7h10M4 17h16"/><path d="M14 4l3 3-3 3"/><path d="M10 14l-3 3 3 3"/></>);
const IconTrash = Ico("trash", <><path d="M4 7h16"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/></>);
const IconBell = Ico("bell", <><path d="M6 9a6 6 0 0 1 12 0c0 4 1.5 5 2 6H4c.5-1 2-2 2-6z"/><path d="M10 19a2 2 0 0 0 4 0"/></>);
const IconFilter = Ico("filter", <><path d="M3 6h18"/><path d="M6 12h12"/><path d="M10 18h4"/></>);
const IconGlobe = Ico("globe", <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 3 4 6 4 9s-1.5 6-4 9c-2.5-3-4-6-4-9s1.5-6 4-9z"/></>);
const IconPin = Ico("pin", <><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></>);
const IconClock = Ico("clock", <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>);
const IconCalendar = Ico("cal", <><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 9h18"/><path d="M8 3v4M16 3v4"/></>);
const IconMoney = Ico("money", <><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9v6M18 9v6"/></>);
const IconBook = Ico("book", <><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2V5z"/><path d="M19 17H6a2 2 0 0 0-2 2"/></>);
const IconGrad = Ico("grad", <><path d="M2.5 9l9.5-4 9.5 4-9.5 4-9.5-4z"/><path d="M6 10.5v5.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5"/></>);
const IconShield = Ico("shield", <><path d="M12 3l8 3v6c0 5-4 8.5-8 10-4-1.5-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></>);
const IconLink = Ico("link", <><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></>);
const IconOpen = Ico("open", <><path d="M14 4h6v6"/><path d="M20 4l-8 8"/><path d="M16 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h5"/></>);
const IconEdit = Ico("edit", <><path d="M4 20h4l11-11-4-4L4 16v4z"/><path d="M14 6l4 4"/></>);
const IconCamera = Ico("cam", <><path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><circle cx="12" cy="13" r="4"/></>);
const IconBuilding = Ico("bld", <><path d="M4 21V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15"/><path d="M15 11h3a2 2 0 0 1 2 2v8"/><path d="M8 8h3M8 12h3M8 16h3M18 15h.01M18 18h.01"/></>);
const IconStar = ({filled, size=14}={}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled?"currentColor":"none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l2.7 5.6 6.2.9-4.5 4.3 1.1 6.1L12 17l-5.5 2.9 1.1-6.1L3.1 9.5l6.2-.9L12 3z"/>
  </svg>
);
const IconSparkle = Ico("spk", <><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M5.5 5.5l2.5 2.5M16 16l2.5 2.5M5.5 18.5L8 16M16 8l2.5-2.5"/></>);
const IconSend = Ico("send", <><path d="M4 12l16-8-6 16-2-7-8-1z"/></>);
const IconAttach = Ico("att", <><path d="M21 11l-9 9a5 5 0 1 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"/></>);
const IconMic = Ico("mic", <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></>);
const IconBolt = Ico("bolt", <><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></>);
const IconCompass = Ico("comp", <><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5L15.5 8.5z"/></>);
const IconLayer = Ico("layer", <><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17l9 5 9-5"/></>);
const IconUpload = Ico("up", <><path d="M12 16V5"/><path d="M7.5 9.5L12 5l4.5 4.5"/><path d="M5 17v1.5A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V17"/></>);
const IconCheckCircle = Ico("chk", <><circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/></>);
const IconX = Ico("x", <path d="M6 6l12 12M18 6L6 18"/>);
const IconPlus = Ico("plus", <><path d="M12 5v14"/><path d="M5 12h14"/></>);
const IconChat = Ico("chat", <><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-5a8 8 0 1 1 16-3z"/></>);
const IconBriefcase = Ico("brc", <><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/><path d="M3 12h18"/></>);
const IconExternal = Ico("ext", <><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/></>);
const IconInfo = Ico("info", <><circle cx="12" cy="12" r="9.5"/><path d="M12 8h.01"/><path d="M11 12h1v5h1"/></>);
const IconPdf = Ico("pdf", <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8 13v5M11 13v5M14 13v5"/></>);
const IconMenu = Ico("menu", <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>);
const IconHistory = Ico("hist", <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M3 12a9 9 0 0 1 9-9"/></>);
const IconLogout = Ico("out", <><path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></>);
const IconAtoZ = Ico("atoz", <><path d="M4 17l3-8 3 8"/><path d="M5 15h4"/><path d="M14 8h5l-5 9h5"/></>);

/* ── App bar ───────────────────────────────────────────────── */
function AppBar({ current="discover", showSearch=false, query, onQueryChange, role="student", userName="Maya K." }){
  const navItems = role === "admin"
    ? [
        {id:"queue", label:"Review Queue", href:"AdminReview.html"},
        {id:"verified", label:"Verified", href:"#"},
        {id:"rejected", label:"Rejected", href:"#"},
        {id:"analytics", label:"Analytics", href:"#"},
      ]
    : [
        {id:"discover",       label:"Discover",        href:"Discover.html"},
        {id:"browse",         label:"Browse",          href:"Browse.html"},
        {id:"recommendations",label:"Recommendations", href:"Recommendations.html"},
        {id:"chat",           label:"Assistant",       href:"Chat.html"},
        {id:"compare",        label:"Compare",         href:"Compare.html"},
        {id:"saved",          label:"Saved",           href:"Saved.html"},
        {id:"profile",        label:"Profile",         href:"EditProfile.html"},
      ];

  const initials = userName.split(/\s+/).map(s=>s[0]).slice(0,2).join("");

  return (
    <header className="appbar">
      <div className="appbar-inner">
        <a className="brand-row" href="Discover.html">
          <span className="mark sm" aria-hidden="true"><IconMark size={18}/></span>
          <span className="wordmark sm">UniSense<em>.</em></span>
          {role === "admin" && (
            <span style={{marginLeft:8, padding:"3px 8px", borderRadius:6, background:"#22191b", color:"#fff", fontSize:10, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase"}}>Admin</span>
          )}
        </a>

        <nav>
          {navItems.map(it => (
            <a key={it.id} href={it.href} className={it.id === current ? "active" : ""}>{it.label}</a>
          ))}
        </nav>

        <div className="spacer"/>

        <div className="actions">
          <button className="icon-btn" aria-label="Notifications">
            <IconBell/> <span className="dot"/>
          </button>
          <div className="avatar" title={userName}>{initials}</div>
        </div>
      </div>
    </header>
  );
}

/* ── Programme dataset ─────────────────────────────────────── */
const PROGRAMMES = [
  { id:"p1", title:"MSc Data Science", uni:"Universiti Teknologi Malaysia", uniShort:"UTM", country:"Malaysia", city:"Johor Bahru", level:"Master's", field:"Data Science", duration:"1.5 yrs", tuition:"USD 5,200/yr", tuitionFull:"USD 5,200 / year", intake:"Sep · Feb", fit:94, why:"Matches your budget cap (USD 6,000) and Malaysia preference; Python-heavy curriculum with industry placement.", tier:1, initials:"UT", views:"2.4k" },
  { id:"p2", title:"MSc Applied Artificial Intelligence", uni:"University of Malaya", uniShort:"UM", country:"Malaysia", city:"Kuala Lumpur", level:"Master's", field:"Artificial Intelligence", duration:"2 yrs", tuition:"USD 5,800/yr", tuitionFull:"USD 5,800 / year", intake:"Oct · Mar", fit:88, why:"Strong AI/ML faculty, on-campus research labs, and partnerships with Petronas and Maxis.", tier:2, initials:"UM", views:"1.8k" },
  { id:"p3", title:"MSc Computer Science (Data Analytics)", uni:"Universiti Sains Malaysia", uniShort:"USM", country:"Malaysia", city:"Penang", level:"Master's", field:"Data Science", duration:"2 yrs", tuition:"USD 4,400/yr", tuitionFull:"USD 4,400 / year", intake:"Sep", fit:82, why:"Lowest tuition in your shortlist and a part-time evening track.", tier:3, initials:"US", views:"940" },
  { id:"p4", title:"MSc Information & Data Science", uni:"Multimedia University", uniShort:"MMU", country:"Malaysia", city:"Cyberjaya", level:"Master's", field:"Data Science", duration:"1.5 yrs", tuition:"USD 5,900/yr", tuitionFull:"USD 5,900 / year", intake:"Jul · Nov", fit:79, why:"Industry-focused capstone with employers in MSC Malaysia tech corridor.", tier:3, initials:"MM", views:"612" },
  { id:"p5", title:"BSc Software Engineering", uni:"Universiti Teknologi Malaysia", uniShort:"UTM", country:"Malaysia", city:"Johor Bahru", level:"Bachelor's", field:"Software Engineering", duration:"4 yrs", tuition:"USD 4,800/yr", tuitionFull:"USD 4,800 / year", intake:"Sep", fit:91, why:"Top-rated SE programme in Malaysia.", tier:1, initials:"UT", views:"3.1k" },
  { id:"p6", title:"BSc Computer Science", uni:"University of Malaya", uniShort:"UM", country:"Malaysia", city:"Kuala Lumpur", level:"Bachelor's", field:"Computer Science", duration:"4 yrs", tuition:"USD 4,400/yr", tuitionFull:"USD 4,400 / year", intake:"Sep", fit:89, tier:2, initials:"UM", views:"2.6k" },
  { id:"p7", title:"BSc Computer Science", uni:"National University of Singapore", uniShort:"NUS", country:"Singapore", city:"Singapore", level:"Bachelor's", field:"Computer Science", duration:"4 yrs", tuition:"USD 8,400/yr", tuitionFull:"USD 8,400 / year", intake:"Aug", tier:1, initials:"NU", views:"5.2k" },
  { id:"p8", title:"PhD Machine Learning", uni:"University of Cambridge", uniShort:"Cam", country:"United Kingdom", city:"Cambridge", level:"PhD", field:"Machine Learning", duration:"4 yrs", tuition:"USD 38,000/yr", tuitionFull:"USD 38,000 / year", intake:"Oct", tier:1, initials:"Ca", views:"1.3k" },
];

/* ── Helpers ───────────────────────────────────────────────── */
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

/* ── Programme card (used by Discover / Saved / Smart Search / Recommendations) */
function ProgrammeCard({ p, rank, saved, onSave, onCompare, compact, showWhy, showFit, viewHref="ProgramDetails.html" }){
  return (
    <article className={`result-card tier-${p.tier||3}`}>
      {rank && (
        <div className="uni-mark" style={{background:"#22191b", color:"#fff", fontFamily:"var(--serif)"}}>
          #{rank}
        </div>
      )}
      {!rank && (
        <div className="uni-mark" title={p.uni}>{p.initials}</div>
      )}

      <div className="result-body">
        <div className="result-meta-top">
          <span className="chip">{p.level}</span>
          <span className="chip">{p.field}</span>
          {showFit && p.fit && <span className="chip accent"><IconSparkle size={11}/> Fit · {p.fit}%</span>}
          {p.views && !showFit && <span className="chip" style={{background:"transparent", color:"var(--muted)", padding:"3px 4px"}}>
            <IconEye size={11}/> {p.views} views
          </span>}
        </div>
        <h3 className="result-title">{p.title}</h3>
        <div className="result-uni">
          <IconBuilding size={13}/> {p.uni}
          <span className="dot"/>
          <span className="country"><IconPin size={11}/> {p.country}</span>
        </div>

        {showWhy && p.why && (
          <div style={{
            fontSize:13, color:"var(--ink-2)", lineHeight:1.5,
            padding:"10px 12px", background:"var(--accent-tint)", borderRadius:9,
            marginTop:4, marginBottom:14,
            display:"flex", gap:8, alignItems:"flex-start"
          }}>
            <span style={{color:"var(--accent)", flexShrink:0, marginTop:2}}><IconSparkle size={13}/></span>
            <span><b style={{color:"var(--accent)"}}>Why this fits:</b> {p.why}</span>
          </div>
        )}

        <div className="result-facts">
          <div className="fact"><span className="lbl">Tuition</span><span className="val">{p.tuition}</span></div>
          <div className="fact"><span className="lbl">Duration</span><span className="val">{p.duration}</span></div>
          <div className="fact"><span className="lbl">Intake</span><span className="val">{p.intake || "—"}</span></div>
          {!compact && <div className="fact"><span className="lbl">Location</span><span className="val">{p.city}</span></div>}
        </div>
      </div>

      <div className="result-actions">
        <a className="btn-view" href={viewHref}>View Details <IconArrow size={13}/></a>
        <button className={`btn-save ${saved?"is-saved":""}`} onClick={onSave}>
          <IconHeart filled={saved}/> {saved ? "Saved" : "Save"}
        </button>
        {onCompare && (
          <button className="btn-save" onClick={onCompare}>
            <IconCompare size={14}/> Compare
          </button>
        )}
      </div>
    </article>
  );
}

/* Export to window so Babel-island scripts can see them */
Object.assign(window, {
  IconMark, IconSearch, IconMail, IconLock, IconUser, IconCheck, IconArrow, IconArrowL,
  IconChev, IconChevR, IconWarn, IconEye, IconHeart, IconCompare, IconTrash, IconBell,
  IconFilter, IconGlobe, IconPin, IconClock, IconCalendar, IconMoney, IconBook, IconGrad,
  IconShield, IconLink, IconOpen, IconEdit, IconCamera, IconBuilding, IconStar, IconSparkle,
  IconSend, IconAttach, IconMic, IconBolt, IconCompass, IconLayer, IconUpload, IconCheckCircle,
  IconX, IconPlus, IconChat, IconBriefcase, IconExternal, IconInfo, IconPdf, IconMenu,
  IconHistory, IconLogout, IconAtoZ,
  AppBar, PROGRAMMES, strengthOf, ProgrammeCard
});
