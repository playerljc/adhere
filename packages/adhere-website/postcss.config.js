const postcssPresetEnv = require('postcss-preset-env');
const postcssRTLCSS = require('postcss-rtlcss');

const plugins = [
  require('autoprefixer'),
  postcssPresetEnv({
    stage: 4,
  }),
  postcssRTLCSS({}),
];

// 如果是移动端
if (process.env.mobile === 'true') {
  plugins.push(
    require('postcss-pxtorem')({
      rootValue: 192,
      propList: ['*'],
      // 不排除第三方库
      // exclude: /node_modules/i,
    }),
  );
}

module.exports = {
  plugins,
};
