module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
// const purgecss = [
//   '@fullhuman/postcss-purgecss',
//   {
//     content: [
//       './src/pages/*.tsx',
//       './src/pages/**/*.tsx',
//       './components/*.js',
//       './components/**/*.js',
//     ],
//     whitelistPatterns: [/^slick-/],
//     defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
//   },
// ];
// module.exports = {
//   plugins: [
//     'postcss-import',
//     'tailwindcss',
//     'autoprefixer',
//     ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
//   ],
// };
