
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  LayoutDashboard, FileText, Users, Shield, 
  Settings, LogOut, Upload, Download, 
  Trash2, Edit3, CheckCircle, AlertCircle, Database, LogOut as LogOutIcon, ArrowLeft, Filter, Printer, FileSpreadsheet, PiggyBank, RefreshCw, Plus, FileUp, MoreVertical, ShieldCheck, Save, Key, Globe, Mail, Phone, MapPin, BadgePercent, User, Lock, Bell, BellOff, Share2, Facebook, Twitter, Linkedin, Instagram
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
  const [filterType, setFilterType] = useState('');

  // Data States
  const [leads, setLeads] = useState<any[]>([]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [boardMembers, setBoardMembers] = useState<any[]>([]);
  
  // Persistent Settings State
  const [settings, setSettings] = useState({
    companyName: 'Eibil Nidhi Limited',
    address: '6B, Tilak Nagar, Jhalawar Road, Kota, Rajasthan 324007',
    phone: '+91 98765 43210',
    email: 'info@eibilgroup.in',
    goldLoanRate: '9.9',
    savingsRate: '4.0',
    fdRate: '10.5',
    cin: 'U65929RJ2018PLC061161',
    facebook: 'https://facebook.com/eibilnidhi',
    twitter: 'https://twitter.com/eibilnidhi',
    linkedin: 'https://linkedin.com/company/eibilnidhi',
    instagram: 'https://instagram.com/eibilnidhi'
  });

  // Profile State
  const [profile, setProfile] = useState({
    name: 'Vishnu Prasad',
    role: 'Super Administrator',
    email: 'admin@eibilgroup.in',
    terminalId: 'ENL-KOTA-001',
    notifications: true,
    lastLogin: new Date().toLocaleString()
  });

  // Security State
  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Form States
  const [newBoardMember, setNewBoardMember] = useState({ name: '', role: '' });
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  
  // File System Logic
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [replacingDocId, setReplacingDocId] = useState<number | null>(null);

  // Core Data Synchronizer
  const syncRegistry = () => {
    // 1. Sync Leads
    const savedLeads = JSON.parse(localStorage.getItem('eibil_leads') || '[]');
    setLeads(savedLeads);

    // 2. Sync Documents
    const savedDocs = JSON.parse(localStorage.getItem('eibil_docs') || '[]');
    if (savedDocs.length === 0) {
      const defaultDocs = [
        { id: 1, name: 'Annual Report FY 23-24.pdf', date: '2024-05-15' },
        { id: 2, name: 'Audit Report Q4.pdf', date: '2024-04-10' },
        { id: 3, name: 'Board Resolution - June.pdf', date: '2024-06-20' }
      ];
      localStorage.setItem('eibil_docs', JSON.stringify(defaultDocs));
      setDocuments(defaultDocs);
    } else {
      setDocuments(savedDocs);
    }

    // 3. Sync Board
    const savedBoard = JSON.parse(localStorage.getItem('eibil_board_members') || '[]');
    if (savedBoard.length === 0) {
        const defaultBoard = [
          { id: 101, name: 'Mr. Rajesh Prasad', role: 'Chairman & MD' },
          { id: 102, name: 'Mrs. Sunita Devi', role: 'Executive Director' }
        ];
        localStorage.setItem('eibil_board_members', JSON.stringify(defaultBoard));
        setBoardMembers(defaultBoard);
      } else {
        setBoardMembers(savedBoard);
      }

    // 4. Sync Settings
    const savedSettings = JSON.parse(localStorage.getItem('eibil_settings') || 'null');
    if (savedSettings) setSettings(savedSettings);

    // 5. Sync Profile
    const savedProfile = JSON.parse(localStorage.getItem('eibil_profile') || 'null');
    if (savedProfile) setProfile(savedProfile);
  };

  useEffect(() => {
    if (isLoggedIn) syncRegistry();
  }, [isLoggedIn]);

  // Lead Actions
  const handleStatusChange = (id: string, newStatus: string) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    localStorage.setItem('eibil_leads', JSON.stringify(updated));
    setLeads(updated);
  };

  const deleteLead = (id: string) => {
    if (window.confirm('PERMANENT DELETE: Remove this lead from registry?')) {
      const updated = leads.filter(l => l.id !== id);
      localStorage.setItem('eibil_leads', JSON.stringify(updated));
      setLeads(updated);
    }
  };

  // PDF Repository Logic
  const triggerFilePicker = (id: number | null) => {
    setReplacingDocId(id);
    fileInputRef.current?.click();
  };

  const processFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    let updatedDocs;
    const today = new Date().toISOString().split('T')[0];

    if (replacingDocId !== null && documents.some(d => d.id === replacingDocId)) {
      updatedDocs = documents.map(doc => 
        doc.id === replacingDocId ? { ...doc, name: file.name, date: today } : doc
      );
    } else {
      const newDoc = { id: Date.now(), name: file.name, date: today };
      updatedDocs = [newDoc, ...documents];
    }

    localStorage.setItem('eibil_docs', JSON.stringify(updatedDocs));
    setDocuments(updatedDocs);
    setReplacingDocId(null);
    if (e.target) e.target.value = '';
  };

  const purgeDoc = (id: number) => {
    if (window.confirm('Purge document from server?')) {
      const updated = documents.filter(d => d.id !== id);
      localStorage.setItem('eibil_docs', JSON.stringify(updated));
      setDocuments(updated);
    }
  };

  // Settings Actions
  const saveInstitutionalSettings = () => {
    localStorage.setItem('eibil_settings', JSON.stringify(settings));
    setSaveStatus('Institution settings synchronized to global nodes.');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const saveProfileSettings = () => {
    localStorage.setItem('eibil_profile', JSON.stringify(profile));
    setSaveStatus('Admin folio updated successfully.');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (security.newPassword !== security.confirmPassword) {
      alert('Security Exception: Passwords do not match.');
      return;
    }
    setSaveStatus('Access credentials updated. Re-login required.');
    setSecurity({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const purgeLeadDatabase = () => {
    if (window.confirm('CRITICAL: Purge entire lead database? This cannot be undone.')) {
      localStorage.removeItem('eibil_leads');
      setLeads([]);
    }
  };

  // Board Member Logic
  const commitBoardMember = () => {
    if (!newBoardMember.name || !newBoardMember.role) return;
    const member = { id: Date.now(), ...newBoardMember };
    const updated = [member, ...boardMembers];
    localStorage.setItem('eibil_board_members', JSON.stringify(updated));
    setBoardMembers(updated);
    setNewBoardMember({ name: '', role: '' });
  };

  const removeBoardMember = (id: number) => {
    const updated = boardMembers.filter(m => m.id !== id);
    localStorage.setItem('eibil_board_members', JSON.stringify(updated));
    setBoardMembers(updated);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'eibilbank' && password === 'vishnu@123') {
      setIsLoggedIn(true);
      setLoginError('');
      setProfile(prev => ({ ...prev, lastLogin: new Date().toLocaleString() }));
    } else {
      setLoginError('CREDENTIAL_ERROR: Unauthorized access detected.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      const leadDate = new Date(lead.date);
      const matchesYear = filterYear ? leadDate.getFullYear().toString() === filterYear : true;
      const matchesMonth = filterMonth ? (leadDate.getMonth() + 1).toString() === filterMonth : true;
      const matchesDate = filterDate ? lead.date === filterDate : true;
      const normalizedType = lead.type || 'Loan';
      const matchesType = filterType ? normalizedType === filterType : true;
      return matchesYear && matchesMonth && matchesDate && matchesType;
    });
  }, [leads, filterYear, filterMonth, filterDate, filterType]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-brand-gray flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="bg-brand-navy p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue/10 opacity-50"></div>
            <Link to="/" className="absolute top-6 left-6 text-white/40 hover:text-white transition-all">
              <ArrowLeft size={20} />
            </Link>
            <Shield size={48} className="mx-auto text-brand-red mb-4 relative z-10" />
            <h1 className="text-xl font-black text-white uppercase tracking-widest relative z-10">Admin Authority</h1>
            <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mt-1 relative z-10">Eibil Nidhi Security Gateway</p>
          </div>
          <form onSubmit={handleLogin} className="p-10 space-y-6">
            {loginError && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-black flex items-center border border-red-100 animate-pulse">
                <AlertCircle size={16} className="mr-2 shrink-0" /> {loginError}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Terminal UID</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="eibilbank" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Access Token</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-brand-blue transition-all shadow-xl shadow-brand-blue/20">
              Initialize Command
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase">Restricted for Authorized Vishnu Prasad Team Only</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Dynamic File Input */}
      <input type="file" ref={fileInputRef} onChange={processFileUpload} className="hidden" accept=".pdf,.doc,.docx" />

      {/* Sidebar Command Center */}
      <aside className="w-80 bg-brand-navy text-white flex flex-col hidden lg:flex no-print border-r border-white/5">
        <div className="p-10 border-b border-white/5">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg">
              <Shield size={24} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest leading-none">ENL-CORE</p>
              <p className="text-[9px] text-green-400 uppercase font-black tracking-widest flex items-center mt-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Server
              </p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-6 space-y-3">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Control Center' },
            { id: 'leads', icon: Database, label: 'Inbound Leads' },
            { id: 'investors', icon: FileText, label: 'Repository Hub' },
            { id: 'profile', icon: User, label: 'Admin Profile' },
            { id: 'settings', icon: Settings, label: 'Institutional Hub' },
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all font-black text-xs uppercase tracking-widest ${activeTab === item.id ? 'bg-brand-blue text-white shadow-2xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6">
          <button onClick={handleLogout} className="w-full flex items-center justify-center space-x-3 px-6 py-5 rounded-2xl bg-brand-red/10 text-brand-red border border-brand-red/20 font-black text-[10px] uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all">
            <LogOutIcon size={18} />
            <span>Terminate Shell</span>
          </button>
        </div>
      </aside>

      {/* Primary Interface */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 h-24 flex items-center justify-between px-10 no-print">
          <div className="flex items-center space-x-6">
             <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">
               Terminal <span className="text-brand-blue">/ {activeTab}</span>
             </h2>
             <button onClick={syncRegistry} className="p-3 bg-slate-50 text-slate-400 hover:text-brand-blue rounded-xl transition-all border border-slate-200">
                <RefreshCw size={18} />
             </button>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-brand-navy uppercase tracking-widest">{profile.name}</p>
              <p className="text-[9px] font-black text-brand-red uppercase">{profile.role}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-black text-sm shadow-xl border-2 border-brand-blue overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="P" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 bg-slate-50/50">
          {saveStatus && (
            <div className="fixed top-28 right-10 z-[100] bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center animate-in">
              <CheckCircle size={18} className="mr-3" /> {saveStatus}
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="space-y-10 animate-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { label: 'Total Syncs', val: leads.length.toString(), icon: Database, color: 'text-brand-blue', bg: 'bg-brand-blue/5' },
                  { label: 'Loan Requests', val: leads.filter(l => (l.type || 'Loan') === 'Loan').length.toString(), icon: FileUp, color: 'text-brand-red', bg: 'bg-brand-red/5' },
                  { label: 'Savings Intake', val: leads.filter(l => l.type === 'Savings').length.toString(), icon: PiggyBank, color: 'text-green-500', bg: 'bg-green-500/5' },
                  { label: 'Portal Docs', val: documents.length.toString(), icon: FileText, color: 'text-orange-500', bg: 'bg-orange-500/5' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                    <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-xl flex items-center justify-center mb-6`}>
                      <stat.icon size={20} />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                    <span className={`text-3xl font-black ${stat.color}`}>{stat.val}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-[2.5rem] border border-slate-200 p-20 text-center shadow-inner relative overflow-hidden">
                <Database size={64} className="mx-auto text-brand-blue/20 mb-8" />
                <h3 className="text-2xl font-black text-brand-navy uppercase mb-4 tracking-tighter">Central Intelligence Active</h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest max-w-xl mx-auto">Systems normalized. Last secure sync: {profile.lastLogin}.</p>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-5xl mx-auto space-y-10 animate-in">
               <div className="grid lg:grid-cols-12 gap-10">
                  {/* Left: Identity Card */}
                  <div className="lg:col-span-4 space-y-8">
                     <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-10 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-blue/5 rounded-full blur-2xl"></div>
                        <div className="w-32 h-32 rounded-[2.5rem] bg-brand-navy overflow-hidden shadow-2xl relative group mx-auto mb-8 border-4 border-slate-50">
                           <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="P" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                           <div className="absolute inset-0 bg-brand-navy/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                              <Edit3 size={24} className="text-white" />
                           </div>
                        </div>
                        <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">{profile.name}</h3>
                        <p className="text-brand-blue font-black uppercase text-[10px] tracking-widest mb-6">{profile.role}</p>
                        
                        <div className="flex flex-col gap-3">
                           <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">UID</span>
                              <span className="text-[10px] font-black text-brand-navy font-mono">{profile.terminalId}</span>
                           </div>
                           <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Secure State</span>
                              <span className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center">
                                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div> Verified
                              </span>
                           </div>
                        </div>
                     </div>

                     <div className="bg-brand-navy rounded-[2.5rem] p-10 text-white space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest flex items-center">
                           <Bell size={16} className="mr-3 text-brand-blue" /> Alert Prefs
                        </h4>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Inbound Lead Alerts</span>
                              <button onClick={() => setProfile({...profile, notifications: !profile.notifications})} className={`w-12 h-6 rounded-full transition-all relative ${profile.notifications ? 'bg-brand-blue' : 'bg-slate-700'}`}>
                                 <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${profile.notifications ? 'right-1' : 'left-1'}`}></div>
                              </button>
                           </div>
                           <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">System Log Synch</span>
                              <button className="w-12 h-6 bg-brand-blue rounded-full relative">
                                 <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right: Folio Editor */}
                  <div className="lg:col-span-8 space-y-10">
                     <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-12">
                        <h3 className="text-xl font-black text-brand-navy uppercase tracking-tighter mb-10 flex items-center border-b border-slate-50 pb-8">
                           <FileText size={24} className="mr-4 text-brand-blue" /> Administrative Folio
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Admin Identity Name</label>
                              <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm uppercase" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Official Email Port</label>
                              <input type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Institutional Title</label>
                              <input type="text" value={profile.role} onChange={e => setProfile({...profile, role: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm uppercase" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Established Link</label>
                              <input disabled type="text" value={profile.lastLogin} className="w-full px-6 py-4 bg-slate-100 border border-slate-200 rounded-2xl outline-none font-black text-sm text-slate-400" />
                           </div>
                        </div>
                        <div className="mt-12">
                           <button onClick={saveProfileSettings} className="px-10 py-5 bg-brand-navy text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-brand-blue transition-all flex items-center">
                              <Save size={18} className="mr-3" /> Commit Profile Updates
                           </button>
                        </div>
                     </div>

                     <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-12">
                        <h3 className="text-xl font-black text-brand-navy uppercase tracking-tighter mb-10 flex items-center border-b border-slate-50 pb-8">
                           <Lock size={24} className="mr-4 text-brand-red" /> Access Credential Terminal
                        </h3>
                        <form onSubmit={handlePasswordReset} className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-3 md:col-span-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Active Token</label>
                              <input type="password" value={security.currentPassword} onChange={e => setSecurity({...security, currentPassword: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm" placeholder="••••••••" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">New Access Key</label>
                              <input type="password" value={security.newPassword} onChange={e => setSecurity({...security, newPassword: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm" placeholder="••••••••" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Confirm New Key</label>
                              <input type="password" value={security.confirmPassword} onChange={e => setSecurity({...security, confirmPassword: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm" placeholder="••••••••" />
                           </div>
                           <div className="mt-4 md:col-span-2">
                              <button type="submit" className="px-10 py-5 bg-brand-red text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:brightness-110 transition-all flex items-center">
                                 <Key size={18} className="mr-3" /> Rotate Access Credentials
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-5xl mx-auto space-y-12 animate-in pb-20">
              {/* Institutional Profile */}
              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-12">
                <div className="flex items-center space-x-4 mb-10 border-b border-slate-50 pb-8">
                   <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center text-white">
                      <Globe size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-brand-navy uppercase tracking-tighter">Institutional Identity</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Global Portal Information Layer</p>
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Legal Entity Name</label>
                    <input type="text" value={settings.companyName} onChange={e => setSettings({...settings, companyName: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm uppercase" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Registrar CIN (Fixed)</label>
                    <input type="text" value={settings.cin} onChange={e => setSettings({...settings, cin: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm uppercase" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Helpdesk Gateway</label>
                    <input type="text" value={settings.phone} onChange={e => setSettings({...settings, phone: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Institutional HQ Address</label>
                    <textarea value={settings.address} onChange={e => setSettings({...settings, address: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-black text-sm h-24 uppercase"></textarea>
                  </div>
                </div>
              </div>

              {/* Interest Rate Engine */}
              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-12">
                <div className="flex items-center space-x-4 mb-10 border-b border-slate-50 pb-8">
                   <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white">
                      <BadgePercent size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-brand-navy uppercase tracking-tighter">Interest Rate Engine</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Live Institutional Calculation Ratios</p>
                   </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <label className="text-[10px] font-black text-brand-navy uppercase tracking-widest block mb-2">Gold Loan % (p.a.)</label>
                    <div className="flex items-center">
                       <input type="text" value={settings.goldLoanRate} onChange={e => setSettings({...settings, goldLoanRate: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-black text-lg text-brand-blue" />
                       <span className="ml-3 font-black text-slate-400">%</span>
                    </div>
                  </div>
                  <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <label className="text-[10px] font-black text-brand-navy uppercase tracking-widest block mb-2">Savings Interest %</label>
                    <div className="flex items-center">
                       <input type="text" value={settings.savingsRate} onChange={e => setSettings({...settings, savingsRate: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-black text-lg text-green-500" />
                       <span className="ml-3 font-black text-slate-400">%</span>
                    </div>
                  </div>
                  <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <label className="text-[10px] font-black text-brand-navy uppercase tracking-widest block mb-2">Fixed Deposit Max %</label>
                    <div className="flex items-center">
                       <input type="text" value={settings.fdRate} onChange={e => setSettings({...settings, fdRate: e.target.value})} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-brand-blue outline-none font-black text-lg text-brand-red" />
                       <span className="ml-3 font-black text-slate-400">%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Presence */}
              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-12">
                <div className="flex items-center space-x-4 mb-10 border-b border-slate-50 pb-8">
                   <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-brand-navy">
                      <Share2 size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-brand-navy uppercase tracking-tighter">Communication Gateways</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Institutional Social & Support Links</p>
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                         <Facebook size={20} className="text-blue-600" />
                         <input type="text" value={settings.facebook} onChange={e => setSettings({...settings, facebook: e.target.value})} className="flex-1 px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none" placeholder="Facebook URL" />
                      </div>
                      <div className="flex items-center space-x-4">
                         <Twitter size={20} className="text-sky-400" />
                         <input type="text" value={settings.twitter} onChange={e => setSettings({...settings, twitter: e.target.value})} className="flex-1 px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none" placeholder="Twitter URL" />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                         <Linkedin size={20} className="text-blue-800" />
                         <input type="text" value={settings.linkedin} onChange={e => setSettings({...settings, linkedin: e.target.value})} className="flex-1 px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none" placeholder="LinkedIn URL" />
                      </div>
                      <div className="flex items-center space-x-4">
                         <Instagram size={20} className="text-pink-600" />
                         <input type="text" value={settings.instagram} onChange={e => setSettings({...settings, instagram: e.target.value})} className="flex-1 px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none" placeholder="Instagram URL" />
                      </div>
                   </div>
                </div>

                <div className="mt-12">
                   <button onClick={saveInstitutionalSettings} className="px-12 py-5 bg-brand-navy text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-brand-blue transition-all flex items-center">
                      <Save size={18} className="mr-3" /> Synchronize Hub Settings
                   </button>
                </div>
              </div>

              {/* Security & Maintenance */}
              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-12">
                <div className="flex items-center space-x-4 mb-10 border-b border-slate-50 pb-8">
                   <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-brand-red">
                      <Trash2 size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-brand-navy uppercase tracking-tighter">Terminal Maintenance</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Sensitive Database Purge & Hard Resets</p>
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4 hover:border-brand-blue/30 transition-all">
                    <h4 className="font-black text-brand-navy uppercase text-xs tracking-widest flex items-center">
                       <ShieldCheck size={16} className="mr-2 text-brand-blue" /> Institutional Vault Reset
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed">Hard reset all institutional metadata back to Kota HQ factory defaults.</p>
                    <button className="text-[10px] font-black text-brand-blue uppercase hover:underline">Execute Node Reset</button>
                  </div>
                  <div className="p-8 bg-red-50/50 rounded-3xl border border-red-100 space-y-4 hover:border-brand-red/30 transition-all">
                    <h4 className="font-black text-brand-red uppercase text-xs tracking-widest flex items-center">
                       <Trash2 size={16} className="mr-2" /> Application Lead Purge
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed">Permanently destroy all captured inbound member leads from the terminal.</p>
                    <button onClick={purgeLeadDatabase} className="text-[10px] font-black text-brand-red uppercase hover:underline">Purge All Lead Records</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'leads' && (
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden animate-in">
              <div className="p-10 border-b border-slate-100 bg-slate-50/30">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div>
                    <h3 className="font-black text-brand-navy uppercase text-sm tracking-widest">Member Leads Registry</h3>
                    <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">Consolidated Application Inbound</p>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => window.print()} className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-black text-[10px] flex items-center hover:scale-105 transition-all uppercase tracking-widest shadow-xl">
                      <Printer size={16} className="mr-3" /> Print PDF
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto px-6 pb-10">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                      <th className="px-8 py-6">Reference</th>
                      <th className="px-8 py-6">Identity</th>
                      <th className="px-8 py-6">Category</th>
                      <th className="px-8 py-6">Value (₹)</th>
                      <th className="px-8 py-6">Date</th>
                      <th className="px-8 py-6">Status</th>
                      <th className="px-8 py-6 text-right">Ops</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] font-black">
                    {leads.length > 0 ? leads.map((app) => (
                      <tr key={app.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6 text-brand-blue font-mono">{app.id}</td>
                        <td className="px-8 py-6">
                           <p className="text-brand-navy uppercase">{app.name}</p>
                           <p className="text-[10px] text-slate-400">{app.phone}</p>
                        </td>
                        <td className="px-8 py-6">
                           <span className={`inline-flex items-center text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-widest ${app.type === 'Savings' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                              {app.type || 'LOAN'}
                           </span>
                        </td>
                        <td className="px-8 py-6 text-brand-navy">₹{Number(app.amount || app.initialDeposit || 0).toLocaleString()}</td>
                        <td className="px-8 py-6 text-slate-400">{app.date}</td>
                        <td className="px-8 py-6">
                          <select 
                            value={app.status} 
                            onChange={(e) => handleStatusChange(app.id, e.target.value)}
                            className="text-[9px] font-black uppercase px-2 py-1 rounded-lg border-0 bg-slate-100 outline-none"
                          >
                             <option>Pending</option>
                             <option>Approved</option>
                             <option>Rejected</option>
                          </select>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button onClick={() => deleteLead(app.id)} className="p-3 text-slate-300 hover:text-brand-red transition-all"><Trash2 size={16}/></button>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={7} className="px-8 py-32 text-center text-slate-400 font-black uppercase tracking-widest">No leads captured in current registry.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'investors' && (
            <div className="grid lg:grid-cols-12 gap-10 animate-in">
              <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-10">
                <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-8">
                  <div>
                    <h3 className="font-black text-brand-navy uppercase text-sm tracking-widest">Digital PDF Repository</h3>
                  </div>
                  <button onClick={() => triggerFilePicker(null)} className="p-4 bg-brand-blue text-white rounded-2xl hover:scale-105 shadow-xl transition-all flex items-center">
                    <Plus size={18} className="mr-2" /> Upload New
                  </button>
                </div>
                <div className="space-y-6">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex justify-between items-center p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-brand-blue/30 transition-all">
                      <div className="flex items-center space-x-5">
                        <FileText size={24} className="text-brand-red" />
                        <div>
                          <p className="text-sm font-black text-brand-navy uppercase truncate max-w-[250px]">{doc.name}</p>
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                         <button onClick={() => triggerFilePicker(doc.id)} className="text-[10px] font-black text-brand-blue uppercase tracking-widest hover:underline flex items-center">
                            Replace
                         </button>
                         <button onClick={() => purgeDoc(doc.id)} className="text-[10px] font-black text-brand-red uppercase tracking-widest hover:underline flex items-center">
                            Purge
                         </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-10">
                <h3 className="font-black text-brand-navy uppercase text-sm mb-10 border-b border-slate-50 pb-8 tracking-widest">Council Board Governance</h3>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Identity Name</label>
                    <input type="text" value={newBoardMember.name} onChange={e => setNewBoardMember({...newBoardMember, name: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-black text-sm uppercase" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Member Rank</label>
                    <input type="text" value={newBoardMember.role} onChange={e => setNewBoardMember({...newBoardMember, role: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-black text-sm uppercase" placeholder="e.g. Chairman" />
                  </div>
                  <button onClick={commitBoardMember} className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl hover:bg-brand-blue transition-all">
                    Register Member
                  </button>
                  <div className="mt-12">
                     <p className="text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] mb-6 flex items-center">
                        <Users size={14} className="mr-2" /> Current Council Members
                     </p>
                     <div className="space-y-4">
                        {boardMembers.map(m => (
                          <div key={m.id} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 transition-all">
                             <div>
                                <p className="text-xs font-black text-brand-navy uppercase">{m.name}</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{m.role}</p>
                             </div>
                             <button onClick={() => removeBoardMember(m.id)} className="p-2 text-slate-300 hover:text-brand-red transition-all"><Trash2 size={16} /></button>
                          </div>
                        ))}
                     </div>
                  </div>
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
