const postcssPresetEnv = require('postcss-preset-env');
const postcssRTLCSS = require('postcss-rtlcss');
const postcssPxToRem = require('postcss-pxtorem');

/**
 * isUseMedia
 * @description 是否使用媒体
 * @return {boolean}
 */
function isUseMedia() {
  return process.env.media === 'true';
}

const plugins = [
  require('autoprefixer'),
  postcssPresetEnv({
    stage: 4,
  }),
  postcssRTLCSS({}),
  isUseMedia() &&
    postcssPxToRem({
      rootValue: 192,
      propList: ['*'],
      // 不排除第三方库
      // exclude: /node_modules/i,
    }),
].filter((c) => !!c);

module.exports = {
  plugins,
};
