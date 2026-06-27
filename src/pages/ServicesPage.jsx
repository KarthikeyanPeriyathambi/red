import { Illustration, ParticlesBg, PACKAGES, SERVICES } from "../../the-red-academy.jsx";

/* ════════════ SERVICES PAGE ════════════ */
export function ServicesPage({ go }) {
  return (
    <div>
      <div className="relative py-28 text-center overflow-hidden" style={{background:"linear-gradient(135deg,#090909,#1a0000)"}}>
        <ParticlesBg />
        <div className="relative z-10">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-lg mx-auto px-4">End-to-end digital services — from strategy and design to development and marketing.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {SERVICES.map((s,i)=>(
            <div key={s.title} className="service-card group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-300 hover:shadow-2xl transition-all cursor-default">
              <div className="h-44 overflow-hidden">
                <Illustration seed={s.seed} ih={176} iw="100%" />
              </div>
              <div className="p-6">
                <h3 className="font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="text-2xl font-black text-gray-900 text-center mb-10">Our Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["service-a","Discovery","We deep-dive into your goals, audience and competitors."],
              ["service-b","Design","Wireframes and high-fidelity mockups crafted in Figma."],
              ["service-c","Development","Agile sprints with weekly demos and feedback loops."],
              ["seo2","Launch & Grow","Deploy, monitor and continuously optimise performance."],
            ].map(([seed,t,d],i)=>(
              <div key={t} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto shadow-lg group-hover:scale-105 transition-transform">
                    <Illustration seed={seed} ih={80} iw={80} radius={12} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center mx-auto shadow-md">
                    {i+1}
                  </div>
                </div>
                <h4 className="font-black text-gray-900 mb-1">{t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mt-20">
          <h3 className="text-2xl font-black text-gray-900 text-center mb-10">Service Packages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(pkg=>(
              <div key={pkg.name} className={`rounded-3xl p-7 border-2 hover:shadow-xl transition-all ${pkg.popular?"border-red-500 bg-red-50":"border-gray-200 bg-white"}`}>
                {pkg.popular && <div className="inline-block bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full mb-4">⭐ MOST POPULAR</div>}
                <p className="text-sm font-bold uppercase tracking-widest mb-1 text-gray-500">{pkg.name}</p>
                <p className="text-xs font-semibold text-gray-400 mb-2">{pkg.sub}</p>
                <p className="text-2xl font-black text-gray-900 mb-1 leading-tight">{pkg.price}</p>
                <div className="mb-5" />
                <ul className="space-y-3 mb-7">
                  {pkg.features.map(f=>(
                    <li key={f} className="text-sm flex items-start gap-2.5 text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-px">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button onClick={()=>go("Contact")} className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${pkg.popular?"bg-red-600 text-white hover:bg-red-700":"border-2 border-red-600 text-red-600 hover:bg-red-50"}`}>
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}