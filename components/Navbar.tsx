
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: [
        { name: 'Gold Loan', path: '/products#gold-loan' },
        { name: 'Property Loan', path: '/products#property-loan' },
        { name: 'Term Deposit', path: '/products#term-deposit' },
        { name: 'Recurring Deposit', path: '/products#recurring-deposit' },
        { name: 'Savings Account', path: '/products#savings' },
      ]
    },
    { 
      name: 'Investor Relations', 
      path: '#',
      dropdown: [
        { name: 'Notice to Shareholders', path: '/investor-relations/notices' },
        { name: 'Financial Results', path: '/investor-relations/financials' },
        { name: 'Board Governance', path: '/investor-relations/governance' },
        { name: 'Policies', path: '/policies' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    className="flex items-center text-slate-700 hover:text-brand-blue font-bold transition-colors"
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                ) : (
                  <Link to={link.path} className="text-slate-700 hover:text-brand-blue font-bold transition-colors">
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.dropdown.map((sub) => (
                      <Link 
                        key={sub.name} 
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue font-medium transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="bg-brand-blue text-white px-6 py-2.5 rounded-md font-bold hover:brightness-110 transition-all shadow-lg shadow-blue-200">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy hover:text-brand-blue p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 border-t border-slate-100">
          {navLinks.map((link) => (
            <div key={link.name} className="py-2">
              {link.dropdown ? (
                <div>
                  <div className="font-bold text-brand-navy px-3 py-2 border-b border-slate-50 uppercase tracking-wide">{link.name}</div>
                  <div className="pl-6 space-y-1 mt-1">
                    {link.dropdown.map((sub) => (
                      <Link 
                        key={sub.name} 
                        to={sub.path} 
                        className="block px-3 py-2 text-slate-600 hover:text-brand-blue text-sm font-medium"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={link.path} className="block px-3 py-2 font-bold text-brand-navy hover:text-brand-blue uppercase tracking-wide">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 px-3">
            <Link to="/contact" className="block w-full text-center bg-brand-blue text-white py-4 rounded-md font-bold shadow-md">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
