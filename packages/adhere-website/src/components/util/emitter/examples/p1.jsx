import { Button } from 'antd';
import React, { useRef } from 'react';

import { Emitter } from '@baifendian/adhere';

export default () => {
  const handler1 = useRef();

  return (
    <>
      <Button
        style={{ marginRight: 20 }}
        onClick={() => {
          if (handler1.current) {
            Emitter.remove('type1', handler1.current);
          }

          handler1.current = () => {
            alert('接到了通知');
          };

          Emitter.on('type1', handler1.current);

          alert('注册成功');
        }}
      >
        注册通知
      </Button>
      <Button
        onClick={() => {
          if (!handler1.current) {
            alert('还没有注册事件');

            return;
          }

          Emitter.trigger('type1');
        }}
      >
        发出通知
      </Button>
    </>
  );
};
