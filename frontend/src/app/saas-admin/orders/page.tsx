"use client";

import React, { useState, useEffect } from 'react';
import { LuSearch, LuFilter, LuDownload, LuMoreHorizontal, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { supabaseFetch } from '@/lib/supabaseClient';

export default function SaaSOrders() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await supabaseFetch('saas_orders?order=date.desc');
        if (data) setOrders(data);
      } catch (err) {
        console.error('Failed to fetch saas orders', err);
      }
    };
    fetchOrders();
  }, []);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': 
      case 'Delivered': return 'bg-saas-accent/10 text-saas-accent border-saas-accent/20';
      case 'Processing': 
      case 'Shipped': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Failed': 
      case 'Cancelled': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Pending': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const filteredOrders = statusFilter === 'All' 
    ? orders 
    : orders.filter(o => o.status === statusFilter);

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Orders</h1>
          <p className="text-gray-400 text-sm mt-1">Manage and track customer orders.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-saas-card border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors flex items-center gap-2">
            <LuDownload /> Export CSV
          </button>
        </div>
      </div>

      <div className="bg-saas-card border border-white/5 rounded-xl shadow-sm">
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="w-full bg-saas-background border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:border-saas-primary outline-none transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <LuFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none bg-saas-background border border-white/10 rounded-lg py-2 pl-10 pr-8 text-sm text-white outline-none focus:border-saas-primary transition-colors cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="Completed">Completed</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Failed">Failed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
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
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="p-4 font-medium text-white">{order.id}</td>
                  <td className="p-4">
                    <p className="text-gray-300">{order.customer_email || 'Customer'}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{order.customer_email}</p>
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
                    <button className="p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100 rounded-lg hover:bg-white/10">
                      <LuMoreHorizontal />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-400">
          <div>Showing 1 to 7 of 24 results</div>
          <div className="flex gap-2">
            <button className="p-1 border border-white/10 rounded disabled:opacity-50 hover:bg-white/5"><LuChevronLeft /></button>
            <button className="px-3 py-1 border border-saas-primary bg-saas-primary/20 text-saas-primary rounded">1</button>
            <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/5">2</button>
            <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/5">3</button>
            <button className="p-1 border border-white/10 rounded hover:bg-white/5"><LuChevronRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
