
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <div className="bg-white pb-32">
      {/* Concierge Banner */}
      <section className="bg-brand-dark pt-32 pb-20 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
         </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-blue/20 rounded-full border border-brand-blue/30 mb-8">
            <MessageSquare size={14} className="text-brand-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest">24/7 Priority Support</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            MEMBER <br /><span className="text-brand-blue">CONCIERGE.</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed">
            Need help with your account? Want to check loan eligibility? Our experts are standing by.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Quick Contact Grid */}
          <div className="lg:col-span-4 space-y-6">
             <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Phone, label: 'Phone', val: '+91 98765 43210', color: 'bg-blue-500' },
                  { icon: Mail, label: 'Email', val: 'concierge@eibilnidhi.com', color: 'bg-brand-red' },
                  { icon: MapPin, label: 'Visit', val: 'Mumbai HQ, MH', color: 'bg-brand-navy' },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 group hover:bg-brand-navy transition-all duration-500">
                    <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon size={24} />
                    </div>
                    <span className="block text-[10px] text-slate-400 group-hover:text-white/50 uppercase font-black tracking-widest mb-1">{item.label}</span>
                    <p className="text-lg font-black text-brand-navy group-hover:text-white transition-colors">{item.val}</p>
                  </div>
                ))}
             </div>
             
             <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                <ShieldCheck size={40} className="text-brand-blue mb-6" />
                <h4 className="text-xl font-black uppercase mb-4">Zero-Leak Privacy</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">We use 256-bit AES encryption for all digital interactions and physical vault security for your assets.</p>
             </div>
          </div>

          {/* Contact Form Overhaul */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-20 opacity-5">
                  <Zap size={200} />
               </div>
              {submitted ? (
                <div className="text-center py-20 relative z-10">
                  <div className="w-24 h-24 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl animate-bounce">
                    <CheckCircle size={56} />
                  </div>
                  <h2 className="text-4xl font-black text-brand-navy uppercase mb-4">Transmission Successful.</h2>
                  <p className="text-slate-500 text-lg font-medium mb-12">One of our relationship managers will brief you within 60 minutes.</p>
                  <button onClick={() => setSubmitted(false)} className="px-10 py-5 bg-brand-navy text-white font-black rounded-2xl uppercase tracking-widest hover:bg-black transition-all">Send New Query</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                      <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter">Inquiry Terminal</h2>
                      <p className="text-slate-500 font-bold text-sm">Fill out the fields below for instant routing.</p>
                    </div>
                    <div className="bg-brand-red px-4 py-2 rounded-xl">
                      <span className="text-white text-[10px] font-black uppercase tracking-widest">Avg Response: 24m</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Identity</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secure Contact</label>
                      <input required type="tel" placeholder="+91 XXXX XXXX" className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-bold" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                      <select className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-bold appearance-none">
                        <option>Loan Schemes</option>
                        <option>Fixed Deposits</option>
                        <option>Membership Application</option>
                        <option>Customer Portal Help</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Time</label>
                      <select className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-bold appearance-none">
                        <option>Morning (10AM - 1PM)</option>
                        <option>Afternoon (1PM - 4PM)</option>
                        <option>Evening (4PM - 6PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-12 space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Brief Description</label>
                    <textarea rows={4} placeholder="Tell us what you're looking for..." className="w-full px-6 py-5 rounded-2xl bg-white border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-bold"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-navy text-white py-6 rounded-2xl font-black flex items-center justify-center hover:bg-brand-blue shadow-2xl shadow-brand-blue/20 transition-all uppercase tracking-[0.2em]">
                    Initialize Connection <Send size={20} className="ml-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic Map - Glass Frame */}
      <section className="mt-32 px-4 max-w-7xl mx-auto">
         <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-red opacity-10 blur-xl group-hover:opacity-20 transition-all duration-700"></div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.19799295503!2d72.82229624999999!3d19.1098204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
              <div className="absolute top-10 left-10 dark-glass p-8 rounded-3xl border border-white/10 text-white max-w-xs shadow-2xl">
                 <h4 className="text-xl font-black uppercase mb-2">Central HQ</h4>
                 <p className="text-sm font-medium text-slate-300">123 Financial Plaza, BKC Area, Mumbai - 400051</p>
                 <div className="mt-6 flex items-center space-x-2 text-brand-blue text-xs font-black uppercase tracking-widest">
                   <Zap size={14} /> <span>Main Branch</span>
                 </div>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
