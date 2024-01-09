/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {}
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
};
