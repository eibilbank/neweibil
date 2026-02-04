
import React, { useState } from 'react';
import { 
  PiggyBank, Smartphone, CreditCard, Globe, Zap, ShieldCheck, 
  ArrowRight, CheckCircle, Database, Loader2, Cloud, Upload, 
  Users, Landmark, Headphones, AlertCircle 
} from 'lucide-react';

const Savings: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    accountType: 'Regular Savings',
    initialDeposit: '',
    address: '',
    nominee: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    
    setIsProcessing(true);
    
    const newLead = {
      id: `ENL-S-${Math.floor(Math.random() * 90000) + 10000}`,
      type: 'Savings',
      category: formData.accountType,
      ...formData,
      status: 'In Review',
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date().getTime()
    };

    const existingLeads = JSON.parse(localStorage.getItem('eibil_leads') || '[]');
    localStorage.setItem('eibil_leads', JSON.stringify([newLead, ...existingLeads]));

    setTimeout(() => {
      setIsProcessing(false);
      setSubmitted(true);
    }, 2500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy pt-20 pb-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-blue/20 rounded-full border border-brand-blue/30 mb-8">
            <PiggyBank size={14} className="text-brand-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest">4.0% p.a. Interest Rate</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            SMART <br /><span className="text-brand-blue">SAVINGS</span> <br />BETTER LIFE.
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed">
            Manage your wealth with Kota's most member-centric savings account. Secure, digital, and high-yield.
          </p>
          <div className="mt-10">
            <a href="#apply" className="px-12 py-5 bg-brand-red text-white font-black rounded-xl uppercase tracking-widest hover:scale-105 transition-all inline-block shadow-2xl shadow-brand-red/30">
              Open Account Now
            </a>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block">
           <Landmark size={600} />
        </div>
      </section>

      {/* Digital Banking Features */}
      <section id="digital" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Next-Gen Digital Banking</h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 group">
              <Smartphone className="text-brand-blue mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-black text-brand-navy uppercase mb-4">Mobile Banking</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                Check balance, transfer funds, and manage your account 24/7 with the Eibil Mobile App.
              </p>
            </div>
            <div id="payments" className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 group">
              <Zap className="text-brand-red mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-black text-brand-navy uppercase mb-4">NEFT / IMPS / RTGS</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                Instant fund transfers across any bank in India with zero hidden charges for members.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 group">
              <CreditCard className="text-brand-navy mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-xl font-black text-brand-navy uppercase mb-4">ATM / Debit Cards</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                Global acceptance and secure transactions with Eibil EMV Chip Enabled Debit Cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter mb-6">Choose Your <br/> Account Type</h2>
              <p className="text-slate-500 font-bold leading-relaxed mb-8">We offer specialized accounts designed to meet every stage of your life.</p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border-l-4 border-brand-blue rounded-r-xl">
                   <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1">Recommended</p>
                   <p className="font-black text-brand-navy uppercase text-sm">Eibil Regular Savings</p>
                </div>
                <div className="p-4 bg-slate-50 border-l-4 border-slate-200 rounded-r-xl hover:border-brand-red transition-all cursor-pointer">
                   <p className="font-black text-brand-navy uppercase text-sm opacity-50">Eibil Senior Citizen</p>
                </div>
                <div className="p-4 bg-slate-50 border-l-4 border-slate-200 rounded-r-xl hover:border-brand-red transition-all cursor-pointer">
                   <p className="font-black text-brand-navy uppercase text-sm opacity-50">Eibil Junior / Student</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
               {[
                 { title: "Internet Banking", desc: "Advanced dashboard to manage your portfolio from any desktop browser." },
                 { title: "No Minimum Balance", desc: "Enjoy banking without the stress of monthly average balance requirements." },
                 { title: "Bill Payments", desc: "Automate your utility bills, recharge and more directly from your account." },
                 { title: "Higher Interest", desc: "Earn 4.0% p.a. credited quarterly, higher than many private commercial banks." }
               ].map((item, i) => (
                 <div key={i} className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50 flex items-start space-x-4">
                    <CheckCircle className="text-brand-blue shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-black text-brand-navy uppercase text-sm mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-brand-navy p-10 text-white text-center">
               <h2 className="text-3xl font-black uppercase tracking-tighter">Savings Onboarding Terminal</h2>
               <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2">Member Account Opening Gateway</p>
            </div>

            <div className="p-10 md:p-16">
              {isProcessing ? (
                <div className="text-center py-20 flex flex-col items-center">
                  <Loader2 className="animate-spin text-brand-blue mb-8" size={64} />
                  <h3 className="text-2xl font-black text-brand-navy uppercase mb-2">Syncing Member Folio...</h3>
                  <p className="text-slate-400 font-bold text-sm">Establishing secure link with Kota HQ Database.</p>
                </div>
              ) : submitted ? (
                <div className="text-center py-20 animate-in">
                  <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-black text-brand-navy uppercase mb-4">Lead Captured</h2>
                  <p className="text-slate-500 font-bold max-w-md mx-auto mb-10">
                    Our banking concierge will contact you within 24 hours to collect physical KYC documents at Tilak Nagar HQ.
                  </p>
                  <button onClick={() => window.location.href = '#/'} className="px-12 py-4 bg-brand-navy text-white font-black rounded-xl uppercase tracking-widest hover:bg-brand-blue">Return Home</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 1 && (
                    <div className="space-y-8 animate-in">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Legal Name</label>
                          <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="As per PAN" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile Link</label>
                          <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="+91 XXXX" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Institutional Email</label>
                          <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="mail@domain.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Account Category</label>
                          <select name="accountType" value={formData.accountType} onChange={handleInputChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold">
                            <option>Regular Savings</option>
                            <option>Women's Savings</option>
                            <option>Senior Citizen Savings</option>
                            <option>Student Account</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button type="submit" className="px-12 py-4 bg-brand-blue text-white font-black rounded-xl uppercase tracking-widest hover:brightness-110 flex items-center">
                          Next Step <ArrowRight size={18} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8 animate-in">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Permanent Residential Address</label>
                        <textarea required name="address" value={formData.address} onChange={handleInputChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold h-24" placeholder="Full address with Pincode"></textarea>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Initial Deposit (Min ₹500)</label>
                          <input required name="initialDeposit" value={formData.initialDeposit} onChange={handleInputChange} type="number" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="500" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nominee Name</label>
                          <input required name="nominee" value={formData.nominee} onChange={handleInputChange} type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <button type="button" onClick={() => setStep(1)} className="text-brand-navy font-black text-xs uppercase underline">Back</button>
                        <button type="submit" className="px-12 py-4 bg-brand-red text-white font-black rounded-xl uppercase tracking-widest hover:brightness-110 shadow-xl">
                          Confirm & Open
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Support */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="inline-flex p-4 bg-blue-50 text-brand-blue rounded-3xl mb-8">
              <Headphones size={32} />
           </div>
           <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tighter mb-4">Need Personalized Assistance?</h2>
           <p className="text-slate-500 font-bold mb-10">Our Kota HQ Relationship Managers are available 10 AM to 6 PM.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center space-x-4">
                 <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center"><Smartphone size={20}/></div>
                 <div className="text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Support Line</p>
                    <p className="font-black text-brand-navy">+91 98765 43210</p>
                 </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center space-x-4">
                 <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center"><Cloud size={20}/></div>
                 <div className="text-left">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Access</p>
                    <p className="font-black text-brand-navy">savings@eibilgroup.in</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Savings;
