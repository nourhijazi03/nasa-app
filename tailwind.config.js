/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-100":"#fd8532",
        "primary-200":"#fc580c",
        "main-100":"#ffe7d6",
        
      },
      screens:{
        xs:"480px",
      }
    },
  },
  plugins: [
    
  ],
}

