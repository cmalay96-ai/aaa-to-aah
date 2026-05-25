import Link from 'next/link';
import Image from 'next/image';
import { FaSpa, FaLeaf, FaClock, FaCalendarAlt, FaHome, FaSmile, FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-start items-center text-center pt-[42vh] pb-12 px-4 overflow-hidden bg-sea-radial">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image-2.jpeg"
            alt="Elite Wellness Assisted Stretching & Massage"
            fill
            priority
            className="object-cover object-top opacity-[0.35] saturate-[0.9] mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#EAF4F0]/30 via-transparent to-background z-0" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-textPrimary tracking-wide leading-tight">
            Professional Recovery & Mobility <br/>
            <span className="text-primary italic">At Your Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-textSecondary mb-10 font-medium">
            Relax, Recover & Recharge with Expert Assisted Stretching & Release Services
          </p>
          <Link 
            href="/book" 
            className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#07362a] transition-all duration-300 transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(10,77,60,0.3)]"
          >
            Book Your Session
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-textPrimary mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-background border border-primary/10 p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_20px_-4px_rgba(10,77,60,0.03)] hover:shadow-lg">
              <FaSpa className="text-5xl text-primary mb-6" />
              <h3 className="text-2xl font-serif text-textPrimary mb-4">Head Massage for Stress Relief</h3>
              <p className="text-textSecondary leading-relaxed mb-6 font-medium">
                Release tension and melt away stress with our specialized head, neck, and shoulder massage designed to clear your mind.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xl text-textPrimary font-serif font-bold">45 Min | ₹350</span>
                <Link href="/book" className="text-primary hover:text-black font-semibold transition-colors">Book Now &rarr;</Link>
              </div>
            </div>

            <div className="group bg-background border border-primary/10 p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_20px_-4px_rgba(10,77,60,0.03)] hover:shadow-lg">
              <FaLeaf className="text-5xl text-primary mb-6" />
              <h3 className="text-2xl font-serif text-textPrimary mb-4">Full Body Fitness Recovery</h3>
              <p className="text-textSecondary leading-relaxed mb-6 font-medium">
                Deep tissue techniques to accelerate muscle recovery, improve flexibility, and restore your body's natural balance.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xl text-textPrimary font-serif font-bold">90 Min | ₹500</span>
                <Link href="/book" className="text-primary hover:text-black font-semibold transition-colors">Book Now &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-background border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-textPrimary mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-primary/10 z-0"></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto bg-surface border border-primary/10 rounded-full flex items-center justify-center mb-6 shadow-[0_4px_20px_-4px_rgba(10,77,60,0.05)]">
                <FaCalendarAlt className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-textPrimary mb-3">1. Book a Time</h3>
              <p className="text-textSecondary font-medium">Select your preferred service, date, and time slot through our simple booking system.</p>
            </div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto bg-surface border border-primary/10 rounded-full flex items-center justify-center mb-6 shadow-[0_4px_20px_-4px_rgba(10,77,60,0.05)]">
                <FaHome className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-textPrimary mb-3">2. We Come To You</h3>
              <p className="text-textSecondary font-medium">Our certified therapist arrives at your doorstep with everything needed for a premium experience.</p>
            </div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto bg-surface border border-primary/10 rounded-full flex items-center justify-center mb-6 shadow-[0_4px_20px_-4px_rgba(10,77,60,0.05)]">
                <FaSmile className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-textPrimary mb-3">3. Relax & Enjoy</h3>
              <p className="text-textSecondary font-medium">Experience deep relaxation and muscle recovery in the comfort and privacy of your own home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-4 bg-background border-t border-primary/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-textPrimary mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mb-6"></div>
            <p className="text-textSecondary font-medium">Have a question or special request? We're here to help.</p>
          </div>
          
          <div className="bg-surface border border-primary/10 rounded-2xl p-8 md:p-12 shadow-[0_10px_35px_-5px_rgba(10,77,60,0.04)]">
            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! Our team will contact you soon.'); e.currentTarget.reset(); }} 
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-textSecondary mb-2 font-semibold">Full Name</label>
                  <input required type="text" className="w-full bg-background border border-primary/20 rounded-xl p-4 text-textPrimary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-textSecondary mb-2 font-semibold">Email Address</label>
                  <input required type="email" className="w-full bg-background border border-primary/20 rounded-xl p-4 text-textPrimary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-textSecondary mb-2 font-semibold">Subject</label>
                <input required type="text" className="w-full bg-background border border-primary/20 rounded-xl p-4 text-textPrimary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm text-textSecondary mb-2 font-semibold">Message</label>
                <textarea required rows={4} className="w-full bg-background border border-primary/20 rounded-xl p-4 text-textPrimary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#07362a] transition-all transform hover:scale-[1.02] shadow-[0_10px_20px_-5px_rgba(10,77,60,0.3)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-textPrimary mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-primary/10 p-8 rounded-2xl relative shadow-[0_4px_25px_-5px_rgba(10,77,60,0.03)]">
              <FaQuoteLeft className="text-4xl text-primary/10 absolute top-8 left-8" />
              <div className="relative z-10 pl-4 pt-2">
                <div className="flex text-yellow-500 mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-textSecondary text-lg italic mb-6 font-medium">"The best massage experience I've ever had. Not having to drive home after being completely relaxed makes all the difference. The therapist was incredibly professional."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface border border-primary/15 rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl">S</div>
                  <div>
                    <h4 className="text-textPrimary font-bold">Sarah Jenkins</h4>
                    <p className="text-textSecondary text-sm font-semibold">Corporate Executive</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-primary/10 p-8 rounded-2xl relative shadow-[0_4px_25px_-5px_rgba(10,77,60,0.03)]">
              <FaQuoteLeft className="text-4xl text-primary/10 absolute top-8 left-8" />
              <div className="relative z-10 pl-4 pt-2">
                <div className="flex text-yellow-500 mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-textSecondary text-lg italic mb-6 font-medium">"As an athlete, recovery is crucial. The full body fitness recovery session was exactly what my muscles needed. Highly recommend their deep tissue work!"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface border border-primary/15 rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl">M</div>
                  <div>
                    <h4 className="text-textPrimary font-bold">Michael Rodriguez</h4>
                    <p className="text-textSecondary text-sm font-semibold">Marathon Runner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours & Contact */}
      <section className="py-24 px-4 border-t border-primary/10 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <FaClock className="text-4xl text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-textPrimary mb-8">Working Hours</h2>
          <div className="text-xl text-textSecondary space-y-4 font-semibold font-sans">
            <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
