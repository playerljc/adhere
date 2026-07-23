import { Button, Empty, Space } from 'antd';
import React, { useRef, useState } from 'react';

import Suspense from '../src/index';

import '../src/index.less';

export default () => {
  const [data, setData] = useState([]);
  const ref = useRef();

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            setData([
              { id: 1, name: 'Alice' },
              { id: 2, name: 'Bob' },
            ]);
          }}
        >
          填充数据
        </Button>
        <Button
          onClick={() => {
            ref.current?.reset?.().then(() => setData([]));
          }}
        >
          重置为空
        </Button>
      </Space>

      <Suspense.Sync
        ref={ref}
        data={data}
        isEmpty={() => data.length === 0}
        renderEmpty={() => <Empty description="自定义空状态" />}
      >
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Suspense.Sync>
    </div>
  );
};
