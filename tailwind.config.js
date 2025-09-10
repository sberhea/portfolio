/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',        // Your app directory
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Your components
    './src/**/*.{js,ts,jsx,tsx,mdx}',    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
