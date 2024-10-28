/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "minee-blue": '#0075f7',
        "minee-blue2": '#3DA5D9',
        "minee-blue3": '#4A90E2',
        "minee-text-white": '#E1F0FF',
        "minee-text-sec": '#999',
        "minee-bg": '#000C1D',
      },fontFamily: {
        'kanit': ["Kanit", 'ui-sans-serif'],
      }
    },
  },
  plugins: [],
}