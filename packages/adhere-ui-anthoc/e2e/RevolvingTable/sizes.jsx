import React from 'react';

import { RevolvingTable } from '../../src';

import { createColumns, createDataSource } from './mock';

import '../../src/index.less';

const sizes = ['small', 'middle', 'large'];

/** 三种尺寸：small / middle / large */
export default () => {
  const dataSource = createDataSource(10);
  const columns = createColumns();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {sizes.map((size) => (
        <div key={size}>
          <div style={{ marginBottom: 8, fontWeight: 600 }}>size = {size}</div>
          <RevolvingTable
            style={{ height: 240 }}
            size={size}
            parity
            columns={columns}
            dataSource={dataSource}
            revolvingConfig={{
              slidesPerView: 4,
              spaceBetween: 6,
            }}
          />
        </div>
      ))}
    </div>
  );
};
