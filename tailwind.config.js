/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        o_green: "#7BEF8E",
        o_red: "#FF6060",
      },
      fontSize: {
        xss: "0.7rem",
      },
    },
  },
  plugins: [],
};
