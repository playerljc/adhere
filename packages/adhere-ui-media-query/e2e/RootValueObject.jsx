import React from 'react';

import MediaQuery from '../src/index';
import { useResizeBridge } from './useResizeBridge';

const breakPoints = {
  mobile: {
    minWidth: 0,
    maxWidth: 767,
    rootValue: {
      '1x': 16,
      '2x': 32,
    },
    designWidth: 375,
  },
  desktop: {
    minWidth: 768,
    maxWidth: Number.MAX_VALUE,
    rootValue: {
      '1x': 16,
      '2x': 32,
    },
    designWidth: 1920,
  },
};

/**
 * rootValue 为 { 1x, 2x } 对象形式
 */
export default () => {
  const width = useResizeBridge();

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>窗口宽度：{width}px</p>

      <MediaQuery breakPoints={breakPoints} breakPoint="mobile" noMatch={() => <div>非 mobile</div>}>
        <div style={{ padding: 12, background: '#e6f4ff' }}>
          mobile（rootValue: {'{'} 1x: 16, 2x: 32 {'}'}）
        </div>
      </MediaQuery>

      <MediaQuery breakPoints={breakPoints} breakPoint="desktop" noMatch={() => <div>非 desktop</div>}>
        <div style={{ padding: 12, background: '#fff7e6' }}>
          desktop（rootValue: {'{'} 1x: 16, 2x: 32 {'}'}）
        </div>
      </MediaQuery>
    </div>
  );
};
