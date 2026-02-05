
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  LayoutDashboard, FileText, Users, Shield, 
  Settings, LogOut, Upload, Download, 
  Trash2, Edit3, CheckCircle, AlertCircle, Database, LogOut as LogOutIcon, ArrowLeft, Filter, Printer, FileSpreadsheet, PiggyBank, RefreshCw, Plus, FileUp, MoreVertical, ShieldCheck, Save, Key, Globe, Mail, Phone, MapPin, BadgePercent, User, Lock, Bell, BellOff, Share2, Facebook, Twitter, Linkedin, Instagram, GraduationCap, Eye, PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('leads');
  const [loginError, setLoginError] = useState('');
  
  // Data States
  const [leads, setLeads] = useState<any[]>([]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [boardMembers, setBoardMembers] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [selectedApp, setSelectedApp] = useState<any>(null);
  
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

  // Form States
  const [newBoardMember, setNewBoardMember] = useState({ name: '', role: '' });
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  
  // File System Logic
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [replacingDocId, setReplacingDocId] = useState<number | null>(null);

  // Core Data Synchronizer
  const syncRegistry = () => {
    // 1. Sync Leads
    setLeads(JSON.parse(localStorage.getItem('eibil_leads') || '[]'));

    // 2. Sync Recruitment
    setApplications(JSON.parse(localStorage.getItem('eibil_job_apps') || '[]'));

    // 3. Sync Documents
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

    // 4. Sync Board
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

    // 5. Sync Settings
    const savedSettings = JSON.parse(localStorage.getItem('eibil_settings') || 'null');
    if (savedSettings) setSettings(savedSettings);

    // 6. Sync Profile
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

  // Recruitment Actions
  const handleAppStatusChange = (id: string, newStatus: string) => {
    const updated = applications.map(a => a.id === id ? { ...a, status: newStatus } : a);
    localStorage.setItem('eibil_job_apps', JSON.stringify(updated));
    setApplications(updated);
  };

  const deleteApplication = (id: string) => {
    if (window.confirm('Recruitment Purge: Remove this candidate profile?')) {
      const updated = applications.filter(a => a.id !== id);
      localStorage.setItem('eibil_job_apps', JSON.stringify(updated));
      setApplications(updated);
    }
  };

  const downloadCV = (cvBase64: string, name: string) => {
    if (!cvBase64) {
      alert('Error: No digital CV attached to this profile.');
      return;
    }
    const link = document.createElement('a');
    link.href = cvBase64;
    link.download = `CV_${name.replace(/\s+/g, '_')}_ENL.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const printApplication = (app: any) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Job Application - ${app.name}</title>
          <style>
            body { font-family: sans-serif; padding: 40px; color: #333; }
            .header { border-bottom: 2px solid #003366; padding-bottom: 20px; margin-bottom: 30px; }
            .label { font-weight: bold; color: #003366; text-transform: uppercase; font-size: 10px; margin-bottom: 5px; }
            .value { font-size: 14px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
            h1 { color: #003366; margin: 0; font-size: 24px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>EIBIL NIDHI LIMITED</h1>
            <p>Institutional Employment Record: ${app.id}</p>
          </div>
          <div class="label">Date Submitted</div><div class="value">${app.date}</div>
          <div class="label">Applicant Name</div><div class="value">${app.name}</div>
          <div class="label">Position Target</div><div class="value">${app.position}</div>
          <div class="label">Experience Level</div><div class="value">${app.experience}</div>
          <div class="label">Email Address</div><div class="value">${app.email}</div>
          <div class="label">Contact Phone</div><div class="value">${app.phone}</div>
          <div class="label">Personal Statement</div><div class="value">${app.message || 'N/A'}</div>
          <div style="margin-top: 50px; border-top: 1px solid #ccc; pt: 20px; font-size: 10px; text-align: center;">
            Official Administrative Record | Generated from Eibil Nidhi Core Gateway
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // PDF Repository Logic
  const triggerFilePicker = (id: number | null) => {
    setReplacingDocId(id);
    fileInputRef.current?.click();
  };

  const processFileUpload = (processE: React.ChangeEvent<HTMLInputElement>) => {
    const file = processE.target.files?.[0];
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
    if (processE.target) processE.target.value = '';
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'eibilbank' && password === 'vishnu@123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('CREDENTIAL_ERROR: Unauthorized access detected.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

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
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Access Token</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand-blue outline-none font-bold" />
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
      <input type="file" ref={fileInputRef} onChange={processFileUpload} className="hidden" accept=".pdf,.doc,.docx" />

      {/* Sidebar */}
      <aside className="w-80 bg-brand-navy text-white flex flex-col hidden lg:flex no-print border-r border-white/5">
        <div className="p-10 border-b border-white/5">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg">
              <Shield size={24} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest leading-none">ENL-CORE</p>
              <p className="text-[9px] text-green-400 uppercase font-black tracking-widest flex items-center mt-1">Live Server</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-6 space-y-3">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Control Center' },
            { id: 'leads', icon: Database, label: 'Inbound Leads' },
            { id: 'recruitment', icon: GraduationCap, label: 'Candidate Hub' },
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

      {/* Main Panel */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 h-24 flex items-center justify-between px-10 no-print">
          <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">Terminal <span className="text-brand-blue">/ {activeTab}</span></h2>
          <button onClick={syncRegistry} className="p-3 bg-slate-50 text-slate-400 hover:text-brand-blue rounded-xl transition-all border border-slate-200"><RefreshCw size={18} /></button>
        </header>

        <div className="flex-1 overflow-y-auto p-10 bg-slate-50/50">
          {saveStatus && (
            <div className="fixed top-28 right-10 z-[100] bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center animate-in">
              <CheckCircle size={18} className="mr-3" /> {saveStatus}
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <Database className="text-brand-blue mb-4" size={24} />
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Total Syncs</p>
                  <span className="text-3xl font-black text-brand-navy">{leads.length + applications.length}</span>
               </div>
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <GraduationCap className="text-brand-red mb-4" size={24} />
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Applicants</p>
                  <span className="text-3xl font-black text-brand-navy">{applications.length}</span>
               </div>
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <PieChart className="text-green-500 mb-4" size={24} />
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Leads In Review</p>
                  <span className="text-3xl font-black text-brand-navy">{leads.filter(l => l.status === 'Pending').length}</span>
               </div>
               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <FileText className="text-orange-500 mb-4" size={24} />
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">System Files</p>
                  <span className="text-3xl font-black text-brand-navy">{documents.length}</span>
               </div>
            </div>
          )}

          {activeTab === 'recruitment' && (
            <div className="space-y-10 animate-in">
               <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-10 border-b border-slate-100 flex justify-between items-center">
                    <div>
                      <h3 className="font-black text-brand-navy uppercase text-sm tracking-widest">Candidate Onboarding Vault</h3>
                      <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">Recruitment & Talent Management</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto px-6 pb-10">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                          <th className="px-8 py-6">ID</th>
                          <th className="px-8 py-6">Identity</th>
                          <th className="px-8 py-6">Position</th>
                          <th className="px-8 py-6">Experience</th>
                          <th className="px-8 py-6">Status</th>
                          <th className="px-8 py-6 text-right">Operations</th>
                        </tr>
                      </thead>
                      <tbody className="text-[12px] font-black">
                        {applications.length > 0 ? applications.map((app) => (
                          <tr key={app.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                            <td className="px-8 py-6 text-brand-blue font-mono">{app.id}</td>
                            <td className="px-8 py-6">
                              <p className="text-brand-navy uppercase">{app.name}</p>
                              <p className="text-[10px] text-slate-400">{app.email}</p>
                            </td>
                            <td className="px-8 py-6 text-brand-navy uppercase">{app.position}</td>
                            <td className="px-8 py-6 text-slate-500">{app.experience}</td>
                            <td className="px-8 py-6">
                              <select 
                                value={app.status} 
                                onChange={(e) => handleAppStatusChange(app.id, e.target.value)}
                                className="text-[9px] font-black uppercase px-2 py-1 rounded-lg border-0 bg-slate-100 outline-none"
                              >
                                <option>In Review</option>
                                <option>Interviewing</option>
                                <option>Accepted</option>
                                <option>Rejected</option>
                              </select>
                            </td>
                            <td className="px-8 py-6 text-right space-x-2">
                               <button onClick={() => printApplication(app)} className="p-2 text-brand-blue hover:bg-blue-50 rounded-lg transition-all" title="Print Application"><Printer size={16}/></button>
                               <button onClick={() => downloadCV(app.cvData, app.name)} className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-all" title="Download CV"><Download size={16}/></button>
                               <button onClick={() => deleteApplication(app.id)} className="p-2 text-brand-red hover:bg-red-50 rounded-lg transition-all" title="Delete Profile"><Trash2 size={16}/></button>
                            </td>
                          </tr>
                        )) : (
                          <tr><td colSpan={6} className="px-8 py-32 text-center text-slate-400 font-black uppercase tracking-widest">No candidates in the vault.</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'leads' && (
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden animate-in">
              <div className="p-10 border-b border-slate-100 bg-slate-50/30">
                <h3 className="font-black text-brand-navy uppercase text-sm tracking-widest">Member Leads Registry</h3>
              </div>
              <div className="overflow-x-auto px-6 pb-10">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                      <th className="px-8 py-6">Reference</th>
                      <th className="px-8 py-6">Identity</th>
                      <th className="px-8 py-6">Category</th>
                      <th className="px-8 py-6">Value (₹)</th>
                      <th className="px-8 py-6">Status</th>
                      <th className="px-8 py-6 text-right">Ops</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] font-black">
                    {leads.length > 0 ? leads.map((app) => (
                      <tr key={app.id} className="border-b border-slate-50">
                        <td className="px-8 py-6 text-brand-blue font-mono">{app.id}</td>
                        <td className="px-8 py-6"><p className="text-brand-navy uppercase">{app.name}</p></td>
                        <td className="px-8 py-6"><span className="text-[10px] bg-slate-100 px-2 py-1 rounded uppercase tracking-widest">{app.type || 'LOAN'}</span></td>
                        <td className="px-8 py-6 text-brand-navy">₹{Number(app.amount || app.initialDeposit || 0).toLocaleString()}</td>
                        <td className="px-8 py-6">
                           <select value={app.status} onChange={(e) => handleStatusChange(app.id, e.target.value)} className="text-[9px] font-black uppercase px-2 py-1 bg-slate-50 outline-none">
                              <option>Pending</option><option>Approved</option><option>Rejected</option>
                           </select>
                        </td>
                        <td className="px-8 py-6 text-right"><button onClick={() => deleteLead(app.id)} className="p-2 text-slate-300 hover:text-brand-red"><Trash2 size={16}/></button></td>
                      </tr>
                    )) : (
                      <tr><td colSpan={6} className="px-8 py-32 text-center text-slate-400 uppercase">Registry Empty.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-4xl mx-auto bg-white p-12 rounded-[2.5rem] border border-slate-200">
               <h3 className="text-xl font-black text-brand-navy uppercase mb-10 border-b border-slate-100 pb-8">Admin Profile Settings</h3>
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase">Admin Identity</label>
                    <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-black text-sm uppercase" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase">Official Title</label>
                    <input type="text" value={profile.role} onChange={e => setProfile({...profile, role: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-black text-sm uppercase" />
                  </div>
               </div>
               <button onClick={saveProfileSettings} className="mt-10 px-10 py-5 bg-brand-navy text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-blue transition-all">Save Changes</button>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-4xl mx-auto space-y-12">
               <div className="bg-white p-12 rounded-[2.5rem] border border-slate-200">
                  <h3 className="text-xl font-black text-brand-navy uppercase mb-10 border-b border-slate-100 pb-8">Institutional Hub Settings</h3>
                  <div className="space-y-8">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Legal Entity Name</label>
                        <input type="text" value={settings.companyName} onChange={e => setSettings({...settings, companyName: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-black text-sm uppercase" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Helpdesk Phone</label>
                        <input type="text" value={settings.phone} onChange={e => setSettings({...settings, phone: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-black text-sm" />
                     </div>
                     <button onClick={saveInstitutionalSettings} className="px-10 py-5 bg-brand-navy text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-blue transition-all">Synchronize Hub</button>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'investors' && (
             <div className="bg-white p-12 rounded-[2.5rem] border border-slate-200">
               <div className="flex justify-between items-center mb-10 pb-8 border-b border-slate-100">
                  <h3 className="font-black text-brand-navy uppercase text-sm">PDF Asset Repository</h3>
                  <button onClick={() => triggerFilePicker(null)} className="p-4 bg-brand-blue text-white rounded-2xl hover:scale-105 transition-all flex items-center"><Plus size={18} className="mr-2" /> New Document</button>
               </div>
               <div className="space-y-6">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex justify-between items-center p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                       <div className="flex items-center space-x-5">
                          <FileText size={24} className="text-brand-red" />
                          <div>
                             <p className="text-sm font-black text-brand-navy uppercase">{doc.name}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{doc.date}</p>
                          </div>
                       </div>
                       <button onClick={() => purgeDoc(doc.id)} className="text-[10px] font-black text-brand-red uppercase hover:underline">Purge</button>
                    </div>
                  ))}
               </div>
             </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
