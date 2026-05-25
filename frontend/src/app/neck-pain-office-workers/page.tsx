"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaUserTie, FaLaptop, FaMobileAlt, FaSmile, FaCheckCircle, 
  FaQuestionCircle, FaStar, FaQuoteLeft, FaClinicMedical, FaHome,
  FaCoffee, FaExclamationTriangle
} from "react-icons/fa";
import LeadForm from "../components/LeadForm";
import StickyButtons from "../components/StickyButtons";
import FounderStory from "../components/FounderStory";

export default function NeckPainOfficeWorkersPage() {
  return (
    <div className="bg-[#FAFDFC] min-h-screen text-[#1B332D] font-sans antialiased overflow-x-hidden selection:bg-brandLime/20 selection:text-primary">
      
      {/* 1. Header / Navigation */}
      <header className="py-5 px-6 border-b border-[#EAF4F0] bg-[#0A192F]/95 backdrop-blur-md sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-montserrat font-black tracking-tighter text-white">
              AAATOAHH<span className="text-brandLime font-black">.IN</span>
            </span>
          </div>
          <span className="text-xs font-montserrat font-extrabold bg-brandLime/10 text-brandLime px-4 py-2 rounded-full border border-brandLime/20 uppercase tracking-wider">
            💻 Office Posture Specialists
          </span>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-24 px-6 md:py-32 bg-gradient-to-b from-[#0A192F] via-[#0E2447] to-[#0A192F] overflow-hidden text-white">
        {/* Soft background glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brandLime/5 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#6366F1]/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-8 text-left">
            <span className="inline-block text-xs font-montserrat font-extrabold uppercase tracking-widest text-brandLime bg-brandLime/10 px-4 py-2 rounded-full border border-brandLime/20">
              ⚡ CORPORATE WELLNESS PROGRAM
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight tracking-tight font-extrabold">
              Your Job Pays The Bills. <br />
              <span className="text-brandLime italic font-serif">But Is It Costing Your Neck?</span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-xl font-light">
              Long hours at a desk, constant screen time, and poor posture can leave your neck, shoulders, and upper back feeling stiff and exhausted.
            </p>

            {/* Quick value prop badge */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-xl shadow-lg backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-brandLime/10 border border-brandLime/20 flex items-center justify-center text-brandLime text-2xl flex-shrink-0">
                🎁
              </div>
              <div>
                <span className="text-[10px] font-montserrat font-bold text-brandLime uppercase tracking-wider block">LEAD MAGNET ACTIVE</span>
                <h4 className="text-base font-poppins font-bold text-white mt-0.5">FREE 10-Minute Neck & Shoulder Relief Demo At Home</h4>
                <p className="text-xs text-slate-300 mt-1">Experience deep, targeted muscle release right at your doorstep. Zero cost. Zero obligations.</p>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-brandLime text-[#0A192F] font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-brandLime/90 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_25px_-5px_rgba(163,230,53,0.3)] tracking-wide"
              >
                BOOK FREE DEMO
              </button>
            </div>
          </div>

          {/* Hero Right Lead Form */}
          <div id="lead-form-section" className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-brandLime/5 rounded-[32px] blur-3xl pointer-events-none" />
            <LeadForm 
              painPointDefault="Desk-job neck pain, shoulder stiffness, screen headaches & slouched posture" 
              redirectUrl="/thank-you-neck-pain" 
              themeColor="lime" 
              serviceName="Free Office Neck & Shoulder Demo"
            />
          </div>

        </div>
      </section>

      {/* 3. Quick Benefits Section */}
      <section className="py-8 bg-[#EAF4F0] border-y border-[#cbe3d9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base font-semibold text-[#0A4D3C]">
            <div className="flex items-center gap-2">
              <span className="text-brandLimeDark font-black text-lg">✔</span>
              <span>Relax neck tension</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brandLimeDark font-black text-lg">✔</span>
              <span>Reduce shoulder tightness</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brandLimeDark font-black text-lg">✔</span>
              <span>Improve comfort during work</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brandLimeDark font-black text-lg">✔</span>
              <span>Ease desk-job stiffness</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brandLimeDark font-black text-lg">✔</span>
              <span>Professional home service</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pain Identification Section */}
      <section className="py-24 px-6 bg-white border-b border-[#EAF4F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest bg-secondary px-4 py-2 rounded-full border border-primary/10">
              IDENTIFYING THE PROBLEM
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#05261E] mt-4 font-extrabold tracking-tight">
              Does This Sound Familiar?
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pain 1 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-8 rounded-3xl hover:border-brandOrange/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 text-xl mb-6">
                💆‍♂️
              </div>
              <h3 className="text-xl font-serif text-[#0A4D3C] font-extrabold mb-3">Neck Stiffness After Work</h3>
              <p className="text-[#3D544E] text-sm leading-relaxed font-medium">
                That persistent, dull ache at the base of your skull that intensifies every afternoon and makes turning your head uncomfortable.
              </p>
            </div>

            {/* Pain 2 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-8 rounded-3xl hover:border-brandOrange/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 text-xl mb-6">
                💪
              </div>
              <h3 className="text-xl font-serif text-[#0A4D3C] font-extrabold mb-3">Shoulder Tightness</h3>
              <p className="text-[#3D544E] text-sm leading-relaxed font-medium">
                Trapezius muscles that feel like concrete blocks, locking your shoulders upwards and limiting your physical ease.
              </p>
            </div>

            {/* Pain 3 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-8 rounded-3xl hover:border-brandOrange/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 text-xl mb-6">
                🧠
              </div>
              <h3 className="text-xl font-serif text-[#0A4D3C] font-extrabold mb-3">Headaches from Screen Time</h3>
              <p className="text-[#3D544E] text-sm leading-relaxed font-medium">
                Tension headaches triggered by micro-spasms in the occipital muscles due to severe, constant screen staring.
              </p>
            </div>

            {/* Pain 4 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-8 rounded-3xl hover:border-brandOrange/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 text-xl mb-6">
                🧍‍♂️
              </div>
              <h3 className="text-xl font-serif text-[#0A4D3C] font-extrabold mb-3">Poor Workstation Posture</h3>
              <p className="text-[#3D544E] text-sm leading-relaxed font-medium">
                Slouching shoulders and a forward head tilt that strain your cervical column with up to 30 lbs of extra micro-load.
              </p>
            </div>

            {/* Pain 5 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-8 rounded-3xl hover:border-brandOrange/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 text-xl mb-6">
                🔄
              </div>
              <h3 className="text-xl font-serif text-[#0A4D3C] font-extrabold mb-3">Difficulty Turning Your Neck</h3>
              <p className="text-[#3D544E] text-sm leading-relaxed font-medium">
                Feeling a physical block or sudden pinch whenever you look left or right, indicating serious tissue restriction.
              </p>
            </div>

            {/* Pain 6 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-8 rounded-3xl hover:border-brandOrange/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 text-xl mb-6">
                🎒
              </div>
              <h3 className="text-xl font-serif text-[#0A4D3C] font-extrabold mb-3">Constant Upper Back Tension</h3>
              <p className="text-[#3D544E] text-sm leading-relaxed font-medium">
                A heavy, tensed sensation resting continuously between your shoulder blades, exhausting your workday energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why This Happens Section */}
      <section className="py-24 px-6 bg-[#FAFDFC] border-b border-[#EAF4F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest bg-secondary px-4 py-2 rounded-full border border-primary/10">
              UNDERSTANDING THE ROOT CAUSE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#05261E] mt-4 font-extrabold tracking-tight">
              Your Body Wasn't Designed To Sit All Day.
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Infographic Left Cards */}
            <div className="md:col-span-6 space-y-6">
              <div className="p-6 bg-white border border-[#EAF4F0] rounded-3xl flex gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="text-primary text-2xl mt-1"><FaLaptop /></div>
                <div>
                  <h4 className="text-lg font-poppins font-bold text-[#0A4D3C] mb-1">Constant Laptop Work</h4>
                  <p className="text-xs text-[#3D544E] leading-relaxed font-medium">
                    Working on flat keyboard screens forces your cervical spine into a constant downwards bend, pulling upper neck vertebrae out of natural alignment.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#EAF4F0] rounded-3xl flex gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="text-primary text-2xl mt-1"><FaMobileAlt /></div>
                <div>
                  <h4 className="text-lg font-poppins font-bold text-[#0A4D3C] mb-1">Mobile Phone Tilting ("Text Neck")</h4>
                  <p className="text-xs text-[#3D544E] leading-relaxed font-medium">
                    Tilting your head down 60 degrees to read notifications adds up to 60 lbs of heavy physical pressure onto your delicate cervical joints.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#EAF4F0] rounded-3xl flex gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="text-primary text-2xl mt-1"><FaExclamationTriangle /></div>
                <div>
                  <h4 className="text-lg font-poppins font-bold text-[#0A4D3C] mb-1">Workplace Stress Accumulation</h4>
                  <p className="text-xs text-[#3D544E] leading-relaxed font-medium">
                    Mental anxiety causes subconscious muscle tensing, locking up the trapezius and levator scapulae muscles continuously for hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Infographic Right Art/Showcase */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-[16/9] rounded-[32px] overflow-hidden border border-[#EAF4F0] shadow-xl p-3 bg-white">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary/10">
                  <Image
                    src="/office-worker-neck-pain.png"
                    alt="Corporate professional holding stiff neck in pain at workplace"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefits of the Demo Section */}
      <section className="py-24 px-6 bg-white border-b border-[#EAF4F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest bg-secondary px-4 py-2 rounded-full border border-primary/10">
              EXPERIENCING THE DIFFERENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#05261E] mt-4 font-extrabold tracking-tight">
              How This Free Demo Can Help
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Benefit 1 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl shadow-sm text-center space-y-4">
              <span className="text-3xl block">🍃</span>
              <h4 className="text-base font-poppins font-bold text-[#0A4D3C]">Feel Lighter & Relaxed</h4>
              <p className="text-[#3D544E] text-xs font-medium leading-relaxed">
                Releases years of built-up pressure inside myofascial shoulder tissues in minutes.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl shadow-sm text-center space-y-4">
              <span className="text-3xl block">💆‍♀️</span>
              <h4 className="text-base font-poppins font-bold text-[#0A4D3C]">Release Skull Neck Locks</h4>
              <p className="text-[#3D544E] text-xs font-medium leading-relaxed">
                Clears suboccipital spasms, reducing vascular pressure and screen headaches.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl shadow-sm text-center space-y-4">
              <span className="text-3xl block">🔄</span>
              <h4 className="text-base font-poppins font-bold text-[#0A4D3C]">Improve Shoulder Mobility</h4>
              <p className="text-[#3D544E] text-xs font-medium leading-relaxed">
                Stretches deep clavicle joints, returning shoulders back into natural rest states.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl shadow-sm text-center space-y-4">
              <span className="text-3xl block">💼</span>
              <h4 className="text-base font-poppins font-bold text-[#0A4D3C]">Workplace Spacing Comfort</h4>
              <p className="text-[#3D544E] text-xs font-medium leading-relaxed">
                Unlocks passive movement structures, keeping you energetic and pain-free at your desk.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-6 rounded-2xl shadow-sm text-center space-y-4">
              <span className="text-3xl block">🏡</span>
              <h4 className="text-base font-poppins font-bold text-[#0A4D3C]">Doorstep Care Support</h4>
              <p className="text-[#3D544E] text-xs font-medium leading-relaxed">
                Experience premium assisted wellness without driving to distant clinical offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Home Service Section */}
      <section className="py-24 px-6 bg-[#0A192F] text-white overflow-hidden relative border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brandLime/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="inline-block text-xs font-montserrat font-bold text-brandLime uppercase tracking-wider bg-brandLime/10 px-4 py-2 rounded-full border border-brandLime/20">
            ELITE CONCIERGE WELLNESS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight font-extrabold">
            We Come To Your Home
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            Why waste the therapeutic physical benefits of a pain-release session by driving through stressful post-work city traffic immediately after?
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-4 text-left">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-sm backdrop-blur-sm">
              <div className="text-2xl text-brandLime mb-3"><FaClinicMedical /></div>
              <h4 className="text-base font-poppins font-bold text-white mb-2">No Commutes</h4>
              <p className="text-slate-300 text-xs font-light">Skip the post-session driving tension. We perform the entire treatment right inside your sanctuary.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-sm backdrop-blur-sm">
              <div className="text-2xl text-brandLime mb-3"><FaUserTie /></div>
              <h4 className="text-base font-poppins font-bold text-white mb-2">No Waiting Rooms</h4>
              <p className="text-slate-300 text-xs font-light">Eliminate clinic check-in friction. Our certified posture therapist arrives directly at your booked hour.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-sm backdrop-blur-sm">
              <div className="text-2xl text-brandLime mb-3"><FaHome /></div>
              <h4 className="text-base font-poppins font-bold text-white mb-2">Doorstep Luxury Setup</h4>
              <p className="text-slate-300 text-xs font-light">Certified stretching support delivered straight to your living room. Comfort, safety, and absolute peace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Founder Story Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#FAFDFC] to-[#EAF4F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
              Why AAATOAHH Exists
            </span>
            <h2 className="text-3xl md:text-5xl font-poppins font-extrabold text-[#05261E] mt-4 tracking-tight">
              The Genesis of Restorative Comfort
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Founder Card */}
            <div className="md:col-span-2 text-center md:text-left space-y-4">
              <div className="relative w-44 h-44 mx-auto md:mx-0 rounded-3xl overflow-hidden border border-primary/20 p-1.5 bg-white shadow-md">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary/15">
                  <Image
                    src="/hero-image-2.jpeg"
                    alt="Founder of AAATOAHH"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-poppins font-bold text-[#05261E]">Abhishek Dev</h3>
                <p className="text-xs font-montserrat text-textSecondary uppercase tracking-wider font-bold">FOUNDER, AAATOAHH.IN</p>
              </div>
            </div>

            {/* Personal Story Content */}
            <div className="md:col-span-3 space-y-6 text-[#3D544E] text-sm md:text-base font-medium leading-relaxed">
              <p>
                "Every single day, corporate professionals and office employees push their limits in front of computers. Sit-down meetings, 10-hour days typing, and continuous mobile phone staring are taking a massive toll: <strong className="text-[#05261E] font-bold">modern work life is creating more neck pain, poor posture, stress, and physical discomfort than ever before.</strong>"
              </p>
              <p>
                "We noticed that professionals were simply letting this neck stiffness build up until it turned into severe tension headaches, or they were wasting exhausted post-work hours traveling to clinical massage centers that felt crowded and clinical."
              </p>
              <p>
                "That is why we built <span className="text-primary font-bold">AAATOAHH</span>. We designed an elite home-visit service so busy professionals can receive targeted postural releases and deep assisted stretching comfortably at home, feeling better without disrupting their precious daily routines."
              </p>
              <span className="text-lg font-serif italic text-[#05261E] block font-semibold pt-2">
                "Your body wasn't made to suffer through desk jobs. Let us bring deep physical recovery right to you."
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section (Customized for Office Workers) */}
      <section className="py-24 px-6 bg-white border-y border-[#EAF4F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest bg-secondary px-4 py-2 rounded-full border border-primary/10">
              TRUSTED BY PROFESSIONALS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#05261E] mt-4 font-extrabold tracking-tight">
              Corporate Success Stories
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-8 rounded-3xl relative shadow-sm hover:shadow-md transition-all">
              <FaQuoteLeft className="text-4xl text-[#0A4D3C]/5 absolute top-8 left-8" />
              <div className="relative z-10 pl-4 pt-2">
                <div className="flex text-yellow-500 mb-4 gap-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-[#3D544E] text-base md:text-lg italic mb-6 font-medium leading-relaxed">
                  "Working on a laptop 9 hours a day left me with severe neck stiffness and constant screen headaches. The 10-minute home demo was an eye-opener—my shoulders felt lighter instantly! I immediately booked their regular assisted stretching program."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-primary/10 rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl shadow-sm">R</div>
                  <div>
                    <h4 className="text-[#05261E] font-bold">Rohan Sen</h4>
                    <p className="text-textSecondary text-xs font-semibold uppercase">Senior Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#FAFDFC] border border-[#EAF4F0] p-8 rounded-3xl relative shadow-sm hover:shadow-md transition-all">
              <FaQuoteLeft className="text-4xl text-[#0A4D3C]/5 absolute top-8 left-8" />
              <div className="relative z-10 pl-4 pt-2">
                <div className="flex text-yellow-500 mb-4 gap-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-[#3D544E] text-base md:text-lg italic mb-6 font-medium leading-relaxed">
                  "As a WFH consultant, my posture was terrible. My shoulders felt locked upwards constantly. Having a therapist visit my home and perform passive neck decompression is a complete game-changer. Absolutely recommend this service!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-primary/10 rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl shadow-sm">M</div>
                  <div>
                    <h4 className="text-[#05261E] font-bold">Megha Shah</h4>
                    <p className="text-textSecondary text-xs font-semibold uppercase">Corporate Business Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-24 px-6 bg-[#FAFDFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-montserrat font-bold text-primary uppercase tracking-widest bg-secondary px-4 py-2 rounded-full border border-primary/10">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#05261E] mt-4 font-extrabold tracking-tight">
              Questions & Clarifications
            </h2>
            <div className="w-16 h-1 bg-primary/20 mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white border border-[#EAF4F0] p-6 rounded-2xl shadow-sm">
              <h4 className="text-base md:text-lg font-poppins font-bold text-[#0A4D3C] flex items-center gap-3">
                <FaQuestionCircle className="text-brandLimeDark" /> Is this available at home?
              </h4>
              <p className="text-xs md:text-sm text-[#3D544E] mt-3 pl-7 leading-relaxed font-medium">
                Yes! We are a 100% home doorstep service. Our certified postural therapist travels directly to your home with a premium mobile wellness kit, so you never have to commute or wait in clinical lobby offices.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border border-[#EAF4F0] p-6 rounded-2xl shadow-sm">
              <h4 className="text-base md:text-lg font-poppins font-bold text-[#0A4D3C] flex items-center gap-3">
                <FaQuestionCircle className="text-brandLimeDark" /> How long does the demo take?
              </h4>
              <p className="text-xs md:text-sm text-[#3D544E] mt-3 pl-7 leading-relaxed font-medium">
                The free initial home demonstration takes approximately 10 minutes of active release. Our specialist will assess your desk posture restrictions, perform physical cervical/shoulder release testing, and demonstrate our targeted assisted traction.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border border-[#EAF4F0] p-6 rounded-2xl shadow-sm">
              <h4 className="text-base md:text-lg font-poppins font-bold text-[#0A4D3C] flex items-center gap-3">
                <FaQuestionCircle className="text-brandLimeDark" /> Do I need any equipment?
              </h4>
              <p className="text-xs md:text-sm text-[#3D544E] mt-3 pl-7 leading-relaxed font-medium">
                No, you don't need any equipment at all! Our expert arrives fully prepared with premium therapeutic oils, specialized alignment rolls, and clean support towels. You only need a comfortable couch or bed space.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white border border-[#EAF4F0] p-6 rounded-2xl shadow-sm">
              <h4 className="text-base md:text-lg font-poppins font-bold text-[#0A4D3C] flex items-center gap-3">
                <FaQuestionCircle className="text-brandLimeDark" /> Is this suitable for people who work on laptops all day?
              </h4>
              <p className="text-xs md:text-sm text-[#3D544E] mt-3 pl-7 leading-relaxed font-medium">
                Absolutely. It was designed specifically for laptop professionals and desk-bound workers. Sitting continuously causes shoulder hunching and forward neck tilt. Our passive stretching actively counteracts this screen strain posture.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white border border-[#EAF4F0] p-6 rounded-2xl shadow-sm">
              <h4 className="text-base md:text-lg font-poppins font-bold text-[#0A4D3C] flex items-center gap-3">
                <FaQuestionCircle className="text-brandLimeDark" /> Can this help with neck and shoulder tightness?
              </h4>
              <p className="text-xs md:text-sm text-[#3D544E] mt-3 pl-7 leading-relaxed font-medium">
                Yes! We focus heavily on releasing the suboccipital skull base, upper trapezius, and deep levator scapulae muscles, which are the main physical hotspots responsible for corporate neck stiffness and desk headaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-24 px-6 bg-[#0A192F] text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brandLime/5 blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight font-extrabold leading-tight">
            Your Neck Works Hard Every Day. <br />
            <span className="text-brandLime italic font-serif">Give It The Recovery It Deserves.</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Claim your 100% free, zero-obligation home demo. Let a certified specialist show you what real, professional neck and shoulder relief feels like.
          </p>
          <div className="pt-4">
            <button
              onClick={() => document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-brandLime text-[#0A192F] font-poppins font-black text-sm uppercase px-8 py-4 rounded-xl hover:bg-brandLime/90 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_25px_-5px_rgba(163,230,53,0.3)] duration-300"
            >
              BOOK FREE DEMO
            </button>
          </div>
        </div>
      </section>

      {/* 12. Sticky WhatsApp and Call Buttons */}
      <StickyButtons accentColor="lime" demoAnchorId="lead-form-section" />

    </div>
  );
}
