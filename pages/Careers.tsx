
import React, { useState, useRef } from 'react';
import { 
  Briefcase, GraduationCap, MapPin, Clock, 
  Search, Upload, CheckCircle, Send, 
  ArrowRight, ShieldCheck, Database, Loader2 
} from 'lucide-react';

const Careers: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Relationship Manager (Gold Loan)',
    experience: '1-3 Years',
    message: '',
    cvData: '' // Base64 string for CV
  });

  const jobs = [
    {
      title: 'Relationship Manager (Gold Loan)',
      location: 'Kota HQ',
      type: 'Full Time',
      experience: '1-3 Years',
      desc: 'Expertise in gold appraisal and client relationship management. Responsible for loan processing and portfolio growth.'
    },
    {
      title: 'Branch Operations Head',
      location: 'Bundi Branch',
      type: 'Full Time',
      experience: '5+ Years',
      desc: 'Lead branch operations, ensure regulatory compliance, and drive institutional targets in Bundi region.'
    },
    {
      title: 'Recovery & Collection Officer',
      location: 'Baran Branch',
      type: 'Full Time',
      experience: '2-4 Years',
      desc: 'Manage loan collections and field visits. Strong negotiation skills and knowledge of Nidhi laws required.'
    },
    {
      title: 'Junior Accountant',
      location: 'Kota HQ',
      type: 'Full Time',
      experience: '0-2 Years',
      desc: 'Support daily book-keeping, audit preparation, and member transaction records.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, cvData: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    const newApplication = {
      id: `ENL-APP-${Math.floor(Date.now() / 1000)}`,
      date: new Date().toISOString().split('T')[0],
      ...formData,
      status: 'In Review'
    };

    const existingApps = JSON.parse(localStorage.getItem('eibil_job_apps') || '[]');
    localStorage.setItem('eibil_job_apps', JSON.stringify([newApplication, ...existingApps]));

    setTimeout(() => {
      setIsUploading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy pt-24 pb-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-brand-blue/20 rounded-full border border-brand-blue/30 mb-8">
            <GraduationCap size={14} className="text-brand-blue" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Build Your Banking Career</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            SHAPING THE <br /><span className="text-brand-blue">FUTURE OF BANKING.</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed">
            Join Eibil Nidhi Limited and empower local communities through ethical financial services in Rajasthan.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Current Openings</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Find your perfect role in our growing institution</p>
            </div>
            <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-sm w-full">
              <input type="text" placeholder="Search Role..." className="bg-transparent border-none outline-none px-4 flex-1 font-bold text-sm" />
              <button className="bg-brand-blue text-white p-3 rounded-xl"><Search size={18} /></button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-brand-blue transition-all group">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tight group-hover:text-brand-blue transition-colors">{job.title}</h3>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-50 text-brand-blue text-[10px] font-black uppercase rounded-full">{job.type}</span>
                  </div>
                </div>
                <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8">{job.desc}</p>
                <div className="flex flex-wrap gap-6 border-t border-slate-100 pt-8">
                  <div className="flex items-center text-slate-400">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{job.location}</span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Briefcase size={16} className="mr-2" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{job.experience}</span>
                  </div>
                  <button onClick={() => {
                    setFormData(prev => ({ ...prev, position: job.title }));
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }} className="ml-auto text-brand-blue font-black uppercase text-xs tracking-[0.2em] flex items-center hover:underline">
                    Apply Now <ArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section id="application-form" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 shadow-2xl border border-slate-200 relative overflow-hidden">
            {isUploading ? (
              <div className="text-center py-20 flex flex-col items-center">
                 <Loader2 size={64} className="text-brand-blue animate-spin mb-8" />
                 <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">Synchronizing Profile...</h3>
                 <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-4">Storing application in HR Central Vault</p>
              </div>
            ) : submitted ? (
              <div className="text-center py-20 animate-in">
                 <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                   <CheckCircle size={56} />
                 </div>
                 <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter mb-4">Application Dispatched</h2>
                 <p className="text-slate-500 font-bold max-w-md mx-auto mb-12">
                   Your profile has been synchronized with our HR team. We will contact you if your skills match our institutional requirements.
                 </p>
                 <button onClick={() => setSubmitted(false)} className="px-12 py-5 bg-brand-navy text-white font-black rounded-2xl uppercase tracking-widest hover:brightness-110 shadow-xl transition-all">
                   Submit Another
                 </button>
              </div>
            ) : (
              <>
                <div className="flex items-center space-x-4 mb-12">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Database size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Candidate Portal</h2>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Official Employment Gateway</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl outline-none focus:border-brand-blue font-bold uppercase" placeholder="Enter Full Legal Name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Phone</label>
                      <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl outline-none focus:border-brand-blue font-bold" placeholder="+91 XXXX XXXX" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Port</label>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl outline-none focus:border-brand-blue font-bold" placeholder="mail@domain.com" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Position</label>
                      <select name="position" value={formData.position} onChange={handleInputChange} className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl outline-none focus:border-brand-blue font-bold">
                        <option>Relationship Manager (Gold Loan)</option>
                        <option>Branch Operations Head</option>
                        <option>Recovery & Collection Officer</option>
                        <option>Junior Accountant</option>
                        <option>General Application</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">CV Upload (PDF Format Only)</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="p-10 border-2 border-dashed border-slate-200 bg-white rounded-[2rem] text-center cursor-pointer hover:border-brand-blue group transition-all"
                    >
                      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx" />
                      <Upload className={`mx-auto mb-4 ${formData.cvData ? 'text-green-500' : 'text-slate-300'} group-hover:text-brand-blue`} size={40} />
                      <p className="font-black text-brand-navy text-lg uppercase">{formData.cvData ? 'File Linked Successfully' : 'Select Official CV'}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Maximum file size: 5MB</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Brief Statement</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl outline-none focus:border-brand-blue font-bold" placeholder="Why do you want to join Eibil Nidhi Limited?"></textarea>
                  </div>

                  <div className="flex items-start p-6 bg-brand-navy text-white rounded-[2rem] shadow-xl">
                     <ShieldCheck className="text-brand-blue mr-4 shrink-0 mt-1" size={20} />
                     <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">
                       Institutional Consent: By submitting, I authorize Eibil Nidhi Limited to verify my credentials and perform background checks as per Nidhi employment rules.
                     </p>
                  </div>

                  <button type="submit" className="w-full bg-brand-blue text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:brightness-110 transition-all flex items-center justify-center">
                    Submit Credentials <Send size={20} className="ml-3" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Join Eibil Section */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: 'Secure Growth', desc: 'Work in a compliant environment with clear professional development tracks.' },
              { icon: MapPin, title: 'Local Impact', desc: 'Directly contribute to the economic prosperity of the Rajasthan region.' },
              { icon: Clock, title: 'Work-Life Balance', desc: 'Standard banking hours with generous leave and performance incentives.' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-slate-50">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-black text-brand-navy uppercase tracking-tighter">{feature.title}</h4>
                <p className="text-slate-500 font-bold text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
