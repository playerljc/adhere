import { Button } from 'antd';
import React, { useRef } from 'react';

import { Domain } from '@baifendian/adhere';

import styles from '../index.less';

export default () => {
  const console2Ref = useRef();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          const d = Domain.create();

          d.on('error', function (e) {
            const content = console2Ref.current.innerHTML;
            console2Ref.current.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;
            console2Ref.current.scrollTop =
              console2Ref.current.scrollHeight - console2Ref.current.offsetHeight;
          });

          function run() {
            return new Promise(
              d.bind((resolve) => {
                noexists();
                resolve();
              }),
            );
          }

          run();
        }}
      >
        运行
      </Button>
      <div className={styles.Console} ref={console2Ref}></div>
    </>
  );
};
