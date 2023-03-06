/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 12s infinite linear',
        'float-fast': 'float 10s infinite linear',
        'float-fastest': 'float 8s infinite linear',
      },
      keyframes: {
        float: {
          '0%': {
            transform:
              ' rotate(-0.001deg) translate3d(15px, 0, 0) rotate(-0.001deg)',
          },
          '100%': {
            transform:
              'rotate(360.001deg) translate3d(15px, 0, 0) rotate(-360.001deg)',
          },
        },
        btnpulse: {
          '0%': { 'box-shadow': '0 0 0 0 theme("colors.violet.400")' },
          '50%': { 'box-shadow': '0 0 0 0 theme("colors.violet.400/50")' },
          '100%': { 'box-shadow': '0 0 0 11px theme("colors.violet.400/0")' },
        },
      },
    },
  },
  plugins: [],
};
