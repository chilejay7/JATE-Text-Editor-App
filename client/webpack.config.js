const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },
    output: {
      // Sets the name of the output file and the directory where the bundle will be saved.
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),

      // The clean property has been added and set to true in order to remove files from previous builds performed during testing and maintain a cleaner
      // code base for future development.
      clean: true,
    },
    devServer: {
      // This enables the hot module replacement API to allow changes to the front-end without a full page reload.
      hot: 'only',
    },
    plugins: [
      // This injects the specified assets into the service worker file.  Both files will use the same name.
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: './src-sw.js'
      }),

      // This plugin includes the HTML file in the bundle and provides the path to the file as well as the favicon.
      // The title of the application is set 
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE',
        favicon: './favicon.ico'
      }),

      // This plugin extracts the CSS into separate files instead of bundling it with other JavaScript files.
      // The rules are further defined below.
      new MiniCssExtractPlugin(),

      // This plugin is required to generate the manifest for the application and provide metadata to the browser.
      // The manifest file and its information can be found in the Application module of the dev tools in the browser.
      new WebpackPwaManifest({
        name: 'JATE',
        short_name: 'JATE',
        description: "Just Another Text Editor",
        background_color: '#1fd4d4',
        theme_color: '#1fd4d4',
        start_url: './',
        publicPath: './',
        // This property avoids a hash being added to the filename when bundled.  The name was causing an error related to the icon files in the navbar.
        fingerprints: false,

        // This property is required for installation.  Other options such as "fullscreen" can also be used.
        display: 'standalone',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),

            // The sizes specified in this property will be output in the folder set in the destination property.
            // The 144 size icon is required for installation.
            sizes: [96, 128, 144, 192, 256, 384, 512],

            // The directory names were created to match the code included within the html document's image source attributes.
            destination: path.join('assets', 'icons'),

            // The purpose property is not required, but has to be set to "any" to allow for installation if included.
            purpose: 'any',
          },
        ]
      }),
    ],

    module: {
      rules: [
        {
          // This tests for all files with a .css extension.
          // The mini css extract plugin separates the css files instead of budnling within js file for better application performance.
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
