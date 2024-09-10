/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '340px',

      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',

      'tall': { 'raw': '(min-height: 900px)' }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        black: '#292929',
        CustomText: {
          300: '#292929',
          200: '#757575',
          100: '#ffffff',
        },
        CustomBrand: {
          300: '#3B82F6',
          200: '#C3DAFF',
          100: '#EBF3FE'
        },
        CustomNeutral: {
          400: '#292929',
          300: '#BFBFBF',
          200: '#EF1F1F1',
          100: '#FFFFFF'
        },
        free: '#87CEED',
        TableStatus: {
          free: '#87CEED',
          reserved: '#FFB800',
          assigned: '#3B82F6',
          confirmed: '#FFFF00',
          preparing: '#FFA500',
          ready: '#AD00FF',
          served: '#00D930',
          bill: '#A1007E',
          completed: '#40E0D0'
        }
      },
    },
  },
  plugins: [],
}

