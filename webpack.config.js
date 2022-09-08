import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "../dist/",
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.js/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
