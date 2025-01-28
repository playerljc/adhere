import React from 'react';

import MagicPanel from '../src/index';
import mapIcon from './images/map.png';

import '../src/index.less';

const metaData = {
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
  );
};
