/*
 * @Date: 2024-01-09 15:44:20
 * @LastEditTime: 2024-01-14 17:05:12
 * @Description: ~
 */
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      extend: {
        aspectRatio: {
          '3:4': '3 / 4'
        }
      }
    },
    autoprefixer: {}
  }
};
