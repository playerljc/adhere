import React from 'react';

import { MagicPanel } from '@baifendian/adhere';

import mapIcon from './map.png';

/**
 * Scroll
 * @description 图片使用原始尺寸，父元素比图片的宽度小会出现横向滚动条
 * @return {Element}
 */
export default () => {
  return (
    <MagicPanel
      style={{
        width: 500,
        overflowX: 'auto',
      }}
      metaData={{
        elementsInfo: [
          { x: 99, y: 73, width: 45, height: 30, attrs: { type: 1 } },
          { x: 144, y: 202, width: 33, height: 27, attrs: { type: 2 } },
          { x: 258, y: 25, width: 27, height: 21, attrs: { type: 3 } },
          { x: 363, y: 159, width: 37, height: 33, attrs: { type: 4 } },
          { x: 485, y: 67, width: 59, height: 42, attrs: { type: 5 } },
          { x: 624, y: 223, width: 25, height: 21, attrs: { type: 6 } },
        ],
        originWidth: 740,
        originHeight: 317,
      }}
      renderBody={(ref) => <img ref={ref} src={mapIcon} style={{ width: 'auto' }} alt="map" />}
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
              onClick={() => {
                console.log(x, y, width, height);
              }}
            />
          ))}
        </>
      )}
    </MagicPanel>
  );
};
