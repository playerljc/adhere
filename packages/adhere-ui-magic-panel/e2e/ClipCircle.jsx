import React from 'react';

import MagicPanel from '../src/index';
import mapIcon from './images/map.png';

import '../src/index.less';

/**
 * ClipCircle
 * @description MagicPanel + circle clip（新增，不改动已有 Clip demo）
 */
export default () => {
  return (
    <div style={{ width: 600 }}>
      <MagicPanel
        metaData={{
          elementsInfo: [
            { x: 258, y: 25, width: 27, height: 21, attrs: { type: 3 } },
            { x: 363, y: 159, width: 37, height: 33, attrs: { type: 4 } },
          ],
          originWidth: 740,
          originHeight: 317,
          clip: {
            type: 'basic-shape',
            shape: {
              type: 'circle',
              radius: '45%',
              position: 'at 50% 50%',
            },
          },
        }}
        renderBody={(ref) => <img ref={ref} src={mapIcon} style={{ width: '100%' }} alt="map" />}
        renderClip={() => <div style={{ backgroundColor: 'rgba(22, 119, 255, 0.25)', height: '100%' }} />}
      >
        {(bodyElement, elements) => (
          <>
            {bodyElement}
            {elements?.map(({ x, y, width, height, attrs }) => (
              <div
                key={attrs.type}
                style={{
                  border: '1px solid #1677ff',
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  width: `${width}px`,
                  height: `${height}px`,
                }}
              />
            ))}
          </>
        )}
      </MagicPanel>
    </div>
  );
};
