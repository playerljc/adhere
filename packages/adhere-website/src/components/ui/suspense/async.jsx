import { Button, Table } from 'antd';
import faker from 'faker';
import React, { useRef } from 'react';

import { Hooks, Space, Suspense } from '@baifendian/adhere';

const { useSetState } = Hooks;

export default () => {
  const [data, setData] = useSetState([]);

  const ref = useRef();

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const list = [];
        list.length = 10;
        list.fill(0);

        const dataSource = list.map((t, index) => ({
          id: index + 1,
          name: faker.internet.userName(),
          sex: index % 2 === 0 ? '男' : '女',
          age: faker.random.number(),
          height: faker.random.number(),
          width: faker.random.number(),
        }));

        setData(dataSource, () => resolve());
      }, 1000 * 5);
    });
  }

  function getColumns() {
    return [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
      },
      {
        title: '身高',
        key: 'height',
        dataIndex: 'height',
      },
      {
        title: '体重',
        key: 'width',
        dataIndex: 'width',
      },
    ];
  }

  return (
    <Suspense.ASync ref={ref} fetchData={fetchData} isEmpty={() => data.length === 0}>
      <Space.Group direction="horizontal">
        <Button type="primary" onClick={() => ref.current.reset().then(() => fetchData())}>
          重置
        </Button>
        <Button type="primary" onClick={() => ref.current.fetchData()}>
          加载数据
        </Button>
      </Space.Group>
      <Table rowKey="id" columns={getColumns()} dataSource={data} pagination={false} />
    </Suspense.ASync>
  );
};
