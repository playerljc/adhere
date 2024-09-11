import { Button } from 'antd-mobile';
import React, { useState } from 'react';

import { MobileSpin } from '@baifendian/adhere';

import styles from './p1.less';

export default () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          setLoading(!loading);
        }}
      >
        {loading ? '取消' : '开启'}
      </Button>

      <div className={styles.Wrapper}>
        <MobileSpin spinning={loading} />
      </div>
    </div>
  );
};
