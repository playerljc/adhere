const postcssPresetEnv = require('postcss-preset-env');
const postcssRTLCSS = require('postcss-rtlcss');
const postcssPxToRem = require('postcss-pxtorem');

const plugins = [
  require('autoprefixer'),
  postcssPresetEnv({
    stage: 4,
  }),
  postcssRTLCSS({}),
  postcssPxToRem({
    rootValue: 37.5,
    propList: ['*'],
    // 不排除第三方库
    // exclude: /node_modules/i,
  }),
];

module.exports = {
  plugins,
};
