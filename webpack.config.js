const path = require('path');

const config = {
  resolve:{
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  entry: ['./lib/renderers/client.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    }] 
  }
};

module.exports = config;