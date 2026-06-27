import { Illustration, ParticlesBg, TEAM } from "../../the-red-academy.jsx";

/* ════════════ TEAM PAGE ════════════ */
export function TeamPage() {

  return (
    <div>
      <div className="relative py-28 text-center overflow-hidden" style={{background:"linear-gradient(135deg,#090909,#1a0000)"}}>
        <ParticlesBg />
        <div className="relative z-10">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">The People</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Meet Our Team</h1>
          <p className="text-gray-400 max-w-lg mx-auto px-4">A tight-knit team of developers and designers dedicated to your success.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {TEAM.map(m=>(
            <div key={m.name} className="group bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-2xl transition-all">
              <div className="h-56 overflow-hidden relative">
                <Illustration seed={m.seed} ih={224} iw="100%" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                <div className="absolute bottom-4 left-5">
                  <h3 className="font-black text-white text-lg">{m.name}</h3>
                  <p className="text-xs font-semibold" style={{color:m.color==="#dc2626"?"#fca5a5":m.color==="#7c3aed"?"#c4b5fd":"#7dd3fc"}}>{m.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-3">{m.exp} experience</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{m.bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {m.skills.map(s=>(
                    <span key={s} className="text-xs px-2.5 py-1 rounded-lg font-semibold" style={{background:`${m.color}15`,color:m.color}}>{s}</span>
                  ))}
                </div>
                <a href={m.resume} download target="_blank" rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-bold transition-all"
                  style={{borderColor:m.color,color:m.color,textDecoration:"none"}}
                  onMouseEnter={e=>{e.currentTarget.style.background=m.color;e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=m.color;}}>
                  ↓ Download Resume
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-3xl p-10 text-center">
          <p className="text-2xl font-black text-gray-900 mb-2">Join Our Team</p>
          <p className="text-gray-500 mb-6">We're always looking for talented developers and designers.</p>
          <a href="mailto:admin@theredacademy.in" className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all shadow-lg shadow-red-100">
            ✉️ Send Your Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}