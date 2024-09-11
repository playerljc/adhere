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
