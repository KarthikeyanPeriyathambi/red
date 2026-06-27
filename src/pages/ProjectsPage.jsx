import { useState } from "react";
import { ParticlesBg, PhoneMockup, PROJECTS, PROJECT_SCREENS, PROJ_IMGS } from "../../the-red-academy.jsx";

/* ════════════ PROJECTS PAGE ════════════ */
export function ProjectsPage({ setSelected }) {
  const [phoneIdx, setPhoneIdx] = useState(0);
  return (
    <div>
      <div className="relative py-28 text-center overflow-hidden" style={{background:"linear-gradient(135deg,#090909,#1a0000)"}}>
        <ParticlesBg />
        <div className="relative z-10">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Projects</h1>
          <p className="text-gray-400 max-w-lg mx-auto px-4">Real apps, real clients, real results. Click any project for details.</p>
        </div>
      </div>

      {/* Phone showcase */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-white text-center mb-10">Live App Screens</h2>
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-full flex items-center justify-center gap-4">
              <button onClick={()=>setPhoneIdx(i=>Math.max(0,i-1))}
                className={`absolute left-0 z-10 w-11 h-11 rounded-xl flex items-center justify-center font-bold transition-all ${phoneIdx===0?"bg-gray-800 text-gray-600":"bg-red-600 text-white hover:bg-red-700"}`}
                disabled={phoneIdx===0}>←</button>
              <div className="flex items-center gap-5 overflow-hidden">
                {PROJECT_SCREENS.map((s,i)=>{
                  const dist = Math.abs(i - phoneIdx);
                  return (
                    <div key={i} onClick={()=>setPhoneIdx(i)}
                      className="flex-shrink-0 cursor-pointer transition-all duration-500"
                      style={{
                        transform:`scale(${i===phoneIdx?1:0.72}) translateY(${i===phoneIdx?0:18}px)`,
                        opacity:dist>1?0:dist===0?1:0.5,
                        display:dist>1?'none':'block'
                      }}>
                      <PhoneMockup screen={s} onClick={()=>setPhoneIdx(i)} />
                    </div>
                  );
                })}
              </div>
              <button onClick={()=>setPhoneIdx(i=>Math.min(PROJECT_SCREENS.length-1,i+1))}
                className={`absolute right-0 z-10 w-11 h-11 rounded-xl flex items-center justify-center font-bold transition-all ${phoneIdx===PROJECT_SCREENS.length-1?"bg-gray-800 text-gray-600":"bg-red-600 text-white hover:bg-red-700"}`}
                disabled={phoneIdx===PROJECT_SCREENS.length-1}>→</button>
            </div>
            <div className="text-center">
              <p className="text-white font-black text-xl">{PROJECT_SCREENS[phoneIdx].label}</p>
              <p className="text-gray-500 text-sm mt-1">{PROJECT_SCREENS[phoneIdx].desc}</p>
              <div className="flex gap-2 justify-center mt-4">
                {PROJECT_SCREENS.map((_,i)=>(
                  <button key={i} onClick={()=>setPhoneIdx(i)} className="rounded-full transition-all" style={{width:phoneIdx===i?28:8,height:8,background:phoneIdx===i?"#dc2626":"#374151"}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-black text-gray-900 text-center mb-10">All Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map(p=>(
            <button key={p.name} onClick={()=>setSelected(p)}
              className="project-card text-left rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-gray-200 hover:shadow-2xl">
              <div className="relative overflow-hidden rounded-t-2xl" style={{height:200,background:"#f3f4f6"}}>
                <img
                  src={PROJ_IMGS[p.img]}
                  alt={p.name}
                  style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}}
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <span className="text-white font-bold text-sm bg-black/50 px-4 py-2 rounded-full">View Details →</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:p.color}}>{p.industry}</p>
                <h3 className="font-black text-gray-900 text-lg mb-3">{p.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {p.features.map(f=>(
                    <span key={f} className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{background:`${p.color}15`,color:p.color}}>{f}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}