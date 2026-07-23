import { Button, Space } from 'antd';
import React from 'react';

import MessageDialog from '../src';

/**
 * allowMultipleInstances
 * @description 演示是否允许多实例共存
 */
export default () => {
  return (
    <Space>
      <Button
        onClick={() => {
          MessageDialog.allowMultipleInstances(false);
        }}
      >
        禁止多实例
      </Button>
      <Button
        onClick={() => {
          MessageDialog.allowMultipleInstances(true);
        }}
      >
        允许多实例
      </Button>
      <Button
        type="primary"
        onClick={() => {
          MessageDialog.Alert({
            title: '提示',
            text: '连续点击可验证多实例限制',
            width: 300,
            local: 'zh_CN',
          });
        }}
      >
        Open Alert
      </Button>
    </Space>
  );
};
