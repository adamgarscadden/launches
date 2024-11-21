/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/*.{html,js,jsx,tsx}', './pages/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      grey: '#fafafa',
      green: '#007216',
      red: '#FF3233',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
};
