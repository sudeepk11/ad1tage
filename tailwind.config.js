const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        blackLight: "#333333",
        primary: "#2A86DB",
        secondary: "#CAB08F",
        darkGrey: "#939393",
        lightBrown: "#F5EADB",
        greyishBrown: "#E1D9CE",
        offWhite: "#FAFAFA",
        footer: "#1E2F3F"
      },
      gridTemplateColumns: {
        "image-gallery-4": "160px repeat(3 , 1fr)",
        "listing-5": "0.9fr 1fr 0.5fr 0.5fr 0.8fr",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-image": "url('../images/hero.jpg')",
        "banner-overlay": "url('../images/banner-overlay.png')",
        "email-icon": "url('../images/email-icon.png)",
        "slider-overlay": "url('../images/slider-overlay.png')",
        "down-arrow": "url('../images/down-triangle.png')",
        "primary-color-arrow-up": "url('../images/primary-color-arrow.png')",
        "left-shaded-overlay": "url('../images/left-shadow-overlay.png')",
        "black-gradiant":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(41, 32, 33, 0.64) 0%, rgba(41, 32, 33, 0.56) 100%)",
        "arrow-right-primary": "url('../images/goal-arrow.png')",
        "host-with-us-banner": "url('../images/hostwithus.png')",
        "host-with-us-handle": "url('../images/host_handle.png')",
      },

      container: {
        screens: {
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
