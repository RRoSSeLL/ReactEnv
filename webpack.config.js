const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      root: path.resolve(__dirname),
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'React Dev Env',
      template: './template/template.html',
      inject: 'head',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-react', { runtime: 'automatic' }]],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/i,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
              declaration: env.development ? true : false,
            },
          },
        },
      },
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/[hash][ext]',
        },
      },
      {
        test: /.svg$/i,
        type: 'asset/inline',
      },
    ],
  },
  devtool: env.development ? 'inline-source-map' : false,
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    static: ['./src/assets', './dist/assets'],
  },
});