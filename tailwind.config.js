/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-black",
    "bg-cyan-400",
    "bg-teal-400",
    "bg-purple-400",
    "bg-green-600",
    "bg-blue-600",
    "bg-red-400",
    "bg-violet-500",
  ],
  theme: {
    extend: {
      animation: {
        loop: "loop 100s linear infinite",
        text: "text 5s ease infinite",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        loop: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        btnpulse: {
          "0%": { "box-shadow": '0 0 0 0 theme("colors.violet.400")' },
          "50%": { "box-shadow": '0 0 0 0 theme("colors.violet.400/50")' },
          "100%": { "box-shadow": '0 0 0 11px theme("colors.violet.400/0")' },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
