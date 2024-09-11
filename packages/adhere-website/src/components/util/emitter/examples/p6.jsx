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
          Emitter.once('type7', () => {
            alert('type7');
          });

          Emitter.once('type8', () => {
            alert('type8');
          });

          Emitter.once('type9', () => {
            alert('type9');
          });
        }}
      >
        注册通知
      </Button>
      <Button
        onClick={() => {
          const fun = Emitter.race(['type7', 'type8', 'type9'], () => {
            alert('type7,type8,type9 - changed');
          });

          Emitter.trigger('type7');
          Emitter.trigger('type8');
          Emitter.trigger('type9');
        }}
      >
        发出通知并监控
      </Button>
    </>
  );
};
