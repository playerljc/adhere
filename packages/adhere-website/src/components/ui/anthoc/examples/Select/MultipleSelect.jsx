import React from 'react';

import { MultipleSelect } from '@baifendian/adhere-ui-anthoc';

import styles from '../Cascader/index.less';

export default () => {
  return (
    <MultipleSelect
      placeholder="Select"
      className={styles.Wrapper}
      options={[
        {
          label: '男',
          value: '2',
        },
        {
          label: '女',
          value: '1',
        },
      ]}
    />
  );
};
