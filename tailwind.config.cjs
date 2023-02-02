/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
