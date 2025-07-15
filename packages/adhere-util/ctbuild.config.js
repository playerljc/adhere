/**
 * CtBuild 配置文件
 * @description 配置 webpack 构建参数
 */
const path = require('path');

module.exports = {
  /**
   * 获取 webpack 配置
   * @param {Object} params - 配置参数
   * @param {Object} params.webpackConfig - webpack 配置对象
   */
  getConfig({ webpackConfig }) {
    // 设置入口文件
    webpackConfig.entry = {
      index: path.join(__dirname, 'src', 'index.ts'),
    };

    // 添加模块解析路径
    webpackConfig.resolve.modules.unshift(path.join(__dirname, '../../node_modules'));
  },
};
