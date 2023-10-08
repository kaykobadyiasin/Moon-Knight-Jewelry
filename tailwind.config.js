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
          100: '#00b584',
        },
        secondary: {
          100: '#042E24',
          200: '#A8A8A8',
        },
      },
    },
  },
  plugins: [],
}

