
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Brand */}
          <div className="space-y-6">
            <Logo light />
            <p className="text-sm leading-relaxed text-slate-400">
              Eibil Nidhi Limited is a public limited company registered under the Companies Act and regulated by the Ministry of Corporate Affairs (MCA). We are committed to fostering thrift and savings among our members.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-blue transition-colors bg-white/5 p-2 rounded-full"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-blue transition-colors bg-white/5 p-2 rounded-full"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-blue transition-colors bg-white/5 p-2 rounded-full"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-brand-blue flex items-center transition-colors"><ExternalLink size={14} className="mr-2"/> About Company</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue flex items-center transition-colors"><ExternalLink size={14} className="mr-2"/> Loan Products</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue flex items-center transition-colors"><ExternalLink size={14} className="mr-2"/> Deposit Schemes</Link></li>
              <li><Link to="/investor-relations/financials" className="hover:text-brand-blue flex items-center transition-colors"><ExternalLink size={14} className="mr-2"/> Financial Reports</Link></li>
              <li><Link to="/policies" className="hover:text-brand-blue flex items-center transition-colors"><ExternalLink size={14} className="mr-2"/> Policies</Link></li>
            </ul>
          </div>

          {/* Important Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Our Products</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/products#gold-loan" className="hover:text-brand-blue transition-colors">Gold Loans</Link></li>
              <li><Link to="/products#property-loan" className="hover:text-brand-blue transition-colors">Property Loans</Link></li>
              <li><Link to="/products#term-deposit" className="hover:text-brand-blue transition-colors">Fixed/Term Deposits</Link></li>
              <li><Link to="/products#recurring-deposit" className="hover:text-brand-blue transition-colors">Recurring Deposits</Link></li>
              <li><Link to="/products#savings" className="hover:text-brand-blue transition-colors">Savings Account</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="text-brand-red mr-3 shrink-0" />
                <span>123 Financial Plaza, Corporate Road,<br />Mumbai, Maharashtra - 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-brand-blue mr-3 shrink-0" />
                <span className="font-bold">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-brand-blue mr-3 shrink-0" />
                <span className="font-bold">contact@eibilnidhi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Eibil Nidhi Limited. CIN: U65991MH2024NLC123456. All Rights Reserved.</p>
          <p className="mt-2">Disclaimer: Nidhi Companies are prohibited from doing chit funds, hire purchase insurance or micro finance business. We only lend to our members against collateral.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
