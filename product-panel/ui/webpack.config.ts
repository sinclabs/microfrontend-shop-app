import path from "path";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config = {
  entry: "./src/products-panel.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "product-panel.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
};

export default config;