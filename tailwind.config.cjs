/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "3xl": ["64px", "156.7%"],
      "2xl": ["48px", "118%"],
      xl: ["32px", "90%"],
      lg: ["24px", "70%"],
      md: "20px",
      sm: "18px",
      base: "14px",
    },
    colors: {
      "pure-black": "#000000",
      "primary-black": "#292929",
      "secondary-black": "#333333",
      white: "#ffffff",
      "secondary-white": "rgba(255, 255, 255, 20%)",
      "product-image-hover": "rgba(0,0,0,60%)",
      blue: "rgba(70,147,237,100%)",
      "light-blue": "rgba(121,184,210,100%)",
      orange: "rgba(192,86,9,49%)",
      grey: "#aeaeae",
      grey2: "#F4F2F2",
      grey3: "#888888",
      grey4: "rgba(116, 116, 116, 1)",
      "light-grey": "#e2e2e2",
      "dark-grey": "#d9d9d9",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        stix: ["Stix Two Text", "serif"],
        Bellefair: ["Bellefair", "serif"],
        Baskervville: ["Baskervville", "serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        tick: "url('/src/assets/images/tick.png')",
      },
      dropShadow: {
        marketplace: "4px 4px 64px rgba(0,0,0,10%)",
        marketplaceproduct: "0 34px 68px rgba(217,225,244,0.36)",
      },
    },
  },
  plugins: [],
};
