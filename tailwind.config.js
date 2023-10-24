/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    dropShadow: {
      'text': '0px 0px 1px white'
    }
  },
  plugins: [],
}