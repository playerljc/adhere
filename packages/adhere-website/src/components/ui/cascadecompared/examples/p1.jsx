import React from 'react';

import { CascadeCompared } from '@baifendian/adhere';

import styles from './example.less';

const columns = Array.from({ length: 10 }).fill(0);

const data = Array.from({ length: 10 }).fill(0);

function getIndicator() {
  return {
    columns: columns.map((t, i) => ({
      dataIndex: `column${i + 1}`,
      isFixed: i === 0,
      width: 120,
      render: (val, dataSource, groupIndex, rowIndex, columnIndex) => {
        console.log('indicator', val, dataSource, groupIndex, rowIndex, columnIndex);
        return <h2>{`指标${i + 1}`}</h2>;
      },
    })),
    dataSource: {
      column1: 1,
      column2: 2,
      column3: 3,
      column4: 4,
      column5: 5,
      column6: 6,
      column7: 7,
      column8: 8,
      column9: 9,
      column10: 10,
    },
  };
}

// [
//   {
//     groupName: '基本信息',
//     columns: ['name', 'hafu1', 'hongqi'],
//     dataSource: [
//       {
//         name: '车款名称',
//         hafu1: 'hafu',
//         hongqi: 'hongqi',
//       },
//     ],
//   },
// ];

function getMaster() {
  // 一组一组的
  return data.map((t, i) => ({
    // 组名
    title: (
      <h2
        className={styles.H2}
        style={{ margin: 0, borderBottom: '1px solid rgba(0,0,0,.1)' }}
      >{`header${i + 1}`}</h2>
    ),
    columns: columns.map((c, j) => ({
      dataIndex: `column${j + 1}`,
      isFixed: j === 0,
      width: 120,
      // render: () => <h4>{`厂家指导价${j + 1}`}</h4>,
      render: (val, dataSource, groupIndex, rowIndex, columnIndex) => {
        console.log('master', val, dataSource, groupIndex, rowIndex, columnIndex);
        return <h4>{`厂家指导价${j + 1}`}</h4>;
      },
    })),
    dataSource: [
      {
        column1: 1,
        column2: 2,
        column3: 3,
        column4: 4,
        column5: 5,
        column6: 6,
        column7: 7,
        column8: 8,
        column9: 9,
        column10: 10,
      },
      {
        column1: 1,
        column2: 2,
        column3: 3,
        column4: 4,
        column5: 5,
        column6: 6,
        column7: 7,
        column8: 8,
        column9: 9,
        column10: 10,
      },
      {
        column1: 1,
        column2: 2,
        column3: 3,
        column4: 4,
        column5: 5,
        column6: 6,
        column7: 7,
        column8: 8,
        column9: 9,
        column10: 10,
      },
    ],
  }));
}

export default () => {
  return (
    <div className={styles.Wrapper} style={{ border: '1px solid rgba(0,0,0,.1)' }}>
      <CascadeCompared indicator={getIndicator()} master={getMaster()} />
    </div>
  );
};
