/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#D3B590',
          200: '#B19F7D',
          300: '#8E866B',
          400: '#6C6C59',
          500: '#4A5337',
          600: '#272B24',
          700: '#050A12',
          800: '#000000',
          green_custom: '#388E3C'
        },
      },
    },
  },
  plugins: [],
};
