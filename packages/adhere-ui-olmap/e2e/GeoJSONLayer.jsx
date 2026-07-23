import { Button } from 'antd';
import React, { useRef } from 'react';

import XinBei from '@baifendian/adhere-util-resource/resource/gis/geoJson/China/320000/320400.json';

import { OLMap } from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * GeoJSONLayer
 * @description addMainGeoJSONLayer 添加行政区 GeoJSON
 */
export default () => {
  const mapRef = useRef();

  return (
    <div className="Wrap">
      <div className="Toolbar">
        <Button
          type="primary"
          onClick={() => {
            mapRef.current?.addMainGeoJSONLayer?.({
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
          添加新北区 GeoJSONLayer
        </Button>
      </div>
      <OLMap ref={mapRef} style={{ height: '100%' }} />
    </div>
  );
};
