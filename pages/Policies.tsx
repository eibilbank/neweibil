
import React from 'react';
import { ShieldCheck, Scale, FileText, CheckCircle } from 'lucide-react';

const Policies: React.FC = () => {
  const policies = [
    {
      title: "Fair Practice Code",
      icon: Scale,
      content: "Eibil Nidhi Limited (Kota) adopts a 'Fair Practice Code' to ensure ethical conduct in all member interactions. This includes transparent loan valuations and timely disclosures as per Nidhi Rules 2014."
    },
    {
      title: "Interest Rate Transparency",
      icon: CheckCircle,
      content: "In alignment with MCA regulations, our loan interest rates are strictly governed. We ensure all members understand the effective interest rate, processing fees, and valuation charges before disbursement."
    },
    {
      title: "KYC & Compliance",
      icon: ShieldCheck,
      content: "All members must fulfill KYC requirements as per the Rajasthan state regulatory framework and Nidhi guidelines. Valid proof of identity and local address is mandatory for membership."
    },
    {
      title: "Data Protection Policy",
      icon: FileText,
      content: "Member data is stored securely on our central servers. We do not engage with third-party aggregators, ensuring your financial privacy is maintained within the Eibil Nidhi ecosystem."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-brand-navy py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter">Statutory Framework</h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">Compliance, Transparency, and Security at the heart of our operations.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="space-y-8">
          {policies.map((p, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 hover:border-brand-blue transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-4 rounded-xl text-brand-blue mr-5">
                  <p.icon size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy uppercase tracking-tight">{p.title}</h3>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p className="font-medium text-lg">{p.content}</p>
                <button className="text-brand-blue font-black text-xs uppercase tracking-widest flex items-center hover:underline">
                   View Full Policy Document <FileText size={16} className="ml-2"/>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-blue rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-4 opacity-10">
            <Scale size={150} />
          </div>
          <h3 className="text-3xl font-extrabold mb-6 uppercase tracking-tighter">Corporate Governance</h3>
          <p className="text-blue-50 mb-10 text-lg font-medium leading-relaxed">
            Eibil Nidhi Limited is registered under the Companies Act and strictly follows the regulatory framework of the Ministry of Corporate Affairs (MCA).
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white/10 px-8 py-4 rounded-xl backdrop-blur-md border border-white/20">
              <span className="text-[10px] block font-black text-white/50 uppercase tracking-widest mb-1">CIN (Registered)</span>
              <span className="font-extrabold text-sm tracking-widest">U65929RJ2018PLC061161</span>
            </div>
            <div className="bg-white/10 px-8 py-4 rounded-xl backdrop-blur-md border border-white/20">
              <span className="text-[10px] block font-black text-white/50 uppercase tracking-widest mb-1">State Jurisdiction</span>
              <span className="font-extrabold text-sm tracking-widest uppercase">Rajasthan, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
