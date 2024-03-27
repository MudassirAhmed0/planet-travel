/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        averageMobile: "375px"
      }
    }
  },
  plugins: []
};
