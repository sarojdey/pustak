/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Montserrat", "sans-serif"],
        font2: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
};
