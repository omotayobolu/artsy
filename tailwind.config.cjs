/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "3xl": ["64px", "156.7px"],
      "2xl": ["48px", "118px"],
      xl: ["32px", "90px"],
      lg: ["24px", "70px"],
      md: ["20px", "50.5px"],
      sm: ["18px", "39.5px"],
      base: "14px",
    },
    extend: {},
  },
  plugins: [],
};
