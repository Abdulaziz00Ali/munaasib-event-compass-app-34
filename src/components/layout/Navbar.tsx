
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
        {showNotification && (
          <Link to="/notifications" className="text-gray-700">
            <Bell className="w-6 h-6" />
          </Link>
        )}
        
        {title ? (
          <h1 className="text-xl font-bold text-munaasib-red">{title}</h1>
        ) : (
          <img src="/logo.png" alt="مناسب" className="h-8" />
        )}
        
        {showSearch && (
          <Link to="/search" className="text-gray-700">
            <Search className="w-6 h-6" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
