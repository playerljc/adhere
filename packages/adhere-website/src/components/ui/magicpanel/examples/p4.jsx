import { Button, Popover, Slider } from 'antd';
import React, { useState } from 'react';

import { MagicPanel } from '@baifendian/adhere';

import mapIcon from './map.png';

import styles from './p4.less';

const metaData = {
  elementsInfo: [
    {
      x: 99,
      y: 73,
      width: 45,
      height: 30,
      attrs: { type: 1, text: 'Title1', content: 'Content1' },
    },
    {
      x: 144,
      y: 202,
      width: 33,
      height: 27,
      attrs: { type: 2, text: 'Title2', content: 'Content2' },
    },
    {
      x: 258,
      y: 25,
      width: 27,
      height: 21,
      attrs: { type: 3, text: 'Title3', content: 'Content3' },
    },
    {
      x: 363,
      y: 159,
      width: 37,
      height: 33,
      attrs: { type: 4, text: 'Title4', content: 'Content4' },
    },
    {
      x: 485,
      y: 67,
      width: 59,
      height: 42,
      attrs: { type: 5, text: 'Title5', content: 'Content5' },
    },
    {
      x: 624,
      y: 223,
      width: 25,
      height: 21,
      attrs: { type: 6, text: 'Title6', content: 'Content6' },
    },
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
          height: '100%',
        }}
        onClick={() => {
          console.log(x, y, width, height, attrs);
        }}
      >
        <Popover placement="bottom" title={attrs.text} content={attrs.content}>
          <Button type="primary" style={{ width: '100%', height: '100%' }}>
            {attrs.text}
          </Button>
        </Popover>
      </div>
    ),
  }));

  const [width, setWidth] = useState(100);

  return (
    <div>
      <div className={styles.SliderWrapper}>
        <div className={styles.Label}>宽度：</div>
        <div className={styles.Value}>
          <Slider
            className={styles.Slider}
            min={50}
            value={width}
            onChange={setWidth}
            tooltip={{ open: true }}
          />
        </div>
        <div className={styles.Label}>%</div>
      </div>

      <div className={styles.Map}>
        <MagicPanel
          style={{ width: `${width}%` }}
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
    </div>
  );
};
