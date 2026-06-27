import { useState, useEffect, useRef } from "react";
import LOGO_IMG from "./src/assets/logo.png";



/* ─── THE RED ACADEMY LOGO (uploaded image) ─── */
// const LOGO_IMG = "./src/assets/logo.png";

/* ─── TECH STACK DATA ─── */
export const TECH = [
  { name: "React.js", color: "#61DAFB", dark: "#0d1117", icon: "⚛" },
  { name: "Next.js", color: "#ffffff", dark: "#000000", icon: "▲" },
  { name: "Node.js", color: "#339933", dark: "#1a1a1a", icon: "⬡" },
  { name: "MongoDB", color: "#47A248", dark: "#1a1a1a", icon: "🍃" },
  { name: "AWS", color: "#FF9900", dark: "#232F3E", icon: "☁" },
  { name: "WordPress", color: "#21759B", dark: "#1a2a35", icon: "W" },
  { name: "Flutter", color: "#54C5F8", dark: "#0C1B27", icon: "◈" },
  { name: "HTML5", color: "#E34F26", dark: "#1a1a1a", icon: "⑤" },
  { name: "PostgreSQL", color: "#336791", dark: "#1a2535", icon: "🐘" },
  { name: "MySQL", color: "#4479A1", dark: "#1a2535", icon: "🐬" },
  { name: "TailwindCSS", color: "#06B6D4", dark: "#0f172a", icon: "🌊" },
  { name: "TypeScript", color: "#3178C6", dark: "#1a1a1a", icon: "TS" },
  { name: "Firebase", color: "#FFCA28", dark: "#1a1200", icon: "🔥" },
  { name: "GraphQL", color: "#E10098", dark: "#1a001a", icon: "◎" },
  { name: "Docker", color: "#2496ED", dark: "#0d1b2a", icon: "🐳" },
  { name: "Figma", color: "#F24E1E", dark: "#1a0a00", icon: "✦" },
  // { name: "Google", color: "#4285F4", dark: "#fff", icon: "G" },
  // { name: "Vue.js", color: "#42b883", dark: "#1a1a1a", icon: "◐" },
];

/* ─── TECH ICON: inline SVG letter badge ─── */
export function TechIcon({ tech, size = 40 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 10,
      background: `${tech.color}22`,
      border: `2px solid ${tech.color}55`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: tech.icon.length > 1 ? size * 0.28 : size * 0.45,
      color: tech.color, fontWeight: 900, userSelect: "none",
      flexShrink: 0,
    }}>
      {tech.icon}
    </div>
  );
}

