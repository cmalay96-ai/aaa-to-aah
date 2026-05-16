"use client";

import { useState, useEffect } from 'react';
import { LuSearch, LuTrash2, LuCalendar, LuClock, LuMapPin, LuPhone, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
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

export default function AdminOrdersPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const data = await supabaseFetch('bookings?order=bookedAt.desc');
      if (data) {
        setBookings(data);
      }
    } catch (e) {
      console.error("Failed to fetch bookings", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      try {
        await supabaseFetch(`bookings?id=eq.${id}`, { method: 'DELETE' });
        setBookings(prev => prev.filter(b => b.id !== id));
      } catch (e) {
        alert("Failed to delete booking");
        console.error(e);
      }
    }
  };

  const filteredBookings = bookings.filter(b => 
    b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.customerPhone.includes(searchTerm)
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif text-white mb-2">Order Management</h1>
          <p className="text-gray-400">View and manage all customer appointments.</p>
        </div>
        
        <div className="relative w-full sm:w-64">
          <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search orders..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white focus:border-primary outline-none transition-all"
          />
        </div>
      </div>

      <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-24 text-center">
            <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading orders...</p>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="p-24 text-center">
            <LuSearch size={48} className="mx-auto mb-4 opacity-10 text-white" />
            <p className="text-gray-400">No orders found matching your search.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-black/40 text-gray-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 font-semibold">Customer</th>
                  <th className="p-4 font-semibold">Contact & Location</th>
                  <th className="p-4 font-semibold">Service Details</th>
                  <th className="p-4 font-semibold">Schedule</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold">
                          {booking.customerName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white font-medium">{booking.customerName}</p>
                          <p className="text-gray-500 text-xs">ID: #{booking.id.slice(0, 8)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <LuPhone size={14} className="text-primary" />
                          {booking.customerPhone}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <LuMapPin size={14} />
                          <span className="truncate max-w-[200px]" title={booking.customerAddress}>
                            {booking.customerAddress}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-white text-sm mb-1">{booking.service}</p>
                      <p className="text-primary font-serif font-semibold text-sm">₹{booking.price}</p>
                    </td>
                    <td className="p-4">
                      <div className="inline-flex flex-col bg-black/30 border border-white/5 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2 text-white text-sm font-medium">
                          <LuCalendar size={14} className="text-primary" />
                          {booking.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs mt-1">
                          <LuClock size={14} />
                          {booking.time}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleDelete(booking.id)}
                        className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                        title="Delete order"
                      >
                        <LuTrash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Pagination Placeholder */}
        <div className="p-4 border-t border-white/5 flex justify-between items-center text-sm text-gray-500 bg-black/20">
          <p>Showing {filteredBookings.length} orders</p>
          <div className="flex gap-2">
            <button className="p-2 hover:text-white disabled:opacity-20" disabled><LuChevronLeft size={20} /></button>
            <button className="p-2 hover:text-white disabled:opacity-20" disabled><LuChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
