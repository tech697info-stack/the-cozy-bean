/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fdf8f5',
        'warm-cream': '#fefce8',
        'amber-glow': '#d97706',
        'terracotta': '#c2410c',
        'espresso': '#451a03',
        'mocha': '#78350f',
        'dark-roast': '#1a0b02',
        'cafe-brown': '#291104',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 245, 230, 0.08), rgba(255, 245, 230, 0))',
        'glass-card': 'linear-gradient(145deg, rgba(255, 245, 230, 0.05) 0%, rgba(255, 245, 230, 0.01) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'glass-hover': '0 8px 32px 0 rgba(217, 119, 6, 0.25)',
        'glow': '0 0 15px rgba(217, 119, 6, 0.4)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 15px rgba(217, 119, 6, 0.5)' },
          '50%': { opacity: .5, boxShadow: '0 0 5px rgba(217, 119, 6, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [],
}
