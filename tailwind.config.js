/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.tsx",
    "./pages/**/*.tsx",
    "./components/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {},
    height: {
      "10v": "10vh",
      "100v": "100vh"
    }
  },
  plugins: [],
}
