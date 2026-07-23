import React, { useMemo, useState } from 'react';

import {
  WINDOW_RESIZE,
  antdNumberTokenToRem,
  getMediaQueryByBreakPoints,
  isInBetween,
} from '../src/index';
import { breakPoints } from './breakPoints';
import { useResizeBridge } from './useResizeBridge';

/**
 * 工具函数：isInBetween / getMediaQueryByBreakPoints / antdNumberTokenToRem / WINDOW_RESIZE
 */
export default () => {
  const windowWidth = useResizeBridge();
  const [mockWidth, setMockWidth] = useState(800);

  const mediaQuery = getMediaQueryByBreakPoints(breakPoints);

  const inTablet = isInBetween({
    breakpoint: breakPoints.tablet,
    width: mockWidth,
  });

  const remToken = useMemo(
    () =>
      antdNumberTokenToRem(
        {
          fontSize: 14,
          borderRadius: 6,
          padding: 16,
          controlHeight: 32,
          colorPrimary: '#1677ff',
        },
        16,
        14,
      ),
    [],
  );

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>真实窗口宽度：{windowWidth}px</p>

      <p>
        模拟宽度（仅用于 isInBetween）：
        <input
          type="range"
          min={320}
          max={1600}
          value={mockWidth}
          onChange={(e) => setMockWidth(Number(e.target.value))}
          style={{ width: 240, margin: '0 8px' }}
        />
        {mockWidth}px
      </p>

      <h4>isInBetween(tablet, {mockWidth})</h4>
      <pre style={{ background: '#f5f5f5', padding: 12 }}>{String(inTablet)}</pre>

      <h4>getMediaQueryByBreakPoints（基于 window.innerWidth）</h4>
      <pre style={{ background: '#f5f5f5', padding: 12 }}>{JSON.stringify(mediaQuery, null, 2)}</pre>

      <h4>antdNumberTokenToRem(token, 16, 14)</h4>
      <pre style={{ background: '#f5f5f5', padding: 12 }}>{JSON.stringify(remToken, null, 2)}</pre>

      <h4>WINDOW_RESIZE</h4>
      <code>{WINDOW_RESIZE}</code>
    </div>
  );
};
