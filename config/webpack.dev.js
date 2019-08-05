const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: [
    "webpack-dev-server/client?http://localhost:4000",
    "webpack/hot/only-dev-server",
    "./src/index.tsx"
  ],

  devtool: "cheap-module-source-map",

  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },

    contentBase: path.resolve(__dirname, "../dist"),
    historyApiFallback: true,
    host: "localhost",
    port: 4000,
    hot: true,
    publicPath: "/",
    compress: true,
    disableHostCheck: true
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify("http://195.26.92.83:3000")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});