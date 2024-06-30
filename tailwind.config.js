/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'], // Adiciona a fonte 'Inter'
      },
      backgroundImage: theme => ({
        'custom-bg': "url('/src/assets/jordan.png')",
      })
    },
  },
  plugins: [],
}

