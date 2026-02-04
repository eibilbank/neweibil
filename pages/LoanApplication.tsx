
import React, { useState } from 'react';
import { ShieldCheck, FileText, User, MapPin, Phone, ArrowRight, CheckCircle, Upload } from 'lucide-react';

const LoanApplication: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  };

  return (
    <div className="bg-brand-gray min-h-screen pb-20">
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-extrabold text-brand-navy uppercase tracking-tighter">Loan Application Portal</h1>
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-8 h-1.5 rounded-full ${step >= i ? 'bg-brand-blue' : 'bg-slate-200'}`}></div>
              ))}
            </div>
          </div>
          
          {!submitted ? (
            <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-slate-100">
              <form onSubmit={nextStep}>
                {step === 1 && (
                  <div className="space-y-8 animate-in">
                    <div className="border-b border-slate-100 pb-4">
                      <h2 className="text-xl font-bold text-brand-navy flex items-center">
                        <User className="mr-2 text-brand-blue" /> Personal Details
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Full Name (As per Aadhar)</label>
                        <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-brand-blue outline-none font-semibold" placeholder="e.g. Rahul Sharma" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-brand-blue outline-none font-semibold" placeholder="+91 00000 00000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                        <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-brand-blue outline-none font-semibold" placeholder="rahul@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Member ID (Optional)</label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-brand-blue outline-none font-semibold" placeholder="ENL-XXXXXX" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in">
                    <div className="border-b border-slate-100 pb-4">
                      <h2 className="text-xl font-bold text-brand-navy flex items-center">
                        <ShieldCheck className="mr-2 text-brand-red" /> Loan Specifics
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Loan Type</label>
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-brand-blue outline-none font-semibold appearance-none">
                          <option>Gold Loan</option>
                          <option>Property Loan</option>
                          <option>Loan Against FD</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Required Amount (₹)</label>
                        <input required type="number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-brand-blue outline-none font-semibold" placeholder="e.g. 500000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Collateral Description</label>
                        <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-brand-blue outline-none font-semibold" placeholder="e.g. 24K Ornaments (45g)"></textarea>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Income Source</label>
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-brand-blue outline-none font-semibold appearance-none">
                          <option>Salaried</option>
                          <option>Self Employed / Business</option>
                          <option>Professional</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in">
                    <div className="border-b border-slate-100 pb-4">
                      <h2 className="text-xl font-bold text-brand-navy flex items-center">
                        <FileText className="mr-2 text-brand-blue" /> Document Review
                      </h2>
                    </div>
                    <div className="grid gap-6">
                      <div className="p-6 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-center space-y-3 hover:border-brand-blue transition-colors cursor-pointer bg-slate-50">
                        <Upload size={32} className="text-slate-400" />
                        <div>
                          <p className="font-bold text-slate-700">Upload Identity Proof</p>
                          <p className="text-xs text-slate-400">PDF, JPG or PNG (Max 5MB)</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-brand-blue">
                        <input type="checkbox" required className="w-4 h-4" />
                        <span className="text-xs font-bold">I authorize Eibil Nidhi Ltd. to verify my documents for the loan process.</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-12 flex justify-between">
                  {step > 1 && (
                    <button type="button" onClick={() => setStep(step - 1)} className="px-8 py-3 text-brand-blue font-bold border-2 border-brand-blue rounded hover:bg-brand-blue hover:text-white transition-all">
                      Previous
                    </button>
                  )}
                  <button type="submit" className="ml-auto px-10 py-3 bg-brand-red text-white font-bold rounded flex items-center hover:brightness-110 shadow-lg shadow-brand-red/20 transition-all uppercase tracking-widest">
                    {step === 3 ? 'Submit Application' : 'Next Step'} <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-2xl p-16 text-center border border-slate-100">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-4xl font-extrabold text-brand-navy uppercase tracking-tighter mb-4">Application Transmitted</h2>
              <p className="text-lg text-slate-500 font-medium max-w-md mx-auto mb-10">
                Your Ref ID: <b>ENL-LOAN-89234</b>. Our relationship manager will contact you within 2 working hours for physical appraisal.
              </p>
              <button onClick={() => window.location.href = '#/'} className="px-10 py-4 bg-brand-blue text-white font-bold rounded uppercase tracking-widest">
                Back to Home
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-brand-navy p-6 rounded-lg text-white">
          <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-brand-blue">Security Protocol</h4>
          <p className="text-sm text-white/70">Your data is encrypted using AES-256 standards. Eibil Nidhi never shares your private documents with 3rd party aggregators.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-brand-red">Help Desk</h4>
          <p className="text-sm text-slate-500">Need help with application? Call our loan experts at <b>+91 98765 43210</b> during business hours.</p>
        </div>
      </section>
    </div>
  );
};

export default LoanApplication;
