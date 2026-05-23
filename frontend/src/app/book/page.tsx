"use client";

import { useState, useEffect } from 'react';
import { 
  format, 
  addDays, 
  startOfToday, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isBefore,
  addMonths,
  subMonths
} from 'date-fns';
import { FaCalendarAlt, FaClock, FaUser, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { supabaseFetch } from '@/lib/supabaseClient';

const TIME_SLOTS = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"];
const SERVICES = [
  { id: "s1", name: "Head Massage for Stress Relief", duration: "45 Min", price: 350 },
  { id: "s2", name: "Full Body Fitness Recovery", duration: "90 Min", price: 500 },
];

export default function BookSession() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [currentMonth, setCurrentMonth] = useState(startOfMonth(startOfToday()));
  
  // Calculate days for calendar
  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth))
  });

  // Fetch available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      const fetchSlots = async () => {
        try {
          const dateKey = format(selectedDate, 'yyyy-MM-dd');
          const data = await supabaseFetch(`bookings?date=eq.${dateKey}&select=time`);
          const bookedForDate = data.map((b: any) => b.time);
          
          setBookedSlots(bookedForDate);
          setSelectedSlot(null);
        } catch (error) {
          console.error("Failed to fetch slots", error);
        } finally {
          setLoading(false);
        }
      };
      
      fetchSlots();
    }
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setStep(3);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save booking to Supabase
    if (selectedDate && selectedSlot) {
      const dateKey = format(selectedDate, 'yyyy-MM-dd');
      
      try {
        await supabaseFetch('bookings', {
          method: 'POST',
          body: JSON.stringify({
            date: dateKey,
            time: selectedSlot,
            service: selectedService.name,
            price: selectedService.price,
            customerName: formData.name,
            customerPhone: formData.phone,
            customerAddress: formData.address,
            bookedAt: new Date().toISOString()
          })
        });
        setStep(5); // Show confirmation
      } catch (error) {
        console.error("Booking failed", error);
        alert("Failed to confirm booking. Please try again or contact support.");
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-textPrimary mb-4">Book Your Session</h1>
          <p className="text-textSecondary font-medium">Select your service, date, and time to relax at home.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-secondary -z-10"></div>
          {[1, 2, 3, 4].map((num) => (
            <div 
              key={num} 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= num ? 'bg-primary text-white shadow-md' : 'bg-white border border-primary/20 text-textSecondary'
              }`}
            >
              {step > num ? <FaCheckCircle /> : num}
            </div>
          ))}
        </div>

        <div className="bg-surface rounded-2xl p-8 border border-primary/10 shadow-lg">
          
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-serif text-textPrimary mb-6">Select a Service</h2>
              {SERVICES.map(service => (
                <div 
                  key={service.id}
                  onClick={() => { setSelectedService(service); setStep(2); }}
                  className={`p-6 rounded-xl border cursor-pointer transition-all ${
                    selectedService.id === service.id ? 'border-primary bg-primary/5' : 'border-primary/10 hover:border-primary/50 bg-white/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl text-textPrimary font-bold mb-2">{service.name}</h3>
                      <p className="text-textSecondary flex items-center gap-2 font-medium">
                        <FaClock /> {service.duration}
                      </p>
                    </div>
                    <div className="text-2xl text-primary font-serif font-bold">₹{service.price}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(1)} className="text-textSecondary hover:text-primary font-semibold">&larr; Back</button>
                <h2 className="text-2xl font-serif text-textPrimary">Select a Date</h2>
              </div>
              
              <div className="bg-secondary/40 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl text-textPrimary font-serif font-semibold">{format(currentMonth, 'MMMM yyyy')}</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                      disabled={isBefore(currentMonth, startOfMonth(startOfToday()))}
                      className="p-3 rounded-full hover:bg-primary/10 text-primary disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                    >
                      <FaChevronLeft />
                    </button>
                    <button 
                      onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                      className="p-3 rounded-full hover:bg-primary/10 text-primary transition-colors"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-center text-sm font-semibold text-textSecondary py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1 md:gap-2">
                  {daysInMonth.map((day, i) => {
                    const isPast = isBefore(day, startOfToday());
                    const isCurrentMonth = isSameMonth(day, currentMonth);
                    const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
                    const isToday = isSameDay(day, startOfToday());

                    return (
                      <button
                        key={i}
                        disabled={isPast || !isCurrentMonth}
                        onClick={() => handleDateSelect(day)}
                        className={`
                          aspect-square rounded-xl flex items-center justify-center text-sm transition-all
                          ${!isCurrentMonth ? 'invisible' : ''}
                          ${isPast && isCurrentMonth ? 'text-textSecondary/20 cursor-not-allowed' : ''}
                          ${!isPast && isCurrentMonth ? 'hover:border-primary hover:bg-primary/10 cursor-pointer border border-transparent font-medium' : ''}
                          ${isSelected ? 'bg-primary text-white font-bold border-primary shadow-sm' : 'text-textPrimary'}
                          ${isToday && !isSelected ? 'border-primary/50 text-primary border font-bold' : ''}
                          ${!isPast && !isSelected && isCurrentMonth ? 'bg-white shadow-sm' : ''}
                        `}
                      >
                        {format(day, 'd')}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(2)} className="text-textSecondary hover:text-primary font-semibold">&larr; Back</button>
                <h2 className="text-2xl font-serif text-textPrimary font-bold">Select a Time</h2>
              </div>

              {loading ? (
                <div className="text-center py-12 text-primary font-bold">Loading available slots...</div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {TIME_SLOTS.map((slot, i) => {
                    const isBooked = bookedSlots.includes(slot);
                    return (
                      <button
                        key={i}
                        disabled={isBooked}
                        onClick={() => { setSelectedSlot(slot); setStep(4); }}
                        className={`py-4 rounded-xl font-bold transition-all ${
                          isBooked 
                            ? 'bg-secondary border border-primary/5 text-textSecondary/30 cursor-not-allowed' 
                            : 'bg-white border border-primary/20 text-textPrimary hover:border-primary hover:bg-primary/10 shadow-sm'
                        }`}
                      >
                        {slot}
                        {isBooked && <span className="block text-xs mt-1 text-red-500 font-semibold">Booked</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setStep(3)} className="text-textSecondary hover:text-primary font-semibold">&larr; Back</button>
                <h2 className="text-2xl font-serif text-textPrimary font-bold">Your Details</h2>
              </div>

              <div className="mb-8 p-6 bg-secondary/50 rounded-xl border border-primary/10 shadow-inner">
                <h3 className="text-primary font-bold mb-2">Booking Summary</h3>
                <p className="text-textPrimary text-sm font-bold">{selectedService.name} ({selectedService.duration})</p>
                <p className="text-textSecondary text-sm font-medium mt-1">
                  {selectedDate && format(selectedDate, 'MMMM d, yyyy')} at {selectedSlot}
                </p>
                <p className="text-primary font-serif text-2xl font-bold mt-3">₹{selectedService.price}</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-textSecondary mb-1 font-semibold">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white border border-primary/20 rounded-lg p-3 text-textPrimary focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-textSecondary mb-1 font-semibold">Phone Number</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white border border-primary/20 rounded-lg p-3 text-textPrimary focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-textSecondary mb-1 font-semibold">Full Home Address</label>
                  <textarea required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full bg-white border border-primary/20 rounded-lg p-3 text-textPrimary focus:border-primary focus:outline-none h-24"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#07362a] transition-all transform active:scale-95 shadow-[0_10px_20px_-5px_rgba(10,77,60,0.3)] mt-6">
                  Proceed to Confirm
                </button>
              </form>
            </div>
          )}

          {step === 5 && (
            <div className="text-center animate-fade-in py-12">
              <FaCheckCircle className="text-6xl text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-textPrimary mb-4">Booking Confirmed!</h2>
              <p className="text-textSecondary mb-8 max-w-md mx-auto font-medium">
                Your massage session for {selectedDate && format(selectedDate, 'MMMM d')} at {selectedSlot} has been successfully booked. Our therapist will arrive at your location.
              </p>
              <button onClick={() => window.location.href='/'} className="bg-white border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white font-bold transition-colors">
                Return to Home
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
