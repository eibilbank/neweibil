
import React, { useState, useEffect, useMemo } from 'react';
import { 
  LayoutDashboard, FileText, Users, Shield, 
  Settings, LogOut, Upload, Download, 
  Trash2, Edit3, CheckCircle, AlertCircle, Database, LogOut as LogOutIcon, ArrowLeft, Filter, Printer, FileSpreadsheet, PiggyBank
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('leads');
  const [loginError, setLoginError] = useState('');
  
  // Filtering States
  const [filterYear, setFilterYear] = useState('');
  const [filterMonth, setFilterMonth] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterType, setFilterType] = useState(''); // Loan vs Savings

  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    // Load leads from localStorage
    const savedLeads = JSON.parse(localStorage.getItem('eibil_leads') || '[]');
    setLeads(savedLeads);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'eibilbank' && password === 'vishnu@123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Access denied.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setActiveTab('dashboard');
  };

  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      const leadDate = new Date(lead.date);
      const matchesYear = filterYear ? leadDate.getFullYear().toString() === filterYear : true;
      const matchesMonth = filterMonth ? (leadDate.getMonth() + 1).toString() === filterMonth : true;
      const matchesDate = filterDate ? lead.date === filterDate : true;
      const matchesType = filterType ? lead.type === filterType : true;
      return matchesYear && matchesMonth && matchesDate && matchesType;
    });
  }, [leads, filterYear, filterMonth, filterDate, filterType]);

  const exportToExcel = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Ref ID,Type,Applicant,Phone,Email,Category,Amount/Deposit,Status,Date\n"
      + filteredLeads.map(l => `${l.id},${l.type || 'Loan'},${l.name},${l.phone},${l.email},${l.loanType || l.accountType},${l.amount || l.initialDeposit},${l.status},${l.date}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `eibil_leads_report_${new Date().getTime()}.csv`);
    document.body.appendChild(link);
    link.click();
  };

  const exportToPDF = () => {
    window.print();
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-brand-gray flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="bg-brand-navy p-8 text-center relative">
            <Link to="/" className="absolute top-4 left-4 text-white/50 hover:text-white transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div className="w-16 h-16 bg-brand-blue rounded-2xl mx-auto flex items-center justify-center text-white mb-4 shadow-xl">
              <Shield size={32} />
            </div>
            <h1 className="text-xl font-black text-white uppercase tracking-widest">Admin Terminal</h1>
            <p className="text-blue-200 text-xs mt-1 font-bold uppercase tracking-tighter">Eibil Nidhi Limited Internal Access</p>
          </div>
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            {loginError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-bold flex items-center border border-red-100">
                <AlertCircle size={16} className="mr-2" /> {loginError}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Identity</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" 
                placeholder="Username" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold" 
                placeholder="Password" 
              />
            </div>
            <button type="submit" className="w-full bg-brand-navy text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-blue transition-all">
              Initialize Session
            </button>
            <div className="text-center pt-2">
               <Link to="/" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-brand-blue">Back to Home Screen</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-brand-navy text-white flex flex-col hidden lg:flex no-print">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
              <Shield size={20} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">Eibil Command</p>
              <p className="text-[9px] text-white/40 uppercase font-bold">Kota HQ Server</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'leads', icon: Database, label: 'Member Leads' },
            { id: 'investors', icon: FileText, label: 'Investor Relations' },
            { id: 'policies', icon: Shield, label: 'Statutory Policies' },
            { id: 'users', icon: Users, label: 'Member Access' },
            { id: 'settings', icon: Settings, label: 'System Settings' },
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === item.id ? 'bg-brand-blue text-white shadow-lg' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center justify-center space-x-2 px-4 py-4 rounded-xl bg-brand-red text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-red/20 hover:brightness-110 transition-all"
          >
            <LogOutIcon size={18} />
            <span>Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 h-20 flex items-center justify-between px-8 no-print">
          <h2 className="text-xl font-black text-brand-navy uppercase tracking-tighter">
            {activeTab.toUpperCase()}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs font-black text-brand-navy uppercase">Vishnu Prasad</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-black text-xs">
              VP
            </div>
            <button onClick={handleLogout} className="lg:hidden p-2 text-brand-red">
               <LogOutIcon size={24} />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Total Leads', val: leads.length.toString(), trend: '+0', color: 'text-brand-blue' },
                  { label: 'Loan Apps', val: leads.filter(l => !l.type || l.type === 'Loan').length.toString(), trend: '+0', color: 'text-brand-red' },
                  { label: 'Savings Apps', val: leads.filter(l => l.type === 'Savings').length.toString(), trend: '+0', color: 'text-green-500' },
                  { label: 'New Apps', val: leads.filter(l => l.date === new Date().toISOString().split('T')[0]).length.toString(), trend: 'Today', color: 'text-orange-500' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                    <div className="flex justify-between items-end">
                      <span className={`text-2xl font-black ${stat.color}`}>{stat.val}</span>
                      <span className="text-[10px] font-bold text-slate-500">{stat.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'leads' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in">
              <div className="p-6 border-b border-slate-100 bg-slate-50/50 no-print">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="font-black text-brand-navy uppercase text-sm">Member Inbound Registry</h3>
                    <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">Captured across all digital touchpoints</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={exportToExcel}
                      className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-black text-[10px] flex items-center hover:brightness-110 transition-all uppercase tracking-widest"
                    >
                      <FileSpreadsheet size={14} className="mr-2" /> Excel
                    </button>
                    <button 
                      onClick={exportToPDF}
                      className="bg-brand-red text-white px-5 py-2.5 rounded-lg font-black text-[10px] flex items-center hover:brightness-110 transition-all uppercase tracking-widest"
                    >
                      <Printer size={14} className="mr-2" /> Print PDF
                    </button>
                  </div>
                </div>

                {/* Advanced Filtering */}
                <div className="mt-6 flex flex-wrap gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-inner">
                   <div className="flex-1 min-w-[150px]">
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1">Lead Category</label>
                      <select 
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full text-xs font-bold border border-slate-100 rounded p-2 focus:border-brand-blue outline-none"
                      >
                        <option value="">All Categories</option>
                        <option value="Savings">Savings Leads</option>
                        <option value="Loan">Loan Leads</option>
                      </select>
                   </div>
                   <div className="flex-1 min-w-[150px]">
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1">Year</label>
                      <select 
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                        className="w-full text-xs font-bold border border-slate-100 rounded p-2 focus:border-brand-blue outline-none"
                      >
                        <option value="">All Years</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                      </select>
                   </div>
                   <div className="flex-1 min-w-[150px]">
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1">Month</label>
                      <select 
                        value={filterMonth}
                        onChange={(e) => setFilterMonth(e.target.value)}
                        className="w-full text-xs font-bold border border-slate-100 rounded p-2 focus:border-brand-blue outline-none"
                      >
                        <option value="">All Months</option>
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                          <option key={i} value={(i + 1).toString()}>{m}</option>
                        ))}
                      </select>
                   </div>
                   <div className="flex-1 min-w-[150px]">
                      <label className="text-[9px] font-black uppercase text-slate-400 block mb-1">Specific Date</label>
                      <input 
                        type="date"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                        className="w-full text-xs font-bold border border-slate-100 rounded p-2 focus:border-brand-blue outline-none"
                      />
                   </div>
                   <div className="flex items-end">
                      <button 
                        onClick={() => { setFilterYear(''); setFilterMonth(''); setFilterDate(''); setFilterType(''); }}
                        className="text-[9px] font-black uppercase text-brand-blue hover:underline"
                      >
                        Reset
                      </button>
                   </div>
                </div>
              </div>
              
              <div className="overflow-x-auto print:m-0">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Applicant</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Phone</th>
                      <th className="px-6 py-4">Value (₹)</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right no-print">Ops</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px] font-bold">
                    {filteredLeads.length > 0 ? filteredLeads.map((app, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-brand-blue font-mono">{app.id}</td>
                        <td className="px-6 py-4">
                           <span className={`inline-flex items-center text-[9px] px-2 py-0.5 rounded-full font-black uppercase ${app.type === 'Savings' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                              {app.type === 'Savings' ? <PiggyBank size={10} className="mr-1"/> : <Database size={10} className="mr-1"/>}
                              {app.type || 'Loan'}
                           </span>
                        </td>
                        <td className="px-6 py-4 text-brand-navy uppercase">{app.name}</td>
                        <td className="px-6 py-4 text-slate-500 uppercase">{app.loanType || app.accountType}</td>
                        <td className="px-6 py-4 text-slate-500">{app.phone}</td>
                        <td className="px-6 py-4 text-brand-navy">₹{Number(app.amount || app.initialDeposit || 0).toLocaleString()}</td>
                        <td className="px-6 py-4 text-slate-400 font-mono">{app.date}</td>
                        <td className="px-6 py-4">
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${app.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2 no-print">
                          <button className="p-1.5 text-slate-400 hover:text-brand-blue transition-colors"><Edit3 size={16}/></button>
                          <button className="p-1.5 text-slate-400 hover:text-brand-red transition-colors"><Trash2 size={16}/></button>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={9} className="px-6 py-20 text-center text-slate-400 font-bold uppercase tracking-widest">No member leads discovered in the database.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'investors' && (
            <div className="grid md:grid-cols-2 gap-8 animate-in">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-black text-brand-navy uppercase text-sm">PDF Repository Manager</h3>
                  <button className="p-2 bg-brand-blue/10 text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all"><Upload size={18} /></button>
                </div>
                <div className="space-y-4">
                  {['Annual Report FY 23-24', 'Balance Sheet Q4', 'Governance Report 2024'].map((doc, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center space-x-3">
                        <FileText className="text-brand-red" size={20} />
                        <span className="text-xs font-bold text-brand-navy uppercase tracking-tighter">{doc}</span>
                      </div>
                      <div className="flex space-x-3">
                         <button className="text-[10px] font-black text-brand-blue uppercase tracking-widest hover:underline">Replace</button>
                         <button className="text-[10px] font-black text-brand-red uppercase tracking-widest hover:underline">Purge</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h3 className="font-black text-brand-navy uppercase text-sm mb-8">Governance Council Control</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Member Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold text-sm" placeholder="Full Identity" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Institutional Rank</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-bold text-sm" placeholder="e.g. Director" />
                  </div>
                  <button className="w-full bg-brand-navy text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] shadow-lg hover:bg-brand-blue transition-all">
                    Commit Changes to Board List
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
