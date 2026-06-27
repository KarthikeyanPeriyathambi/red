import { Counter, Illustration, ParticlesBg, WHY_US } from "../../the-red-academy.jsx";

/* ════════════ WHY US PAGE ════════════ */
export function WhyUsPage({ go }) {
  return (
    <div>
      <div className="relative py-28 text-center overflow-hidden" style={{background:"linear-gradient(135deg,#090909,#1a0000)"}}>
        <ParticlesBg />
        <div className="relative z-10">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">Our Advantage</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Why Choose Us?</h1>
          <p className="text-gray-400 max-w-lg mx-auto px-4">We don't just build websites — we build partnerships that grow your business.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {WHY_US.map(w=>(
            <div key={w.title} className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-300 hover:shadow-2xl transition-all">
              <div className="h-44 overflow-hidden">
                <Illustration seed={w.seed} ih={176} iw="100%" />
              </div>
              <div className="p-6">
                <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-950 rounded-3xl p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[["50","Projects Delivered"],["30","Happy Clients"],["5","Years Experience"],["100","On-Time Delivery"]].map(([n,l])=>(
            <div key={l} className="text-center">
              <p className="text-4xl font-black text-red-400"><Counter target={parseInt(n)} suffix="+" /></p>
              <p className="text-sm text-gray-500 mt-1">{l}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle at 20% 80%,white,transparent)"}} />
          <h3 className="relative text-3xl font-black mb-4">Ready to Start?</h3>
          <p className="relative text-red-100 text-lg mb-8 max-w-md mx-auto">Free consultation. No commitment. Let's talk about what you need.</p>
          <button onClick={()=>go("Contact")} className="bg-white text-red-600 font-black px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all shadow-xl">
            Book Free Consultation →
          </button>
        </div>
      </div>
    </div>
  );
}