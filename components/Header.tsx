import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO, NAV_ITEMS, IMAGES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 font-sans transition-all duration-300">
      {/* Top Bar - Contact Info */}
      <div className="bg-gradient-to-r from-primaryDark to-primary text-white py-2 text-xs md:text-sm shadow-md relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
             <a href={`tel:${SCHOOL_INFO.phone[0]}`} className="flex items-center hover:text-sky-200 transition-colors">
               <Phone size={14} className="mr-1" />
               <span>{SCHOOL_INFO.phone[0]}</span>
             </a>
             <a href={`mailto:${SCHOOL_INFO.email}`} className="hidden md:flex items-center hover:text-sky-200 transition-colors">
               <Mail size={14} className="mr-1" />
               <span>{SCHOOL_INFO.email}</span>
             </a>
          </div>
          <div className="uppercase tracking-wider font-bold text-sky-200 animate-pulse">
            Admission Closed 2025-26
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            {IMAGES.logo ? (
              <img 
                src={IMAGES.logo} 
                alt={`${SCHOOL_INFO.name} Logo`} 
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            ) : (
              <div className="bg-gradient-to-br from-primary to-primaryDark text-white p-2 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 border-b-4 border-blue-900">
                <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            )}
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-600 uppercase tracking-tight leading-none group-hover:from-secondary group-hover:to-blue-600 transition-all duration-300 drop-shadow-sm">
                {SCHOOL_INFO.name}
              </h1>
              <span className="text-xs md:text-sm text-gray-500 font-semibold mt-0.5 tracking-wide">Bikapur, Ayodhya</span>
            </div>
          </Link>

          {/* Menu Button - Visible on all screens */}
          <button 
            className="text-primary focus:outline-none bg-sky-50 p-2 rounded-lg shadow-sm active:scale-95 transition-transform hover:bg-sky-100" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Nav Dropdown - Visible on all screens when open */}
      {isOpen && (
        <div className="bg-white border-t border-gray-100 absolute w-full shadow-2xl z-50 animate-fade-in-down">
          <nav className="flex flex-col p-4 space-y-2 container mx-auto">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-bold px-4 py-3 rounded-lg transition-colors ${
                   location.pathname === item.path ? 'bg-sky-50 text-primary shadow-inner' : 'text-gray-700 hover:bg-sky-50 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-gradient-to-r from-secondary to-secondaryDark text-white text-center py-3 rounded-lg font-bold uppercase mt-4 shadow-lg active:scale-95 transition-transform hover:shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;