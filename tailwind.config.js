/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
              primaryBlu: '#0182F9',
              secondaryBlack: '#1C1C1C',
              tertiaryGrey: '#303030',
            }
    },
  },
  plugins: [],
}

