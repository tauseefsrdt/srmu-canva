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
        background: '#050608',
        surface: {
          DEFAULT: '#0D1014',
          light: '#151920',
          elevated: '#1E232D',
          hover: '#1B2028'
        },
        brand: {
          primary: '#FF3154',
          pink: '#FF167D',
          purple: '#8B3DFF',
          blue: '#267BFF',
          cyan: '#28D7FF',
          orange: '#FF7A18',
        },
        muted: '#9A9DA7',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-hover': 'rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      borderRadius: {
        'card': '24px',
        'badge': '100px',
      },
      boxShadow: {
        'glow-primary': '0 0 40px -10px rgba(255, 49, 84, 0.4)',
        'glow-purple': '0 0 40px -10px rgba(139, 61, 255, 0.4)',
        'glow-cyan': '0 0 40px -10px rgba(40, 215, 255, 0.4)',
        'card': '0 20px 40px -15px rgba(0,0,0,0.7)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 49, 84, 0.15), transparent 70%)',
        'radial-hero': 'radial-gradient(circle at top right, rgba(139, 61, 255, 0.12), transparent 50%), radial-gradient(circle at bottom left, rgba(255, 49, 84, 0.12), transparent 50%)',
        'gradient-brand': 'linear-gradient(135deg, #FF3154 0%, #FF167D 50%, #8B3DFF 100%)',
        'gradient-cyan-blue': 'linear-gradient(135deg, #28D7FF 0%, #267BFF 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(21, 25, 32, 0.8) 0%, rgba(13, 16, 20, 0.95) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
