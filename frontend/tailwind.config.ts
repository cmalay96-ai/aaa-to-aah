import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Gold
        secondary: "#1A1A1A", // Dark Gray
        background: "#0A0A0A", // Almost Black
        surface: "#111111", // Slightly lighter black for cards
        textPrimary: "#F5F5F5",
        textSecondary: "#A3A3A3",
        // AAATOAHH Brand Colors
        brandBlack: "#020202",
        brandNavy: "#070C18",
        brandNavyLight: "#0F172A",
        brandLime: "#A3E635",
        brandLimeDark: "#84CC16",
        brandOrange: "#FB923C",
        brandOrangeDark: "#EA580C",
        brandWhite: "#FFFFFF",
        // SaaS Admin Palette
        "saas-primary": "#6366F1",
        "saas-secondary": "#8B5CF6",
        "saas-background": "#0F172A",
        "saas-card": "#1E293B",
        "saas-text": "#F8FAFC",
        "saas-accent": "#22C55E",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
