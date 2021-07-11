const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const packageDirectoryPath = process.cwd();

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|ts)x?$/,
        exclude: /node_modules\//,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", "jsx", "tsx"],
  },
  output: {
    path: path.join(packageDirectoryPath, "dist"),
    filename: "index.js",
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "src/index.ejs",
      inject: false,
    }),
  ],
  externals: {
    "@chenshaorui/web-framework-kernel": "kernel",
    "@chenshaorui/web-framework-util": "webFrameworkUtil",
  },
};
