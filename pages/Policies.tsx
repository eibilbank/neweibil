
import React from 'react';
import { ShieldCheck, Scale, FileText, CheckCircle } from 'lucide-react';

const Policies: React.FC = () => {
  const policies = [
    {
      title: "Fair Practice Code",
      icon: Scale,
      content: "Eibil Nidhi Limited adopts a 'Fair Practice Code' for its financial services to ensure transparency and integrity in dealing with members. This code covers loan processing, appraisal, disbursement, and collection mechanisms."
    },
    {
      title: "Interest Rate Policy",
      icon: CheckCircle,
      content: "As per Nidhi Rules, our interest rates on loans are capped at 7.5% above the maximum rate offered on deposits. We ensure that our rates are competitive yet sustainable for the long-term benefit of the company and members."
    },
    {
      title: "KYC & AML Policy",
      icon: ShieldCheck,
      content: "We strictly adhere to Know Your Customer (KYC) guidelines and Anti-Money Laundering (AML) standards. All members must provide valid ID and Address proof as per the regulatory framework of MCA."
    },
    {
      title: "Grievance Redressal",
      icon: FileText,
      content: "Members can approach our Nodal Officer for any unresolved complaints. We are committed to addressing all grievances within 15 working days from the date of receipt."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Statutory Policies</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Adhering to the regulatory framework to ensure your absolute peace of mind.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-10">
        <div className="space-y-8">
          {policies.map((p, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 mr-4">
                  <p.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{p.title}</h3>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>{p.content}</p>
                <button className="text-blue-600 font-bold flex items-center hover:underline">
                   View Full Document <FileText size={16} className="ml-2"/>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Regulatory Compliance</h3>
          <p className="text-blue-100 mb-8">Eibil Nidhi Limited is fully compliant with Nidhi Rules, 2014 and subsequent amendments by the Ministry of Corporate Affairs, India.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">CIN: U65991MH2024NLC123456</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">Ministry of Corporate Affairs Registered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
