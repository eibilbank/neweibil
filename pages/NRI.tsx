
import React from 'react';
import { Globe, Shield, CreditCard, TrendingUp, PhoneCall, ArrowRight, CheckCircle2, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const NRI: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-navy pt-24 pb-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-brand-blue/20 rounded-full border border-brand-blue/30 mb-8">
            <Globe size={14} className="text-brand-blue" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Global Member Services</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            STAY CONNECTED <br /><span className="text-brand-blue">TO YOUR ROOTS.</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed">
            Exclusive financial solutions for Non-Resident Indians to manage their wealth in Rajasthan with absolute safety and high returns.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="px-12 py-5 bg-brand-red text-white font-black rounded-xl uppercase tracking-widest hover:scale-105 transition-all inline-block shadow-2xl shadow-brand-red/30">
              Start NRI Consultation
            </Link>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block translate-y-20">
           <Globe size={600} />
        </div>
      </section>

      {/* Core NRI Offerings */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 group hover:bg-brand-navy transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Landmark size={32} />
              </div>
              <h3 className="text-2xl font-black text-brand-navy group-hover:text-white uppercase mb-4">Repatriable Deposits</h3>
              <p className="text-slate-500 group-hover:text-slate-400 font-bold text-sm leading-relaxed">
                High-yield fixed deposits that offer the flexibility of repatriating funds to your country of residence.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 group hover:bg-brand-navy transition-all duration-500">
              <div className="w-16 h-16 bg-red-50 text-brand-red rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-red group-hover:text-white transition-all">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-black text-brand-navy group-hover:text-white uppercase mb-4">Wealth Management</h3>
              <p className="text-slate-500 group-hover:text-slate-400 font-bold text-sm leading-relaxed">
                Secure your family's future in India with tailored investment plans managed by our Kota experts.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 group hover:bg-brand-navy transition-all duration-500">
              <div className="w-16 h-16 bg-slate-100 text-brand-navy rounded-3xl flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-brand-navy transition-all">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-black text-brand-navy group-hover:text-white uppercase mb-4">Property Guardian</h3>
              <p className="text-slate-500 group-hover:text-slate-400 font-bold text-sm leading-relaxed">
                Avail loans against your properties in Rajasthan for local expenses while you reside abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NRI Choose Eibil */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter mb-10">The NRI Advantage</h2>
              <div className="space-y-6">
                {[
                  { title: "Compliant Framework", desc: "Our NRI operations strictly follow the Nidhi Rules and FEMA-aligned internal policies." },
                  { title: "Digital Onboarding", desc: "Minimal physical presence required. Manage everything through our secure member portal." },
                  { title: "Dedicated Desk", desc: "A special relationship team handles queries from different time zones efficiently." },
                  { title: "Competitive Rates", desc: "Enjoy up to 10.5% p.a. returns, significantly outperforming global savings averages." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 size={24} className="text-brand-blue mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black text-brand-navy uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="bg-brand-navy rounded-[3rem] p-16 text-white text-center shadow-2xl relative overflow-hidden">
                  <PhoneCall size={80} className="mx-auto mb-8 text-brand-blue" />
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Connect Overseas</h3>
                  <p className="text-slate-400 font-bold mb-10 leading-relaxed uppercase tracking-widest text-xs">Our International support line is active 24/7 for member assistance.</p>
                  <div className="text-2xl font-black text-brand-blue">+91 98765 43210</div>
                  <div className="text-[10px] font-black uppercase text-slate-500 mt-2">nri-support@eibilgroup.in</div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NRI;
