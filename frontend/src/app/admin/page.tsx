"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuUsers, LuShoppingCart, LuDollarSign, LuTrendingUp, LuCalendar } from 'react-icons/lu';
import { supabaseFetch } from '@/lib/supabaseClient';

interface Booking {
  id: string;
  date: string;
  time: string;
  service: string;
  price: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  bookedAt: string;
}

export default function AdminDashboardOverview() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await supabaseFetch('bookings?order=bookedAt.desc&limit=5');
        if (data) {
          setBookings(data);
        }
      } catch (e) {
        console.error("Failed to fetch bookings", e);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBookings();
  }, []);

  const totalRevenue = bookings.reduce((sum, b) => sum + (b.price || 0), 0);

  const stats = [
    { title: 'Total Revenue', value: `₹${totalRevenue}`, icon: LuDollarSign, color: 'text-green-400', bg: 'bg-green-500/10' },
    { title: 'Total Bookings', value: bookings.length.toString(), icon: LuShoppingCart, color: 'text-primary', bg: 'bg-primary/10' },
    { title: 'Active Customers', value: '12', icon: LuUsers, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { title: 'Growth', value: '+12.5%', icon: LuTrendingUp, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 ${stat.bg} ${stat.color} rounded-xl`}>
                <stat.icon size={24} />
              </div>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings Section */}
      <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-serif text-white">Recent Bookings</h2>
          <Link href="/admin/orders" className="text-sm text-primary hover:underline">View All</Link>
        </div>
        
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading bookings...</div>
        ) : bookings.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <LuCalendar size={48} className="mx-auto mb-4 opacity-20" />
            <p>No recent bookings found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-black/20 text-gray-400 text-sm">
                <tr>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Service</th>
                  <th className="p-4 font-medium">Date/Time</th>
                  <th className="p-4 font-medium text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold font-serif">
                          {(booking.customerName || 'Guest').charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{booking.customerName}</p>
                          <p className="text-gray-500 text-xs">{booking.customerPhone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-300">{booking.service}</td>
                    <td className="p-4">
                      <p className="text-white text-sm">{booking.date}</p>
                      <p className="text-primary text-xs">{booking.time}</p>
                    </td>
                    <td className="p-4 text-right">
                      <span className="text-primary font-serif">₹{booking.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
