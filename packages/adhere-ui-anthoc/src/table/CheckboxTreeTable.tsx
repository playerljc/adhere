import React, { memo } from 'react';

import type { CheckboxTreeTableProps, DisplayNameInternal } from '../types';
import Table from './Table';

/**
 * CheckboxTreeTable
 * @description 多选的Table
 * @param value
 * @param onChange
 * @param options
 * @param props
 * @constructor
 */
const InternalCheckboxTreeTable = memo<CheckboxTreeTableProps>(
  ({ value = [], onChange, options, ...tableProps }) => {
    return (
      <Table
        dataSource={options}
        rowKey="id"
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: value ?? [],
          onSelect: (record, selected, selectedRows) => {
            let changeSelectedRowKeys;

            if (selected) {
              const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
              changeSelectedRowKeys = Array.from(new Set([...(value ?? []), ...selectedRowKeys]));
            } else {
              changeSelectedRowKeys = (value ?? []).filter((t) => t !== record.id);
            }

            onChange?.(changeSelectedRowKeys, [], {
              selected,
              // @ts-ignore
              triggerNode: {
                props: record,
              },
            });
          },
          onSelectAll: (selected, selectedRows, changeRows) => {
            let changeSelectedRowKeys;

            if (selected) {
              const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);
              changeSelectedRowKeys = Array.from(new Set([...(value ?? []), ...selectedRowKeys]));
            } else {
              const selectedRowKeys = changeRows.filter((t) => !!t).map((t) => t.value);
              changeSelectedRowKeys = (value ?? []).filter((t) => !selectedRowKeys.includes(t));
            }

            onChange?.(changeSelectedRowKeys, [], {
              selected,
              // @ts-ignore
              triggerNode: {
                props: changeRows,
              },
            });
          },
        }}
        {...(tableProps ?? {})}
      />
    );
  },
);

const CheckboxTreeTable = InternalCheckboxTreeTable as DisplayNameInternal<
  typeof InternalCheckboxTreeTable
>;
CheckboxTreeTable.displayName = 'CheckboxTreeTable';

export default CheckboxTreeTable;
