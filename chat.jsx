/* UniSense — AI Assistant */
const { useState, useRef, useEffect } = React;

const SESSIONS = {
  today: [
    { id:"s1", title:"Master's in Data Science · Malaysia · under USD 6,000", when:"2 min ago", active:true },
    { id:"s2", title:"Comparing UTM vs UM for AI", when:"earlier today" },
  ],
  yesterday: [
    { id:"s3", title:"Funding & scholarships for international PhDs", when:"yesterday" },
    { id:"s4", title:"IELTS waiver options in Singapore", when:"yesterday" },
  ],
  earlier: [
    { id:"s5", title:"Foundation programmes that lead to engineering", when:"3 days ago" },
    { id:"s6", title:"How is UMS Computer Science ranked globally?", when:"on 14 May" },
    { id:"s7", title:"Cost of living comparison: KL vs Penang", when:"on 12 May" },
  ],
};

const PREFS = [
  { lbl:"Degree",  val:"Master's" },
  { lbl:"Field",   val:"Data Science" },
  { lbl:"Country", val:"Malaysia" },
  { lbl:"Budget",  val:"Under USD 6,000 / yr" },
];

const SUGGESTED = [
  { ...PROGRAMMES.find(p=>p.id==="p1") },
  { ...PROGRAMMES.find(p=>p.id==="p3") },
  { ...PROGRAMMES.find(p=>p.id==="p4") },
];

function App(){
  const [input, setInput] = useState("");
  const textRef = useRef(null);

  const onInput = (e) => {
    setInput(e.target.value);
    const t = textRef.current;
    if (t){ t.style.height = "auto"; t.style.height = Math.min(t.scrollHeight, 160) + "px"; }
  };

  return (
    <>
      <AppBar current="chat"/>

      <div className="chat-shell">
        {/* Sidebar */}
        <aside className="chat-side">
          <button className="chat-new" type="button">
            <IconPlus/> New conversation
          </button>

          <div className="chat-search">
            <IconSearch/>
            <input type="text" placeholder="Search past chats…"/>
          </div>

          <div className="side-group">
            <div className="ghead">Today</div>
            {SESSIONS.today.map(s => (
              <button key={s.id} className={`side-item ${s.active?"active":""}`}>
                <span className="ttl">{s.title}</span>
                <span className="meta"><IconHistory/> {s.when}</span>
              </button>
            ))}
          </div>

          <div className="side-group">
            <div className="ghead">Yesterday</div>
            {SESSIONS.yesterday.map(s => (
              <button key={s.id} className="side-item">
                <span className="ttl">{s.title}</span>
                <span className="meta"><IconHistory/> {s.when}</span>
              </button>
            ))}
          </div>

          <div className="side-group">
            <div className="ghead">Earlier</div>
            {SESSIONS.earlier.map(s => (
              <button key={s.id} className="side-item">
                <span className="ttl">{s.title}</span>
                <span className="meta"><IconHistory/> {s.when}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main chat panel */}
        <section className="chat-panel">
          <div className="chat-head">
            <div className="bot-mark"><IconSparkle size={18}/></div>
            <div>
              <h2>Sense — your programme assistant</h2>
              <div className="sub">Powered by UniSense's verified programme index · 38,500+ programmes</div>
            </div>
          </div>

          <div className="chat-thread">
            {/* User msg */}
            <div className="msg user">
              <div className="avatar">MK</div>
              <div>
                <div className="bubble">I want a Master's in Data Science in Malaysia under USD 6,000.</div>
                <div className="time">10:42 AM</div>
              </div>
            </div>

            {/* Bot msg */}
            <div className="msg bot">
              <div className="avatar"><IconSparkle size={14}/></div>
              <div>
                <div className="bubble">
                  Got it — here's what I've extracted from your message:
                  <div className="prefs">
                    <div className="head">Detected preferences</div>
                    <ul>
                      {PREFS.map(p => (
                        <li key={p.lbl}>
                          <span className="ok"><IconCheck size={9}/></span>
                          <span className="lbl">{p.lbl}:</span>
                          <span>{p.val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{marginTop:14}}>
                    I found <b>23 programmes</b> that match. Here are the top three by fit — want me to generate the full ranked list and a side-by-side comparison?
                  </div>

                  <div className="sugg-list">
                    {SUGGESTED.map(p => (
                      <a key={p.id} className="sugg-card" href="ProgramDetails.html">
                        <div className="um">{p.initials}</div>
                        <div className="body">
                          <h4 className="tt">{p.title}</h4>
                          <div className="um-name"><IconBuilding/> {p.uni} <span style={{opacity:.5}}>·</span> <IconPin/> {p.country}</div>
                        </div>
                        <div className="stats">
                          <span className="v">{p.tuition}</span>
                          <span className="l">{p.duration}</span>
                        </div>
                        <span className="fit"><IconSparkle/> Fit {p.fit||"—"}%</span>
                        <span className="go"><IconChevR/></span>
                      </a>
                    ))}
                  </div>

                  <div className="quick-chips" style={{marginTop:14, marginBottom:0}}>
                    <button type="button"><IconBolt/> Generate full ranking</button>
                    <button type="button"><IconCompare size={11}/> Compare top 3</button>
                    <button type="button"><IconEdit size={11}/> Adjust budget</button>
                  </div>
                </div>
                <div className="time">10:42 AM · Sense</div>
              </div>
            </div>
          </div>

          {/* Composer */}
          <div className="composer">
            <div className="quick-chips">
              <button type="button"><IconBolt/> Show me PhD options instead</button>
              <button type="button"><IconMoney size={11}/> What about scholarships?</button>
              <button type="button"><IconClock/> Shortest programme that fits</button>
            </div>

            <div className="composer-row">
              <textarea
                ref={textRef}
                rows={1}
                placeholder="Type your message…"
                value={input}
                onChange={onInput}
              />
              <div className="composer-actions">
                <button className="ic-btn" type="button" aria-label="Attach"><IconAttach/></button>
                <button className="ic-btn" type="button" aria-label="Voice"><IconMic/></button>
                <button className="ic-btn send" type="button">
                  Send <IconSend/>
                </button>
              </div>
            </div>

            <div className="composer-foot">
              <IconShield/> Sense only recommends programmes from UniSense's verified index. It can make mistakes — always confirm key details on the official source.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
