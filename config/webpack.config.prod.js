const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/[name]-[contenthash].js',
    path: path.resolve(__dirname, '../', 'build')
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            }
          },
          'sass-loader']
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name][contenthash:6].[ext]',
            outputPath: 'images',
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              quality: 70,
              progressive: true
            }
          }
        }
        ]

      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: 'usage', corejs: "2.0.0" }]
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({         
      template: "src/templates/template.html",
      title: "Kurtyny Paskowe PCV Rewako",
      minify: {
        collapseWhitespace: true
      }     
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: 'src/templates/contact.html',
      title: "Kurtyny PCV Rewako - Kontakt",
      minify: {
        collapseWhitespace: true
      }     
    }),
    new HtmlWebpackPlugin({
      filename: 'strip-courtains.html',
      template: 'src/templates/strip-courtains.html',
      title: "Dobór i Montaż Kurtyny Paskowej Rewako",
      minify: {
        collapseWhitespace: true
      }     
    }),
    new HtmlWebpackPlugin({    
      filename: 'template.html',  
      template: "src/templates/template.html",
      title: "Kurtyny Paskowe PCV Rewako",
      minify: {
        collapseWhitespace: true
      }     
    }),
    new HtmlWebpackPlugin({
      filename: 'sliding-courtains.html',
      template: 'src/templates/sliding-courtains.html',
      title: "Kurtyny przesuwne PCV Rewako",
      minify: {
        collapseWhitespace: true
      }     
    }),    
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new CopyPlugin(
      [
        {
          from: 'public/images',
          to: 'images'
        }
      ]
    )
  ]
}
