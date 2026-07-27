import { Tabs } from 'antd';
import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Basic from './Basic';
import Gallery from './Gallery';
import RatioByHeight from './RatioByHeight';
import RatioByWidth from './RatioByWidth';

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
        defaultActiveKey="Basic"
        items={[
          {
            key: 'Basic',
            label: '基本使用',
            children: <Basic />,
          },
          {
            key: 'Gallery',
            label: '画廊',
            children: <Gallery />,
          },
          {
            key: 'RatioByWidth',
            label: 'Ratio(按宽算高)',
            children: <RatioByWidth />,
          },
          {
            key: 'RatioByHeight',
            label: 'Ratio(按高算宽)',
            children: <RatioByHeight />,
          },
        ]}
      />
    </div>
  ),
});
