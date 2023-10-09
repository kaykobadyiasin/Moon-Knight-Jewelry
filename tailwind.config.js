/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#dc9a7e',
        },
        secondary: {
          100: '#07113A',
          200: '#A8A8A8',
        },
      },
    },
  },
  plugins: [],
}

