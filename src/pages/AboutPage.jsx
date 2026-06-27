import { Counter, Illustration, ParticlesBg } from "../../the-red-academy.jsx";

/* ════════════ ABOUT PAGE ════════════ */
export function AboutPage({ go }) {
  return (
    <div>
      <div className="relative py-28 text-center overflow-hidden" style={{background:"linear-gradient(135deg,#090909,#1a0000)"}}>
        <ParticlesBg />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">About The Red Academy</h1>
          <p className="text-gray-400 text-lg">Full-service digital agency from Puducherry, building impactful digital products since 2019.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-5">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Founded with a passion for technology and creativity, The Red Academy has grown into a trusted digital partner for businesses across India. We combine clean code, sharp design, and data-driven marketing to deliver work that performs — not just looks good.</p>
            <p className="text-gray-600 leading-relaxed mb-8">From our base in Puducherry, we serve clients across India and internationally, bringing big-agency quality to every project at a price that makes sense for growing businesses.</p>
            <div className="grid grid-cols-3 gap-4">
              {[["50","Projects"],["5","Years"],["30","Clients"]].map(([n,l])=>(
                <div key={l} className="bg-red-50 rounded-2xl p-5 text-center border border-red-100">
                  <p className="text-3xl font-black text-red-600"><Counter target={parseInt(n)} suffix="+" /></p>
                  <p className="text-xs text-gray-500 mt-1 font-semibold">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Illustration seed="team-bg" ih={320} iw="100%" radius={24} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-3xl p-8 text-white">
            <h3 className="font-black text-xl mb-3">🎯 Our Mission</h3>
            <p className="text-red-100 leading-relaxed">To empower businesses with cutting-edge digital solutions that drive real, measurable growth — making world-class technology accessible to every business.</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8 text-white">
            <h3 className="font-black text-xl mb-3">🔭 Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">To be the most trusted digital growth partner in South India, known for quality, transparency and lasting client relationships.</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-3xl p-10">
          <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["about1","Transparency","Honest pricing, clear timelines, no surprises."],
              ["about2","Speed","We move fast without cutting corners."],
              ["about3","Quality","Every pixel and line of code is crafted with care."],
              ["about4","Partnership","We're invested in your long-term success."],
            ].map(([seed,t,d])=>(
              <div key={t} className="text-center group">
                <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-3 shadow-md group-hover:scale-105 transition-transform">
                  <Illustration seed={seed} ih={64} iw={64} radius={12} />
                </div>
                <h4 className="font-black text-gray-900 mb-1">{t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}