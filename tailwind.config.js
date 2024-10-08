/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#FCF8CA',
        'Text-(Dark)/Primary': '#222325',
        'Text-(Dark)/Secondary': '#333333AD',
        'Text-label(Dark)': '#4A505C',
        'Button-(Green)': '#3ECF4C',
        'Button-(Green)/Secondary': '#E2FCD9CC',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      spacing: {
        '590': '36rem',
      }
    },
  },
  plugins: [],
}

