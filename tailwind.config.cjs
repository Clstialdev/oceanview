/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1082px",
      xl: "1280px",
      xxl: "1536px",
      xxxl: "1950px",
      x3xl: "2048px",
      x4k: "3500px",
    },
    extend: {
      colors: {
        beige: "#E9D1B0",
        turqoise: "#518276",
        services: {
          light: "#091D21",
          dark: "#040D10",
        },
      },
    },
  },
  plugins: [],
};
