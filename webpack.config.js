const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const devMode = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    bundle: "./src/index.tsx",
    main: "./src/styles.scss"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
    filename: "[name].js"
  },

  mode: devMode ? "development" : "production",

  devtool: devMode ? "source-map" : false,

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    publicPath: "/",
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/index.html"
      },
      {
        from: "./src/images",
        to: "images"
      }
    ]),
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  }
};
