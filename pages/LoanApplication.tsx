
import React, { useState } from 'react';
import { ShieldCheck, FileText, User, MapPin, Phone, ArrowRight, CheckCircle, Upload, Database, Loader2, Cloud } from 'lucide-react';

const LoanApplication: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    memberId: '',
    loanType: 'Gold Loan (Immediate)',
    amount: '',
    collateral: '',
    income: 'Salaried'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setIsProcessing(true);
    
    // Create new lead object
    const newLead = {
      id: `ENL-L-${Math.floor(Math.random() * 90000) + 10000}`,
      ...formData,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date().getTime()
    };

    // Store in localStorage for Admin access
    const existingLeads = JSON.parse(localStorage.getItem('eibil_leads') || '[]');
    localStorage.setItem('eibil_leads', JSON.stringify([newLead, ...existingLeads]));

    setTimeout(() => {
      setIsProcessing(false);
      setSubmitted(true);
    }, 2500);
  };

  return (
    <div className="bg-brand-gray min-h-screen pb-20">
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Loan Processing Terminal</h1>
              <div className="flex items-center text-[10px] font-black text-brand-blue mt-1 uppercase tracking-widest">
                <Database size={12} className="mr-1.5" /> Secure Server-Side Sync Active
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-12 h-2 rounded-full transition-all duration-700 ${step >= i ? 'bg-brand-blue shadow-lg' : 'bg-slate-200'}`}></div>
              ))}
            </div>
          </div>
          
          {isProcessing ? (
            <div className="bg-white rounded-2xl shadow-2xl p-20 text-center border border-slate-100 flex flex-col items-center animate-in">
              <div className="relative">
                <Loader2 className="animate-spin text-brand-blue mb-8" size={64} strokeWidth={3} />
                <Cloud className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-blue/20" size={32} />
              </div>
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter mb-2">Synchronizing Application...</h2>
              <p className="text-slate-500 font-bold text-sm">Saving lead to secure Excel repository at Kota HQ.</p>
              
              <div className="mt-12 w-full max-w-sm space-y-4">
                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>Encrypting Identity</span>
                  <span className="text-green-500">COMPLETE</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-blue w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ) : !submitted ? (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-14 border border-slate-100">
              <form onSubmit={nextStep}>
                {step === 1 && (
                  <div className="space-y-10 animate-in">
                    <div className="border-b border-slate-100 pb-6">
                      <h2 className="text-xl font-black text-brand-navy flex items-center uppercase tracking-tight">
                        <User className="mr-3 text-brand-blue" /> Personal Identity
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Legal Name</label>
                        <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="As per PAN" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile Contact</label>
                        <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="+91 XXXX XXXX" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="mail@domain.com" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Member ID (Optional)</label>
                        <input name="memberId" value={formData.memberId} onChange={handleInputChange} type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="ENL-XXXXX" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-10 animate-in">
                    <div className="border-b border-slate-100 pb-6">
                      <h2 className="text-xl font-black text-brand-navy flex items-center uppercase tracking-tight">
                        <ShieldCheck className="mr-3 text-brand-red" /> Loan Requirements
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Loan Category</label>
                        <select name="loanType" value={formData.loanType} onChange={handleInputChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold">
                          <option>Gold Loan (Immediate)</option>
                          <option>Property Loan (Mortgage)</option>
                          <option>Overdraft Against Deposit</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Required Amount (₹)</label>
                        <input required name="amount" value={formData.amount} onChange={handleInputChange} type="number" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="e.g. 500000" />
                      </div>
                      <div className="md:col-span-2 space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Collateral Details</label>
                        <textarea required name="collateral" value={formData.collateral} onChange={handleInputChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold h-32" placeholder="Briefly describe the security assets..."></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-10 animate-in">
                    <div className="border-b border-slate-100 pb-6">
                      <h2 className="text-xl font-black text-brand-navy flex items-center uppercase tracking-tight">
                        <FileText className="mr-3 text-brand-blue" /> Final Confirmation
                      </h2>
                    </div>
                    <div className="p-10 border-2 border-dashed border-slate-200 rounded-2xl text-center space-y-4 hover:border-brand-blue hover:bg-slate-50 transition-all cursor-pointer">
                      <Upload size={32} className="text-brand-blue mx-auto" />
                      <p className="font-black text-slate-800 text-lg uppercase">Attach Documentation (KYC Bundle)</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">PDF or ZIP formats preferred</p>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                      <input type="checkbox" required className="mt-1 w-6 h-6 accent-brand-blue cursor-pointer" />
                      <span className="text-xs font-bold text-brand-navy leading-relaxed uppercase tracking-tighter">
                        I hereby authorize Eibil Nidhi Limited to store my application in their secure database and contact me for further appraisal at Kota HQ.
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-14 flex justify-between gap-6">
                  {step > 1 && (
                    <button type="button" onClick={() => setStep(step - 1)} className="px-10 py-4 text-brand-blue font-black border-2 border-brand-blue rounded-xl hover:bg-brand-blue hover:text-white transition-all uppercase tracking-widest text-xs">
                      Previous
                    </button>
                  )}
                  <button type="submit" className="ml-auto px-12 py-5 bg-brand-red text-white font-black rounded-xl flex items-center hover:scale-105 shadow-2xl shadow-brand-red/30 transition-all uppercase tracking-[0.2em] text-sm">
                    {step === 3 ? 'Authorize & Sync' : 'Continue'} <ArrowRight size={20} className="ml-3" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-20 text-center border border-slate-100 animate-in">
              <div className="w-28 h-28 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                <CheckCircle size={64} strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter mb-4">Application Synchronized</h2>
              <p className="text-lg text-slate-500 font-bold max-w-lg mx-auto mb-12 leading-relaxed">
                Database Entry Complete. Our relationship manager from Kota HQ will reach you within 2 business hours.
              </p>
              <button onClick={() => window.location.href = '#/'} className="px-14 py-5 bg-brand-navy text-white font-black rounded-xl uppercase tracking-widest hover:bg-brand-blue transition-all shadow-xl">
                Return to Home
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LoanApplication;
