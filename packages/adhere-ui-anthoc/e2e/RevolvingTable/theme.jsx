import React from 'react';

import { RevolvingTable } from '../../src';

import { createColumns, createDataSource } from './mock';

import '../../src/index.less';

/** CSS 变量定制表头/表体/奇偶行配色（大屏看板风格） */
export default () => {
  return (
    <RevolvingTable
      className="revolving-table-theme-demo"
      style={{
        height: 320,
        // 表头
        '--header-cell-text-color': '#e6f4ff',
        '--header-cell-bg': '#003a8c',
        '--header-split-color': 'rgba(255,255,255,0.2)',
        '--revolving-table-header-cell-color': '#e6f4ff',
        '--revolving-table-header-cell-background-color': '#003a8c',
        // 表体
        '--body-cell-text-color': '#d6e4ff',
        '--body-cell-bg': '#001d66',
        '--body-odd-row-bg': '#002c8c',
        '--revolving-table-row-cell-background-color': '#002c8c',
        background: '#001529',
        borderRadius: 8,
        overflow: 'hidden',
      }}
      parity
      columns={createColumns({ withEllipsis: true })}
      dataSource={createDataSource(12)}
      revolvingConfig={{
        slidesPerView: 5,
        spaceBetween: 4,
        autoplay: {
          delay: 1800,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
      }}
    />
  );
};
