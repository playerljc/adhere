import { Tabs } from 'antd';
import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import P1 from './p1';
import P2 from './p2';
import P3 from './p3';
import P4 from './p4';

import './index.less';

/**
 * ContourBlock E2E 示例入口
 * - 基本使用
 * - 画廊
 * - Ratio 按宽度计算高度
 * - Ratio 按高度计算宽度
 */
e2e.PC({
  children: (
    <div className="ContourBlockE2E">
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
            label: '画廊',
            children: <P2 />,
          },
          {
            key: 'p3',
            label: 'Ratio(按宽算高)',
            children: <P3 />,
          },
          {
            key: 'p4',
            label: 'Ratio(按高算宽)',
            children: <P4 />,
          },
        ]}
      />
    </div>
  ),
});
