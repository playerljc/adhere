import React from 'react';

import Table from '../../src/table';
import { flatColumns } from './tableExtColumns';
import { flatDataSource } from './tableExtMock';

import '../../src/index.less';

/**
 * TableExt 虚拟滚动 + width:{} 列宽测算示例
 * 列、数据与基础表格一致，仅开启 virtual
 */
export default () => {
  return (
    <div style={{ height: '100%', border: '1px solid #ccc' }}>
      <Table.TableExt
        virtual
        fixedHeaderAutoTable
        fixedTableSpaceBetween
        rowSelection={{
          type: 'checkbox',
        }}
        columns={flatColumns}
        dataSource={flatDataSource}
        pagination={false}
      />
    </div>
  );
};
