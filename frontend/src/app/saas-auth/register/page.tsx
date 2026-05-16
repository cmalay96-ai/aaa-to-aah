"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { LuMail, LuLock, LuUser, LuArrowRight } from 'react-icons/lu';
import { supabaseFetch } from '@/lib/supabaseClient';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await supabaseFetch('saas_users', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password, // Note: In a real prod app, password should be hashed securely on backend, or use Supabase Auth directly. For this demo, we're using REST API.
          role: 'customer'
        })
      });
      
      // Store mock token or user info
      localStorage.setItem('saas_user_email', email);
      window.location.href = '/saas-admin';
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-saas-background flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-saas-accent/20 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-saas-primary/20 blur-[120px]"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Create an account</h1>
          <p className="text-gray-400">Start your 14-day free trial today</p>
        </div>

        <div className="bg-saas-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-saas-background border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-saas-primary focus:ring-1 focus:ring-saas-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

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
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <LuLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-saas-background border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-saas-primary focus:ring-1 focus:ring-saas-primary outline-none transition-all"
                  placeholder="Create a strong password"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-saas-primary text-white font-medium py-2.5 rounded-lg hover:bg-saas-primary/90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(99,102,241,0.25)]">
              Create Account
              <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            By clicking continue, you agree to our <a href="#" className="text-gray-300 hover:text-white underline">Terms of Service</a> and <a href="#" className="text-gray-300 hover:text-white underline">Privacy Policy</a>.
          </p>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Already have an account? <Link href="/saas-auth/login" className="text-saas-primary hover:text-white transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
