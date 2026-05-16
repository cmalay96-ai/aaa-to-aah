"use client";

import React, { useState, useEffect } from 'react';
import { LuPackage, LuMapPin, LuCreditCard, LuChevronRight, LuDownload } from 'react-icons/lu';
import { supabaseFetch } from '@/lib/supabaseClient';

export default function SaaSUserDashboard() {
  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [email, setEmail] = useState('Loading...');
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    const userEmail = localStorage.getItem('saas_user_email') || 'john.doe@example.com';
    setEmail(userEmail);

    const fetchOrders = async () => {
      try {
        const data = await supabaseFetch(`saas_orders?customer_email=eq.${userEmail}&order=date.desc`);
        if (data) {
          setRecentOrders(data);
          const spent = data.reduce((sum: number, order: any) => sum + Number(order.amount || 0), 0);
          setTotalSpent(spent);
        }
      } catch (err) {
        console.error('Failed to fetch saas orders', err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Welcome back!</h1>
        <p className="text-gray-400 text-sm mt-1">Here is an overview of your account and recent activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-saas-accent/20 to-saas-card border border-saas-accent/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-saas-accent/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <h3 className="text-white font-medium mb-1 relative z-10">Current Plan</h3>
          <p className="text-3xl font-bold text-white relative z-10">Pro Annual</p>
          <div className="mt-4 pt-4 border-t border-white/10 relative z-10 flex justify-between items-center">
            <span className="text-sm text-gray-400">Renews Oct 24, 2027</span>
            <button className="text-sm text-saas-accent hover:text-white transition-colors font-medium">Manage</button>
          </div>
        </div>

        <div className="bg-saas-card border border-white/5 rounded-2xl p-6">
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 mb-4">
            <LuPackage className="text-xl" />
          </div>
          <h3 className="text-white font-medium mb-1">Total Orders</h3>
          <p className="text-3xl font-bold text-white">{recentOrders.length}</p>
        </div>

        <div className="bg-saas-card border border-white/5 rounded-2xl p-6">
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 mb-4">
            <LuCreditCard className="text-xl" />
          </div>
          <h3 className="text-white font-medium mb-1">Total Spent</h3>
          <p className="text-3xl font-bold text-white">${totalSpent.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-saas-card border border-white/5 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Recent Orders</h3>
            <button className="text-sm font-medium text-saas-accent hover:text-white transition-colors flex items-center gap-1">
              View All <LuChevronRight />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold">Order ID</th>
                  <th className="p-4 font-semibold">Product</th>
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Amount</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4 font-medium text-white">{order.id}</td>
                    <td className="p-4 text-gray-300">{order.product}</td>
                    <td className="p-4 text-gray-400">{new Date(order.date).toLocaleDateString()}</td>
                    <td className="p-4 font-medium text-white">${order.amount}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${order.status === 'Active' || order.status === 'Completed' ? 'bg-saas-accent/10 text-saas-accent border-saas-accent/20' : 'bg-gray-500/10 text-gray-400 border-gray-500/20'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10" title="Download Invoice">
                        <LuDownload />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-saas-card border border-white/5 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h3 className="text-lg font-bold text-white">Account Details</h3>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Email Address</p>
              <p className="text-white text-sm">{email}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Phone Number</p>
              <p className="text-white text-sm">+1 (555) 019-2834</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1 flex items-center gap-2">
                <LuMapPin /> Billing Address
              </p>
              <p className="text-white text-sm mt-2">
                123 Business Avenue<br />
                Suite 400<br />
                San Francisco, CA 94107
              </p>
            </div>
            <button className="w-full py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors mt-2">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
