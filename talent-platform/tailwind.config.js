/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.css"  // ✔ Correct glob pattern
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#2a0d3a",
          700: "#5b2a86",
          500: "#7c3aed",
          400: "#9f7dff",
          200: "#dcd2ff"
        }
      }
    }
  },
  plugins: [],
};
