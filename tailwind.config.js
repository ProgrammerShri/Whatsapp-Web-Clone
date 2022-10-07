/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#41525D",
        "secondary-gray": "#3B4A54",
        "tertiary-gray": "#101a21",
        "primary-green": "#008069",
        "secondary-green": "#00b384",
      },
    },
  },
  plugins: [require("daisyui")],
};
