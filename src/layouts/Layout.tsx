import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../components/aside/AsideBar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onToggle={setIsSidebarOpen} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        {/* <Navbar onLogout={handleLogout} /> */}
        
        {/* Scrollable Content Window */}
        <main className="flex-1 overflow-y-auto p-4">
          {/* Renders children if used directly, or the router's current page if used via <Outlet /> */}
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default Layout;