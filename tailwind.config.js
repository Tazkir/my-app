/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        btnpulse: {
          '0%': { 'box-shadow': '0 0 0 0 theme("colors.violet.400")' },
          '50%': { 'box-shadow': '0 0 0 0 theme("colors.violet.400/50")' },
          '100%': { 'box-shadow': '0 0 0 11px theme("colors.violet.400/0")' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
