import React from 'react';

import Table from '../../src/table';

import '../../src/index.less';

export default () => {
  return (
    <div style={{ height: 300, border: '1px solid #ccc' }}>
      <Table.TableExt
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
        ]}
        dataSource={Array.from({ length: 2 }).map((_, _index) => ({
          key: `${_index} + 1`,
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        }))}
      />
    </div>
  );
};
