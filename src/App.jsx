import { useState, useEffect } from "react";
import { NAV_ITEMS, NavLogo, TheRedLogo, ProjectModal } from "../the-red-academy.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ServicesPage } from "./pages/ServicesPage.jsx";
import { TechnologyPage } from "./pages/TechnologyPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { WhyUsPage } from "./pages/WhyUsPage.jsx";
import { TeamPage } from "./pages/TeamPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";

export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const go = (p) => {
    setPage(p);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        @keyframes fadeInUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn     { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes float      { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-14px) rotate(2deg)} }
        @keyframes spin-slow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes shimmer    { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse      { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes glow-ring  { 0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0.4)} 50%{box-shadow:0 0 0 18px rgba(220,38,38,0)} }
        .fade-up   { animation: fadeInUp 0.65s ease both; }
        .fade-up-2 { animation: fadeInUp 0.65s 0.18s ease both; }
        .fade-up-3 { animation: fadeInUp 0.65s 0.36s ease both; }
        .float-anim  { animation: float 5s ease-in-out infinite; }
        .float-anim-2{ animation: float 6s 1.2s ease-in-out infinite; }
        .service-card:hover .service-img { transform: scale(1.08); }
        .project-card:hover { transform: translateY(-7px); }
        .project-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .nav-link::after { content:''; display:block; height:2px; background:#dc2626; transform:scaleX(0); transition:transform 0.25s; transform-origin:left; }
        .nav-link:hover::after, .nav-link.active::after { transform:scaleX(1); }
        .glass { background:rgba(255,255,255,0.07); backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.14); }
        .red-glow { box-shadow: 0 0 44px rgba(220,38,38,0.35), 0 4px 24px rgba(0,0,0,0.35); }
        .shimmer-text { background:linear-gradient(90deg,#dc2626,#ff6b6b,#dc2626); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3s linear infinite; }
        .tech-card { transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }
        .tech-card:hover { transform:translateY(-6px) scale(1.04); }
        .glow-ring { animation: glow-ring 2.5s ease-in-out infinite; }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => go("Home")} className="flex items-center gap-2 group">
            <NavLogo scrolled={scrolled} />
          </button>
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((n) => (
              <button
                key={n}
                onClick={() => go(n)}
                className={`nav-link px-3 py-1.5 text-sm font-semibold transition-colors rounded-lg ${page === n ? "text-red-600 bg-red-50" : scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"} ${page === n ? "active" : ""}`}>
                {n}
              </button>
            ))}
            <button onClick={() => go("Contact")} className="ml-3 px-5 py-2.5 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30">
              Get Quote
            </button>
          </div>
          <button className={`lg:hidden p-2 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`} onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur border-t border-gray-100 px-4 pb-4">
            {NAV_ITEMS.map((n) => (
              <button
                key={n}
                onClick={() => go(n)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold mt-1 transition-colors ${page === n ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"}`}>
                {n}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        {page === "Home" && <HomePage go={go} setSelected={setSelectedProject} />}
        {page === "About" && <AboutPage go={go} />}
        {page === "Services" && <ServicesPage go={go} />}
        {page === "Technology" && <TechnologyPage />}
        {page === "Projects" && <ProjectsPage setSelected={setSelectedProject} />}
        {page === "Why Us" && <WhyUsPage go={go} />}
        {page === "Team" && <TeamPage />}
        {page === "Contact" && <ContactPage />}
      </main>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <TheRedLogo size={44} white />
              <div>
                <p className="text-white font-black text-base">The Red <span className="text-red-500">Academy</span></p>
                <p className="text-red-400 text-xs font-bold leading-none">Digital Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-5">Full-service digital agency in Puducherry. We build websites, apps and digital marketing campaigns that grow your business.</p>
            <div className="flex gap-3">
              {[["in", "LinkedIn", "#0A66C2"], ["𝕏", "Twitter", "#000"], ["📷", "Instagram", "#E4405F"]].map(([s, n, c]) => (
                <button key={n} title={n} className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-sm font-bold hover:scale-110 transition-all"
                  style={{ color: c }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = c)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#1f2937")}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-bold mb-4 text-sm">Quick Links</p>
            {NAV_ITEMS.map((n) => (
              <button key={n} onClick={() => go(n)} className="block text-sm text-gray-500 hover:text-red-400 transition-colors py-1">
                {n}
              </button>
            ))}
          </div>
          <div>
            <p className="text-white font-bold mb-4 text-sm">Contact</p>
            <div className="space-y-3 text-sm text-gray-500">
              <p className="leading-relaxed">61, Pondy Villupuram Mainroad, Thatanchavady, Puducherry 605110</p>
              <p>📞 +91 91235 03480</p>
              <p>📞 +91 93442 25141</p>
              <a href="mailto:admin@theredacademy.in" className="text-red-400 hover:text-red-300 block">✉ admin@theredacademy.in</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-600">
          © 2024 The Red Academy. All rights reserved. Crafted with ❤️ in Puducherry.
        </div>
      </footer>
    </div>
  );
}
