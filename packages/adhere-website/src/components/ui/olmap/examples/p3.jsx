import { Radio } from 'antd';
import React, { useRef } from 'react';

import { OLMap } from '@baifendian/adhere';

export default () => {
  const changeRef = useRef();

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Radio.Group
        defaultValue="OSM"
        size="large"
        onChange={(e) => {
          const v = e.target.value;
          const tileLayer = changeRef.current.getMap().getLayers().item(0);

          if (v === 'OSM') {
            tileLayer.setSource(OLMap.TitleLayer.getOSM());
          } else if (v === 'SatGoogleXYZ') {
            tileLayer.setSource(
              OLMap.TitleLayer.getXYZ({
                minZoom: 11,
                maxZoom: 17,
                url: 'http://172.26.250.43:80/mapservice/sat_google/{z}/{x}/{y}.png',
              }),
            );
          } else if (v === 'DixingGoogleXYZ') {
            tileLayer.setSource(
              OLMap.TitleLayer.getXYZ({
                minZoom: 11,
                maxZoom: 17,
                url: 'http://172.26.250.43:80/mapservice/dixing_google/{z}/{x}/{y}.png',
              }),
            );
          } else if (v === 'DianziGaodeXYZ') {
            tileLayer.setSource(
              OLMap.TitleLayer.getXYZ({
                minZoom: 11,
                maxZoom: 17,
                url: 'http://172.26.250.43:80/mapservice/dianzi_gaode/{z}/{x}/{y}.png',
              }),
            );
          }
        }}
      >
        <Radio.Button value="OSM">OSM</Radio.Button>
        <Radio.Button value="SatGoogleXYZ">谷歌卫星图</Radio.Button>
        <Radio.Button value="DixingGoogleXYZ">谷歌地形</Radio.Button>
        <Radio.Button value="DianziGaodeXYZ">高德电子地图</Radio.Button>
      </Radio.Group>

      <OLMap.OLMap ref={changeRef} />
    </div>
  );
};
