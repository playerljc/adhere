/**
 * 移动端快速日期范围选择器 E2E 测试入口
 * 用于组件功能测试和演示
 */

import React from 'react';

import e2e from '@baifendian/adhere-e2e';

// 导入测试组件
// import Custom from './Custom';    // 自定义配置测试
// import Form from './Form';        // 表单集成测试
import Normal from './Normal';      // 基础功能测试

// 导入样式
import '@baifendian/adhere-e2e/es/index.less';
// import './index.less';           // 自定义样式（如需要）

/**
 * 启动移动端 E2E 测试
 * 使用基础功能测试组件作为默认测试用例
 */
e2e.Mobile({
  children: <Normal />,
});
