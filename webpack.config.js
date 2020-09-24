const path = require("path");

module.exports = {
  entry: {
    'blocks/block.build': './blocks/block.js',
    'assets/js/primary-category-settings-panel.min' : './assets/js/primary-category-settings-panel.js',
    
  },
  output: {
    path: path.join(__dirname, '/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  }
};
