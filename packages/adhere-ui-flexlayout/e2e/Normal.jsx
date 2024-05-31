import { Card, Slider } from 'antd';
import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import FlexLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

const { Fixed } = FlexLayout;

export default () => {
  return (
    <FlexLayout
      direction="vertical"
      style={{
        padding: 20,
        height: 500,
      }}
    >
      <FlexLayout.Auto
        style={{
          backgroundColor: 'lightblue',
          padding: 20,
          boxSizing: 'border-box',
          overflowY: 'auto',
        }}
        // isUseNormal
      >
        <p>这个区域的高度将根据内容自动调整。添加更多的内容来测试高度变化。</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
        <p>更多内容...</p>
      </FlexLayout.Auto>

      <FlexLayout.Fixed
        style={{
          backgroundColor: 'lightcoral',
          padding: 20,
          boxSizing: 'border-box',
        }}
      >
        固定高度
      </FlexLayout.Fixed>
    </FlexLayout>
  );
};
