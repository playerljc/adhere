import { Table } from 'antd';
import type { GetProp, TableProps, TransferProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal, TableTransferProps } from '../types';
import Transfer from './Transfer';
import { toTableTransferDataSource } from './transferUtils';

type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
type TableRowSelection<T extends object> = TableProps<T>['rowSelection'];

const InternalTableTransfer = memo<TableTransferProps>(
  ({ leftColumns, rightColumns, showSelectAll = false, style, dataSource, ...restProps }) => (
    <Transfer
      style={{ width: '100%', ...style }}
      {...restProps}
      dataSource={toTableTransferDataSource(dataSource)}
      showSelectAll={showSelectAll}
    >
      {({
        direction,
        filteredItems,
        onItemSelect,
        onItemSelectAll,
        selectedKeys: listSelectedKeys,
        disabled: listDisabled,
      }) => {
        const columns = direction === 'left' ? leftColumns : rightColumns;

        const rowSelection: TableRowSelection<TransferItem> = {
          getCheckboxProps: () => ({ disabled: listDisabled }),
          onChange(selectedRowKeys) {
            onItemSelectAll(selectedRowKeys, 'replace');
          },
          selectedRowKeys: listSelectedKeys,
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
        };

        return (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={toTableTransferDataSource(filteredItems)}
            size="small"
            style={{ pointerEvents: listDisabled ? 'none' : undefined }}
            onRow={({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) {
                  return;
                }

                onItemSelect(key, !listSelectedKeys.includes(key));
              },
            })}
          />
        );
      }}
    </Transfer>
  ),
);

const TableTransfer = InternalTableTransfer as DisplayNameInternal<typeof InternalTableTransfer>;
TableTransfer.displayName = 'TableTransfer';

export default TableTransfer;
