/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "minee-blue-primary": '#213D5A',
        "minee-blue-secondary": '#4E6E94', 
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