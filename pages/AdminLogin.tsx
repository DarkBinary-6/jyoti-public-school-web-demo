import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, ArrowLeft } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard', { replace: true });
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4 relative">
      <Link to="/" className="absolute top-6 left-6 flex items-center text-primary font-bold hover:text-primaryDark transition-colors bg-white/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md backdrop-blur-sm">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
      </Link>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Lock className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-primary mb-8">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-900"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-900"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primaryDark transition-colors shadow-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">Default: admin / admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;