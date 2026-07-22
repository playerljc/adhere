import React from 'react';

import { RevolvingTable } from '../../src';

import { createColumns, createDataSource } from './mock';

import '../../src/index.less';

const slotStyle = {
  padding: '6px 12px',
  fontSize: 12,
  color: '#595959',
  background: '#fafafa',
  border: '1px dashed #d9d9d9',
};

/** 表头/表体前后插槽 */
export default () => {
  return (
    <RevolvingTable
      style={{ height: 360 }}
      parity
      columns={createColumns()}
      dataSource={createDataSource(10)}
      revolvingConfig={{
        slidesPerView: 4,
        spaceBetween: 8,
      }}
      renderHeaderBefore={() => <div style={slotStyle}>renderHeaderBefore · 表头上方区域</div>}
      renderHeaderAfter={() => <div style={slotStyle}>renderHeaderAfter · 表头下方区域</div>}
      renderBodyBefore={() => <div style={slotStyle}>renderBodyBefore · 表体上方区域</div>}
      renderBodyAfter={() => <div style={slotStyle}>renderBodyAfter · 表体下方区域</div>}
    />
  );
};
