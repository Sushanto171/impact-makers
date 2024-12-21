import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [daisyui],
};
