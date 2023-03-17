/**
 * 业务可以是A-B-C的方式
 common-{业务}-font-size
 common-{业务}-box-shadow
 common-{业务}-background-color
 */

const commonVars = {
  // block背景色
  '@common-block-background-color': '#fff',
  // menu
  '@common-menu-background-color': '#071b28',
  '@common-menu-split-color': '#13927D',

  // 对adhere的全局变量进行重写
  '@adhere-primary-color': '#1890ff',
};

module.exports = commonVars;
