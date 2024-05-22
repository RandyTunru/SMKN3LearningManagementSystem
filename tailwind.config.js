/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        'custom-1': '400px',
        'custom-2': '15px',
        'custom-3': '2rem',
      },
    },
  },
  plugins: [],
}

