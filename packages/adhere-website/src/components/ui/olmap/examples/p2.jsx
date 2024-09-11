import { Button } from 'antd';
import React, { useRef } from 'react';

import { OLMap } from '@baifendian/adhere';
import XinBei from '@baifendian/adhere-util-resource/resource/gis/geoJson/China/320000/320400.json';

import styles from './examples.less';

export default () => {
  const xbqRef = useRef();

  return (
    <div className={styles.Wrapper}>
      <Button
        type="primary"
        className={styles.Button}
        onClick={() => {
          xbqRef.current.addMainGeoJSONLayer({
            geoJSONStyle: {
              stroke: {
                color: 'rgb(30,144,255)',
                width: 3,
                lineDash: [1, 2, 3, 4, 5, 6],
              },
              fill: {
                color: 'rgba(30,144,255,0.1)',
              },
              text: {
                textAlign: 'center',
                color: '#000',
                font: '26px sans-serif',
                text: '新北区',
              },
            },
            geoJSONData: XinBei.features[2],
          });
        }}
      >
        添加新北区的GeoJSONLayer
      </Button>

      <OLMap.OLMap ref={xbqRef} />
    </div>
  );
};
