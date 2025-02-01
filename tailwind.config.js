/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  // Extra small screens
        'xsm': '375px', // Small mobile
        'smp': '420px', // Slightly larger phones
        'sml': '480px', // Large phones
      }
    },
  },
  plugins: [],
}

