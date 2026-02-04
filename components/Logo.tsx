
import React from 'react';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <div className="flex items-center space-x-2 select-none group">
      {/* Icon E */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full transform group-hover:scale-105 transition-transform">
          <path 
            d="M20,20 Q10,50 20,80 L80,80 Q90,50 80,20 Z" 
            fill="none" 
            stroke={light ? "#FFFFFF" : "#004c8f"} 
            strokeWidth="10" 
            strokeLinecap="round"
            className="opacity-20"
          />
          <path 
            d="M30,30 L75,30 L75,45 L45,45 L45,55 L70,55 L70,70 L30,70 Z" 
            fill={light ? "#FFFFFF" : "#004c8f"} 
          />
        </svg>
      </div>
      
      {/* Text Part */}
      <div className="flex flex-col -space-y-1">
        <div className="flex items-center">
          <span className={`text-xl font-black tracking-tight uppercase ${light ? 'text-white' : 'text-brand-navy'}`}>
            EIBIL NIDHI
          </span>
          <div className="ml-1.5 bg-brand-red px-1.5 py-0.5 rounded-sm">
            <span className="text-white text-[11px] font-black tracking-tighter uppercase leading-none block">
              LIMITED
            </span>
          </div>
        </div>
        <span className={`text-[8px] font-bold uppercase tracking-[0.25em] ${light ? 'text-white/40' : 'text-slate-400'}`}>
          A Member Focused Entity
        </span>
      </div>
    </div>
  );
};

export default Logo;
