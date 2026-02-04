
import React from 'react';
import { useParams } from 'react-router-dom';
import { FileText, Download, Calendar, Users, Briefcase } from 'lucide-react';

const InvestorRelations: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const renderContent = () => {
    switch (category) {
      case 'notices':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Notice to Shareholders</h2>
            {[
              { title: "Notice of 5th Annual General Meeting (FY 2023-24)", date: "Aug 15, 2024" },
              { title: "EGM Notice - Proposal for Capital Increase", date: "Jan 10, 2024" },
              { title: "Intimation of Dividend Payment", date: "Oct 05, 2023" },
              { title: "Notice of 4th Annual General Meeting (FY 2022-23)", date: "Aug 20, 2023" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <Calendar className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <span className="text-sm text-slate-500">Published on {item.date}</span>
                  </div>
                </div>
                <button className="flex items-center text-blue-600 font-semibold text-sm hover:underline">
                  <Download size={16} className="mr-1"/> PDF
                </button>
              </div>
            ))}
          </div>
        );
      case 'financials':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Financial Results</h2>
            {[
              { title: "Annual Report - FY 2023-24", year: "2024" },
              { title: "Balance Sheet as of March 31, 2024", year: "2024" },
              { title: "Profit & Loss Statement - FY 2023-24", year: "2024" },
              { title: "Half-Yearly Unaudited Results (H1-2024)", year: "2023" },
              { title: "Annual Report - FY 2022-23", year: "2023" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="bg-green-50 p-3 rounded-lg mr-4">
                    <FileText className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <span className="text-sm text-slate-500">Academic Year: {item.year}</span>
                  </div>
                </div>
                <button className="flex items-center text-blue-600 font-semibold text-sm hover:underline">
                  <Download size={16} className="mr-1"/> Download
                </button>
              </div>
            ))}
          </div>
        );
      case 'governance':
        return (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Board of Directors</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Mr. Rajesh Prasad", role: "Chairman & Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
                  { name: "Mrs. Sunita Devi", role: "Non-Executive Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
                  { name: "Mr. Vikram Singh", role: "Independent Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
                ].map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-slate-100 mb-4 shadow-lg">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-blue-600 text-sm font-semibold">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Briefcase className="mr-2 text-blue-400" /> Statutory Committees
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Audit Committee</span>
                  <span className="text-blue-400 cursor-pointer hover:underline">View Composition</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Nomination & Remuneration Committee</span>
                  <span className="text-blue-400 cursor-pointer hover:underline">View Composition</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Stakeholders Relationship Committee</span>
                  <span className="text-blue-400 cursor-pointer hover:underline">View Composition</span>
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest">Select a category from the menu.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold">Investor Relations</h1>
          <p className="text-slate-400 mt-2">Transparent insights into Eibil Nidhi Limited's growth and governance.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 sticky top-24">
              <a href="#/investor-relations/notices" className={`block px-4 py-3 rounded-xl font-semibold mb-1 ${category === 'notices' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}>
                Shareholder Notices
              </a>
              <a href="#/investor-relations/financials" className={`block px-4 py-3 rounded-xl font-semibold mb-1 ${category === 'financials' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}>
                Financial Results
              </a>
              <a href="#/investor-relations/governance" className={`block px-4 py-3 rounded-xl font-semibold mb-1 ${category === 'governance' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}>
                Board Governance
              </a>
              <a href="#/policies" className={`block px-4 py-3 rounded-xl font-semibold mb-1 text-slate-600 hover:bg-slate-50`}>
                Company Policies
              </a>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 min-h-[500px]">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorRelations;
