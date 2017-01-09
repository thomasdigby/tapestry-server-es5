import path from 'path'
// import webpackCleanPlugin from 'clean-webpack-plugin'

export default (context) => ({
  resolve: {
    modules: ['node_modules', context]
  },
  entry: 'dev/tapestry/dist/client.js',
  output: {
    path: path.resolve(context, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
})
