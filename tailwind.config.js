import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './src/*/*/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#b42222',
        accent: '#B8860B',
        cream: '#FDFBF7',
        dark: '#1A1A1A',
        surface: '#F5F2EB',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        eight: '8px',
      },
      boxShadow: {
        glow: '0 12px 30px rgba(180, 34, 34, 0.22)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
      },
    },
  },
  plugins: [forms],
}

