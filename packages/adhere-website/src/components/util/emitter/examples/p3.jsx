import { Button } from 'antd';
import React from 'react';

import { Emitter } from '@baifendian/adhere';

export default () => {
  return (
    <>
      <Button
        style={{ marginRight: 20 }}
        onClick={() => {
          document.addEventListener('customType', (e) => {
            alert(JSON.stringify(e.detail));
          });

          alert('注册成功');
        }}
      >
        注册通知
      </Button>
      <Button
        onClick={() => {
          Emitter.dispatchEvent(document, 'customType', {
            detail: {
              hazcheeseburger: true,
            },
          });
        }}
      >
        发出通知
      </Button>
    </>
  );
};
