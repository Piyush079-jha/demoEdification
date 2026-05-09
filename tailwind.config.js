/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f5a623',
        'dark-orange': '#e6951a',
        dark: '#1a1a2e',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};
