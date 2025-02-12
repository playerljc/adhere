import React from 'react';

import { DatePicker } from '@baifendian/adhere-ui-anthoc';

import styles from './index.less';

export default () => (
  <DatePicker
    // style={{
    //   width: 200,
    // }}
    className={styles.Wrapper}
    showTime
    onChange={(value, dateString) => {
      console.log(value, dateString);
    }}
  />
);
