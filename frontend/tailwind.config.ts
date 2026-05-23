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
        primary: "#0A4D3C", // Deep Premium Sea Green
        secondary: "#EAF4F0", // Soft Sea Foam wash
        background: "#FAFDFC", // Pure Wellness Off-White
        surface: "#FFFFFF", // Luxury White Cards
        textPrimary: "#1B332D", // Deep Therapeutic Charcoal
        textSecondary: "#4A635C", // Mid-tone green-gray
        // AAATOAHH Brand Colors
        brandBlack: "#FFFFFF",
        brandNavy: "#FAFDFC",
        brandNavyLight: "#EAF4F0",
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
