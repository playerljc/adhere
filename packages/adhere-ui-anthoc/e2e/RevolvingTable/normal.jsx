import React from 'react';

import { RevolvingTable } from '../../src';

import { createColumns, createDataSource } from './mock';

import '../../src/index.less';

/** 基础用法：固定表头 + 纵向自动轮播 + 奇偶行 */
export default () => {
  return (
    <RevolvingTable
      style={{ height: 320 }}
      rowKey="id"
      parity
      columns={createColumns({ withEllipsis: true })}
      dataSource={createDataSource(12)}
      revolvingConfig={{
        slidesPerView: 5,
        spaceBetween: 8,
      }}
    />
  );
};
