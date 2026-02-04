
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, BadgePercent, Shield, Users, TrendingUp, Wallet } from 'lucide-react';

const Home: React.FC = () => {
  const highlights = [
    {
      title: 'Member Focused',
      desc: 'Owned by members, for members. We prioritize your growth over corporate profits.',
      icon: Users,
      color: 'bg-blue-50 text-brand-blue'
    },
    {
      title: 'Higher Returns',
      desc: 'Our deposit schemes offer up to 2-3% more interest than conventional commercial banks.',
      icon: TrendingUp,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Secure Lending',
      desc: 'Quick loans against gold and property with minimal documentation and zero hidden charges.',
      icon: Shield,
      color: 'bg-brand-red/5 text-brand-red'
    }
  ];

  const quickLoans = [
    { name: 'Gold Loan', rate: '9.9%', icon: '🥇' },
    { name: 'Property Loan', rate: '12.5%', icon: '🏠' },
    { name: 'Fixed Deposit', rate: '10.5%', icon: '📈' },
    { name: 'Savings', rate: '4.0%', icon: '💳' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-1 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest rounded-sm mb-6 shadow-lg shadow-brand-red/20">
                Regulated by MCA, Govt of India
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Secure Your Family's <br />
                <span className="text-brand-blue">Financial Prosperity</span>
              </h1>
              <p className="text-lg text-slate-300 mb-10 max-w-xl">
                Eibil Nidhi Limited provides a safe platform for savings and quick credit facilities exclusively for our members. Experience banking-like services with a personalized touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="px-8 py-4 bg-brand-blue hover:brightness-110 text-white font-black rounded-md transition-all flex items-center justify-center uppercase tracking-wide">
                  Explore Schemes <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-md border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Quick Stats/Rates Card */}
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-auto lg:mr-0 border-t-4 border-brand-red">
              <h3 className="text-2xl font-black text-brand-navy mb-6 flex items-center uppercase tracking-tight">
                <BadgePercent className="mr-2 text-brand-blue" /> Current Rates
              </h3>
              <div className="space-y-4">
                {quickLoans.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-brand-blue/30 transition-colors group">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-bold text-slate-700">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-slate-400 uppercase font-black tracking-tighter">Starting @</span>
                      <span className="text-lg font-black text-brand-blue">{item.rate} <small className="text-[10px] text-slate-400 font-normal">p.a.</small></span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-6 text-center italic">
                *T&C Apply. Rates are subject to change based on board decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-navy mb-4 uppercase tracking-tight">Why Choose Eibil Nidhi?</h2>
            <div className="w-20 h-1 bg-brand-red mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="p-8 rounded-xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`w-14 h-14 rounded-lg ${h.color} flex items-center justify-center mb-6`}>
                  <h.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-brand-navy mb-3 uppercase tracking-tight">{h.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Sneak Peek */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-brand-navy mb-4 uppercase tracking-tight">Our Financial Solutions</h2>
              <p className="text-slate-600 max-w-xl font-medium">Tailored financial products designed to meet the diverse needs of our members.</p>
            </div>
            <Link to="/products" className="mt-4 md:mt-0 text-brand-blue font-black hover:underline flex items-center uppercase tracking-wider text-sm">
              View All Products <ArrowRight size={18} className="ml-1"/>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Savings Account', icon: Landmark, desc: 'High interest liquid savings with easy withdrawal facility.' },
              { title: 'Gold Loan', icon: Wallet, desc: 'Unlock the value of your ornaments within minutes.' },
              { title: 'Term Deposit', icon: TrendingUp, desc: 'Grow your wealth with our secure fixed deposit schemes.' },
              { title: 'Property Loan', icon: Shield, desc: 'Large funds against your property for business or personal use.' }
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 group hover:border-brand-blue/30 transition-all">
                <p.icon className="text-brand-blue mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="text-lg font-black text-brand-navy mb-2 uppercase tracking-tight">{p.title}</h4>
                <p className="text-sm text-slate-500 mb-4 font-medium">{p.desc}</p>
                <ul className="text-xs space-y-2 mb-4 text-slate-600 font-bold">
                  <li className="flex items-center text-brand-red">✓ Instant Approval</li>
                  <li className="flex items-center text-brand-blue">✓ Safe & Secure</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">Ready to Join Our Community?</h2>
          <p className="text-lg mb-10 text-white/90 font-medium">Become a member of Eibil Nidhi Limited today and take the first step towards a better financial future.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-brand-blue px-10 py-4 rounded-md font-black shadow-xl hover:bg-slate-50 transition-colors uppercase tracking-widest">
              Become a Member
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-md font-black hover:bg-white/10 transition-colors uppercase tracking-widest">
              Get a Callback
            </Link>
          </div>
        </div>
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-navy/30 rounded-full blur-3xl opacity-50"></div>
      </section>
    </div>
  );
};

export default Home;
