
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, LogIn, Activity } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { 
      name: 'Borrow', 
      path: '/products',
      dropdown: [
        { name: 'Gold Loan', path: '/products#gold-loan' },
        { name: 'Property Loan', path: '/products#property-loan' },
        { name: 'Online Application', path: '/apply-loan' },
      ]
    },
    { 
      name: 'Invest', 
      path: '/products',
      dropdown: [
        { name: 'Fixed Deposit', path: '/products#term-deposit' },
        { name: 'Recurring Deposit', path: '/products#recurring-deposit' },
      ]
    },
    { 
      name: 'Save', 
      path: '/products',
      dropdown: [
        { name: 'Savings Account', path: '/products#savings' },
      ]
    },
    { 
      name: 'Investors', 
      path: '#',
      dropdown: [
        { name: 'Financial Results', path: '/investor-relations/financials' },
        { name: 'Shareholder Notices', path: '/investor-relations/notices' },
        { name: 'Board Governance', path: '/investor-relations/governance' },
      ]
    },
  ];

  return (
    <nav className="relative w-full z-50 bg-white">
      {/* Top Meta Bar */}
      <div className="bg-brand-navy py-2 text-white/90 text-[11px] font-bold uppercase tracking-wider hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6 items-center">
            <span className="text-white border-b-2 border-brand-red pb-1 cursor-pointer">Personal</span>
            <span className="hover:text-white transition-colors cursor-pointer opacity-50">NRI</span>
            <span className="hover:text-white transition-colors cursor-pointer opacity-50">SME</span>
            <span className="text-brand-blue flex items-center"><Activity size={10} className="mr-1"/> Net Banking Portal</span>
          </div>
          <div className="flex space-x-4 items-center">
            <Link to="/contact" className="hover:text-white">Customer Care</Link>
            <span className="h-3 w-px bg-white/20"></span>
            <Link to="/contact" className="hover:text-white">Locate Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-slate-100 banking-shadow">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <Link to="/" className="flex items-center shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group py-8">
                  <div className="flex items-center text-brand-navy hover:text-brand-blue font-bold text-sm transition-colors cursor-pointer">
                    {link.name}
                    {link.dropdown && <ChevronDown className="ml-1 w-4 h-4 text-slate-400 group-hover:text-brand-blue" />}
                  </div>

                  {link.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-lg border-t-4 border-brand-blue opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 py-4 z-[60]">
                      {link.dropdown.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.path}
                          className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue font-semibold transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex items-center space-x-4 ml-4">
                <button className="p-2 text-slate-500 hover:text-brand-blue"><Search size={20} /></button>
                <div className="flex items-center space-x-2">
                  <Link to="/apply-loan" className="bg-white border-2 border-brand-blue text-brand-blue px-5 py-2.5 rounded font-black text-xs hover:bg-brand-blue hover:text-white transition-all">
                    APPLY NOW
                  </Link>
                  <div className="bg-brand-red text-white flex items-center px-6 py-3 rounded font-bold hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-brand-red/20">
                    <LogIn size={18} className="mr-2" />
                    LOGIN
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center space-x-4">
              <Link to="/apply-loan" className="bg-brand-blue text-white p-2 rounded"><User size={20} /></Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-navy p-2 transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[80px] bg-white z-[100] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 space-y-4 h-full overflow-y-auto pb-20">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-100 pb-2">
              <div className="font-bold text-brand-navy py-2 text-lg uppercase tracking-tight">{link.name}</div>
              {link.dropdown && (
                <div className="pl-4 space-y-3 mt-2">
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.path} className="block text-slate-600 font-medium">{sub.name}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-8 space-y-4">
            <Link to="/apply-loan" className="block w-full bg-brand-red text-white py-4 rounded font-bold text-lg text-center">INSTANT LOAN APPLICATION</Link>
            <button className="w-full bg-brand-blue text-white py-4 rounded font-bold text-lg">MEMBER LOGIN</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
