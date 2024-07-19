/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "green": "#094D1C",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC"
      },
      
    },
  },
  plugins:[
    require('daisyui'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  daisyui: {
    themes: ["light"],
  },
  
}