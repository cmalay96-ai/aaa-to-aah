"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LuLayoutDashboard, 
  LuShoppingCart, 
  LuSettings, 
  LuLogOut,
  LuMenu,
  LuBell,
  LuMapPin,
  LuUser
} from 'react-icons/lu';

export default function SaaSUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('saas_user_email');
    window.location.href = '/saas-auth/login';
  };

  const navItems = [
    { name: 'Dashboard', href: '/saas-customer', icon: LuLayoutDashboard },
    { name: 'My Orders', href: '/saas-customer/orders', icon: LuShoppingCart },
    { name: 'Addresses', href: '/saas-customer/addresses', icon: LuMapPin },
    { name: 'Profile Settings', href: '/saas-customer/settings', icon: LuSettings },
  ];

  return (
    <div className="min-h-screen bg-saas-background text-saas-text font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-saas-card/80 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
            <LuMenu className="text-xl" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-saas-accent flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">Customer Portal</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <LuBell className="text-xl" />
            <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-saas-accent border-2 border-saas-card"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white border-2 border-saas-card overflow-hidden">
            <LuUser />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row pt-8 px-4 gap-8">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 shrink-0`}>
          <div className="bg-saas-card border border-white/5 rounded-2xl p-4 sticky top-24 shadow-sm">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white text-xl border-2 border-white/10">
                JD
              </div>
              <div>
                <h3 className="text-white font-medium">John Doe</h3>
                <p className="text-gray-400 text-xs">Pro Member</p>
              </div>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                      isActive 
                        ? 'bg-saas-accent/10 text-saas-accent font-medium' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className={`text-lg ${isActive ? '' : 'opacity-70 group-hover:opacity-100'}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-red-400 hover:bg-red-500/10 hover:text-red-300"
              >
                <LuLogOut className="text-lg" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Page Content */}
        <main className="flex-1 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}
