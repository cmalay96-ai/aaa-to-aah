"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LuLayoutDashboard, LuPackage, LuShoppingCart, LuLogOut, LuMenu, LuX } from 'react-icons/lu';
import { supabaseFetch } from '@/lib/supabaseClient';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Skip auth check if we are on the login page
    if (pathname === '/admin/login') {
      setIsLoading(false);
      return;
    }

    const checkAuth = async () => {
      const email = localStorage.getItem('saas_user_email');
      if (!email) {
        router.push('/admin/login');
        return;
      }

      try {
        const users = await supabaseFetch(`saas_users?email=eq.${email}`);
        if (users && users.length > 0 && users[0].role === 'admin') {
          setIsAuthenticated(true);
        } else {
          router.push('/admin/login');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        router.push('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('saas_user_email');
    router.push('/admin/login');
  };

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LuLayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: LuPackage },
    { name: 'Orders', href: '/admin/orders', icon: LuShoppingCart },
  ];

  return (
    <div className="min-h-screen bg-background text-white flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-surface">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-black font-bold font-serif">A</span>
          </div>
          <span className="font-serif font-bold text-lg text-primary">AAA TO AHH.IN Admin</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-400 hover:text-white p-2">
          {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-surface border-r border-white/10 flex-shrink-0 flex flex-col transition-all z-50 absolute md:relative h-[calc(100vh-73px)] md:h-screen`}>
        <div className="hidden md:flex items-center gap-3 p-6 border-b border-white/10">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <span className="text-black font-bold text-xl font-serif">A</span>
          </div>
          <span className="font-serif font-bold text-xl text-primary tracking-wide">AAA TO AHH.IN Admin</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(212,175,55,0.1)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={20} className={isActive ? 'text-primary' : 'text-gray-500'} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all border border-transparent hover:border-red-500/20"
          >
            <LuLogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background p-4 md:p-8">
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
