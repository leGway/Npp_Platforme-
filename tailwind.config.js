/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neopBleuNuit: '#042c44',
        neopJaune: '#ffd600',
        neopTurquoise: '#00a7cc',
        neopGrisFonce: '#2f3c4f',
        neopGrisClair: '#f5f5f5'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}