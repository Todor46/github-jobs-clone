module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#4092f1',
          DEFAULT: '#1E86FF',
          dark: '#1a75df'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
