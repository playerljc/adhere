import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import DictConfig from '@/dict/dict.config';

import Test from './test';

import './index.less';

// 配置字典
DictConfig();

e2e.PC({
  children: <Test />,
});
