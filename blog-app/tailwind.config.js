/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turq': '#4FC0D0',
        'dark-green-banner':'#183D3D',
      },
    },
  },
  plugins: [],
}

