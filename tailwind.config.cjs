/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "3xl": ["64px", "156.7%"],
      "2xl": ["48px", "118px"],
      xl: ["32px", "90px"],
      lg: ["24px", "70px"],
      md: "20px",
      sm: "18px",
      base: "14px",
    },
    colors: {
      "primary-black": "#292929",
      "secondary-black": "#333333",
      white: "#ffffff",
      "secondary-white": "rgba(255, 255, 255, 20%)",
      "product-image-hover": "rgba(0,0,0,60%)",
      blue: "rgba(70,147,237,100%)",
      "light-blue": "rgba(121,184,210,100%)",
      orange: "rgba(192,86,9,49%)",
      grey: "#aeaeae",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
