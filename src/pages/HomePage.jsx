import { useState } from "react";
import { ParticlesBg, HeroCodeBg, TechMarquee, Illustration, SERVICES, WHY_US, TESTIMONIALS, PACKAGES, PROJECT_SCREENS, PhoneMockup } from "../../the-red-academy.jsx";
import LOGO_IMG from "../assets/logo.png";

/* ════════════ HOME PAGE ════════════ */
export function HomePage({ go, setSelected }) {
  const [phoneIdx, setPhoneIdx] = useState(0);
  const [testimIdx, setTestimIdx] = useState(0);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#090909 0%,#1a0000 45%,#0a0a1a 100%)" }}>
        <ParticlesBg />
        <HeroCodeBg />
        {/* Big glowing orbs */}
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle,#dc2626,transparent)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle,#7c3aed,transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{ background: "radial-gradient(circle,#dc2626,transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-40 flex flex-col lg:flex-row items-center gap-14">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="fade-up inline-flex items-center gap-2 glass text-red-300 text-xs font-bold px-4 py-2 rounded-full mb-7 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-400 glow-ring" /> Digital Agency · Puducherry, India
            </div>
            <h1 className="fade-up-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] mb-6">
              We Build<br />
              <span className="shimmer-text">Digital</span><br />
              Experiences<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#a855f7,#ec4899)" }}>That Convert</span>
            </h1>
            <p className="fade-up-3 text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Websites, apps and digital marketing campaigns that drive real, measurable growth for your business.
            </p>
            <div className="fade-up-3 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={() => go("Services")} className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all hover:scale-105 red-glow text-sm">
                Explore Services →
              </button>
              <button onClick={() => go("Projects")} className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/15 transition-all text-sm border border-white/20">
                View Our Work
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {["50+ Projects", "5★ Reviews", "Fast Delivery", "24/7 Support"].map(b => (
                <span key={b} className="text-xs glass text-gray-300 px-3 py-1.5 rounded-full font-medium border border-white/10">{b}</span>
              ))}
            </div>
          </div>

          {/* Logo float */}
          <div className="flex-shrink-0 relative">
            <div className="float-anim relative" style={{ width: 260, height: 260 }}>
              <div className="absolute inset-0 rounded-full opacity-25 blur-3xl animate-pulse" style={{ background: "radial-gradient(circle,#dc2626,transparent)" }} />
              <div className="flex items-center justify-center w-full h-full">
                <img src={LOGO_IMG} alt="The Red Academy logo" className="w-[240px] h-[240px] rounded-full shadow-2xl object-cover" />
              </div>
            </div>
            {/* Orbit ring */}
            <div className="absolute inset-0 rounded-full border border-red-800/30" style={{ animation: "spin-slow 20s linear infinite" }} />
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 glass border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4">
            {[["25+", "Projects Delivered"], ["03+", "Years Experience"], ["20+", "Happy Clients"], ["100%", "Client Satisfaction"]].map(([n, l], i) => (
              <div key={l} className={`py-5 text-center ${i < 3 ? "border-r border-white/10" : ""}`}>
                <p className="text-2xl font-black text-red-400">{n}</p>
                <p className="text-xs text-gray-500 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <section className="bg-gray-950 py-10">
        <div className="text-center mb-4">
          <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Technologies We Master</p>
        </div>
        <TechMarquee />
        <div className="mt-2">
          <TechMarquee reverse />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-3">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Our Core Services</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">End-to-End digital solutions from design to deployment and beyond.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((s, i) => (
              <div key={s.title} className="service-card group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all cursor-default">
                <div className="h-40 overflow-hidden">
                  <Illustration seed={s.seed} ih={160} iw="100%" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-sm mb-2 group-hover:text-red-600 transition-colors">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => go("Services")} className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all text-sm shadow-lg shadow-red-100">
              View All Services →
            </button>
          </div>
        </div>
      </section>

      {/* ── PHONE PROJECT SHOWCASE ── */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%,rgba(220,38,38,0.08) 0%,transparent 60%), radial-gradient(circle at 80% 50%,rgba(124,58,237,0.08) 0%,transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-900/40 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-3">Live Projects</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Apps We've Built</h2>
            <p className="text-gray-500 mt-3">Click arrows to explore different screens</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-black text-white mb-3">{PROJECT_SCREENS[phoneIdx].label}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">{PROJECT_SCREENS[phoneIdx].desc}</p>
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <button onClick={() => setPhoneIdx(i => Math.max(0, i - 1))}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${phoneIdx === 0 ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
                  disabled={phoneIdx === 0}>←</button>
                <div className="flex gap-2">
                  {PROJECT_SCREENS.map((_, i) => (
                    <button key={i} onClick={() => setPhoneIdx(i)}
                      className="rounded-full transition-all" style={{ width: phoneIdx === i ? 24 : 8, height: 8, background: phoneIdx === i ? "#dc2626" : "#374151" }} />
                  ))}
                </div>
                <button onClick={() => setPhoneIdx(i => Math.min(PROJECT_SCREENS.length - 1, i + 1))}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${phoneIdx === PROJECT_SCREENS.length - 1 ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
                  disabled={phoneIdx === PROJECT_SCREENS.length - 1}>→</button>
              </div>
            </div>
            <div className="float-anim-2 transition-all duration-500">
              <PhoneMockup screen={PROJECT_SCREENS[phoneIdx]} onClick={() => { }} />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 max-w-xs">
              {[["03+", "Apps Built"], ["99%", "Uptime SLA"], ["40%", "Avg. Conversion Lift"], ["24h", "Support Response"]].map(([n, l]) => (
                <div key={l} className="glass rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
                  <p className="text-2xl font-black text-red-400 mb-1">{n}</p>
                  <p className="text-xs text-gray-400">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">Why Businesses Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map(w => (
              <div key={w.title} className="group flex items-start gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Illustration seed={w.seed} ih={56} iw={56} radius={12} />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-1 text-sm group-hover:text-red-600 transition-colors">{w.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg,#fef2f2 0%,#fdf4ff 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-3">Testimonials</span>
            <h2 className="text-3xl font-black text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-red-100">
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(TESTIMONIALS[testimIdx].stars)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
            </div>
            <p className="text-gray-700 text-lg text-center italic leading-relaxed mb-8 max-w-2xl mx-auto">
              "{TESTIMONIALS[testimIdx].text}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="rounded-full overflow-hidden border-2 border-red-200 shadow-md flex-shrink-0" style={{ width: 52, height: 52 }}>
                <Illustration seed={TESTIMONIALS[testimIdx].seed} ih={52} iw={52} radius={26} />
              </div>
              <div>
                <p className="font-black text-gray-900">{TESTIMONIALS[testimIdx].name}</p>
                <p className="text-sm text-gray-500">{TESTIMONIALS[testimIdx].biz}</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              <button onClick={() => setTestimIdx(i => Math.max(0, i - 1))} className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${testimIdx === 0 ? "bg-gray-100 text-gray-400" : "bg-red-600 text-white hover:bg-red-700"}`} disabled={testimIdx === 0}>←</button>
              <div className="flex gap-2 items-center">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setTestimIdx(i)} className="rounded-full transition-all" style={{ width: testimIdx === i ? 24 : 8, height: 8, background: testimIdx === i ? "#dc2626" : "#fca5a5" }} />
                ))}
              </div>
              <button onClick={() => setTestimIdx(i => Math.min(TESTIMONIALS.length - 1, i + 1))} className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${testimIdx === TESTIMONIALS.length - 1 ? "bg-gray-100 text-gray-400" : "bg-red-600 text-white hover:bg-red-700"}`} disabled={testimIdx === TESTIMONIALS.length - 1}>→</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-900/40 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-3">Pricing</span>
            <h2 className="text-3xl font-black text-white">Transparent Packages</h2>
            <p className="text-gray-500 mt-2">No hidden costs. Pick the plan that fits.</p>
          </div>
          <div className=" gap-6 items-center flex w-full justify-center ">
            {PACKAGES.map(pkg => (
              <div key={pkg.name} className={` rounded-3xl p-7 relative max-w-md w-full transition-all hover:scale-[1.02] ${pkg.popular ? "bg-red-600 text-white ring-4 ring-red-400/50 shadow-2xl shadow-red-900/40" : "bg-gray-900 text-gray-300 border border-gray-800"}`}>
                {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full shadow-lg">⭐ MOST POPULAR</div>}
                <p className={`text-sm font-bold uppercase tracking-widest mb-1 ${pkg.popular ? "text-red-200" : "text-gray-500"}`}>{pkg.name}</p>
                <p className={`text-xs font-semibold mb-2 ${pkg.popular ? "text-red-200" : "text-gray-500"}`}>{pkg.sub}</p>
                <p className="text-2xl font-black text-white mb-1 leading-tight">{pkg.price}</p>
                <div className="mb-5" />
                <ul className="space-y-3 mb-7">
                  {pkg.features.map(f => (
                    <li key={f} className={`text-sm flex items-start gap-2.5 ${pkg.popular ? "text-red-100" : "text-gray-400"}`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-px ${pkg.popular ? "bg-white/20 text-white" : "bg-red-900/50 text-red-400"}`}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] ${pkg.popular ? "bg-white text-red-600 hover:bg-gray-100" : "bg-red-600 text-white hover:bg-red-700"}`}>
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-900 rounded-3xl p-10 sm:p-14 shadow-2xl shadow-red-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%,white,transparent),radial-gradient(circle at 80% 20%,white,transparent)" }} />
            <h2 className="relative text-3xl sm:text-4xl font-black text-white mb-4">Ready to Grow Your Business?</h2>
            <p className="relative text-red-100 text-lg mb-8 max-w-lg mx-auto">Let's discuss your project. Free consultation, no commitment, real insights.</p>
            <div className="relative flex flex-wrap gap-4 justify-center">
              <a href="tel:09123503480" className="px-7 py-3.5 bg-white text-red-600 font-black rounded-2xl hover:bg-gray-100 transition-all text-sm shadow-lg">📞 Call Us Now</a>
              <a href="mailto:admin@theredacademy.in" className="px-7 py-3.5 bg-transparent border-2 border-white/60 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-sm">✉ Drop an Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}