import { Button } from 'antd';
import { fromLonLat } from 'ol/proj';
import React, { useRef } from 'react';

import { OLMap } from '@baifendian/adhere';
import XinBei from '@baifendian/adhere-util-resource/resource/gis/geoJson/China/320000/320400.json';

export default () => {
  const animationRef = useRef();

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Button
        type="primary"
        style={{ marginBottom: 20 }}
        onClick={() => {
          const { vectorSource } = animationRef.current.addDataLayer();

          const lineData = new Map();
          const lines = [];
          const ps = XinBei.features[2].geometry.coordinates[0][0];

          const lineCount = 100;

          const count = Math.floor(ps.length / lineCount);

          for (let i = 0; i < lineCount; i++) {
            lines.push(ps.slice(i * count, count * (i + 1)));
          }

          if (ps.length % lineCount !== 0) {
            lines.push(ps.slice(ps.length - (ps.length % lineCount)));
          }

          lines.forEach((line, index) => {
            const points = line.map((t) => fromLonLat(t));

            // 画线
            vectorSource.addFeature(
              OLMap.Util.drawLine({
                points,
                width: 6,
                color: 'red',
              }),
            );

            lineData.set(index, line);
          });

          const animationManager = new OLMap.AnimationManager(vectorSource, {
            arrowImg: require('../Triangle.png'),
            pointImg: require('../selected.png'),
            lineWidth: 8,
            lineColor: '#ff5d00',
          });

          // 播放
          animationManager.run(lineData, []);
        }}
      >
        轨迹播放
      </Button>

      <OLMap.OLMap ref={animationRef} />
    </div>
  );
};
