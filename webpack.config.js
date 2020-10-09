const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader',
                // {
                //   loader: 'image-webpack-loader',
                //   options: {
                //     bypassOnDebug: true, // webpack@1.x
                //     disable: true, // webpack@2.x and newer
                //   },
                // },
              ],
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader',
              ],
        },  
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};