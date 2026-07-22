import React, { useState } from 'react';

import { Tabs } from '../../src';

export default () => {
  const [activeKey, setActiveKey] = useState('1');

  return (
    <div style={{ padding: 24 }}>
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={[
          {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1',
          },
          {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
          },
          {
            key: '3',
            label: 'Tab 3 (disabled)',
            disabled: true,
            children: 'Content of Tab Pane 3',
          },
        ]}
        tabBarExtraContent={<a>Extra</a>}
      />
    </div>
  );
};
