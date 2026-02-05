
import React from 'react';
import { Briefcase, BarChart3, TrendingUp, ShieldCheck, Zap, ArrowRight, CheckCircle2, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const SME: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-navy pt-24 pb-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-brand-red/20 rounded-full border border-brand-red/30 mb-8">
            <Briefcase size={14} className="text-brand-red" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Business Growth Capital</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            FUELING THE <br /><span className="text-brand-blue">SME ENGINE.</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed">
            Eibil Nidhi Limited provides local businesses in Kota with the liquidity they need to scale, innovate, and thrive.
          </p>
          <div className="mt-10">
            <Link to="/apply-loan" className="px-12 py-5 bg-brand-blue text-white font-black rounded-xl uppercase tracking-widest hover:scale-105 transition-all inline-block shadow-2xl shadow-brand-blue/30">
              Apply for Business Credit
            </Link>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block translate-x-20">
           <Factory size={600} />
        </div>
      </section>

      {/* SME Loan Products */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Business Credit Portfolios</h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Working Capital", desc: "Short-term credit to manage day-to-day business operations." },
              { icon: TrendingUp, title: "Expansion Loan", desc: "Long-term funding for new machinery or location upgrades." },
              { icon: BarChart3, title: "Asset Credit", desc: "Loans against commercial machinery or inventory." },
              { icon: ShieldCheck, title: "Business Safety", desc: "Secured credit lines with flexible repayment cycles." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 hover:border-brand-blue transition-all group">
                <item.icon className="text-brand-blue mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-lg font-black text-brand-navy uppercase mb-3">{item.title}</h3>
                <p className="text-slate-500 font-bold text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SME Advantage */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brand-navy rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-16 space-y-8">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The SME Partnership</h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                As a Nidhi Company, we understand local market dynamics better than commercial giants. We offer personalized appraisal for your business needs.
              </p>
              <div className="space-y-4">
                {[
                  "No Hidden Charges / Processing Transparency",
                  "Fastest Appraisal in the Industry",
                  "Flexible Repayment Schedules",
                  "High Loan-to-Value for Collateral"
                ].map((txt, i) => (
                  <div key={i} className="flex items-center space-x-3 text-white">
                    <CheckCircle2 className="text-brand-blue" size={20} />
                    <span className="font-black uppercase text-xs tracking-widest">{txt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
               <img 
                 src="https://images.unsplash.com/photo-1521791136064-7986c2959213?q=80&w=1200&auto=format&fit=crop" 
                 alt="Business Handshake" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent"></div>
               <div className="absolute inset-0 flex items-center justify-center p-16">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] text-center w-full">
                     <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-4">Digital Processing Active</p>
                     <p className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Ready to Scale?</p>
                     <Link to="/apply-loan" className="px-10 py-5 bg-brand-red text-white font-black rounded-2xl uppercase tracking-widest hover:brightness-110 transition-all inline-block shadow-2xl">
                        Initiate Application
                     </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SME;
