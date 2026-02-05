import React from 'react';
import { 
  ShieldAlert, ShieldCheck, Lock, Smartphone, 
  UserX, AlertTriangle, Info, PhoneCall, 
  ExternalLink, FileWarning, EyeOff, Key,
  Zap, Ghost, CameraOff, Verified
} from 'lucide-react';

const Vigilance: React.FC = () => {
  const scams = [
    {
      id: 'digital-arrest',
      title: 'Digital Arrest Scams',
      icon: CameraOff,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      desc: 'Fraudsters impersonate police or investigative agencies via video calls, claiming you are under "digital arrest" for illegal packages or money laundering.',
      warning: 'Government agencies NEVER conduct arrests or demand money over Skype, WhatsApp, or Zoom calls.'
    },
    {
      id: 'kyc-fraud',
      title: 'KYC Update Scams',
      icon: UserX,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      desc: 'You receive an urgent SMS or call stating your account/SIM will be blocked unless you click a link to update KYC.',
      warning: 'Never click on links in SMS. Always visit our official Tilak Nagar branch for KYC updates.'
    },
    {
      id: 'otp-theft',
      title: 'OTP & PIN Theft',
      icon: Key,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      desc: 'Scammers trick you into sharing your OTP or PIN by promising rewards, loan approvals, or fixing technical errors.',
      warning: 'Eibil Nidhi staff will NEVER ask for your OTP, PIN, or Password under any circumstances.'
    },
    {
      id: 'screen-sharing',
      title: 'Remote Access Apps',
      icon: Smartphone,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      desc: 'Fraudsters ask you to download apps like AnyDesk or TeamViewer to "help" with an application, then take control of your phone.',
      warning: 'Never grant remote access to your device to strangers, even if they claim to be from "Technical Support".'
    }
  ];

  const dosAndDonts = {
    dos: [
      "Always verify the caller's identity by calling our official customer care.",
      "Enable Two-Factor Authentication (2FA) on all banking and email apps.",
      "Check the URL carefully (eibilgroup.in) before entering any details.",
      "Keep your contact details updated to receive instant transaction alerts.",
      "Report any suspicious activity immediately to 1930 (National Cybercrime)."
    ],
    donts: [
      "Never share your OTP, PIN, or CVV with anyone, including bank staff.",
      "Don't click on links or download attachments from unknown senders.",
      // Fixed: Use single quotes for nested quotes to prevent the word 'secure' from being interpreted as a variable name.
      "Never transfer money to 'secure' your account during a call.",
      "Avoid using public Wi-Fi for banking or financial transactions.",
      "Don't store your passwords or PINs on your phone or in plain sight."
    ]
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-brand-navy pt-24 pb-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-brand-red/20 rounded-full border border-brand-red/30 mb-8">
            <ShieldAlert size={14} className="text-brand-red" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Eibil Suraksha Initiative</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">
            BE VIGILANT. <br /><span className="text-brand-blue">STAY SECURE.</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Your safety is our priority. Learn how to identify and protect yourself from the rising threats of digital financial fraud.
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-5 pointer-events-none">
          <ShieldAlert size={600} />
        </div>
      </section>

      {/* Immediate Reporting Bar */}
      <section className="bg-brand-red py-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="animate-pulse" />
            <span className="font-black uppercase tracking-widest text-sm">Victim of Fraud? Report Immediately!</span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold opacity-70 uppercase">National Helpline:</span>
              <span className="text-xl font-black">1930</span>
            </div>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener" className="flex items-center space-x-2 bg-white text-brand-red px-6 py-2 rounded-full font-black text-xs uppercase hover:bg-slate-100 transition-all">
              Cybercrime Portal <ExternalLink size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Scams Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Common Fraud Tactics</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Knowledge is your first line of defense</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scams.map((scam) => (
            <div key={scam.id} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group border-b-8 border-transparent hover:border-brand-blue">
              <div className={`${scam.bgColor} ${scam.color} w-16 h-16 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <scam.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-4">{scam.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">{scam.desc}</p>
              <div className="p-5 bg-slate-50 rounded-2xl border-l-4 border-brand-red flex items-start space-x-4">
                <FileWarning size={20} className="text-brand-red shrink-0 mt-1" />
                <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed">{scam.warning}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Arrest Spotlight */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brand-navy rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/5">
            <div className="lg:w-1/2 p-12 md:p-20 space-y-8">
              <div className="flex items-center space-x-3 text-brand-blue">
                <Ghost size={32} />
                <span className="font-black uppercase tracking-[0.3em] text-xs">Deep Analysis</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">Understanding <br/><span className="text-brand-blue">Digital Arrest</span></h2>
              <div className="space-y-6 text-slate-400 font-medium text-lg leading-relaxed">
                <p>Digital arrest is a new-age scam where criminals create a <strong>simulated environment</strong> that looks like a police station or a CBI office.</p>
                <p>They use professional backgrounds, wear fake uniforms, and even present forged warrants to threaten you with immediate arrest for "suspicious courier packages" containing narcotics or passports.</p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-white font-black uppercase text-xs mb-3 flex items-center">
                    <Verified className="text-green-500 mr-2" size={16} /> THE REALITY
                  </h4>
                  <p className="text-sm">Police will <strong>NEVER</strong> arrest you via a video call. They will always visit your address or send a formal summons for you to visit the police station.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative bg-slate-800 flex items-center justify-center p-12">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
               <div className="relative z-10 text-center space-y-8">
                  <div className="w-48 h-48 bg-brand-red/10 rounded-full border-4 border-brand-red/20 flex items-center justify-center mx-auto animate-pulse">
                    <ShieldAlert size={80} className="text-brand-red" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-2xl font-black uppercase tracking-tighter">See a fake police call?</p>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Don't Panic • Just Disconnect • Report 1930</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Dont's */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Dos */}
          <div className="space-y-10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Safe Banking Do's</h3>
            </div>
            <div className="space-y-4">
              {dosAndDonts.dos.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-green-50/50 rounded-2xl border border-green-100">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-[10px]">{i+1}</div>
                  <p className="font-bold text-slate-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Donts */}
          <div className="space-y-10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-3xl font-black text-brand-navy uppercase tracking-tighter">Safety Don'ts</h3>
            </div>
            <div className="space-y-4">
              {dosAndDonts.donts.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-red-50/50 rounded-2xl border border-red-100">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-[10px]">{i+1}</div>
                  <p className="font-bold text-slate-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Smartphone size={200} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Empower Your Loved Ones</h2>
          <p className="text-slate-400 font-bold max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Fraudsters target people of all ages. Share these safety tips with your family and friends to build a stronger, safer financial community in Kota.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => window.print()} className="px-12 py-5 bg-white text-brand-navy font-black rounded-2xl uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center">
              Download Safety PDF
            </button>
            <a href="mailto:?subject=Stay Safe from Banking Frauds&body=Hi, please check this safety guide from Eibil Nidhi Limited..." className="px-12 py-5 border-2 border-white/20 text-white font-black rounded-2xl uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center">
              Share via Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vigilance;