/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1E1E1F',
        'secondary-color': '#353535',
      },
    },
  },
  plugins: [],
}

