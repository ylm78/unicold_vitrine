/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'unicold-blue': {
          50: '#e6f7fc',
          100: '#b3e7f7',
          200: '#80d7f2',
          300: '#4dc7ed',
          400: '#1ab7e8',
          500: '#00A3E0',
          600: '#0082b3',
          700: '#006186',
          800: '#004159',
          900: '#00202c',
        },
      },
    },
  },
  plugins: [],
};
