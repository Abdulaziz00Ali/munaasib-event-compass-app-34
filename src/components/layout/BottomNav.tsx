
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, User, Search, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: Home,
      label: 'الرئيسية',
      path: '/'
    },
    {
      icon: Calendar,
      label: 'حجوزاتي',
      path: '/bookings'
    },
    {
      icon: CalendarDays,
      label: 'المناسبات',
      path: '/events'
    },
    {
      icon: Search,
      label: 'استكشاف',
      path: '/explore'
    },
    {
      icon: User,
      label: 'حسابي',
      path: '/profile'
    }
  ];
  
  return (
    <nav className="bg-white fixed bottom-0 left-0 right-0 border-t border-gray-200 z-10">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={index}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center",
                isActive ? "text-munaasib-red" : "text-gray-500"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
