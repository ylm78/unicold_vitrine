/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        arteks: ['ArTeks', 'Arial', 'sans-serif'],
      },
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
        ice: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          DEFAULT: '#f97316', // Orange vif pour les CTA
          hover: '#ea580c',
          light: '#fb923c',
        },
      },
      backgroundImage: {
        'frost-gradient': 'linear-gradient(135deg, #0f172a 0%, #082f49 100%)',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      animation: {
        'scan': 'scan 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
