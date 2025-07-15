import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Bottom from './bottom';
import Delay from './delay';
import Left from './left';
import Right from './right';
import Speed from './speed';
import Top from './top';

import './index.less';

/**
 * Revolving 组件 E2E 测试入口
 * 展示不同方向的轮播图效果
 */
e2e.PC({
  children: <Delay />,
});
