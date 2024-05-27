import { Button } from 'antd';
import React, { useRef } from 'react';

import { CascadeCompared, Space } from '@baifendian/adhere';

import styles from './example.less';

const columns = [];
columns.length = 10;
columns.fill(0);

const data = [];
data.length = 10;
data.fill(0);

function getIndicator() {
  return {
    columns: columns.map((t, i) => ({
      dataIndex: `column${i + 1}`,
      isFixed: i === 0,
      width: 120,
      render: () => <h2>{`指标${i + 1}`}</h2>,
    })),
    dataSource: {
      columns1: 1,
      columns2: 2,
      columns3: 3,
      columns4: 4,
      columns5: 5,
      columns6: 6,
      columns7: 7,
      columns8: 8,
      columns9: 9,
      columns10: 10,
    },
  };
}

function getMaster() {
  return data.map((t, i) => ({
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
      render: () => <h4>{`厂家指导价${j + 1}`}</h4>,
    })),
    dataSource: [
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
    ],
  }));
}

export default () => {
  const ref = useRef();

  return (
    <>
      <Space.Group direction="horizontal">
        <Button
          type="primary"
          onClick={() => {
            ref.current.scrollToByIndex(9, 0);
          }}
        >
          滚动到底部(无动画)
        </Button>

        <Button
          onClick={() => {
            ref.current.scrollToByIndex(9);
          }}
        >
          滚动到底部(有动画)
        </Button>

        <Button
          onClick={() => {
            ref.current.scrollToByIndex(0);
          }}
        >
          回到顶部
        </Button>
      </Space.Group>

      <Space direction="vertical" />

      <div className={styles.Wrapper} style={{ border: '1px solid rgba(0,0,0,.1)' }}>
        <CascadeCompared ref={ref} indicator={getIndicator()} master={getMaster()} />
      </div>
    </>
  );
};
