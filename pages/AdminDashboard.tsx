import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Trash2, Bell, MessageSquare, Plus, X, Calendar } from 'lucide-react';

interface Enquiry {
  id: number;
  date: string;
  type: string;
  parentName?: string;
  childName?: string;
  mobile: string;
  email?: string;
  message?: string;
  subject?: string;
}

interface Notice {
  id: number;
  title: string;
  description: string;
  startDate: string; // ISO Date String YYYY-MM-DD
  endDate: string; // ISO Date String YYYY-MM-DD
  isNew: boolean;
}

const AdminDashboard: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [activeTab, setActiveTab] = useState<'enquiries' | 'notices'>('enquiries');
  
  // Notice Form State
  const [newNotice, setNewNotice] = useState({ 
    title: '', 
    description: '',
    startDate: new Date().toISOString().split('T')[0], // Default to today
    endDate: '', 
    isNew: true 
  });
  
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin');

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin', { replace: true });
    } else {
      // Load enquiries
      const enqData = JSON.parse(localStorage.getItem('school_enquiries') || '[]');
      setEnquiries(enqData);
      
      // Load notices
      const storedNotices = JSON.parse(localStorage.getItem('school_notices') || 'null');
      if (storedNotices) {
          setNotices(storedNotices);
      } else {
          // Initialize defaults if empty (simulated, usually handled in Home)
          const today = new Date();
          const nextMonth = new Date();
          nextMonth.setMonth(today.getMonth() + 1);

          const defaults: Notice[] = [
            { 
                id: 1, 
                title: "Admission Open for Session 2025-26 - Apply Now", 
                description: "Admissions are now open for all classes...",
                startDate: today.toISOString().split('T')[0],
                endDate: nextMonth.toISOString().split('T')[0],
                isNew: true 
            }
          ];
          setNotices(defaults);
      }
    }
  }, [navigate, isAdmin]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin', { replace: true });
  };

  // Enquiry Actions
  const clearEnquiries = () => {
    if(confirm("Are you sure you want to delete all enquiries?")) {
        localStorage.removeItem('school_enquiries');
        setEnquiries([]);
    }
  }

  // Notice Actions
  const handleNoticeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!newNotice.title || !newNotice.startDate || !newNotice.endDate) {
        alert("Please fill in Title and Date Range.");
        return;
    }

    const notice: Notice = {
        id: Date.now(),
        ...newNotice
    };
    
    const updatedNotices = [notice, ...notices];
    setNotices(updatedNotices);
    localStorage.setItem('school_notices', JSON.stringify(updatedNotices));
    
    // Reset Form
    setNewNotice({ 
        title: '', 
        description: '', 
        startDate: new Date().toISOString().split('T')[0], 
        endDate: '', 
        isNew: true 
    });
  };

  const deleteNotice = (id: number) => {
      if(confirm("Delete this notice?")) {
        const updatedNotices = notices.filter(n => n.id !== id);
        setNotices(updatedNotices);
        localStorage.setItem('school_notices', JSON.stringify(updatedNotices));
      }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">Super Admin</span>
          </div>
          <button onClick={handleLogout} className="flex items-center text-sm bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition shadow-md">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
            <button 
                onClick={() => setActiveTab('enquiries')}
                className={`flex-1 md:flex-none px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${activeTab === 'enquiries' ? 'bg-white text-primary ring-2 ring-primary shadow-md' : 'bg-white/50 text-gray-500 hover:bg-white'}`}
            >
                <MessageSquare className="w-5 h-5" /> Enquiries 
                <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">{enquiries.length}</span>
            </button>
            <button 
                onClick={() => setActiveTab('notices')}
                className={`flex-1 md:flex-none px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${activeTab === 'notices' ? 'bg-white text-primary ring-2 ring-primary shadow-md' : 'bg-white/50 text-gray-500 hover:bg-white'}`}
            >
                <Bell className="w-5 h-5" /> Notice Board
                <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">{notices.length}</span>
            </button>
        </div>

        {/* Content Area */}
        {activeTab === 'enquiries' && (
            <div className="bg-white rounded-xl shadow-card overflow-hidden animate-fade-in-up">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">Recent Enquiries</h2>
                    {enquiries.length > 0 && (
                        <button onClick={clearEnquiries} className="flex items-center text-red-600 hover:text-red-800 text-sm font-bold bg-red-50 px-3 py-1.5 rounded-lg transition">
                            <Trash2 className="w-4 h-4 mr-1" /> Clear All
                        </button>
                    )}
                </div>

                {enquiries.length === 0 ? (
                    <div className="p-12 text-center text-gray-400 flex flex-col items-center">
                        <MessageSquare className="w-12 h-12 mb-3 opacity-20" />
                        <p>No enquiries received yet.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Contact</th>
                            <th className="px-6 py-4">Details</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                        {enquiries.map((enq) => (
                            <tr key={enq.id} className="hover:bg-blue-50/30 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">{enq.date.split(',')[0]}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${enq.type === 'Admission' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                {enq.type}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="font-bold text-gray-900">{enq.parentName}</div>
                                {enq.childName && <div className="text-xs text-gray-500">Child: {enq.childName}</div>}
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-gray-900">{enq.mobile}</div>
                                <div className="text-xs text-blue-500">{enq.email}</div>
                            </td>
                            <td className="px-6 py-4">
                                {enq.subject && <div className="font-bold mb-1 text-gray-800">{enq.subject}</div>}
                                <div className="truncate max-w-xs text-gray-500">{enq.message || '-'}</div>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                )}
            </div>
        )}

        {activeTab === 'notices' && (
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
                 {/* Add Notice Form */}
                 <div className="bg-white p-6 rounded-xl shadow-card h-fit">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                        <Plus className="w-5 h-5 mr-2 text-secondary" /> Add New Notice
                    </h3>
                    <form onSubmit={handleNoticeSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                            <input 
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none"
                                placeholder="e.g. Winter Vacation Dates"
                                value={newNotice.title}
                                onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                            <textarea 
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none h-24 resize-none"
                                placeholder="Enter detailed notice information here..."
                                value={newNotice.description}
                                onChange={(e) => setNewNotice({...newNotice, description: e.target.value})}
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Valid From</label>
                                <input 
                                    type="date"
                                    className="w-full px-2 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none text-sm"
                                    value={newNotice.startDate}
                                    onChange={(e) => setNewNotice({...newNotice, startDate: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Valid Until</label>
                                <input 
                                    type="date"
                                    className="w-full px-2 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none text-sm"
                                    value={newNotice.endDate}
                                    onChange={(e) => setNewNotice({...newNotice, endDate: e.target.value})}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center pt-2">
                            <input 
                                type="checkbox" 
                                id="isNew"
                                checked={newNotice.isNew}
                                onChange={(e) => setNewNotice({...newNotice, isNew: e.target.checked})}
                                className="w-4 h-4 text-secondary rounded focus:ring-secondary"
                            />
                            <label htmlFor="isNew" className="ml-2 text-sm font-medium text-gray-700">Mark as "NEW"</label>
                        </div>
                        <button type="submit" className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-secondaryDark transition-colors shadow-lg active:scale-95">
                            Publish Notice
                        </button>
                    </form>
                 </div>

                 {/* Notices List */}
                 <div className="lg:col-span-2 space-y-4">
                    {notices.length === 0 ? (
                        <div className="bg-white p-12 rounded-xl shadow-card text-center text-gray-400">
                             <Bell className="w-12 h-12 mb-3 mx-auto opacity-20" />
                             No notices published. Add one to get started.
                        </div>
                    ) : (
                        notices.map((notice) => (
                            <div key={notice.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center group hover:shadow-md transition-all gap-4">
                                <div className="flex gap-4 items-start w-full">
                                    <div className="flex flex-col items-center justify-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 min-w-[70px]">
                                        <span className="text-xs font-bold text-gray-500 uppercase">
                                            {notice.startDate ? new Date(notice.startDate).toLocaleString('default', { month: 'short' }) : 'N/A'}
                                        </span>
                                        <span className="text-xl font-bold text-primary">
                                            {notice.startDate ? new Date(notice.startDate).getDate() : '-'}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-gray-800 text-lg mb-1 leading-tight">{notice.title}</h4>
                                        <p className="text-xs text-gray-400 line-clamp-1 mb-1">{notice.description || "No description provided."}</p>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                            {notice.isNew && <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold border border-red-200">NEW</span>}
                                            <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded">
                                                <Calendar size={10} /> 
                                                {notice.startDate} <span className="text-gray-400">to</span> {notice.endDate}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => deleteNotice(notice.id)}
                                    className="text-gray-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-full transition-colors flex-shrink-0"
                                    title="Delete Notice"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))
                    )}
                 </div>
             </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
