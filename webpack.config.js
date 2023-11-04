const path = require('path');

module.exports = {
  entry: '/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
}