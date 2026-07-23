import { Button } from 'antd';
import GeoJSON from 'ol/format/GeoJSON';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorSource } from 'ol/source';
import React, { useRef } from 'react';

import { HeatMap } from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * HeatMapDemo
 * @description HeatMap 组件 + addLayer / getHeatMapLayer
 */
export default () => {
  const heatRef = useRef();

  return (
    <div className="Wrap">
      <div className="Toolbar">
        <Button
          type="primary"
          onClick={() => {
            const dataSource = [
              [119.7493459, 31.8885404],
              [119.7497556, 31.8847773],
              [119.7550551, 31.8790072],
              [119.7612496, 31.8736603],
              [119.761142, 31.8647861],
              [119.7586592, 31.861709],
              [119.762329, 31.8558587],
              [119.7641014, 31.8555412],
              [119.7636422, 31.8544483],
              [119.7660109, 31.8504396],
              [119.7701492, 31.8512531],
              [119.7730089, 31.8507856],
            ];

            const features = dataSource.map((provinceInfo) => ({
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: fromLonLat(provinceInfo),
              },
            }));

            const heatData = {
              type: 'FeatureCollection',
              features,
            };

            const vectorSource = new VectorSource({
              features: new GeoJSON().readFeatures(heatData, {
                dataProjection: 'EPSG:3857',
                featureProjection: 'EPSG:3857',
              }),
            });

            heatRef.current?.addLayer?.();
            const layer = heatRef.current?.getHeatMapLayer?.();
            layer?.setSource?.(vectorSource);
          }}
        >
          添加热力图数据
        </Button>
      </div>
      <HeatMap ref={heatRef} style={{ height: '100%' }} />
    </div>
  );
};
