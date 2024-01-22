/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: [
        'Roboto',
      ]
    },
    colors: {
      'soriic': '#F9F9F9',
      'textColor': '#0e1133',
      'mainColor': '#801f82'
    },
  },
}

