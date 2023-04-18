/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        gray: {
          200: "#E0E0E0",
          300: "#CFD6D4",
          400: "#545353",
          600: "#212121",
          800: "#262626",
        },
        blue: {
          900: "#0F1624"
        },
        red: {
          800: "#CD0707",
        },
        green: {
          500: "#27AE60"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
