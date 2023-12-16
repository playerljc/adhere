import { Button } from 'antd';
import React from 'react';

import { Emitter } from '@baifendian/adhere';

export default () => {
  return (
    <>
      <Button
        style={{ marginRight: 20 }}
        onClick={() => {
          Emitter.once('type4', () => {
            alert('type4');
          });

          Emitter.once('type5', () => {
            alert('type5');
          });

          Emitter.once('type6', () => {
            alert('type6');
          });
        }}
      >
        注册通知
      </Button>
      <Button
        onClick={() => {
          const fun = Emitter.all(['type4', 'type5', 'type6'], () => {
            alert('type4,type5,type6 - changed');
          });

          Emitter.trigger('type4');
          Emitter.trigger('type5');
          Emitter.trigger('type6');
        }}
      >
        发出通知并监控
      </Button>
    </>
  );
};
