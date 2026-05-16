"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { LuMail, LuLock, LuArrowRight } from 'react-icons/lu';
import { supabaseFetch } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const users = await supabaseFetch(`saas_users?email=eq.${email}&password=eq.${password}`);
      
      if (users && users.length > 0) {
        const role = users[0].role || 'customer';
        if (role === 'admin') {
          localStorage.setItem('saas_user_email', email);
          router.push('/admin');
        } else {
          setError('Access denied: Admin privileges required.');
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl mx-auto mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <span className="text-black font-bold text-2xl font-serif">H</span>
          </div>
          <h1 className="text-3xl font-serif text-white tracking-tight mb-2">Admin Portal</h1>
          <p className="text-gray-400">Enter your credentials to access the dashboard</p>
        </div>

        <div className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-background border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="admin@heal.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">Password</label>
              </div>
              <div className="relative">
                <LuLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-background border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-black font-medium py-2.5 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(212,175,55,0.25)] disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
              {!loading && <LuArrowRight className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-6 text-center">
             <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
               &larr; Back to Website
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
