import React from 'react';

import { Revolving } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  return (
    <Revolving
      direction="bottom"
      classNameWrapper={styles.Wrapper}
      items={Array.from({ length: 10 }).map((_, _index) => ({
        key: `${_index + 1}`,
        children: <span>Slide {_index + 1}</span>,
      }))}
    />
  );
};
