import React, { useState } from 'react';

import { Tabs } from '../../src';

export default () => {
  const [activeKey, setActiveKey] = useState('1');

  const items = Array.from({ length: 12 }, (_, i) => {
    const id = String(i + 1);
    return {
      key: id,
      label: `Long Tab Label ${id}`,
      children: <div style={{ padding: 16 }}>Content of Tab {id}</div>,
    };
  });

  return (
    <div style={{ padding: 24, width: 420 }}>
      <Tabs.SegmentedTabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={items}
        centered
        size="small"
        tabBarSwiperProps={{
          spaceBetween: 8,
          freeMode: {
            sticky: true,
          },
        }}
      />
    </div>
  );
};