/* ─── ILLUSTRATION: colored gradient placeholder for images ─── */
const ILLUS_MAP = {
  webdev: ["#3b82f6", "#1d4ed8", "💻"], ecomm: ["#10b981", "#065f46", "🛒"],
  design: ["#8b5cf6", "#5b21b6", "🎨"], maint: ["#f59e0b", "#92400e", "🔧"],
  mobile: ["#06b6d4", "#0e7490", "📱"], marketing: ["#ec4899", "#9d174d", "📊"],
  seo: ["#84cc16", "#3f6212", "🔍"], cloud: ["#6366f1", "#3730a3", "☁️"],
  fast: ["#f97316", "#7c2d12", "⚡"], responsive: ["#14b8a6", "#134e4a", "📐"],
  seo2: ["#a3e635", "#365314", "🔎"], price: ["#fbbf24", "#78350f", "💰"],
  support: ["#60a5fa", "#1e3a5f", "🎧"], results: ["#34d399", "#064e3b", "📈"],
  proj1: ["#22c55e", "#14532d", "🛒"], proj2: ["#3b82f6", "#1e3a8a", "🏥"],
  proj3: ["#a855f7", "#4c1d95", "📚"], proj4: ["#ef4444", "#7f1d1d", "📋"],
  proj5: ["#f59e0b", "#78350f", "🏨"],
  "team-bg": ["#dc2626", "#7f1d1d", "👥"],
  about1: ["#3b82f6", "#1d4ed8", "🔍"], about2: ["#10b981", "#065f46", "⚡"],
  about3: ["#8b5cf6", "#5b21b6", "✨"], about4: ["#f59e0b", "#92400e", "🤝"],
  "service-a": ["#3b82f6", "#1d4ed8", "💡"], "service-b": ["#8b5cf6", "#5b21b6", "🎨"],
  "service-c": ["#10b981", "#065f46", "⚙️"],
  "tech-hero": ["#3b82f6", "#1d4ed8", "🎨"], tech2: ["#6366f1", "#3730a3", "⚙️"], tech3: ["#06b6d4", "#0e7490", "☁️"],
  arjun: ["#dc2626", "#7f1d1d", "AK"], priya: ["#7c3aed", "#4c1d95", "PM"], ravi: ["#0284c7", "#0c4a6e", "RS"],
  karthik: ["#1d4ed8", "#1e3a8a", "KR"], divya: ["#be185d", "#831843", "DS"], aryan: ["#059669", "#064e3b", "AM"],
  phone1: ["#2563eb", "#1e3a8a", "📞"], phone2: ["#16a34a", "#14532d", "📞"],
  email: ["#dc2626", "#7f1d1d", "✉"], hours: ["#d97706", "#78350f", "🕐"],
  icon1: ["#7c3aed", "#4c1d95", "🏠"],
  food: ["#16a34a", "#14532d", "🛒"], delivery: ["#2563eb", "#1e3a8a", "🚴"],
  dashboard: ["#d97706", "#78350f", "📊"], meal: ["#7c3aed", "#4c1d95", "🍱"], hrm: ["#dc2626", "#7f1d1d", "👤"],
};
export function Illustration({ seed = "img", iw = "100%", ih = 200, radius = 0 }) {
  const [c1, c2, ico] = ILLUS_MAP[seed] || ["#dc2626", "#7f1d1d", "🖥"];
  const fontSize = typeof ih === "number" ? Math.max(16, ih * 0.28) : 32;
  return (
    <div style={{
      width: iw, height: ih, borderRadius: radius,
      background: `linear-gradient(135deg,${c1},${c2})`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: 8, overflow: "hidden", flexShrink: 0,
    }}>
      <span style={{ fontSize, lineHeight: 1 }}>{ico}</span>
      <div style={{ width: "60%", height: "3px", background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
      <div style={{ width: "40%", height: "3px", background: "rgba(255,255,255,0.2)", borderRadius: 2 }} />
    </div>
  );
}

export const NAV_ITEMS = ["Home", "About", "Services", "Technology", "Projects", "Why Us", "Team", "Contact"];

export const SERVICES = [
  { seed: "webdev", title: "Website Development", desc: "Custom, high-performance websites built with React, Next.js and Node.js tailored to your brand and business goals." },
  { seed: "ecomm", title: "E-commerce Development", desc: "End-to-end online stores with secure payment gateways, inventory management and seamless checkout UX." },
  { seed: "design", title: "UI/UX Design", desc: "User-first design systems, wireframes and high-fidelity prototypes that convert visitors into loyal customers." },
  { seed: "maint", title: "Website Maintenance", desc: "Ongoing support, updates, security patches and performance optimisation to keep your site running 24/7." },
  { seed: "mobile", title: "App Development", desc: "Native and cross-platform mobile apps for iOS and Android using Flutter and React Native." },
  { seed: "marketing", title: "Digital Marketing", desc: "SEO, Google Ads, Meta Ads, content strategy and social media management to drive measurable growth." },
  { seed: "seo", title: "SEO Optimisation", desc: "Technical SEO, on-page optimisation, backlink building and Core Web Vitals tuning for top rankings." },
  { seed: "cloud", title: "Cloud & Hosting", desc: "AWS and cloud infrastructure setup, CI/CD pipelines, auto-scaling and 99.9% uptime SLA management." },
];

export const PROJECT_SCREENS = [
  { label: "Le Pondy Kitchen", bg: "#1a0000", accent: "#dc2626", desc: "Dark-themed food ordering website with stunning product photography", icon: "🍽️", url: "lepondykitchen.in", img: "lepondy" },
  { label: "HEALIX Dashboard", bg: "#fef3c7", accent: "#92400e", desc: "Event registration admin dashboard with revenue, bookings & food stats", icon: "📊", url: "healix2026.com", img: "healix_dash" },
  { label: "HEALIX 2026 Conf", bg: "#78350f", accent: "#d97706", desc: "International medical conference website with registration flow", icon: "🏥", url: "healix2026.com", img: "healix_conf" },
  { label: "CbeezAI ERP", bg: "#111827", accent: "#6b7280", desc: "AI-powered ERP & CRM SaaS with WhatsApp integration and multi-tenancy", icon: "🤖", url: "cbeezai.com", img: "cbeezai" },
  { label: "Jeevan Baby Care", bg: "#faf5ff", accent: "#7c3aed", desc: "Baby care mobile app with appointment booking and vaccination guides", icon: "👶", url: "jeevanbabyrcare.com", img: "jeevan" },
  { label: "CloudBees Tech", bg: "#1a1a2e", accent: "#f59e0b", desc: "AI-powered business solutions website with ERP & CRM product showcase", icon: "☁️", url: "cloudbees.tech", img: "cb_products" },
];

export const PROJ_IMGS = {
  luca: new URL("./src/assets/luca.png", import.meta.url).href,
  healix_dash: new URL("./src/assets/healix_dash.png", import.meta.url).href,
  healix_conf: new URL("./src/assets/healix.png", import.meta.url).href,
  cloudbees: new URL("./src/assets/cloudbees.png", import.meta.url).href,
  hr360: new URL("./src/assets/hr360.png", import.meta.url).href,
  adinin: new URL("./src/assets/adinin.png", import.meta.url).href,
  svcet: new URL("./src/assets/svcet.png", import.meta.url).href,
  svmc: new URL("./src/assets/svmc.png", import.meta.url).href,
  lepondy: new URL("./src/assets/lepondy.png", import.meta.url).href,
  css: new URL("./src/assets/css.png", import.meta.url).href,
  cb_products: new URL("./src/assets/cb_products.png", import.meta.url).href,
  cbeezai: new URL("./src/assets/cbeezai.png", import.meta.url).href,
  bees2v: new URL("./src/assets/bees2v.png", import.meta.url).href,
  jeevan: new URL("./src/assets/jeevan.png", import.meta.url).href,
};

export const PROJECTS = [
  { name: "LUCA Digital Solutions", industry: "Digital Marketing", features: ["SEO & SEM", "Google Ads", "Social Media", "Responsive Design"], color: "#1e3a8a", bg: "#eff6ff", img: "luca", url: "https://lucadigitalsolutions.in" },
  { name: "HEALIX Dashboard", industry: "Healthcare / Events", features: ["Event Bookings", "Revenue Tracking", "VEG/Non-VEG Stats", "Date Filters"], color: "#78350f", bg: "#fef3c7", img: "healix_dash", url: "https://healixmedcon.com/login" },
  { name: "HEALIX 2026 Conference", industry: "Medical Conference", features: ["Registration Flow", "Schedule Viewer", "Mobile First", "Branding"], color: "#92400e", bg: "#fffbeb", img: "healix_conf", url: "https://healixmedcon.com/" },
  { name: "CloudBees Tech Website", industry: "IT / SaaS", features: ["AI-Powered UI", "ERP & CRM", "Service Showcase", "Lead Gen"], color: "#854d0e", bg: "#fefce8", img: "cloudbees", url: "https://cbt.cbeezai.com" },
  { name: "HR 360°", industry: "HR Software", features: ["Financial Planning", "Employee Mgmt", "Responsive Design", "Dashboard"], color: "#0e7490", bg: "#ecfeff", img: "hr360", url: "https://hr360e.web.app" },
  { name: "ADININ Works", industry: "Engineering / Construction", features: ["Service Listing", "Photo Gallery", "Corporate Branding", "Mobile Responsive"], color: "#374151", bg: "#f9fafb", img: "adinin", url: "https://adininworks.co" },
  { name: "Sri Venkateshwaraa CET", industry: "Education", features: ["Admission Enquiry", "Course Selection", "Apply Now", "24/7 Chat"], color: "#1d4ed8", bg: "#eff6ff", img: "svcet", url: "https://svcet.ac.in" },
  { name: "SVMC Hospital", industry: "Medical Education", features: ["Admissions", "360° View", "Pay Now", "Medical Research"], color: "#1e40af", bg: "#dbeafe", img: "svmc", url: "https://svmchrc.ac.in" },
  { name: "Le Pondy Kitchen", industry: "Food & Restaurant", features: ["Dark UI", "Order Now", "Menu Showcase", "Brand Identity"], color: "#991b1b", bg: "#fef2f2", img: "lepondy", url: "https://lepondy-kitchen.vercel.app/" },
  { name: "Cloud Staffing Services", industry: "Home Services", features: ["Service Showcase", "Cleaning Packages", "Lead Form", "Brand Design"], color: "#1e3a8a", bg: "#eff6ff", img: "css", url: "https://cloud-staffing-services.vercel.app/" },
  { name: "CloudBees Products", industry: "IT / SaaS", features: ["CRM Showcase", "ERP Products", "Mobile + Desktop", "Feature Bullets"], color: "#92400e", bg: "#fef9c3", img: "cb_products", url: "https://cloudbeestech.com" },
  { name: "CbeezAI ERP & CRM", industry: "AI / SaaS", features: ["Multi-tenant ERP", "AI Chat", "WhatsApp Integration", "Sales & HR"], color: "#111827", bg: "#f3f4f6", img: "cbeezai", url: "https://cbeezai.com" },
  { name: "Bees2Ventures", industry: "Tech Training", features: ["DevOps Courses", "Tech Solutions", "Find Out More", "Blue Gradient UI"], color: "#1d4ed8", bg: "#eff6ff", img: "bees2v", url: "https://bees2ventures.com" },
  { name: "Jeevan Baby Care", industry: "Healthcare App", features: ["Book Appointment", "Vaccination Guide", "Know My Doctors", "Parent Portal"], color: "#7c3aed", bg: "#faf5ff", img: "jeevan" },
];

export const WHY_US = [
  { seed: "fast", title: "Fast Delivery", desc: "Agile sprints & clear milestones — we ship on time, every time." },
  { seed: "responsive", title: "Responsive Design", desc: "Pixel-perfect on every screen — desktop, tablet, and mobile." },
  { seed: "seo2", title: "SEO Friendly", desc: "Built with Core Web Vitals, semantic HTML & meta strategy from day one." },
  { seed: "price", title: "Affordable Pricing", desc: "Transparent packages with no hidden costs. Quality that respects your budget." },
  { seed: "support", title: "Dedicated Support", desc: "Real humans answer your messages. We treat every client like our only client." },
  { seed: "results", title: "Proven Results", desc: "50+ delivered projects, high client satisfaction and measurable growth outcomes." },
];

export const PACKAGES = [
  // { name: "Basic", price: "₹10,000 – ₹12,000", sub: "Static Website", features: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic SEO", "1-month support", "Fast delivery"], popular: false },
  { name: "Client's Budget", sub: "Custom Project", features: ["Fully custom scope", "Web app / E-commerce", "Custom UI/UX design", "Performance optimisation", "Mobile responsive", "6-month support", "Fast delivery", "Digital marketing", "Priority support"], popular: false },

];

export const TEAM = [
  { name: "Arthi Harikrishnan", role: "Senior Web Developer", skills: ["React.js", "Next.js", "Node.js", "AWS"], exp: "2+ years", bio: "MERN Stack specialist who led a 3-member team building CRM, HRMS and ERP platforms. Proficient in AWS, CI/CD and RESTful APIs.", initials: "AH", color: "#059669", seed: "arjun", resume: new URL("./src/assets/ARTHI_HARIKRISHNAN.pdf", import.meta.url).href },
  { name: "P. Karthikeyan", role: "Digital & Software Engineer", skills: ["React.js", "WordPress", "Google Ads", "Adobe CC"], exp: "Freelance", bio: "End-to-end web development, digital marketing campaigns, graphic design and video editing. Delivered SEO and PPC campaigns with measurable ROI for SMEs and startups.", initials: "PK", color: "#f59e0b", seed: "priya", resume: new URL("./src/assets/Karthikeyan_Resume.pdf", import.meta.url).href },
  { name: "Hemavathi D", role: "UI/UX & Graphic Designer", skills: ["Figma", "User Research", "Prototyping", "Adobe XD"], exp: "2+ years", bio: "Designs user-centred HR dashboards, food apps and corporate websites from research to high-fidelity prototype across healthcare, finance and enterprise.", initials: "HD", color: "#e11d48", seed: "ravi", resume: new URL("./src/assets/Hemavathi_D_ATS_Resume.pdf", import.meta.url).href },
  { name: "Hariharan R", role: "Full Stack Developer", skills: ["React.js", "Next.js", "Node.js", "PHP/Laravel"], exp: "2+ years", bio: "Builds ERP SaaS, AI-powered data agents, and subscription platforms. Engineered CbeezAI multi-tenant ERP and CrookJunk food ordering with Razorpay & WhatsApp integration.", initials: "HR", color: "#0891b2", seed: "arjun", resume: new URL("./src/assets/HARIHARAN.pdf", import.meta.url).href },
];

export const TESTIMONIALS = [
  { name: "Karthik R.", biz: "FreshMart India", text: "The Red Academy transformed our idea into a full e-commerce platform in under 6 weeks. Exceptional quality and communication!", stars: 5, avatar: "KR", seed: "karthik" },
  { name: "Divya S.", biz: "MediLink Clinics", text: "Professional, responsive and detail-oriented. Our patient portal works flawlessly and our bookings went up 40%.", stars: 5, avatar: "DS", seed: "divya" },
  { name: "Aryan M.", biz: "SkillUp Academy", text: "The LMS they built for us handles 1000+ students without a hitch. Best digital investment we've made.", stars: 5, avatar: "AM", seed: "aryan" },
];

/* ─── ANIMATED COUNTER ─── */
export function Counter({ target, suffix = "", prefix = "" }) {
  const [v, setV] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let cur = 0, step = Math.ceil(target / 60);
      const t = setInterval(() => { cur = Math.min(cur + step, target); setV(cur); if (cur >= target) clearInterval(t); }, 25);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{v}{suffix}</span>;
}

/* ─── THE RED ACADEMY LOGO RECREATION ─── */
export function TheRedLogo({ size = 48, white = false }) {
  // Recreate the logo from the uploaded image: red A shape with open book and pen nib
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="agrad" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#ff0000" />
          <stop offset="100%" stopColor="#8b0000" />
        </linearGradient>
      </defs>
      {/* A shape - two angled bars */}
      <polygon points="50,8 75,62 65,62 50,28 35,62 25,62" fill="url(#agrad)" />
      {/* Right bar of A */}
      <polygon points="68,48 78,70 68,70 60,50" fill="url(#agrad)" />
      {/* Left bar of A */}
      <polygon points="32,48 40,50 32,70 22,70" fill="url(#agrad)" />
      {/* Open book - left page */}
      <path d="M20,68 Q35,58 50,65 L50,75 Q35,70 20,78 Z" fill={white ? "#fff" : "#111"} opacity="0.9" />
      {/* Open book - right page */}
      <path d="M80,68 Q65,58 50,65 L50,75 Q65,70 80,78 Z" fill={white ? "#fff" : "#111"} opacity="0.9" />
      {/* Book spine lines */}
      <path d="M20,68 Q35,59 50,65" fill="none" stroke="#cc0000" strokeWidth="1.5" />
      <path d="M80,68 Q65,59 50,65" fill="none" stroke="#cc0000" strokeWidth="1.5" />
      {/* Pen nib stem */}
      <line x1="50" y1="38" x2="50" y2="64" stroke="#cc0000" strokeWidth="2.5" />
      {/* Pen nib dot */}
      <circle cx="50" cy="36" r="3" fill="#cc0000" />
      {/* Pen nib triangle */}
      <polygon points="50,46 46,56 54,56" fill="#cc0000" />
    </svg>
  );
}

/* ─── LUCA DIGITAL NAV LOGO ─── */
export function NavLogo({ scrolled }) {
  return (
    <div className="flex items-center gap-2.5">
      <TheRedLogo size={40} />
      <div>
        <p className={`text-sm font-black leading-none transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
          <span className={scrolled ? "text-gray-900" : "text-white"}>The Red </span>
          <span className="text-red-500">Academy</span>
        </p>
        <p className="text-xs text-red-500 font-bold leading-none">Digital Solutions</p>
      </div>
    </div>
  );
}

/* ─── PHONE MOCKUP ─── */
export function PhoneMockup({ screen, onClick }) {
  return (
    <div className="relative mx-auto cursor-pointer select-none" style={{ width: 220 }} onClick={onClick}>
      <div className="relative rounded-[2.5rem] bg-gray-900 p-1.5 shadow-2xl" style={{ border: "3px solid #222" }}>
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-full z-10" />
        <div className="rounded-[2rem] overflow-hidden" style={{ height: 380, background: screen.bg }}>
          {screen.img && PROJ_IMGS[screen.img] ? (
            <img src={PROJ_IMGS[screen.img]} alt={screen.label}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-3 px-4">
              <span className="text-4xl">{screen.icon}</span>
              <p className="font-black text-lg text-center" style={{ color: screen.accent }}>{screen.label}</p>
              <p className="text-xs text-gray-500 text-center leading-relaxed">{screen.desc}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center pt-1 pb-0.5">
          <div className="w-12 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ─── TECH MARQUEE WITH REAL LOGOS ─── */
export function TechMarquee({ reverse = false }) {
  return (
    <div className="relative overflow-hidden py-5" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
      <style>{`
        @keyframes marquee-fwd { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes marquee-rev { from{transform:translateX(-50%)} to{transform:translateX(0)} }
        .marquee-fwd { display:flex; width:max-content; animation:marquee-fwd 32s linear infinite; }
        .marquee-rev { display:flex; width:max-content; animation:marquee-rev 32s linear infinite; }
        .marquee-fwd:hover, .marquee-rev:hover { animation-play-state:paused; }
      `}</style>
      <div className={reverse ? "marquee-rev" : "marquee-fwd"}>
        {[...TECH, ...TECH].map((t, i) => (
          <div key={i} className="mx-3 flex flex-col items-center gap-2 group cursor-default">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all group-hover:scale-110 group-hover:shadow-xl"
              style={{ background: t.dark === "#f0f0f1" || t.dark === "#f5f5f5" || t.dark === "#fff" ? "#f8f8f8" : t.dark, border: `1.5px solid ${t.color}35`, padding: 8 }}>
              <TechIcon tech={t} size={36} />
            </div>
            <span className="text-xs font-bold whitespace-nowrap" style={{ color: t.color }}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ANIMATED PARTICLES + GRID BG ─── */
export function ParticlesBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(22)].map((_, i) => (
        <div key={i} className="absolute rounded-full"
          style={{
            width: `${6 + i * 5}px`, height: `${6 + i * 5}px`,
            left: `${(i * 13 + 7) % 100}%`, top: `${(i * 19 + 11) % 100}%`,
            background: `rgba(${i % 2 ? 220 : 180},${i % 3 ? 20 : 50},${i % 2 ? 20 : 60},${0.06 + i * 0.005})`,
            animation: `pulse ${2 + i * 0.25}s ${i * 0.35}s ease-in-out infinite alternate`
          }} />
      ))}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

/* ─── HERO ANIMATED CODE LINES ─── */
export function HeroCodeBg() {
  const lines = [
    "const app = createApp();",
    "app.use(router).mount('#root');",
    "export default function Hero() {",
    "  return <div className='min-h-screen'>",
    "npm run build && deploy",
    "git push origin main",
    "const [data] = useFetch('/api/v1');",
    "tailwind.config.js → theme.extend",
    "docker-compose up --build -d",
    "SELECT * FROM projects WHERE done=true",
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {lines.map((l, i) => (
        <div key={i} className="absolute whitespace-nowrap font-mono text-xs"
          style={{
            top: `${8 + i * 9}%`, left: `${i % 2 === 0 ? -10 : 60}%`,
            color: `rgba(220,38,38,${0.04 + i * 0.006})`,
            animation: `drift-${i % 2 === 0 ? 'r' : 'l'} ${20 + i * 3}s ${i * 1.5}s linear infinite`,
          }}>{l}</div>
      ))}
      <style>{`
        @keyframes drift-r { from{transform:translateX(0)} to{transform:translateX(120vw)} }
        @keyframes drift-l { from{transform:translateX(0)} to{transform:translateX(-120vw)} }
      `}</style>
    </div>
  );
}

/* ─── PROJECT MODAL ─── */
export function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="relative overflow-hidden" style={{ height: 220 }}>
          <img src={PROJ_IMGS[project.img]} alt={project.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <div className="absolute inset-0" style={{ background: `${project.color}bb` }} />
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 transition-all text-lg font-bold">×</button>
          <div className="absolute bottom-4 left-5">
            <p className="text-xs font-bold text-white/80 uppercase tracking-wider">{project.industry}</p>
            <h3 className="text-xl font-black text-white">{project.name}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: project.color }}>Key Features</p>
          <ul className="space-y-2 mb-5">
            {project.features.map(f => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: project.color }}>✓</span>{f}
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <button onClick={() => window.open(project.url, "_blank")} className="flex-1 py-3 rounded-xl text-white font-bold text-sm" style={{ background: project.color }}>
              View Case Study →
            </button>
            <button onClick={onClose} className="px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN APP
════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  const go = p => { setPage(p); setMenuOpen(false); };

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

      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => go("Home")} className="flex items-center gap-2 group">
            <NavLogo scrolled={scrolled} />
          </button>
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map(n => (
              <button key={n} onClick={() => go(n)}
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
              {menuOpen ? <><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur border-t border-gray-100 px-4 pb-4">
            {NAV_ITEMS.map(n => (
              <button key={n} onClick={() => go(n)} className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold mt-1 transition-colors ${page === n ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"}`}>{n}</button>
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

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <TheRedLogo size={44} white />
              <div>
                <p className="text-white font-black text-base">The Red <span className="text-red-500">Academy</span></p>
                <p className="text-red-400 text-xs font-semibold">Digital Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-5">Full-service digital agency in Puducherry. We build websites, apps and digital marketing campaigns that grow your business.</p>
            <div className="flex gap-3">
              {[["in", "LinkedIn", "#0A66C2"], ["𝕏", "Twitter", "#000"], ["📷", "Instagram", "#E4405F"]].map(([s, n, c]) => (
                <button key={n} title={n} className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-sm font-bold hover:scale-110 transition-all"
                  style={{ color: c }} onMouseEnter={e => e.currentTarget.style.background = c} onMouseLeave={e => e.currentTarget.style.background = "#1f2937"}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-bold mb-4 text-sm">Quick Links</p>
            {NAV_ITEMS.map(n => (
              <button key={n} onClick={() => go(n)} className="block text-sm text-gray-500 hover:text-red-400 transition-colors py-1">{n}</button>
            ))}
          </div>
          <div>
            <p className="text-white font-bold mb-4 text-sm">Contact</p>
            <div className="space-y-3 text-sm text-gray-500">
              <p className="leading-relaxed">61, Pondy Villupuram Mainroad, Thatanchavady, Puducherry 605110</p>
              <p>📞 091235 03480</p>
              <p>📞 9344225141</p>
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

















