import React from 'react';

import MediaQuery, { useMediaQuery } from '../src/index';
import { breakPoints } from './breakPoints';
import { useResizeBridge } from './useResizeBridge';

/**
 * useMediaQuery / MediaQuery.useMediaQuery
 */
export default () => {
  const width = useResizeBridge();

  const mediaQuery = useMediaQuery(breakPoints);
  const mediaQueryFromStatic = MediaQuery.useMediaQuery(breakPoints);

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>窗口宽度：{width}px</p>

      <h4>useMediaQuery</h4>
      <pre style={{ background: '#f5f5f5', padding: 12 }}>{JSON.stringify(mediaQuery, null, 2)}</pre>

      <div>
        {mediaQuery.isMobile && <div style={{ padding: 8, background: '#e6f4ff' }}>移动端</div>}
        {mediaQuery.isTablet && <div style={{ padding: 8, background: '#f6ffed' }}>平板端</div>}
        {mediaQuery.isDesktop && <div style={{ padding: 8, background: '#fff7e6' }}>桌面端</div>}
      </div>

      <h4 style={{ marginTop: 24 }}>MediaQuery.useMediaQuery</h4>
      <pre style={{ background: '#f5f5f5', padding: 12 }}>
        {JSON.stringify(mediaQueryFromStatic, null, 2)}
      </pre>
    </div>
  );
};
