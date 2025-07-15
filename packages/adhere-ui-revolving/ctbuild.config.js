const path = require('path');

/**
 * Revolving 组件构建配置
 * 配置 webpack 以支持 Swiper 样式和模块解析
 */
module.exports = {
  /**
   * 获取 webpack 配置
   * @param {Object} params - 配置参数
   * @param {Object} params.webpackConfig - webpack 配置对象
   */
  getConfig({ webpackConfig }) {
    // 添加 Swiper CSS 文件支持
    webpackConfig.module.rules[2].include.push(/swiper.css/);
    
    // 添加模块解析路径，优先使用根目录的 node_modules
    webpackConfig.resolve.modules.unshift(path.join(__dirname, '../../node_modules'));
  },
};
