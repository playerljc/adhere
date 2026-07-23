import React from 'react';

import MediaQuery from '../src/index';
import { breakPoints } from './breakPoints';
import { useResizeBridge } from './useResizeBridge';

/**
 * MediaQuery 组件：按断点显示内容 + noMatch
 */
export default () => {
  const width = useResizeBridge();

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>当前窗口宽度：{width}px（拖动窗口查看切换）</p>

      <MediaQuery breakPoints={breakPoints} breakPoint="mobile" noMatch={() => <div>不是移动端</div>}>
        <div style={{ padding: 12, background: '#e6f4ff' }}>移动端内容（≤767）</div>
      </MediaQuery>

      <MediaQuery breakPoints={breakPoints} breakPoint="tablet" noMatch={() => <div>不是平板端</div>}>
        <div style={{ padding: 12, background: '#f6ffed' }}>平板端内容（768~1023）</div>
      </MediaQuery>

      <MediaQuery breakPoints={breakPoints} breakPoint="desktop" noMatch={() => <div>不是桌面端</div>}>
        <div style={{ padding: 12, background: '#fff7e6' }}>桌面端内容（≥1024）</div>
      </MediaQuery>
    </div>
  );
};
