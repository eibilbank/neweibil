
import React, { useState } from 'react';
import { 
  ShieldCheck, FileText, User, MapPin, Phone, 
  ArrowRight, CheckCircle, Upload, Database, 
  Loader2, Cloud, CreditCard, Landmark, 
  Briefcase, AlertCircle, Scale, Coins, Building, Users
} from 'lucide-react';

const LoanApplication: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Identity
    name: '',
    phone: '',
    email: '',
    pan: '',
    aadhaar: '',
    memberId: '', // Added: Nidhi member verification
    
    // Financial & Professional
    occupation: 'Salaried',
    monthlyIncome: '',
    address: '',
    
    // Loan Specifics
    loanType: 'Gold Loan (Immediate)',
    amount: '',
    purpose: 'Personal/Emergency',
    collateral: '',
    collateralDetail: '', // Added: Specifics (e.g. Grams of Gold, Property Area)
    
    // Guarantor info (Standard for Nidhi)
    guarantorName: '',
    guarantorPhone: '',
    
    // Disbursement
    bankAccount: '',
    ifsc: '',
    bankName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setIsProcessing(true);
    
    const newLead = {
      id: `ENL-L-${Math.floor(Math.random() * 90000) + 10000}`,
      type: 'Loan',
      ...formData,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date().getTime()
    };

    const existingLeads = JSON.parse(localStorage.getItem('eibil_leads') || '[]');
    localStorage.setItem('eibil_leads', JSON.stringify([newLead, ...existingLeads]));

    setTimeout(() => {
      setIsProcessing(false);
      setSubmitted(true);
    }, 3000);
  };

  const stepsHeader = [
    { id: 1, label: 'Identity', icon: User },
    { id: 2, label: 'Financial', icon: Briefcase },
    { id: 3, label: 'Requirement', icon: Coins },
    { id: 4, label: 'Settlement', icon: Landmark }
  ];

  return (
    <div className="bg-brand-gray min-h-screen pb-20">
      {/* Dynamic Header */}
      <section className="bg-white border-b border-slate-200 py-12 sticky top-[110px] z-40">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Loan Processing Terminal</h1>
              <div className="flex items-center text-[10px] font-black text-brand-blue uppercase tracking-[0.2em]">
                <Database size={12} className="mr-2" /> Encrypted Institutional Link
              </div>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {stepsHeader.map((s, idx) => (
                <div key={s.id} className="flex items-center shrink-0">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500 border-2 ${step === s.id ? 'bg-brand-blue text-white border-brand-blue shadow-xl shadow-brand-blue/20' : step > s.id ? 'bg-green-500 text-white border-green-500' : 'bg-white text-slate-300 border-slate-100'}`}>
                    {step > s.id ? <CheckCircle size={20} /> : <s.icon size={18} />}
                  </div>
                  <span className={`hidden md:block ml-3 text-[10px] font-black uppercase tracking-widest ${step === s.id ? 'text-brand-navy' : 'text-slate-400'}`}>{s.label}</span>
                  {idx < stepsHeader.length - 1 && <div className={`w-4 md:w-8 h-0.5 mx-2 md:mx-4 rounded-full ${step > s.id ? 'bg-green-500' : 'bg-slate-100'}`}></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        {isProcessing ? (
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-20 text-center border border-slate-100 flex flex-col items-center animate-in">
            <div className="relative mb-10">
              <Loader2 className="animate-spin text-brand-blue" size={80} strokeWidth={2} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <ShieldCheck size={32} className="text-brand-blue opacity-20" />
              </div>
            </div>
            <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter mb-4">Establishing Secure Node Link</h2>
            <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Committing application to Kota HQ Central Vault</p>
            
            <div className="mt-12 w-full max-w-sm space-y-6">
              <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <span className="flex items-center"><Cloud size={10} className="mr-2"/> End-to-End Encryption</span>
                <span className="text-green-500">ACTIVE</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                 <div className="h-full bg-brand-blue w-2/3 animate-[progress_3s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>
        ) : !submitted ? (
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-slate-50 border-b border-slate-100 px-10 py-6 flex justify-between items-center">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Module: LOAN_PROC_V4</span>
               <div className="flex items-center text-[10px] font-black text-brand-red uppercase tracking-widest">
                  <Scale size={14} className="mr-2" /> Nidhi Rules 2014 Compliant
               </div>
            </div>
            
            <form onSubmit={nextStep} className="p-10 md:p-16">
              {step === 1 && (
                <div className="space-y-12 animate-in">
                  <div className="border-b border-slate-100 pb-8 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">Identity Verification</h2>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Official Member Recognition</p>
                    </div>
                    <User size={40} className="text-slate-100" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Legal Name (as per PAN)</label>
                      <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold uppercase" placeholder="JOHN DOE" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Member ID (If existing)</label>
                      <input name="memberId" value={formData.memberId} onChange={handleInputChange} type="text" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold uppercase" placeholder="ENL-MEM-XXXX" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">PAN Card Number</label>
                      <input required name="pan" value={formData.pan} onChange={handleInputChange} type="text" maxLength={10} className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold uppercase" placeholder="ABCDE1234F" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile Number (Aadhaar Linked)</label>
                      <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="+91 XXXX" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Aadhaar Card Number</label>
                      <input required name="aadhaar" value={formData.aadhaar} onChange={handleInputChange} type="text" maxLength={12} className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="1234 5678 9012" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Official Email</label>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="mail@domain.com" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-12 animate-in">
                  <div className="border-b border-slate-100 pb-8 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">Financial Standing</h2>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Repayment Capacity Appraisal</p>
                    </div>
                    <Briefcase size={40} className="text-slate-100" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Occupation</label>
                      <select name="occupation" value={formData.occupation} onChange={handleInputChange} className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold">
                        <option>Salaried Professional</option>
                        <option>Self-Employed / Business</option>
                        <option>Farmer / Agriculturalist</option>
                        <option>Govt. Employee</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Monthly Net Income (₹)</label>
                      <input required name="monthlyIncome" value={formData.monthlyIncome} onChange={handleInputChange} type="number" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="e.g. 45000" />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Permanent Residential Address</label>
                      <textarea required name="address" value={formData.address} onChange={handleInputChange} className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold h-32" placeholder="House No, Street, City, State, PIN..."></textarea>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Guarantor Name (Member)</label>
                      <input required name="guarantorName" value={formData.guarantorName} onChange={handleInputChange} type="text" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold uppercase" placeholder="NAME OF GUARANTOR" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Guarantor Mobile</label>
                      <input required name="guarantorPhone" value={formData.guarantorPhone} onChange={handleInputChange} type="tel" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="+91 XXXX" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-12 animate-in">
                  <div className="border-b border-slate-100 pb-8 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">Loan Specifics</h2>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Asset-Backed Credit Structuring</p>
                    </div>
                    <Coins size={40} className="text-slate-100" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Loan Portfolio Category</label>
                      <select name="loanType" value={formData.loanType} onChange={handleInputChange} className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold">
                        <option>Gold Loan (Immediate Cash)</option>
                        <option>Mortgage Loan (Property)</option>
                        <option>Business Expansion Credit</option>
                        <option>Emergency Member Loan</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Principal Amount Required (₹)</label>
                      <input required name="amount" value={formData.amount} onChange={handleInputChange} type="number" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="e.g. 500000" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Purpose of Loan</label>
                      <select name="purpose" value={formData.purpose} onChange={handleInputChange} className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold">
                        <option>Personal/Emergency</option>
                        <option>Business Capital</option>
                        <option>Education / Marriage</option>
                        <option>Debt Consolidation</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Estimated Collateral Value (₹)</label>
                      <input required name="collateral" value={formData.collateral} onChange={handleInputChange} type="text" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="Approx market value" />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Detailed Collateral Specification</label>
                      <textarea required name="collateralDetail" value={formData.collateralDetail} onChange={handleInputChange} className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold h-24" placeholder="e.g. 48 grams 22K Gold, or 1200 sq.ft plot at Kunhari..."></textarea>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-brand-blue/5 rounded-3xl border border-brand-blue/10 flex items-start">
                     <AlertCircle className="text-brand-blue mr-4 shrink-0 mt-1" size={20} />
                     <p className="text-[11px] font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                        Note: For Gold Loans, physical appraisal at Tilak Nagar branch is mandatory after digital sync. Minimum Carat requirement is 18K.
                     </p>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-12 animate-in">
                  <div className="border-b border-slate-100 pb-8 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">Settlement Instructions</h2>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Disbursement Destination</p>
                    </div>
                    <Landmark size={40} className="text-slate-100" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Receiving Bank Name</label>
                      <input required name="bankName" value={formData.bankName} onChange={handleInputChange} type="text" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold uppercase" placeholder="e.g. STATE BANK OF INDIA" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Account Number (Full)</label>
                      <input required name="bankAccount" value={formData.bankAccount} onChange={handleInputChange} type="text" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="XXXXXXXXXXXXXX" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">IFSC Code</label>
                      <input required name="ifsc" value={formData.ifsc} onChange={handleInputChange} type="text" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold uppercase" placeholder="SBIN00XXXXX" />
                    </div>
                  </div>

                  <div className="space-y-6 pt-6">
                    <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl text-center space-y-4 hover:border-brand-blue hover:bg-slate-50 transition-all cursor-pointer group">
                      <Upload size={40} className="text-slate-300 group-hover:text-brand-blue mx-auto transition-colors" />
                      <p className="font-black text-brand-navy text-lg uppercase">Attach Digital KYC Bundle</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Aadhaar, PAN & Income Proof (PDF/ZIP)</p>
                    </div>
                    
                    <div className="flex items-start space-x-6 p-8 bg-brand-navy text-white rounded-[2rem] shadow-xl">
                      <input type="checkbox" required className="mt-1 w-6 h-6 accent-brand-blue cursor-pointer shrink-0" />
                      <span className="text-[10px] font-black uppercase tracking-widest leading-relaxed">
                        Institutional Authorization: I hereby consent to Eibil Nidhi Limited processing my PII (Personally Identifiable Information) for credit appraisal and verify my records through TransUnion/CIBIL if required.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-16 flex justify-between gap-6">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="px-12 py-5 text-brand-navy font-black border-2 border-brand-navy rounded-2xl hover:bg-brand-navy hover:text-white transition-all uppercase tracking-widest text-[10px]">
                    Back to previous
                  </button>
                )}
                <button type="submit" className="ml-auto px-16 py-6 bg-brand-red text-white font-black rounded-2xl flex items-center hover:scale-105 shadow-2xl shadow-brand-red/30 transition-all uppercase tracking-[0.2em] text-xs">
                  {step === 4 ? 'Commit & Finalize' : 'Proceed to next'} <ArrowRight size={20} className="ml-3" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] shadow-2xl p-24 text-center border border-slate-100 animate-in">
            <div className="w-32 h-32 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-12 shadow-inner border-4 border-white">
              <CheckCircle size={72} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter mb-4">Application Synchronized</h2>
            <p className="text-slate-500 font-bold max-w-lg mx-auto mb-16 uppercase tracking-widest text-sm leading-relaxed">
              Receipt Reference: <span className="text-brand-blue">{`ENL-LEAD-${Math.floor(Date.now()/100000)}`}</span><br/>
              Our relationship officer will initiate the appraisal within 120 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button onClick={() => window.location.href = '#/'} className="px-16 py-6 bg-brand-navy text-white font-black rounded-2xl uppercase tracking-widest hover:bg-brand-blue transition-all shadow-xl">
                 Dashboard Home
               </button>
               <button onClick={() => window.print()} className="px-16 py-6 border-2 border-brand-navy text-brand-navy font-black rounded-2xl uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all">
                 Print Receipt
               </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Compliance Footer */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Secure Banking Environment &copy; 2024 Eibil Nidhi Limited</p>
      </div>
    </div>
  );
};

export default LoanApplication;
