/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        clturq: "#11D7E3",
        clblack: "#05060A",
        clgray: "#11141B",
        claccent: "#F97316"
      }
    }
  },
  plugins: []
};
