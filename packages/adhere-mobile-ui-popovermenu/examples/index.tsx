import React from 'react';
import { Tabs } from 'antd-mobile';
import BasicExample from './basic';
import AdvancedExample from './advanced';

/**
 * 示例页面
 */
const Examples: React.FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <h2>PopoverMenu 组件示例</h2>
      <Tabs>
        <Tabs.Tab title="基础用法" key="basic">
          <BasicExample />
        </Tabs.Tab>
        <Tabs.Tab title="高级用法" key="advanced">
          <AdvancedExample />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Examples; 