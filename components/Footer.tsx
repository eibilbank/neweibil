
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ExternalLink, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-8 border-brand-navy pt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-100">
          {/* Brand & Social */}
          <div className="space-y-8">
            <Logo />
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Eibil Nidhi Limited is a public limited company providing secure financial assistance to its members. Registered under the Companies Act and regulated by the Ministry of Corporate Affairs (MCA).
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-100 p-2.5 rounded hover:bg-brand-blue hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="#" className="bg-slate-100 p-2.5 rounded hover:bg-brand-blue hover:text-white transition-all"><Twitter size={20} /></a>
              <a href="#" className="bg-slate-100 p-2.5 rounded hover:bg-brand-blue hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="#" className="bg-slate-100 p-2.5 rounded hover:bg-brand-blue hover:text-white transition-all"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-brand-navy font-extrabold text-sm uppercase tracking-widest">Useful Links</h3>
            <ul className="space-y-3 text-sm text-slate-500 font-bold">
              <li><Link to="/about" className="hover:text-brand-blue flex items-center"><ExternalLink size={14} className="mr-2 opacity-50"/> About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue flex items-center"><ExternalLink size={14} className="mr-2 opacity-50"/> Product Catalog</Link></li>
              <li><Link to="/investor-relations/financials" className="hover:text-brand-blue flex items-center"><ExternalLink size={14} className="mr-2 opacity-50"/> Investor Relations</Link></li>
              <li><Link to="/policies" className="hover:text-brand-blue flex items-center"><ExternalLink size={14} className="mr-2 opacity-50"/> Regulatory Policies</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue flex items-center"><ExternalLink size={14} className="mr-2 opacity-50"/> Contact Support</Link></li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="space-y-6">
            <h3 className="text-brand-navy font-extrabold text-sm uppercase tracking-widest">Loan Products</h3>
            <ul className="space-y-3 text-sm text-slate-500 font-bold">
              <li><Link to="/products#gold-loan" className="hover:text-brand-blue">Gold Loans</Link></li>
              <li><Link to="/products#property-loan" className="hover:text-brand-blue">Property Loans</Link></li>
              <li><Link to="/products#term-deposit" className="hover:text-brand-blue">Fixed Deposit</Link></li>
              <li><Link to="/products#recurring-deposit" className="hover:text-brand-blue">Recurring Deposit</Link></li>
              <li><Link to="/products#savings" className="hover:text-brand-blue">Savings Account</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-brand-navy font-extrabold text-sm uppercase tracking-widest">Connect with Us</h3>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li className="flex items-start">
                <MapPin size={20} className="text-brand-red mr-3 shrink-0" />
                <span>Head Office: 6B, Tilak Nagar, Jhalawar Road,<br />Kota, Rajasthan, India 324007</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-brand-blue mr-3 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-brand-blue mr-3 shrink-0" />
                <span>info@eibilgroup.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Footer */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <span className="flex items-center"><ShieldCheck size={14} className="mr-1 text-green-500"/> PCI DSS SECURE</span>
            <span className="flex items-center"><ShieldCheck size={14} className="mr-1 text-blue-500"/> MCA REGISTERED</span>
            <span>CIN: U65929RJ2018PLC061161</span>
          </div>
          <p className="text-[11px] text-slate-400 text-center md:text-right font-medium leading-relaxed max-w-xl">
            © {new Date().getFullYear()} Eibil Nidhi Limited. Disclaimer: Nidhi Companies are prohibited from doing chit funds, hire purchase insurance or micro finance business. We only provide financial assistance to our members against collateral.
          </p>
        </div>
      </div>
      <div className="bg-brand-navy py-4 text-center">
         <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Member of the Nidhi Banking Federation of India</span>
      </div>
    </footer>
  );
};

export default Footer;
