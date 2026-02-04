
import React from 'react';
import { Shield, Target, Eye, Handshake, Landmark, Award, MapPin, Users, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Dynamic Header Banner */}
      <section className="bg-brand-navy pt-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="h-full w-full bg-slate-800" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-brand-blue/20 rounded-full border border-brand-blue/30 mb-8">
            <Award size={14} className="text-brand-red" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Incorporated 2018 | Nidhi Rules Compliant</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
            TRUSTED <br /><span className="text-brand-blue">FINANCIAL</span> <br />PARTNER.
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed">
            Eibil Nidhi Limited is a cooperative movement dedicated to empowering the residents of Kota and the wider Rajasthan region with secure financial solutions.
          </p>
        </div>
      </section>

      {/* Corporate Identity Section */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
                <div className="w-16 h-1 bg-brand-red mb-8"></div>
                <h2 className="text-3xl font-black text-brand-navy uppercase tracking-tighter mb-6 leading-tight">
                  A Legacy of Community <br />Banking in Kota
                </h2>
                <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                  <p>
                    Established in 2018 under the vision of financial inclusion, Eibil Nidhi Limited has consistently bridged the gap between traditional savings and modern credit needs. As a registered Nidhi Company (CIN: U65929RJ2018PLC061161), we are regulated by the Ministry of Corporate Affairs (MCA).
                  </p>
                  <p>
                    Our core objective is to cultivate the habit of thrift and savings among our members. Unlike commercial banks, we operate on a mutual-benefit principle, where every member is a stakeholder in our collective success. We focus on ethical lending and secure wealth generation for the middle and lower-income segments of society.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start space-x-4">
                  <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-brand-navy uppercase text-xs tracking-widest mb-1">Corporate HQ</h5>
                    <p className="text-xs font-bold text-slate-500 leading-tight">6B, Tilak Nagar, Jhalawar Road, Kota, Rajasthan - 324007</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start space-x-4">
                  <div className="bg-brand-red/10 p-3 rounded-2xl text-brand-red shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-brand-navy uppercase text-xs tracking-widest mb-1">Statutory Compliance</h5>
                    <p className="text-xs font-bold text-slate-500 leading-tight">Regulated under Nidhi Rules 2014 & Companies Act</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern Office Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-navy text-white p-10 rounded-[2.5rem] shadow-2xl">
                <p className="text-4xl font-black mb-1 tracking-tighter text-brand-blue">6+ Years</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">of Operational Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter mb-16">Institutional Pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 group hover:bg-brand-navy transition-all duration-500">
              <div className="w-20 h-20 bg-blue-50 text-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform">
                <Eye size={40} />
              </div>
              <h3 className="text-2xl font-black text-brand-navy group-hover:text-white uppercase mb-6">Our Vision</h3>
              <p className="text-slate-500 group-hover:text-slate-400 font-bold text-sm leading-relaxed">
                To be the most preferred financial sanctuary for the people of Rajasthan, ensuring safety, growth, and digital convenience for every member.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 group hover:bg-brand-navy transition-all duration-500">
              <div className="w-20 h-20 bg-red-50 text-brand-red rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-black text-brand-navy group-hover:text-white uppercase mb-6">Our Mission</h3>
              <p className="text-slate-500 group-hover:text-slate-400 font-bold text-sm leading-relaxed">
                To provide swift, asset-backed credit and high-yield savings products that empower individuals and small businesses to achieve financial freedom.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50 group hover:bg-brand-navy transition-all duration-500">
              <div className="w-20 h-20 bg-slate-100 text-brand-navy rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-black text-brand-navy group-hover:text-white uppercase mb-6">Member Focus</h3>
              <p className="text-slate-500 group-hover:text-slate-400 font-bold text-sm leading-relaxed">
                Creating a collaborative ecosystem where every member is treated with professional integrity and personalized financial care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Eibil Nidhi? */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-brand-navy uppercase tracking-tighter mb-10">The Eibil Advantage</h2>
              <div className="space-y-6">
                {[
                  { title: "Direct MCA Oversight", desc: "Regulated strictly under the Ministry of Corporate Affairs, providing bank-grade safety for your deposits." },
                  { title: "Highest FD Returns", desc: "Offering up to 10.5% p.a., significantly higher than commercial banking institutions." },
                  { title: "Kota HQ Accessibility", desc: "Our physical presence in Tilak Nagar ensures local accountability and faster processing for our Rajasthan members." },
                  { title: "Asset-Backed Security", desc: "All loans are collateralized against Gold or Property, maintaining a 0% NPA environment." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-6 bg-slate-50 rounded-2xl hover:bg-brand-blue/5 transition-colors border border-slate-100">
                    <CheckCircle2 size={24} className="text-brand-blue mr-4 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black text-brand-navy uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-brand-navy p-10 rounded-[2rem] text-white flex flex-col justify-end h-64">
                  <Landmark size={32} className="text-brand-blue mb-4" />
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Secure Storage</p>
                  <p className="text-xl font-black uppercase leading-tight">Bank-Grade Vaults</p>
               </div>
               <div className="bg-brand-red p-10 rounded-[2rem] text-white flex flex-col justify-end h-64 mt-12">
                  <Users size={32} className="text-white mb-4" />
                  <p className="text-xs font-black uppercase tracking-widest text-white/50">Community First</p>
                  <p className="text-xl font-black uppercase leading-tight">Member Driven</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
