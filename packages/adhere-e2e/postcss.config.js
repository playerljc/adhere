const postcssPresetEnv = require('postcss-preset-env');
const postcssRTLCSS = require('postcss-rtlcss');
const postcssPxToRem = require('postcss-pxtorem');

/**
 * isMobile
 * @description 是否是移动端模式
 * @return {boolean}
 */
function isMobile() {
  return process.env.mobile === 'true';
}

/**
 * getDesignWidth
 * @description 获取设计稿大小
 * @return {number}
 */
function getDesignWidth() {
  // 移动端使用375为基准
  if (isMobile()) {
    return 37.5;
  }
  // PC端使用1920为基准
  else {
    return 192;
  }
}

const plugins = [
  // 自动前缀
  require('autoprefixer'),
  // presetEnt
  postcssPresetEnv({
    stage: 4,
  }),
  // 网页方向设置
  // postcssRTLCSS({}),
  // px to rem(现在默认就加入，之前是移动端才加入)
  postcssPxToRem({
    rootValue: getDesignWidth(),
    propList: ['*'],
    // 不排除第三方库
    // exclude: /node_modules/i,
  }),
];

module.exports = {
  plugins,
};
