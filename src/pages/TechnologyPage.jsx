import { useEffect, useRef, useState } from "react";
import { Illustration, ParticlesBg, TECH, TechIcon, TechMarquee } from "../../the-red-academy.jsx";

/* ════════════ TECHNOLOGY PAGE ════════════ */
export function TechnologyPage() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting) setVisible(true); },{threshold:0.05});
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  },[]);

  return (
    <div>
      <div className="relative py-28 text-center overflow-hidden" style={{background:"linear-gradient(135deg,#090909,#0a0a1a)"}}>
        <ParticlesBg />
        <div className="relative z-10">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">Our Stack</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Technology We Master</h1>
          <p className="text-gray-400 max-w-lg mx-auto px-4">Modern, battle-tested tools to build fast, secure and scalable digital products.</p>
        </div>
      </div>

      {/* Dual marquee */}
      {/* <section className="py-10 bg-gray-950 overflow-hidden">
        <TechMarquee />
        <div className="mt-3">
          <TechMarquee reverse />
        </div>
      </section> */}

      {/* Tech grid with real logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16" ref={ref}>
        <h2 className="text-2xl font-black text-gray-900 text-center mb-10">Full Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {TECH.map((t, i)=>(
            <div key={t.name} className="tech-card group rounded-2xl p-4 flex flex-col items-center gap-3 border-2 hover:shadow-xl cursor-default"
              style={{
                background: t.dark === "#f0f0f1" || t.dark === "#f5f5f5" || t.dark === "#fff" ? "#f8f8f8" : t.dark,
                borderColor: `${t.color}30`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.5s ease ${i*0.035}s`
              }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center p-2 shadow-md"
                style={{background:`${t.color}15`, border:`1px solid ${t.color}30`}}>
                <TechIcon tech={t} size={40} />
              </div>
              <p className="text-xs font-black text-center leading-tight" style={{color:t.color}}>{t.name}</p>
            </div>
          ))}
        </div>

        {/* Category cards with images */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["tech-hero","🎨 Frontend","React.js, Next.js, TailwindCSS, TypeScript, HTML5 — UIs that are fast, accessible and visually sharp."],
            ["tech2","⚙️ Backend","Node.js, Express, REST APIs, GraphQL, PHP/WordPress — rock-solid server-side architecture and scalable APIs."],
            ["tech3","☁️ DB & Cloud","MongoDB, PostgreSQL, MySQL, Firebase, AWS, Vercel, Docker — scalable infrastructure for any workload size."],
          ].map(([seed,t,d])=>(
            <div key={t} className="rounded-2xl overflow-hidden border border-gray-800 hover:border-red-800 transition-colors group">
              <div className="h-40 overflow-hidden">
                <Illustration seed={seed} ih={160} iw="100%" />
              </div>
              <div className="bg-gray-900 text-white p-6">
                <p className="font-black text-lg mb-2">{t}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}