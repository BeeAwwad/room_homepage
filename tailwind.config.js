/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',   // Small devices (mobile)
      md: '768px',   // Medium devices (tablets)
      lg: '1024px',  // Large devices (desktops)
      xl: '1280px',  // Extra large devices
      xxl: '1750px', // Very very large devices
    },
    extend: {
      fontFamily: {
        sparta: ['League Spartan']
      }
    },
  },
  plugins: [],
}

