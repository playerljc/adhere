import { Button } from 'antd';
import React from 'react';

import { MessageDialog } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        const { setConfig } = MessageDialog.Modal({
          config: {
            title: '提示',
            width: '50%',
          },
          defaultCloseBtn: false,
          children: (
            <div>
              <button
                onClick={() => {
                  setConfig((currentModalConfig) => {
                    currentModalConfig.title = 'custom';
                    currentModalConfig.width = '30%';
                  });
                }}
              >
                设置标题为custom，宽度变成30%
              </button>
            </div>
          ),
        });
      }}
    >
      Open Modal
    </Button>
  );
};
