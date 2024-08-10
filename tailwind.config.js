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
        'hero-pattern': "url('../images/view-3d-justice-scales_23-2151228146 1.jpg')",

      }
    },
  },
  plugins: [],
};
