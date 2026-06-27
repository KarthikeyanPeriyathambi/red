import { useState } from "react";
import { ParticlesBg, Illustration, SERVICES } from "../../the-red-academy.jsx";

/* ════════════ CONTACT PAGE ════════════ */
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:"",email:"",phone:"",service:"",budget:"",message:""});
  return (
    <div>
      <div className="relative py-28 text-center overflow-hidden" style={{background:"linear-gradient(135deg,#090909,#1a0000)"}}>
        <ParticlesBg />
        <div className="relative z-10">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-lg mx-auto px-4">Ready to start your project? We reply within 24 hours.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-black text-gray-900 text-xl mb-6">Get in Touch</h3>
            {[
              ["icon1","Address","61, Pondy Villupuram Mainroad, Thatanchavady, Villianur, Puducherry 605110"],
              ["phone1","Phone 1","091235 03480"],
              ["phone2","Phone 2","9344225141"],
              ["email","Email","admin@theredacademy.in"],
              ["hours","Hours","Mon–Sat: 9AM – 7PM"],
            ].map(([seed,label,val])=>(
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  <Illustration seed={seed} ih={44} iw={44} radius={12} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                  <p className="text-gray-700 text-sm mt-0.5">{val}</p>
                </div>
              </div>
            ))}
            <a href="https://maps.google.com/maps?q=Villianur+Puducherry" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 mt-6 rounded-2xl border-2 border-gray-200 hover:border-red-400 transition-all"
              style={{height:200, background:'linear-gradient(135deg,#fef2f2,#fff1f2)', textDecoration:'none'}}>
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <p className="font-bold text-gray-700 text-sm">View on Google Maps</p>
                <p className="text-xs text-gray-400 mt-1">Villianur, Puducherry</p>
              </div>
            </a>
          </div>
          <div className="lg:col-span-3 bg-gray-50 rounded-3xl p-8">
            {sent ? (
              <div className="text-center py-14">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">Thanks for reaching out. We'll reply within 24 hours.</p>
                <button onClick={()=>setSent(false)} className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all text-sm">Send Another →</button>
              </div>
            ) : (
              <form onSubmit={e=>{e.preventDefault();setSent(true);}} className="space-y-4">
                <h3 className="font-black text-gray-900 text-xl mb-5">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[["Name","text","name","Your full name"],["Email","email","email","you@company.com"]].map(([l,t,k,ph])=>(
                    <div key={k}>
                      <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">{l}</label>
                      <input type={t} required placeholder={ph} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-red-400 bg-white transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Phone</label>
                    <input type="tel" placeholder="9XXXXXXXXX" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-red-400 bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Budget</label>
                    <select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-red-400 bg-white">
                      <option value="">Select budget...</option>
                      {["Under ₹12,000","₹12,000–₹15,000","₹15,000–₹50,000","Custom Budget"].map(b=><option key={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Service Needed</label>
                  <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-red-400 bg-white">
                    <option value="">Select a service...</option>
                    {SERVICES.map(s=><option key={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Message</label>
                  <textarea required rows={4} placeholder="Tell us about your project, goals and timeline..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-red-400 bg-white resize-none transition-colors" />
                </div>
                <button type="submit" className="w-full py-4 bg-red-600 text-white font-black rounded-xl hover:bg-red-700 transition-all text-sm shadow-lg shadow-red-100">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}