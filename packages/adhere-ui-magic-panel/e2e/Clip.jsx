import React from 'react';

import MagicPanel from '../src/index';
import mapIcon from './images/irregular.png';

import '../src/index.less';

const metaData = {
  elementsInfo: [
    { x: 517, y: 134, width: 495, height: 65, attrs: { type: 1 } },
    // { x: 200, y: 196, width: 1197, height: 563, attrs: { type: 1 } },
    // { x: 289, y: 759, width: 58, height: 55, attrs: { type: 1 } },
    // { x: 347, y: 750, width: 1050, height: 165, attrs: { type: 1 } },
  ],
  originWidth: 1576.36,
  originHeight: 1147,
  clip: {
    type: 'basic-shape',
    shape: {
      type: 'polygon',
      fillRule: 'nonzero',
      points: [
        {
          x: 517,
          y: 134,
        },
        {
          x: 1012,
          y: 134,
        },
        {
          x: 1012,
          y: 199,
        },
        {
          x: 1397,
          y: 199,
        },
        {
          x: 1397,
          y: 915,
        },
        {
          x: 347,
          y: 915,
        },
        {
          x: 347,
          y: 814,
        },
        {
          x: 289,
          y: 814,
        },
        {
          x: 289,
          y: 759,
        },
        {
          x: 200,
          y: 759,
        },
        {
          x: 200,
          y: 199,
        },
        {
          x: 517,
          y: 199,
        },
      ],
    },
  },
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
          backgroundColor: 'yellow',
        }}
        onClick={() => {
          console.log(x, y, width, height, attrs);
        }}
      />
    ),
  }));

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 100 }}>111</div>

      <div style={{ width: 800 }}>
        <MagicPanel
          metaData={metaData}
          renderBody={(ref) => <img ref={ref} src={mapIcon} style={{ width: '100%' }} alt="map" />}
          renderClip={() => {
            return <div style={{ backgroundColor: 'red', height: '100%' }}></div>;
          }}
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
    </div>
  );
};
