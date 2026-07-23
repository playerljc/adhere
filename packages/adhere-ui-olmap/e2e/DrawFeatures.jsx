import { Button } from 'antd';
import { fromLonLat } from 'ol/proj';
import React, { useRef } from 'react';

import { OLMap, Util } from '../src/index';

import '../src/index.less';
import './index.less';

/**
 * DrawFeatures
 * @description Util.draw* + addDataLayer 绘制点线面
 */
export default () => {
  const mapRef = useRef();

  return (
    <div className="Wrap">
      <div className="Toolbar">
        <Button
          type="primary"
          onClick={() => {
            const { vectorSource } = mapRef.current?.addDataLayer?.(1) ?? {};
            if (!vectorSource) return;

            vectorSource.addFeature(
              Util.drawCircle({
                center: fromLonLat([119.7493459, 31.8885404]),
                radius: 1250,
              }),
            );

            vectorSource.addFeature(
              Util.drawCirclePoint({
                id: 1,
                pos: fromLonLat([119.7497556, 31.8847773]),
              }),
            );

            vectorSource.addFeature(
              Util.drawRegularShapePoint({
                id: 3,
                pos: fromLonLat([119.7730089, 31.8507856]),
                points: 3,
                radius: 10,
                radius2: 0,
                rotation: Math.PI / 4,
                angle: 0,
              }),
            );

            vectorSource.addFeature(
              Util.drawPolygon({
                points: [
                  [
                    fromLonLat([119.7493459, 31.8885404]),
                    fromLonLat([119.7497556, 31.8847773]),
                    fromLonLat([119.7550551, 31.8790072]),
                    fromLonLat([119.7612496, 31.8736603]),
                    fromLonLat([119.761142, 31.8647861]),
                    fromLonLat([119.7493459, 31.8885404]),
                  ],
                ],
              }),
            );

            vectorSource.addFeature(
              Util.drawLine({
                points: [
                  fromLonLat([119.7493459, 31.8885404]),
                  fromLonLat([119.7497556, 31.8847773]),
                  fromLonLat([119.7550551, 31.8790072]),
                  fromLonLat([119.7612496, 31.8736603]),
                  fromLonLat([119.761142, 31.8647861]),
                ],
                width: 6,
                color: 'red',
              }),
            );
          }}
        >
          显示 Features
        </Button>
      </div>
      <OLMap ref={mapRef} style={{ height: '100%' }} />
    </div>
  );
};
