const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          // "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
        use: [
          {
            // loader: 'file-loader?name=[name].[ext]', // Keeps original file name
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      // Use ONE local version of react when linking to other libraries. Use this react.
      // react: path.resolve(__dirname, 'node_modules', 'react')
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: "Payment Portal",
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
