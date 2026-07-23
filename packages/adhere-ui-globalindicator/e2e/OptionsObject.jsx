import { Button, Space } from 'antd';
import React from 'react';

import GlobalIndicator from '../src';

import '../src/index.less';

/**
 * OptionsObject
 * @description 新版 options 对象写法 + hideAll
 */
export default () => {
  return (
    <div style={{ padding: 24 }}>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            GlobalIndicator.show({
              text: '加载中...',
              size: 'large',
              zIndex: 10000,
            });
          }}
        >
          show(options)
        </Button>
        <Button
          onClick={() => {
            GlobalIndicator.show({ text: '第一个' });
            GlobalIndicator.show({ text: '第二个' });
          }}
        >
          打开多个
        </Button>
        <Button
          danger
          onClick={() => {
            GlobalIndicator.hideAll();
          }}
        >
          hideAll
        </Button>
      </Space>
    </div>
  );
};
