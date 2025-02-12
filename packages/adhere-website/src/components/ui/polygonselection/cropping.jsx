import React, { useRef, useState } from 'react';

import { PolygonSelection as PolygonSelectionModule } from '@baifendian/adhere';

import styles from './cropping.less';

const { PolygonSelection } = PolygonSelectionModule;

export default () => {
  const [value, setValue] = useState('');

  const ref = useRef();

  return (
    <div>
      <p>图像裁剪</p>
      <div className={styles.Wrap}>
        <PolygonSelection.Cropping
          ref={ref}
          value={value}
          onChange={(v) => setValue(v)}
          maskClassName={styles.MaskWrap}
        />
      </div>
    </div>
  );
};
