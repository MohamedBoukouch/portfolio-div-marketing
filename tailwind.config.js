/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}", // Angular templates and components
    ],
    theme: {
      extend: {
        fontFamily: {
            'boukouch': ['MyCustomFont', 'sans-serif'],
        //   'roboto': ['Roboto', 'sans-serif'],      // Google font example
        },
        colors: {
          primary: '#facc15', // optional custom color
        },
      },
    },
    plugins: [],
  }
  