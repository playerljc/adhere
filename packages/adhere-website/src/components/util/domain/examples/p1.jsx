import { Button } from 'antd';
import React, { useRef } from 'react';

import { Domain } from '@baifendian/adhere';

import styles from '../index.less';

export default () => {
  const console1Ref = useRef();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          const d = Domain.create();

          d.on('error', function (e) {
            const content = console1Ref.current.innerHTML;
            console1Ref.current.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;
            console1Ref.current.scrollTop =
              console1Ref.current.scrollHeight - console1Ref.current.offsetHeight;
          });

          d.run(function () {
            noexists();
          });
        }}
      >
        运行
      </Button>
      <div className={styles.Console} ref={console1Ref}></div>
    </>
  );
};
