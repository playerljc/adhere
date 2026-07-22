import React from 'react';

import Table from '../../src/table';

import '../../src/index.less';

export default () => {
  return (
    <div style={{ height: 300, border: '1px solid #ccc' }}>
      <Table.TableExt
        fixedHeaderAutoTable
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 120,
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            width: 80,
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
        ]}
        dataSource={Array.from({ length: 30 }).map((_, _index) => ({
          key: `${_index + 1}`,
          name: `胡彦斌${_index + 1}`,
          age: 32 + (_index % 10),
          address: '西湖区湖底公园1号',
        }))}
      />
    </div>
  );
};
