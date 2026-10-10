/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF2F7',
          100: '#FCE7F1',
          200: '#F8CFE2',
          300: '#F2A7CB',
          400: '#E771AA',
          500: '#D9428B',
          600: '#9B1B58',
          700: '#831448',
          800: '#6E133D',
          900: '#5C1435',
          950: '#39061E',
        },
        clean: {
          teal: '#0D9488',
          emerald: '#10B981',
          cyan: '#06B6D4',
        },
        surface: {
          dark: '#090D16',
          card: '#0F172A',
          cardHover: '#17223B',
          border: '#1E293B',
          borderHover: '#334155',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-brand': '0 0 35px -5px rgba(155, 27, 88, 0.3)',
        'glow-teal': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
