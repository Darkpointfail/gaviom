/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#09090b',
        surface: '#12121a',
        elevated: '#18181f',
        fg: '#f4f4f5',
        ink: '#0a0a0c',
        muted: '#b4b4bc',
        accent: '#5b8cff',
        'accent-soft': 'rgba(91, 140, 255, 0.14)',
        border: '#2a2a32',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        label: '0.22em',
      },
      boxShadow: {
        lux: '0 0 0 1px rgba(255,255,255,0.06), 0 2px 4px rgba(0,0,0,0.2), 0 24px 48px -12px rgba(0,0,0,0.65)',
        'lux-sm':
          '0 0 0 1px rgba(255,255,255,0.05), 0 4px 12px -2px rgba(0,0,0,0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-x': 'scroll-x 40s linear infinite',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
