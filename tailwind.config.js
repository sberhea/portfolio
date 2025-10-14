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
      },
      colors: {
        greenbg: "#BBE181",
        foreground: "var(--foreground)",
        navActive: "#94CAE3",
        navHover: "#FFF460",
        redText: "#8C1300",
        blueText: "#00227A",
        orange: "#EAA835",
        zbcolor: '#3CA65F',
      },
    },
  },
  plugins: [],
};

module.exports = config;
