import { Tabs } from 'antd';
import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Basic from './Basic';
import InsertGroup from './InsertGroup';
import ScrollByColumn from './ScrollByColumn';
import ScrollByIndex from './ScrollByIndex';

import './index.less';

/**
 * CascadeCompared E2E 示例入口
 * - 基本使用
 * - 在底部插入
 * - 通过索引滚动
 * - 滚动到指定列
 */
e2e.PC({
  children: (
    <div className="CascadeComparedE2E">
      <Tabs
        defaultActiveKey="Basic"
        items={[
          {
            key: 'Basic',
            label: '基本使用',
            children: <Basic />,
          },
          {
            key: 'InsertGroup',
            label: '在底部插入',
            children: <InsertGroup />,
          },
          {
            key: 'ScrollByIndex',
            label: '通过索引滚动',
            children: <ScrollByIndex />,
          },
          {
            key: 'ScrollByColumn',
            label: '滚动到指定列',
            children: <ScrollByColumn />,
          },
        ]}
      />
    </div>
  ),
});
