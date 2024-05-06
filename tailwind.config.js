/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '2px 2px 100px 0px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        primary:"#42446E",
        text_link: "#666666",
        
      },
      container: {
        center: true,
        screens: {
          lg: "1150px"
        }
      }
    },
  },
  plugins: [],
}