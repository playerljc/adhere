import { Button } from 'antd';
import React from 'react';

import { Emitter } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  return (
    <>
      <Button
        className={styles.Button}
        onClick={() => {
          Emitter.on('type2', (params) => {
            alert(params);
          });

          alert('注册成功');
        }}
      >
        注册通知
      </Button>
      <Button
        onClick={() => {
          Emitter.trigger('type2', 'Hello World');
        }}
      >
        发出通知
      </Button>
    </>
  );
};
