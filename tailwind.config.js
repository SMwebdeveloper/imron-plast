/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imron-img': "url('assets/images/bg-plastic.jpg')"
      }
    },
  },
  plugins: [],
}

