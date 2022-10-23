/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "segoe-ui-regular": ["Segoe-UI-Regular", "sans-serif"],
        "segoe-ui-bold": ["Segoe-UI-Bold", "sans-serif"],
      },
      // colors:{
      //   primary:
      // }
    },
  },
  plugins: [],
};
