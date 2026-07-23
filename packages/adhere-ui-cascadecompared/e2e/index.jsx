import { Tabs } from 'antd';
import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import P1 from './p1';
import P2 from './p2';
import P3 from './p3';
import P4 from './p4';

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
        defaultActiveKey="p1"
        items={[
          {
            key: 'p1',
            label: '基本使用',
            children: <P1 />,
          },
          {
            key: 'p2',
            label: '在底部插入',
            children: <P2 />,
          },
          {
            key: 'p3',
            label: '通过索引滚动',
            children: <P3 />,
          },
          {
            key: 'p4',
            label: '滚动到指定列',
            children: <P4 />,
          },
        ]}
      />
    </div>
  ),
});
