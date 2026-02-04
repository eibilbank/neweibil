
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Landmark, BadgePercent, Shield, Users, 
  TrendingUp, Wallet, Calculator, Info, PhoneCall,
  UserPlus, CreditCard, PieChart, ShieldCheck, CheckCircle2,
  ExternalLink, BarChart3
} from 'lucide-react';

const Home: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(9.9);
  const [tenure, setTenure] = useState<number>(12);
  const [emi, setEmi] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 12 / 100;
    const n = tenure;
    const emiValue = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiValue || 0));
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="flex flex-col">
      {/* Institutional Hero Section */}
      <section className="relative bg-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 items-center min-h-[500px] lg:min-h-[600px] py-16">
          <div className="z-10 space-y-6 md:pr-12">
            <div className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded">
              Festive Offers Live
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
              Higher returns for your <br />
              <span className="text-brand-blue">Hard-earned Savings.</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium max-w-lg">
              Get up to 10.5% p.a. on Fixed Deposits. Experience safe, secure and community-focused banking with Eibil Nidhi Limited.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/apply-loan" className="px-10 py-4 bg-brand-blue text-white font-bold rounded hover:bg-brand-navy transition-all text-center uppercase tracking-widest text-sm">
                Apply for Loan
              </Link>
              <Link to="/products" className="px-10 py-4 border-2 border-brand-blue text-brand-blue font-bold rounded hover:bg-brand-blue hover:text-white transition-all text-center uppercase tracking-widest text-sm">
                Invest Now
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop" 
              alt="Banking Professional Helping Customer" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Quick Action Hub */}
      <section className="bg-white border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border-x border-slate-100">
            {[
              { icon: UserPlus, label: 'Become a Member', link: '/contact' },
              { icon: Landmark, label: 'Open Deposit', link: '/products' },
              { icon: Wallet, label: 'Gold Loan', link: '/apply-loan' },
              { icon: CreditCard, label: 'Loan Status', link: '/contact' },
              { icon: PhoneCall, label: 'Support Desk', link: '/contact' },
            ].map((action, i) => (
              <Link key={i} to={action.link} className="flex flex-col items-center justify-center py-8 px-4 border-b border-r border-slate-100 hover:bg-brand-blue/5 group transition-colors">
                <div className="mb-3 text-brand-blue group-hover:scale-110 transition-transform">
                  <action.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-brand-navy text-center">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-slate-900 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="p-10 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="w-12 h-12 bg-brand-blue rounded flex items-center justify-center text-white mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter">Gold Value <br/> Intelligence</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Track the market value of your collateral in real-time. We offer up to 75% LTV on the current market price of your gold ornaments.
              </p>
              <Link to="/apply-loan" className="mt-8 text-brand-blue text-xs font-black uppercase tracking-widest flex items-center hover:text-white transition-colors">
                Calculate My Loan <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
            <div className="p-10 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: 'Gold (24K/10g)', price: '72,450', change: '+240', status: 'Rising' },
                { label: 'Gold (22K/10g)', price: '66,410', change: '+180', status: 'Rising' },
                { label: 'Silver (1kg)', price: '84,500', change: '-110', status: 'Dipping' },
                { label: 'Nifty 50', price: '22,453.20', change: '+98.45', status: 'Stable' },
              ].map((m, i) => (
                <div key={i} className="bg-white/5 p-6 rounded border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</span>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${m.status === 'Rising' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {m.status}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white">₹{m.price}</div>
                  <div className={`text-xs font-bold mt-1 ${m.status === 'Rising' ? 'text-green-400' : 'text-red-400'}`}>
                    {m.change} (Last 24h)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Service Grids */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-4 uppercase tracking-tighter">Banking Solutions for You</h2>
            <div className="w-16 h-1 bg-brand-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded border-b-4 border-brand-blue banking-shadow group hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center">
                <Wallet className="mr-3 text-brand-blue" /> BORROW
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Gold Loan', rate: '9.9% p.a.', link: '/apply-loan' },
                  { name: 'Property Loan', rate: '12.5% p.a.', link: '/apply-loan' },
                  { name: 'Loan Against Deposit', rate: 'Repo + 2%', link: '/apply-loan' },
                ].map((item, i) => (
                  <Link key={i} to={item.link} className="flex justify-between items-center group/item cursor-pointer block">
                    <span className="font-semibold text-slate-700 group-hover/item:text-brand-blue transition-colors">{item.name}</span>
                    <span className="text-xs font-bold text-slate-400">{item.rate}</span>
                  </Link>
                ))}
              </ul>
              <Link to="/products" className="mt-8 block text-brand-blue font-bold text-sm uppercase tracking-wider flex items-center">
                View All Loans <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded border-b-4 border-brand-red banking-shadow group hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center">
                <Landmark className="mr-3 text-brand-red" /> SAVE & INVEST
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Savings Account', rate: '4.0% p.a.' },
                  { name: 'Fixed Deposit', rate: '10.5% p.a.' },
                  { name: 'Recurring Deposit', rate: '9.0% p.a.' },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center group/item cursor-pointer">
                    <span className="font-semibold text-slate-700 group-hover/item:text-brand-red transition-colors">{item.name}</span>
                    <span className="text-xs font-bold text-slate-400">{item.rate}</span>
                  </li>
                ))}
              </ul>
              <Link to="/products" className="mt-8 block text-brand-red font-bold text-sm uppercase tracking-wider flex items-center">
                Check All Rates <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded border-b-4 border-brand-navy banking-shadow group hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center">
                <Users className="mr-3 text-brand-navy" /> MEMBERSHIP
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Shareholder Rights', info: 'Vote' },
                  { name: 'Dividend Payouts', info: 'Annual' },
                  { name: 'Nomination Facility', info: 'Free' },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center group/item cursor-pointer">
                    <span className="font-semibold text-slate-700 group-hover/item:text-brand-navy transition-colors">{item.name}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase">{item.info}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-8 block text-brand-navy font-bold text-sm uppercase tracking-wider flex items-center">
                Member Portal <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EMI Planning Center */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brand-navy text-white rounded-lg p-10 md:p-16 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">Financial Planner</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Estimate your monthly repayments instantly. Our transparent calculator helps you plan your financial future with precision.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-2">Total Payable</span>
                  <span className="text-2xl font-bold">₹{(emi * tenure).toLocaleString()}</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-2">Monthly EMI</span>
                  <span className="text-2xl font-bold text-brand-red">₹{emi.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white text-brand-navy rounded-lg p-8 shadow-2xl">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                    <label>Loan Amount</label>
                    <span className="text-brand-blue">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  <input type="range" min="10000" max="1000000" step="10000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-full appearance-none accent-brand-blue" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                    <label>Tenure (Months)</label>
                    <span className="text-brand-blue">{tenure} Mo</span>
                  </div>
                  <input type="range" min="6" max="120" step="1" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full h-1.5 bg-slate-100 rounded-full appearance-none accent-brand-blue" />
                </div>
                <Link to="/apply-loan" className="w-full bg-brand-red text-white py-5 rounded font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-red/20 block text-center">
                  Start Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <section className="bg-brand-blue py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase tracking-tighter">Your Financial Journey Starts Here.</h2>
          <p className="text-xl text-white/80 mb-10 font-medium">Experience the convenience of modern banking combined with member-driven values.</p>
          <div className="flex justify-center gap-6">
            <Link to="/apply-loan" className="bg-white text-brand-blue px-12 py-4 rounded font-extrabold shadow-2xl uppercase tracking-widest">Apply for Loan</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
