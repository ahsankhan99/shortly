/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'Raleway', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary1: 'hsl(180, 66%, 49%)',
        primary2: 'hsl(257, 27%, 26%)',
        secondary: 'hsl(0, 87%, 67%)',
        neutral1: 'hsl(0, 0%, 75%)',
        neutral2: 'hsl(257, 7%, 63%)',
        neutral3: 'hsl(255, 11%, 22%)',
        neutral4: 'hsl(260, 8%, 14%)',
      },
      backgroundImage: {
        'boost-desktop': "url('/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('/images/bg-boost-mobile.svg')",
        'shorten-desktop': "url('/images/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('/images/bg-shorten-mobile.svg')",
      }
    },
  },
  plugins: [],
}
