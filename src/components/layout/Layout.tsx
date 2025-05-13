
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import BottomNav from './BottomNav';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  showBottomNav?: boolean;
  showNavbar?: boolean;
  showNotification?: boolean;
  showSearch?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  showBack = false,
  showBottomNav = true,
  showNavbar = true,
  showNotification = true,
  showSearch = true,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {showNavbar && (
        <Navbar 
          title={title} 
          showBack={showBack} 
          showNotification={showNotification}
          showSearch={showSearch}
        />
      )}
      
      <main className="container mx-auto px-4 py-4">
        {children}
      </main>
      
      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default Layout;
