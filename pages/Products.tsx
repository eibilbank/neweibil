
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Landmark, Wallet, Home, History, PiggyBank, CheckCircle2 } from 'lucide-react';

const ProductSection: React.FC<{ 
  id: string, 
  title: string, 
  icon: React.ReactNode, 
  desc: string, 
  features: string[],
  rates: string,
  bgColor: string 
}> = ({ id, title, icon, desc, features, rates, bgColor }) => {
  return (
    <div id={id} className={`py-16 md:py-24 ${bgColor} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex p-3 bg-brand-blue text-white rounded-lg mb-6 shadow-lg shadow-brand-blue/20">
              {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 uppercase tracking-tight">{title}</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">{desc}</p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 mb-8 border-l-4 border-brand-red">
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Starting Rate of Interest</span>
              <p className="text-3xl font-black text-brand-blue mt-1">{rates} <small className="text-sm text-slate-400 font-normal">per annum</small></p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl p-8 shadow-xl border border-slate-50">
              <h3 className="text-xl font-black text-brand-navy mb-6 uppercase tracking-tight">Key Benefits & Features</h3>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="text-brand-blue mr-3 mt-1 shrink-0" size={20} />
                    <span className="text-slate-700 font-bold text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-10 bg-brand-navy text-white py-4 rounded-md font-black hover:brightness-110 transition-colors shadow-lg uppercase tracking-widest">
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div>
      <section className="bg-brand-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Products & Services</h1>
          <p className="text-blue-50 max-w-2xl mx-auto text-lg font-medium">Comprehensive financial solutions exclusively for our valued members.</p>
        </div>
      </section>

      <ProductSection 
        id="gold-loan"
        title="Gold Loan"
        icon={<Wallet size={32} />}
        desc="Eibil Nidhi offers easy and quick Gold Loans with lowest interest rates and minimum documentation. We understand that your gold ornaments are emotions, which we store in bank-grade vaults."
        features={[
          "Instant loan approval and disbursement within 30 minutes.",
          "Loans available against gold ornaments/jewelry.",
          "Minimum documentation - only ID and Address proof required.",
          "High-security storage with full insurance cover.",
          "Flexible repayment options with easy monthly interest payments."
        ]}
        rates="9.9%"
        bgColor="bg-white"
      />

      <ProductSection 
        id="property-loan"
        title="Property Loan"
        icon={<Home size={32} />}
        desc="Turn your idle property into a productive asset. Our Property Loans provide substantial funding with flexible tenures for your large-scale financial needs."
        features={[
          "Higher loan-to-value (LTV) ratio up to 50-60%.",
          "Loan against residential or commercial properties.",
          "Tenure up to 84 months for easy repayment.",
          "Fastest processing and transparent legal verification.",
          "No prepayment penalties for part-payments."
        ]}
        rates="12.5%"
        bgColor="bg-slate-50"
      />

      <ProductSection 
        id="term-deposit"
        title="Term / Fixed Deposit"
        icon={<Landmark size={32} />}
        desc="Secure your future with our Fixed Deposit schemes that offer significantly higher interest rates than commercial banks. A guaranteed way to grow your wealth."
        features={[
          "Earn up to 10.5% interest per annum.",
          "Flexible tenures ranging from 12 to 60 months.",
          "Nomination facility available for all accounts.",
          "Loan against deposit facility available.",
          "Automatic renewal facility available."
        ]}
        rates="10.5%"
        bgColor="bg-white"
      />

      <ProductSection 
        id="recurring-deposit"
        title="Recurring Deposit"
        icon={<History size={32} />}
        desc="Cultivate a disciplined saving habit. Save a fixed amount every month and build a substantial corpus for your long-term life goals."
        features={[
          "Start with as low as ₹500 per month.",
          "Fixed monthly installments with high interest yields.",
          "Compound interest calculated quarterly.",
          "Easy online and offline deposit options.",
          "Best for salaried employees."
        ]}
        rates="9.0%"
        bgColor="bg-slate-50"
      />

      <ProductSection 
        id="savings"
        title="Savings Account"
        icon={<PiggyBank size={32} />}
        desc="Our Savings Account gives you the freedom to manage your daily expenses while earning healthy interest. No hidden charges and complete transparency."
        features={[
          "Attractive interest rates on daily balance.",
          "No monthly maintenance or ledger folio charges.",
          "Easy fund transfer and withdrawal facilities.",
          "Detailed quarterly account statements.",
          "Personalized customer service team."
        ]}
        rates="4.0%"
        bgColor="bg-white"
      />
    </div>
  );
};

export default Products;
