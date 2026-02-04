
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const MarketTicker: React.FC = () => {
  const [rates, setRates] = useState([
    { name: 'NIFTY 50', val: 22453.20, diff: '+0.45%', up: true },
    { name: 'GOLD 24K (10g)', val: 72450, diff: '-₹120', up: false },
    { name: 'SILVER (1kg)', val: 84500, diff: '+₹450', up: true },
    { name: 'SENSEX', val: 73920.15, diff: '+0.12%', up: true },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prev => prev.map(r => {
        const change = (Math.random() - 0.5) * 10;
        const newVal = r.val + change;
        return { 
          ...r, 
          val: Number(newVal.toFixed(2)), 
          up: change > 0 
        };
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-navy border-b border-white/10 overflow-hidden py-1.5 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex items-center text-[10px] font-black text-brand-red uppercase tracking-widest mr-6 shrink-0">
          <Activity size={12} className="mr-1 animate-pulse" /> Live Markets
        </div>
        <div className="flex space-x-10 animate-marquee whitespace-nowrap">
          {rates.map((r, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-white/60">{r.name}</span>
              <span className="text-xs font-black text-white">₹{r.val.toLocaleString()}</span>
              <span className={`flex items-center text-[10px] font-bold ${r.up ? 'text-green-400' : 'text-brand-red'}`}>
                {r.up ? <TrendingUp size={10} className="mr-1"/> : <TrendingDown size={10} className="mr-1" />}
                {r.diff}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {rates.map((r, i) => (
            <div key={`dup-${i}`} className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-white/60">{r.name}</span>
              <span className="text-xs font-black text-white">₹{r.val.toLocaleString()}</span>
              <span className={`flex items-center text-[10px] font-bold ${r.up ? 'text-green-400' : 'text-brand-red'}`}>
                {r.up ? <TrendingUp size={10} className="mr-1"/> : <TrendingDown size={10} className="mr-1" />}
                {r.diff}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;
