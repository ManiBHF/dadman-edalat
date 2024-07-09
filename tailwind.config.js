/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "30px",
        md: "2rem",
        "2xl": "7rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
