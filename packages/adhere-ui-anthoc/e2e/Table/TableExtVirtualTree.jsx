import React from 'react';

import Table from '../../src/table';
import { flatColumns } from './tableExtColumns';
import { treeDataSource } from './tableExtMock';

import '../../src/index.less';

/**
 * TableExt 树形 children 示例
 * 列与基础表格一致（含第一列 fixed），数据为 tree；树形展开与 virtual 不兼容
 */
export default () => {
  return (
    <div style={{ height: '100%', border: '1px solid #ccc' }}>
      <Table.TableExt
        virtual={false}
        fixedHeaderAutoTable
        fixedTableSpaceBetween
        rowSelection={{
          type: 'checkbox',
        }}
        columns={flatColumns}
        dataSource={treeDataSource}
        pagination={false}
        expandable={{
          defaultExpandAllRows: true,
        }}
      />
    </div>
  );
};
