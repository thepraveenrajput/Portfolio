/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body:    ['"Instrument Sans"', 'sans-serif'],
        mono:    ['"Fira Code"', 'monospace'],
      },
      colors: {
        violet:  { DEFAULT: '#7C3AED', light: '#A78BFA', dim: '#4C1D95' },
        amber:   { DEFAULT: '#F59E0B', light: '#FCD34D' },
        emerald: { DEFAULT: '#10B981', light: '#6EE7B7' },
        rose:    { DEFAULT: '#F43F5E', light: '#FDA4AF' },
        ink: {
          900: '#080B14',
          800: '#0E1220',
          700: '#141929',
          600: '#1B2236',
          500: '#222B42',
          400: '#2E3B55',
          300: '#3F4F6B',
          200: '#8494B2',
          100: '#C4CEDF',
        },
      },
      backgroundImage: {
        'grid-violet': `
          linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)
        `,
        'hero-radial': 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-violet': '0 0 40px rgba(124,58,237,0.35)',
        'glow-amber':  '0 0 30px rgba(245,158,11,0.25)',
        'card':        '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'float-slow':   'floatSlow 7s ease-in-out infinite',
        'float-medium': 'floatMed 5s ease-in-out infinite',
        'pulse-violet': 'pulseViolet 3s ease-in-out infinite',
        'scan':         'scan 4s linear infinite',
        'fade-up':      'fadeUp 0.7s ease forwards',
        'slide-right':  'slideRight 0.5s ease forwards',
        'blink':        'blink 1s step-end infinite',
        'border-spin':  'borderSpin 4s linear infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        floatSlow:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        floatMed:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseViolet: { '0%,100%': { boxShadow: '0 0 20px rgba(124,58,237,0.2)' }, '50%': { boxShadow: '0 0 50px rgba(124,58,237,0.6)' } },
        scan:        { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
        fadeUp:      { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideRight:  { from: { opacity: '0', transform: 'translateX(-20px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        blink:       { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        borderSpin:  { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
        shimmer:     { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(100%)' } },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        praveen: {
          "primary":        "#7C3AED",
          "primary-content": "#ffffff",
          "secondary":      "#F59E0B",
          "accent":         "#10B981",
          "neutral":        "#1B2236",
          "base-100":       "#080B14",
          "base-200":       "#0E1220",
          "base-300":       "#141929",
          "base-content":   "#C4CEDF",
          "info":           "#7C3AED",
          "success":        "#10B981",
          "warning":        "#F59E0B",
          "error":          "#F43F5E",
        },
      },
    ],
    darkTheme: "praveen",
  },
}
