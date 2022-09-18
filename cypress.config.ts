import { defineConfig } from 'cypress';
const path = require('path');

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: {
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
              use: 'ts-loader',
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
        devServer: {
          port: 9000,
          compress: true,
          hot: true,
          static: ['./src/assets', './dist/assets'],
        },
      }
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './reports/individual/',
    reportFilename: '[name]',
    toConsole: true,
  },
  video: false,
  viewportHeight: 800,
  viewportWidth: 1000,
});
