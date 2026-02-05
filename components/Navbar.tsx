
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, LogIn, Activity, Home as HomeIcon, Globe, Briefcase, GraduationCap, ShieldAlert, PiggyBank } from 'lucide-react';
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
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About Us', path: '/about' },
    { name: 'Savings', path: '/savings', icon: PiggyBank },
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
      name: 'Safe Banking', 
      path: '/vigilance',
      icon: ShieldAlert
    },
    { name: 'Careers', path: '/careers' },
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
    <nav className="relative w-full z-50 bg-white shadow-sm">
      {/* Top Meta Bar */}
      <div className="bg-brand-navy py-2 text-white/90 text-[11px] font-bold uppercase tracking-wider hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6 items-center">
            <Link to="/" className={`pb-1 cursor-pointer transition-all border-b-2 ${location.pathname === '/' ? 'text-white border-brand-red' : 'text-white/60 border-transparent hover:text-white'}`}>Personal</Link>
            <Link to="/nri" className={`pb-1 cursor-pointer transition-all border-b-2 ${location.pathname === '/nri' ? 'text-white border-brand-red' : 'text-white/60 border-transparent hover:text-white'}`}>NRI</Link>
            <Link to="/sme" className={`pb-1 cursor-pointer transition-all border-b-2 ${location.pathname === '/sme' ? 'text-white border-brand-red' : 'text-white/60 border-transparent hover:text-white'}`}>SME</Link>
            <Link to="/admin" className="text-brand-blue flex items-center font-black hover:text-white transition-colors">
              <Activity size={10} className="mr-1"/> Portal Access
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link to="/contact" className="hover:text-white transition-colors">Customer Care</Link>
            <span className="h-3 w-px bg-white/20"></span>
            <Link to="/contact" className="hover:text-white transition-colors">Locate Us</Link>
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
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group py-8">
                  <Link 
                    to={link.path} 
                    className={`flex items-center ${location.pathname === link.path ? 'text-brand-blue' : 'text-brand-navy'} hover:text-brand-blue font-black text-[13px] uppercase tracking-tighter transition-colors cursor-pointer`}
                  >
                    {link.name === 'Safe Banking' && <ShieldAlert size={14} className="mr-1 text-brand-red animate-pulse" />}
                    {link.name === 'Savings' && <PiggyBank size={14} className="mr-1 text-brand-blue" />}
                    {link.name}
                    {link.dropdown && <ChevronDown className="ml-1 w-3 h-3 text-slate-400 group-hover:text-brand-blue" />}
                  </Link>

                  {link.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-lg border-t-4 border-brand-blue opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 py-4 z-[60]">
                      {link.dropdown.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.path}
                          className="block px-6 py-3 text-xs text-slate-700 hover:bg-slate-50 hover:text-brand-blue font-bold transition-colors uppercase tracking-tight"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex items-center space-x-3 ml-4">
                <Link to="/apply-loan" className="bg-white border-2 border-brand-blue text-brand-blue px-4 py-2 rounded font-black text-[11px] hover:bg-brand-blue hover:text-white transition-all uppercase">
                  Apply Now
                </Link>
                <Link to="/admin" className="bg-brand-red text-white flex items-center px-5 py-2.5 rounded font-black text-[11px] hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-brand-red/20 uppercase">
                  <LogIn size={14} className="mr-2" />
                  Portal Login
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center space-x-4">
              <Link to="/admin" className="text-brand-navy p-2 hover:text-brand-blue transition-colors"><User size={24} /></Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-navy p-2 transition-colors hover:text-brand-blue"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[110px] bg-white z-[100] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-6 h-full overflow-y-auto pb-24">
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100">
             <Link to="/nri" className="flex items-center justify-center space-x-2 py-4 bg-slate-50 rounded-xl text-brand-navy font-black text-xs uppercase">
                <Globe size={16} /> <span>NRI</span>
             </Link>
             <Link to="/sme" className="flex items-center justify-center space-x-2 py-4 bg-slate-50 rounded-xl text-brand-navy font-black text-xs uppercase">
                <Briefcase size={16} /> <span>SME</span>
             </Link>
          </div>
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-100 pb-4">
              <Link to={link.path} className={`font-black ${link.name === 'Safe Banking' ? 'text-brand-red' : 'text-brand-navy'} py-2 text-lg uppercase tracking-tight block flex items-center`}>
                {link.name === 'Safe Banking' && <ShieldAlert size={20} className="mr-2" />}
                {link.name === 'Savings' && <PiggyBank size={20} className="mr-2 text-brand-blue" />}
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="pl-4 space-y-3 mt-3">
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.path} className="block text-slate-500 font-bold text-sm uppercase">{sub.name}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-6 space-y-4">
            <Link to="/apply-loan" className="block w-full bg-brand-red text-white py-4 rounded-xl font-black text-center uppercase tracking-widest text-sm shadow-xl shadow-brand-red/20">Loan Application</Link>
            <Link to="/admin" className="block w-full bg-brand-navy text-white py-4 rounded-xl font-black text-center uppercase tracking-widest text-sm shadow-xl shadow-brand-navy/20">Admin Portal</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
