// module.exports = {
//   assetPrefix: process.env.NODE_ENV === 'production' ? 'https://geoje1dong.github.io/weekly_ui' : ''
// }

module.exports = {
  distDir: process.env.NODE_ENV === 'production' ? `../build` : '.next',
}