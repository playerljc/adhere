import React from 'react';

import Windmill from './Windmill';

import styles from './manifest.less';

export default [
  {
    title: '风车圆盘图',
    keyword: '风车圆盘图',
    component: (
      <div className={styles.Wrapper}>
        <Windmill lineColor="#fff" />
      </div>
    ),
  },
];
