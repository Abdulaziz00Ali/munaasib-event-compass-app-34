
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';

type NavbarProps = {
  title?: string;
  showBack?: boolean;
  showNotification?: boolean;
  showSearch?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ 
  title, 
  showBack = false, 
  showNotification = true,
  showSearch = true,
}) => {
  return (
    <header className="bg-white sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {showBack ? (
          <Link to="/" className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 flip-rtl">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div className="w-6"></div>
        )}
        
        {title ? (
          <h1 className="text-xl font-bold">{title}</h1>
        ) : (
          <img src="/logo.png" alt="مناسب" className="h-8" />
        )}
        
        <div className="flex items-center gap-4">
          {showSearch && (
            <Link to="/search" className="text-gray-700">
              <Search className="w-6 h-6" />
            </Link>
          )}
          
          {showNotification && (
            <Link to="/notifications" className="text-gray-700">
              <Bell className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
