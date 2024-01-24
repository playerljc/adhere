import React, { memo } from 'react';

import type { CheckboxTableProps, DisplayNameInternal } from '../types';
import Table from './Table';

/**
 * CheckboxTable
 * @description 多选的Table
 * @param value
 * @param onChange
 * @param options
 * @param props
 * @constructor
 */
const InternalCheckboxTable = memo<CheckboxTableProps>(
  ({ value = [], onChange, options, ...props }) => (
    <Table
      dataSource={options}
      // pagination={false}
      rowKey="id"
      rowSelection={{
        type: 'checkbox',
        selectedRowKeys: value ?? [],
        onSelect: function (record, selected, selectedRows) {
          if (selected) {
            const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
            onChange?.(Array.from(new Set([...(value ?? []), ...selectedRowKeys])), []);
          } else {
            onChange?.(
              (value ?? []).filter((t) => t !== record.id),
              [],
            );
          }
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          if (selected) {
            const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
            onChange?.(Array.from(new Set([...(value ?? []), ...selectedRowKeys])), []);
          } else {
            const changeSelectedRowKeys = changeRows.filter((t) => !!t).map((t) => t.value);
            onChange?.(
              (value ?? []).filter((t) => !changeSelectedRowKeys.includes(t)),
              [],
            );
          }
        },
      }}
      {...props}
    />
  ),
);

const CheckboxTable = InternalCheckboxTable as DisplayNameInternal<typeof InternalCheckboxTable>;
CheckboxTable.displayName = 'CheckboxTable';

export default CheckboxTable;
