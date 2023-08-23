const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    dnn_react_bundle: [
      './FrontEnd/index.jsx',
      './FrontEnd/components/item.jsx'
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Html webpack plus'
  //   })
  // ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      globalize$: path.resolve( __dirname, "node_modules/globalize/dist/globalize.js" ),
      globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
      cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
      cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr")
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass|less|css|scss)$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}