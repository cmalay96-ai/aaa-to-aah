"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  // Define routes where we want to hide the footer (all AAATOAHH funnel landing and thank you pages)
  const funnelRoutes = [
    "/gym-recovery",
    "/thank-you-gym-recovery",
    "/leg-recovery",
    "/thank-you-leg-recovery",
    "/joint-pain-relief",
    "/thank-you-joint-pain",
    "/parents-pain-care",
    "/thank-you-parents-care",
    "/sleep-relaxation",
    "/thank-you-sleep-relaxation",
  ];

  // Also hide if it starts with /thank-you-
  const isFunnelRoute = funnelRoutes.includes(pathname) || pathname.startsWith("/thank-you-");

  if (isFunnelRoute) {
    return null;
  }

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif text-white mb-4">Heal<span className="text-primary">.</span></h3>
            <p className="text-textSecondary mb-6 max-w-sm">
              Elevating your wellness journey with premium, professional massage therapy delivered directly to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-textSecondary">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/book" className="hover:text-primary transition-colors">Book a Session</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-textSecondary">
              <li>hello@healmassage.com</li>
              <li>+91 7908082151</li>
              <li className="pt-2">
                <p className="text-white text-sm">Working Hours:</p>
                <p className="text-sm">Mon-Sun: 10AM - 8PM</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-textSecondary">
          <p>&copy; {new Date().getFullYear()} Heal Massage. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
