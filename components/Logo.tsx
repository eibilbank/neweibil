
import React from 'react';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <div className="flex items-center space-x-1 sm:space-x-2 select-none">
      {/* Icon E */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M20,20 Q10,50 20,80 L80,80 Q90,50 80,20 Z" 
            fill="none" 
            stroke="#2071FF" 
            strokeWidth="8" 
            strokeLinecap="round"
            className="opacity-40"
          />
          <path 
            d="M30,30 L75,30 L75,45 L45,45 L45,55 L70,55 L70,70 L30,70 Z" 
            fill="#2071FF" 
          />
        </svg>
      </div>
      
      {/* Text Part */}
      <div className="flex items-center">
        <span className={`text-xl sm:text-2xl font-black tracking-tight uppercase ${light ? 'text-white' : 'text-brand-navy'}`}>
          EIBIL NIDHI
        </span>
        <div className="ml-1 sm:ml-2 bg-brand-red px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-sm">
          <span className="text-white text-base sm:text-lg font-black tracking-tighter uppercase leading-none">
            LIMITED
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
