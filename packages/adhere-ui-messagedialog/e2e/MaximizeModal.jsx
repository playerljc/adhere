import { Button, Result } from 'antd';
import React from 'react';

import MessageDialog from '../src';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        const { close } = MessageDialog.MaximizeModal({
          config: {
            title: '提示',
          },
          defaultCloseBtn: false,
          children: (
            <Result
              title="Your operation has been executed"
              extra={
                <Button
                  type="primary"
                  key="console"
                  onClick={() => {
                    close();
                  }}
                >
                  Close
                </Button>
              }
            />
          ),
        });
      }}
    >
      Open MaximizeModal
    </Button>
  );
};
