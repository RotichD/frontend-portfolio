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
        roboto: ['var(--font-roboto)'],
        cabin: ['var(--font-cabin)'],
      },
      colors: {
        primary: '#284b63',
        secondary: '#3c6e71',
        offBlack: '#353535',
        offWhite: '#d9d9d9',
      },
    },
  },
  plugins: [],
};
