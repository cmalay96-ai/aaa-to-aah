import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700", "800"], 
  subsets: ["latin"], 
  variable: "--font-poppins" 
});
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "AAA TO AHH.IN | Luxury Home Recovery & Mobility Services",
  description: "Professional athletic recovery, lower limb stretching, joint mobility care, and sleep relaxation at your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${poppins.variable} ${montserrat.variable} font-sans bg-background text-textPrimary`}>
        {/* Navigation could go here */}
        <main>{children}</main>
        
        {/* Dynamic Footer */}
        <Footer />
      </body>
    </html>
  );
}
