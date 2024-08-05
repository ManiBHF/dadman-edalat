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
    extend: {
      fontFamily: {
        moraba:['moraba'],
        yekanbakh:['yekanbakh'],
        yekanbakhfa:['yekanbakhfa'],
      },
      backgroundImage: {
        'hero-pattern': "url('../images/Untitled (1).png')",

      }
    },
  },
  plugins: [],
};
