import React from 'react';

import { RevolvingTable } from '../../src';

import {
  STATUS_COLOR_MAP,
  STATUS_LABEL_MAP,
  createColumns,
  createDataSource,
} from './mock';

import '../../src/index.less';

/** 自定义单元格 render、省略、对齐、列宽（固定 / 百分比 / flex） */
export default () => {
  const baseColumns = createColumns({ withEllipsis: true });

  const columns = baseColumns.map((col) => {
    if (col.dataIndex === 'address') {
      return {
        ...col,
        render: (value) => (
          <span style={{ color: '#1677ff' }} title={value}>
            {value}
          </span>
        ),
      };
    }

    if (col.dataIndex === 'status') {
      return {
        ...col,
        render: (value) => (
          <span style={{ color: STATUS_COLOR_MAP[value] ?? '#666', fontWeight: 500 }}>
            {STATUS_LABEL_MAP[value] ?? value}
          </span>
        ),
      };
    }

    if (col.dataIndex === 'age') {
      return {
        ...col,
        align: 'right',
        render: (value) => `${value} 岁`,
      };
    }

    return col;
  });

  columns.splice(columns.length - 1, 0, {
    dataIndex: 'score',
    key: 'score',
    title: '得分',
    width: 90,
    align: 'right',
    render: (value) => {
      const color = value >= 90 ? '#52c41a' : value >= 75 ? '#1677ff' : '#faad14';
      return <span style={{ color, fontWeight: 600 }}>{value}</span>;
    },
  });

  return (
    <RevolvingTable
      style={{ height: 320 }}
      parity
      columns={columns}
      dataSource={createDataSource(12)}
      revolvingConfig={{
        slidesPerView: 5,
        spaceBetween: 8,
      }}
    />
  );
};
