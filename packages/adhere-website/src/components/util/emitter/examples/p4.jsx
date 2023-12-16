import { Button } from 'antd';
import React from 'react';

import { Emitter } from '@baifendian/adhere';

export default () => {
  return (
    <>
      <Button
        style={{ marginRight: 20 }}
        onClick={() => {
          Emitter.once('type3', () => {
            alert('type3');
          });

          Emitter.once('type3', () => {
            alert('type3');
          });
        }}
      >
        注册通知
      </Button>
      <Button
        onClick={() => {
          Emitter.trigger('type3');
        }}
      >
        发出通知
      </Button>
    </>
  );
};
