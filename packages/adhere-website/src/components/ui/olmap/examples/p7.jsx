import { Button } from 'antd';
import React, { useRef } from 'react';

import { OLMap } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  const windRef = useRef();

  return (
    <div className={styles.Wrapper}>
      <Button
        type="primary"
        className={styles.Button}
        onClick={() => {
          windRef.current.addWindLayer();
        }}
      >
        添加风场Layer
      </Button>

      <OLMap.OLMap zoom={5} ref={windRef} />
    </div>
  );
};
