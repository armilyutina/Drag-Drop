const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')



const isDev = process.env.NODE_ENV === 'development'

const babelOptions = option => {
  const options = {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if(option){
    options.presets.push(option)
  }

  return options
}


const cssLoaders = extra => {
  const loader = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, 'dist'),
      },
    },
    'css-loader'
  ]

  if ( extra ){
    loader.push(extra)
  }

  return loader
}

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill','./src/trello.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s(a|c)ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node-modules/',
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        },
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
  ],
}
