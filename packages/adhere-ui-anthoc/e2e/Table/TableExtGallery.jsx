import { Tabs } from 'antd';
import React, { useState } from 'react';

import TableExt from './TableExt';
import TableExtVirtual from './TableExtVirtual';
import TableExtVirtualHeaderGroup from './TableExtVirtualHeaderGroup';
import TableExtVirtualTree from './TableExtVirtualTree';

/**
 * TableExt 示例集合：基础 / 虚拟滚动 / 树形 / 表头分组
 */
export default () => {
  const [activeKey, setActiveKey] = useState('virtual');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={[
          { key: 'base', label: '基础 TableExt' },
          { key: 'virtual', label: '虚拟滚动 width:{}' },
          { key: 'tree', label: '树形 children' },
          { key: 'headerGroup', label: '表头分组' },
        ]}
        style={{ marginBottom: 0, padding: '0 16px' }}
      />
      <div style={{ flex: 1, minHeight: 0 }}>
        {activeKey === 'base' && <TableExt />}
        {activeKey === 'virtual' && <TableExtVirtual />}
        {activeKey === 'tree' && <TableExtVirtualTree />}
        {activeKey === 'headerGroup' && <TableExtVirtualHeaderGroup />}
      </div>
    </div>
  );
};
