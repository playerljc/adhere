import React from 'react';

import PlayGroundLib from '../src/index';

import '../src/index.less';

const { AnchorNavigation } = PlayGroundLib;

/**
 * AnchorNavigationDemo
 * @description 锚点导航面板
 */
export default () => {
  return (
    <div style={{ height: 480, padding: 24 }}>
      <AnchorNavigation
        style={{ height: '100%' }}
        anchors={[
          { name: '简介', anchor: 'intro' },
          { name: '示例', anchor: 'demo' },
          { name: 'API', anchor: 'api' },
        ]}
        activeAnchor="intro"
        anchorPosition={{ top: 0, width: 100 }}
      >
        <div id="intro" style={{ height: 200, background: '#e6f4ff', marginBottom: 16, padding: 16 }}>
          简介
        </div>
        <div id="demo" style={{ height: 200, background: '#f6ffed', marginBottom: 16, padding: 16 }}>
          示例
        </div>
        <div id="api" style={{ height: 200, background: '#fff7e6', padding: 16 }}>
          API
        </div>
      </AnchorNavigation>
    </div>
  );
};
