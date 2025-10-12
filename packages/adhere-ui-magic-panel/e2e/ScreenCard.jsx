import React from 'react';

import MagicPanel from '../src/index';
import mapIcon from './images/card.png';

import '../src/index.less';

const metaData = {
  elementsInfo: [{ x: 37, y: 60, width: 1863, height: 800, attrs: { type: 1 } }],
  originWidth: 1935,
  originHeight: 920,
};

/**
 * UseItemsProps
 * @description 使用items属性
 * @return {Element}
 */
export default () => {
  const items = metaData.elementsInfo.map(({ attrs }) => ({
    key: attrs.type,
    children: ({ x, y, width, height, attrs }) => (
      <div
        style={{
          border: '1px solid #ccc',
          height: '100%',
        }}
        onClick={() => {
          console.log(x, y, width, height, attrs);
        }}
      />
    ),
  }));

  return (
    <div style={{ width: 200 }}>
      <MagicPanel
        metaData={metaData}
        renderBody={(ref) => <img ref={ref} src={mapIcon} style={{ width: '100%' }} alt="map" />}
        items={items}
      >
        {(bodyElement, elements, items) => (
          <>
            {bodyElement}
            {items}
          </>
        )}
      </MagicPanel>
    </div>
  );
};
