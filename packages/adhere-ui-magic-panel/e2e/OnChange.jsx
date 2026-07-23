import React, { useState } from 'react';

import MagicPanel from '../src/index';
import mapIcon from './images/map.png';

import '../src/index.less';

/**
 * OnChange
 * @description 演示 onChange 回调（新增，不改动已有 demo）
 */
export default () => {
  const [info, setInfo] = useState('');

  return (
    <div>
      <div style={{ padding: 12, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
        {info || 'resize 窗口或图片加载后触发 onChange'}
      </div>
      <MagicPanel
        metaData={{
          elementsInfo: [
            { x: 99, y: 73, width: 45, height: 30, attrs: { type: 1 } },
            { x: 485, y: 67, width: 59, height: 42, attrs: { type: 5 } },
          ],
          originWidth: 740,
          originHeight: 317,
        }}
        renderBody={(ref) => <img ref={ref} src={mapIcon} style={{ width: '100%' }} alt="map" />}
        onChange={(elements) => {
          setInfo(JSON.stringify(elements, null, 2));
        }}
      >
        {(bodyElement, elements) => (
          <>
            {bodyElement}
            {elements?.map(({ x, y, width, height, attrs }) => (
              <div
                key={attrs.type}
                style={{
                  border: '1px solid #ccc',
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
