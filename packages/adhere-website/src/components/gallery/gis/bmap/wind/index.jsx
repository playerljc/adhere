import React, { useEffect, useRef } from 'react';

import styles from './index.less';

function Wind() {
  const ref = useRef();

  const map = useRef();

  useEffect(() => {
    map.current = new BMap.Map(ref.current, {
      enableMapClick: false,
      minZoom: 2,
      maxZoom: 20,
      enableHighResolution: true,
      enableAutoResize: true,
    });
  }, []);

  return <div className={styles.Wrap} ref={ref} />;
}

export default Wind;
