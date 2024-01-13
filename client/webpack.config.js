const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

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
    plugins: [
      // new WorkboxPlugin.GenerateSW(),

      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE'
      }),

      new WebpackPwaManifest({
        name: 'JATE',
        short_name: 'JATE',
        description: "Just Another Text Editor",
        background_color: '#1fd4d4',
        theme_color: '#1fd4d4',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),

            // The sizes specified in this property will be output in the folder set in the destination property.
            sizes: [96, 128, 192, 256, 384, 512],

            // The directory names were created to match the code included within the html document's image source attributes.
            destination: path.join('assets', 'icons')
          }
        ]
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            // keep original filenames and copy images to `dist/img/`
            filename: 'assets/icons/logo.png', 
          },
        }
      ],
    },
  };
};
