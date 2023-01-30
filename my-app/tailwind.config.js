/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width: {
        128: "50rem",
      },
      colors: {
        brand: "#FF0000",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
