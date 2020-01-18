const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const path = require("path");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/"
    /*  path: path.resolve(__dirname, "dist") */
  },
  /* devServer: {
    port: 8081,
    hot: true,
    open: true
  }, */
  /* devtool: "eval-source-map", */
  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new WebpackPwaManifestPlugin({
      name: "Portafolio",
      shortname: "Portafolio C.V",
      description: "Aqui plasmo mis habilidades y mi experiencia profesional",
      background_color: "#fff",
      theme_color: "#21C08B",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [16, 32, 48, 96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://res.cloudinary.com"),
          handler: "CacheFirst",
          options: {
            cacheName: "images"
          }
        }
        /* {
          urlPattern: new RegExp(
            "https://birdgram-server.jorgevelasquez006.now.sh/"
          ),
          handler: "NetworkFirst",
          options: {
            cacheName: "api"
          }
        } */
      ]
    }),
    new FaviconsWebpackPlugin("./src/assets/icon.png")
  ],
  module: {
    rules: [
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "src/assets/[hash].[ext]" }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,

        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties"
            ],
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
