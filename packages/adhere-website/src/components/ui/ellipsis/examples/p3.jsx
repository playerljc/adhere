import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

import styles from './examples.less';

export default () => (
  <div className={styles.Wrapper} style={{ position: 'relative', border: '1px solid #ccc' }}>
    <Ellipsis wrap={true} wrapLines={2} isUseNativeTooltip={false}>
      React 是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是
    </Ellipsis>
  </div>
);
