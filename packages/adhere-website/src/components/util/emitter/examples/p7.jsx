import { Button } from 'antd';
import React from 'react';

import { Emitter } from '@baifendian/adhere';

export default () => {
  return (
    <>
      <Button
        style={{ marginRight: 20 }}
        onClick={() => {
          Emitter.on('type10', () => {
            alert('type10');
          });
        }}
      >
        注册通知
      </Button>
      <Button
        onClick={() => {
          const fun = Emitter.count('type10', 2, () => {
            alert('type10 - called 2');
          });

          Emitter.trigger('type10');
          Emitter.trigger('type10');
        }}
      >
        发出通知并监控
      </Button>
    </>
  );
};
