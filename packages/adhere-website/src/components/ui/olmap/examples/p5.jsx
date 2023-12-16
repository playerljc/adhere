import { Button } from 'antd';
import { fromLonLat } from 'ol/proj';
import React, { useRef } from 'react';

import { OLMap } from '@baifendian/adhere';

import icon from '../区控-图例.svg';

export default () => {
  const fRef = useRef();

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Button
        type="primary"
        style={{ marginBottom: 20 }}
        onClick={() => {
          const { /* vectorLayer, */ vectorSource } = fRef.current.addDataLayer();

          vectorSource.addFeature(
            OLMap.Util.drawCircle({
              center: fromLonLat([119.7493459, 31.8885404]),
              radius: 1250,
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawCirclePoint({
              id: 1,
              pos: fromLonLat([119.7497556, 31.8847773]),
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawImagePoint({
              id: 2,
              pos: fromLonLat([119.879673, 31.933156]),
              src: icon,
              scale: 2,
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawRegularShapePoint({
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
            OLMap.Util.drawRegularShapePoint({
              pos: fromLonLat([119.7641014, 31.8555412]),
              points: 4,
              radius: 10,
              angle: Math.PI / 4,
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawRegularShapePoint({
              pos: fromLonLat([119.7660109, 31.8504396]),
              radius: 10 / Math.SQRT2,
              radius2: 10,
              points: 4,
              angle: 0,
              scale: [1, 0.5],
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawRegularShapePoint({
              pos: fromLonLat([119.7660109, 31.8504396]),
              points: 3,
              radius: 10,
              rotation: Math.PI / 4,
              angle: 0,
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawRegularShapePoint({
              pos: fromLonLat([119.7660109, 31.8504396]),
              points: 5,
              radius: 10,
              radius2: 4,
              angle: 0,
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawRegularShapePoint({
              pos: fromLonLat([119.7660109, 31.8504396]),
              points: 4,
              radius: 10,
              radius2: 0,
              angle: 0,
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawRegularShapePoint({
              pos: fromLonLat([119.7660109, 31.8504396]),
              points: 4,
              radius: 10,
              radius2: 0,
              angle: Math.PI / 4,
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawRegularShapePoint({
              pos: fromLonLat([119.7660109, 31.8504396]),
              points: 4,
              radius: 5,
              angle: Math.PI / 4,
              displacement: [0, 10],
            }),
          );

          vectorSource.addFeature(
            OLMap.Util.drawPolygon({
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
            OLMap.Util.drawLine({
              points: [
                fromLonLat([119.7493459, 31.8885404]),
                fromLonLat([119.7497556, 31.8847773]),
                fromLonLat([119.7550551, 31.8790072]),
                fromLonLat([119.7612496, 31.8736603]),
                fromLonLat([119.761142, 31.8647861]),
                fromLonLat([119.7493459, 31.8885404]),
              ],
              width: 6,
              color: 'red',
            }),
          );
        }}
      >
        显示Features
      </Button>

      <OLMap.OLMap ref={fRef} />
    </div>
  );
};
