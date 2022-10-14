/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sirin: ["Sirin Stencil", "cursive"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        blink: {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "white" },
        },
        typing: {
          "0%, 100%": { width: "0%" },
          "50%": { width: "100%" },
        },
      },
      animation: {
        wave: "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};
