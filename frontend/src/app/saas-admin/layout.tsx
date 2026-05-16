"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabaseFetch } from '@/lib/supabaseClient';
import { usePathname } from 'next/navigation';
import { 
  LuLayoutDashboard, 
  LuShoppingCart, 
  LuUsers, 
  LuPackage, 
  LuBarChart3, 
  LuSettings, 
  LuLogOut,
  LuMenu,
  LuBell,
  LuSearch,
  LuMoon,
  LuSun
} from 'react-icons/lu';

export default function SaaSAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const email = localStorage.getItem('saas_user_email');
      if (!email) {
        window.location.href = '/saas-auth/login';
        return;
      }
      try {
        const users = await supabaseFetch(`saas_users?email=eq.${email}`);
        if (users && users.length > 0 && users[0].role === 'admin') {
          setIsAuthorized(true);
        } else {
          window.location.href = '/saas-auth/login';
        }
      } catch (err) {
        window.location.href = '/saas-auth/login';
      }
    };
    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('saas_user_email');
    window.location.href = '/saas-auth/login';
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-saas-background flex items-center justify-center text-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-saas-primary rounded-xl mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <p className="text-gray-400">Verifying secure access...</p>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard', href: '/saas-admin', icon: LuLayoutDashboard },
    { name: 'Orders', href: '/saas-admin/orders', icon: LuShoppingCart },
    { name: 'Customers', href: '/saas-admin/customers', icon: LuUsers },
    { name: 'Products', href: '/saas-admin/products', icon: LuPackage },
    { name: 'Analytics', href: '/saas-admin/analytics', icon: LuBarChart3 },
    { name: 'Settings', href: '/saas-admin/settings', icon: LuSettings },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-saas-background text-saas-text' : 'bg-gray-50 text-gray-900'} font-sans`}>
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'} ${isDark ? 'bg-saas-card border-white/10' : 'bg-white border-gray-200'} border-r`}>
        <div className="h-full flex flex-col px-4 py-6">
          <div className="flex items-center gap-3 px-2 mb-10">
            <div className="w-8 h-8 rounded-lg bg-saas-primary flex items-center justify-center text-white font-bold text-xl">A</div>
            <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>Admin SaaS</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2">
            <p className={`px-2 text-xs font-semibold uppercase tracking-wider mb-4 mt-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? 'bg-saas-primary text-white shadow-lg shadow-saas-primary/20' 
                      : isDark 
                        ? 'text-gray-400 hover:bg-white/5 hover:text-white' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`text-lg ${isActive ? '' : 'opacity-70 group-hover:opacity-100 transition-opacity'}`} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto border-t border-white/10 pt-4">
            <button onClick={handleLogout} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${isDark ? 'text-red-400 hover:bg-red-400/10' : 'text-red-600 hover:bg-red-50'}`}>
              <LuLogOut className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} flex flex-col min-h-screen`}>
        {/* Top Navbar */}
        <header className={`sticky top-0 z-30 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md ${isDark ? 'bg-saas-background/80 border-white/10' : 'bg-white/80 border-gray-200'}`}>
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
              <LuMenu className="text-xl" />
            </button>
            <div className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? 'bg-saas-card/50 border-white/10 text-white focus-within:border-saas-primary/50' : 'bg-gray-100 border-transparent focus-within:bg-white focus-within:border-saas-primary/50'}`}>
              <LuSearch className={isDark ? 'text-gray-400' : 'text-gray-500'} />
              <input type="text" placeholder="Search anything..." className="bg-transparent border-none outline-none text-sm w-64 placeholder:text-gray-500" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
              {isDark ? <LuSun className="text-xl" /> : <LuMoon className="text-xl" />}
            </button>
            <button className={`relative p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
              <LuBell className="text-xl" />
              <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-saas-background"></span>
            </button>
            <div className={`w-9 h-9 rounded-full ml-2 flex items-center justify-center font-bold border-2 cursor-pointer ${isDark ? 'bg-saas-primary border-saas-card' : 'bg-saas-primary border-white text-white'}`}>
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
