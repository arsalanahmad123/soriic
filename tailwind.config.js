/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto, sans-serif']
      },
      colors: {
        'soriic': '#F9F9F9',
        'textColor': '#0e1133',
        'mainColor': '#801f82',
        'white': '#ffffff',
      },
      transitionDuration: {
        '1500': '1500ms',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        width: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        }

      },
      backgroundImage: {
        'hero': './src/assets/hero-end.png'
      }
    },
  },
}

