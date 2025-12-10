import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO, NAV_ITEMS } from '../constants';
import { MapPin, Phone, Mail, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryDark text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase">{SCHOOL_INFO.name}</h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              {SCHOOL_INFO.tagline}. Integrating traditional values with modern education to create future-ready global citizens.
            </p>
            <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition">
                    <span className="font-bold text-white">f</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition">
                    <span className="font-bold text-white">in</span>
                </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Admin Link */}
              <li>
                  <Link to="/admin" className="hover:text-white transition-colors flex items-center gap-1 text-gray-500">
                    <Lock size={12} /> Admin Login
                  </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-gray-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400 shrink-0" />
                <div>
                    <a href={`tel:${SCHOOL_INFO.phone[0]}`} className="hover:text-white block">{SCHOOL_INFO.phone[0]}</a>
                    <a href={`tel:${SCHOOL_INFO.phone[1]}`} className="hover:text-white block">{SCHOOL_INFO.phone[1]}</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white">{SCHOOL_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;