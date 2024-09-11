import React, { memo } from 'react';

import type { DisplayNameInternal, RadioTreeTableProps } from '../types';
import Table from './Table';

/**
 * RadioTreeTable
 * @description 单选的Table
 * @param value
 * @param onChange
 * @param options
 * @param props
 * @constructor
 */
const InternalRadioTreeTable = memo<RadioTreeTableProps>(
  ({ value, onChange, options, ...tableProps }) => (
    <Table
      dataSource={options}
      rowKey="id"
      rowSelection={{
        type: 'radio',
        selectedRowKeys: value ? [value] : [],
        onSelect: (record, selected, selectedRows) => {
          onChange?.(selectedRows.map((t) => t.value)[0], selectedRows.map((t) => t.title)[0], {
            selected,
            // @ts-ignore
            triggerNode: {
              props: record,
            },
          });
        },
      }}
      {...(tableProps ?? {})}
    />
  ),
);

const RadioTreeTable = InternalRadioTreeTable as DisplayNameInternal<typeof InternalRadioTreeTable>;
RadioTreeTable.displayName = 'RadioTreeTable';

export default RadioTreeTable;
