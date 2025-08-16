module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        spring: ["Spring", "sans-serif"],
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "translateX(0) scaleX(-1)" },
          "50%": { transform: "translateX(-10px) scaleX(-1)" },
        },
      },
      animation: {
        sway: "sway 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
