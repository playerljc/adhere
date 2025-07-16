import React from 'react';

import { MobileTabs } from '@baifendian/adhere';

const { SideTabs } = MobileTabs;

export default () => {
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <SideTabs
      activeKey={activeKey}
      onChange={setActiveKey}
      items={Array.from({ length: 6 })
        .fill(0)
        .map((item, _index) => ({
          key: `${_index + 1}`,
          title: `选项卡${_index + 1}`,
          children: <div>{_index + 1}</div>,
        }))}
    />
  );
};
