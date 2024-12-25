/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d1c7',
          300: '#a3b3a3',
          400: '#7d917d',
          500: '#607460',
          600: '#4c5d4c',
          700: '#404d40',
          800: '#363f36',
          900: '#2f352f',
          950: '#1a1d1a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};