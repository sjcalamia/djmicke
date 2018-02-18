'use strict';

const BROWSERS = ['> 1%', 'last 1 versions', 'Firefox 57', 'edge 15'];

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              // We need to transpile Polymer itself and other ES6 code
              // exclude: /(node_modules)/,
             exclude: ['/node_modules/'],
             presets: [[
               '@babel/preset-env',
               {
                 targets: {
                   "chrome": 60,
                   "firefox": 58,
                   "edge": 15,
                   "ios": 10,
                   browsers: BROWSERS},
                 debug: true
               }
             ]],
             plugins: [['@babel/plugin-proposal-object-rest-spread', {useBuiltIns: true}]]
            }
          }
        }
      ]
    }
  };
};
