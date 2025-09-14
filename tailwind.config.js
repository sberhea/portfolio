/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',        // Your app directory
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Your components
    './src/**/*.{js,ts,jsx,tsx,mdx}',    
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-instrument-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        greenbg: "#C8EC84",
        foreground: "var(--foreground)",
        navActive: "#94CAE3",
        navHover: "#FFF460",
      },
    },
  },
  plugins: [],
};

module.exports = config;
