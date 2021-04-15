const plugin = require("tailwindcss/plugin");

const checkedSiblingPlugin = plugin(function ({ addVariant, e }) {
  addVariant("checked-sibling", ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:checked + .checked-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

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
        },
        gray: {
          dark: '#334680',
          light: '#B9BDCF',
          lighter: '#f6f7fb'
        }
      },
      spacing: {
        0.5: '0.12rem',
        4.5: '1.15rem',
        10.5: '2.65rem',
        22: '5.625rem'
      },
      borderRadius: {
        4: '4px'
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked-sibling"],
      borderColor: ["checked-sibling"]
    },
  },
  plugins: [require('@tailwindcss/forms'), checkedSiblingPlugin],
}
