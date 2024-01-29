/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto, sans-serif'],
        'catamaran': ['Catamaran, sans-serif'],
      },
      colors: {
        'soriic': '#F9F9F9',
        'textColor': '#0e1133',
        'mainColor': '#801f82',
        'borderColor': '#202234',
        'footerColor': '#EEF1F6'
      },
      transitionDuration: {
        '1500': '1500ms',
      },
      backgroundImage: {
        'hero': './src/assets/hero-end.png',
        'contact': './src/assets/bg-contact.png',
      },
      borderWidth: {
        '6': '6px'
      },
    },
  },
}

