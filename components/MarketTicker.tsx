
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity, Globe } from 'lucide-react';

const MarketTicker: React.FC = () => {
  const [rates, setRates] = useState([
    { name: 'NIFTY 50', val: 22453.20, diff: '+0.45%', up: true },
    { name: 'GOLD 24K', val: 72450, diff: '-120', up: false },
    { name: 'SILVER 1KG', val: 84500, diff: '+450', up: true },
    { name: 'SENSEX', val: 73920.15, diff: '+0.12%', up: true },
    { name: 'USD/INR', val: 83.42, diff: '-0.02', up: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prev => prev.map(r => {
        const volatility = r.name.includes('NIFTY') ? 2 : 5;
        const change = (Math.random() - 0.5) * volatility;
        return { 
          ...r, 
          val: Number((r.val + change).toFixed(2)), 
          up: change > 0 
        };
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-navy border-b border-white/10 py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 border-r border-white/10 pr-6 mr-6 shrink-0">
          <div className="flex items-center text-[9px] font-black text-white uppercase tracking-widest">
            <Globe size={12} className="mr-1.5 text-brand-blue" /> NSE/BSE LIVE
          </div>
          <div className="flex items-center text-[9px] font-black text-green-400 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
            Market Open
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          <div className="flex space-x-24 animate-marquee whitespace-nowrap items-center">
            {rates.map((r, i) => (
              <div key={i} className="flex items-center space-x-3 min-w-[180px]">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-tighter">{r.name}</span>
                <span className="text-[11px] font-extrabold text-white font-mono">₹{r.val.toLocaleString()}</span>
                <span className={`flex items-center text-[10px] font-black ${r.up ? 'text-green-400' : 'text-brand-red'}`}>
                  {r.up ? <TrendingUp size={12} className="mr-0.5"/> : <TrendingDown size={12} className="mr-0.5" />}
                  {r.up ? '+' : ''}{r.diff}
                </span>
              </div>
            ))}
            {/* Duplicate for infinite effect */}
            {rates.map((r, i) => (
              <div key={`dup-${i}`} className="flex items-center space-x-24 min-w-[180px]">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-tighter">{r.name}</span>
                <span className="text-[11px] font-extrabold text-white font-mono">₹{r.val.toLocaleString()}</span>
                <span className={`flex items-center text-[10px] font-black ${r.up ? 'text-green-400' : 'text-brand-red'}`}>
                  {r.up ? <TrendingUp size={12} className="mr-0.5"/> : <TrendingDown size={12} className="mr-0.5" />}
                  {r.up ? '+' : ''}{r.diff}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;
