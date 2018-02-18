'use strict';

const {resolve} = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputPath = resolve('dist');
const IS_DEV_SERVER = process.argv.find(arg => arg.includes('webpack-dev-server'));

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          // We need to transpile Polymer itself and other ES6 code
          // exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              exclude: ['/node_modules/'],
              presets: [[
                '@babel/preset-env',
                {
                  targets: {
                    "chrome": 60,
                    "firefox": 58,
                    "edge": 15,
                    "ios": 9,
                    browsers: ['last 2 versions']},
                  debug: true
                }
              ]],
              plugins: [['@babel/plugin-proposal-object-rest-spread', {useBuiltIns: true}]]
            }
          }
        }
      ]
    },
    plugins: IS_DEV_SERVER ? [] : [
      new CleanWebpackPlugin([outputPath], {verbose: true})
    ]
  };
};
