import { Radio } from 'antd';
import React, { useRef } from 'react';

import { OLMap, TitleLayer } from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * TitleLayerSwitch
 * @description 切换底图 Source（OSM / XYZ 示例占位 URL）
 */
export default () => {
  const mapRef = useRef();

  return (
    <div className="Wrap">
      <div className="Toolbar">
        <Radio.Group
          defaultValue="OSM"
          onChange={(e) => {
            const value = e.target.value;
            const tileLayer = mapRef.current?.getMap?.()?.getLayers?.()?.item?.(0);
            if (!tileLayer) return;

            if (value === 'OSM') {
              tileLayer.setSource(TitleLayer.getOSM());
            } else if (value === 'XYZ') {
              tileLayer.setSource(
                TitleLayer.getXYZ({
                  url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                }),
              );
            }
          }}
        >
          <Radio.Button value="OSM">OSM</Radio.Button>
          <Radio.Button value="XYZ">XYZ(OSM tiles)</Radio.Button>
        </Radio.Group>
      </div>
      <OLMap ref={mapRef} style={{ height: '100%' }} />
    </div>
  );
};
