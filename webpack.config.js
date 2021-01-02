const HtmlWebpackPlugin = require("html-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const glob = require('glob')
const path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
    }),

    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "sass-loader"
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(svg|gif|png|eot|woff|woff2|ttf)$/,
        loaders: ["url-loader"],
      },
    ],
  },
};
