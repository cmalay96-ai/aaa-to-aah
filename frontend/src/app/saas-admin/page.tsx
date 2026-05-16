"use client";

import React, { useState, useEffect } from 'react';
import { supabaseFetch } from '@/lib/supabaseClient';
import { 
  LuTrendingUp, 
  LuUsers, 
  LuShoppingCart, 
  LuDollarSign,
  LuArrowUpRight,
  LuArrowDownRight,
  LuMoreHorizontal
} from 'react-icons/lu';

export default function SaaSAdminDashboard() {
  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await supabaseFetch('saas_orders?order=date.desc&limit=5');
        if (data) setRecentOrders(data);
        
        // Fetch all for stats (in production you'd use aggregates)
        const all = await supabaseFetch('saas_orders');
        if (all) {
          setTotalOrders(all.length);
          const rev = all.reduce((sum: number, order: any) => sum + Number(order.amount || 0), 0);
          setTotalRevenue(rev);
        }
      } catch (err) {
        console.error('Failed to fetch saas orders', err);
      }
    };
    fetchOrders();
  }, []);

  const stats = [
    { title: 'Total Revenue', value: `$${totalRevenue.toFixed(2)}`, change: '+20.1%', positive: true, icon: LuDollarSign },
    { title: 'Active Customers', value: '2,350', change: '+180', positive: true, icon: LuUsers },
    { title: 'Total Orders', value: totalOrders.toString(), change: '+19%', positive: true, icon: LuShoppingCart },
    { title: 'Active Subscriptions', value: '573', change: '-4%', positive: false, icon: LuTrendingUp },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-saas-accent/10 text-saas-accent border-saas-accent/20';
      case 'Processing': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Failed': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-gray-400 text-sm mt-1">Here's what's happening with your business today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-saas-card border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors">
            Download Report
          </button>
          <button className="px-4 py-2 bg-saas-primary rounded-lg text-sm font-medium text-white hover:bg-saas-primary/90 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            Create Order
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-saas-card border border-white/5 rounded-xl p-6 shadow-sm hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
                </div>
                <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                  <Icon className="text-xl" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className={`flex items-center gap-1 font-medium ${stat.positive ? 'text-saas-accent' : 'text-red-400'}`}>
                  {stat.positive ? <LuArrowUpRight className="text-xs" /> : <LuArrowDownRight className="text-xs" />}
                  {stat.change}
                </span>
                <span className="text-gray-500">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section (Mocked) */}
        <div className="lg:col-span-2 bg-saas-card border border-white/5 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Revenue Overview</h3>
              <p className="text-sm text-gray-400">Monthly revenue for the current year</p>
            </div>
            <select className="bg-saas-background border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white outline-none">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <div className="h-[300px] w-full flex items-end justify-between gap-2 pt-10">
            {/* CSS Bar Chart Mock */}
            {[35, 45, 30, 60, 75, 65, 80, 55, 90, 85, 100, 70].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2 group">
                <div className="w-full bg-saas-background rounded-t-sm relative h-full flex items-end overflow-hidden group-hover:bg-white/5 transition-colors">
                  <div 
                    className="w-full bg-saas-primary rounded-t-sm transition-all duration-500 group-hover:bg-saas-primary/80" 
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-gray-500 font-medium">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="bg-saas-card border border-white/5 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-saas-background bg-saas-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-white/5 p-4 rounded-xl border border-white/5 ml-4 md:ml-0">
                <p className="font-medium text-white text-sm">New user signed up</p>
                <p className="text-xs text-gray-400 mt-1">Olivia Martin joined the Pro plan.</p>
                <time className="text-[10px] text-gray-500 mt-2 block">2 mins ago</time>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-saas-background bg-saas-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-white/5 p-4 rounded-xl border border-white/5 ml-4 md:ml-0">
                <p className="font-medium text-white text-sm">Large order processed</p>
                <p className="text-xs text-gray-400 mt-1">Enterprise setup for TechCorp completed.</p>
                <time className="text-[10px] text-gray-500 mt-2 block">1 hour ago</time>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-saas-background bg-gray-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] bg-white/5 p-4 rounded-xl border border-white/5 ml-4 md:ml-0">
                <p className="font-medium text-white text-sm">System update</p>
                <p className="text-xs text-gray-400 mt-1">Database migration completed successfully.</p>
                <time className="text-[10px] text-gray-500 mt-2 block">3 hours ago</time>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-saas-card border border-white/5 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-white">Recent Orders</h3>
            <p className="text-sm text-gray-400">Latest transactions across all your products.</p>
          </div>
          <button className="text-sm font-medium text-saas-primary hover:text-saas-primary/80 transition-colors">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Order ID</th>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Product</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Amount</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 font-medium text-white">{order.id}</td>
                  <td className="p-4 text-gray-300 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-saas-primary/20 text-saas-primary flex items-center justify-center font-bold text-xs">
                      {order.customer_email ? order.customer_email.charAt(0).toUpperCase() : 'U'}
                    </div>
                    {order.customer_email}
                  </td>
                  <td className="p-4 text-gray-300">{order.product}</td>
                  <td className="p-4 text-gray-400">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="p-4 font-medium text-white">${order.amount}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-1 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                      <LuMoreHorizontal />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
