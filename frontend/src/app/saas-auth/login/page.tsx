"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { LuMail, LuLock, LuArrowRight, LuGithub } from 'react-icons/lu';
import { FaGoogle } from 'react-icons/fa';
import { supabaseFetch } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const users = await supabaseFetch(`saas_users?email=eq.${email}&password=eq.${password}`);
      
      if (users && users.length > 0) {
        localStorage.setItem('saas_user_email', email);
        const role = users[0].role || 'customer';
        if (role === 'admin') {
          window.location.href = '/saas-admin';
        } else {
          window.location.href = '/saas-customer';
        }
      } else {
        alert('Invalid email or password');
      }
    } catch (err) {
      console.error('Login failed:', err);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-saas-background flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-saas-primary/20 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-saas-secondary/20 blur-[120px]"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-saas-primary rounded-xl mx-auto mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Welcome back</h1>
          <p className="text-gray-400">Enter your credentials to access your account</p>
        </div>

        <div className="bg-saas-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
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
                  className="w-full bg-saas-background border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-saas-primary focus:ring-1 focus:ring-saas-primary outline-none transition-all"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">Password</label>
                <a href="#" className="text-xs text-saas-primary hover:text-saas-primary/80 transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <LuLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-saas-background border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-saas-primary focus:ring-1 focus:ring-saas-primary outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-saas-primary text-white font-medium py-2.5 rounded-lg hover:bg-saas-primary/90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(99,102,241,0.25)]">
              Sign In
              <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Or continue with</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
              <FaGoogle /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
              <LuGithub /> GitHub
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Don't have an account? <Link href="/saas-auth/register" className="text-saas-primary hover:text-white transition-colors">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
