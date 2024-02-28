import React, { memo } from 'react';

import type { DisplayNameInternal, RadioTableProps } from '../types';
import Table from './Table';

/**
 * RadioTable
 * @description 单选的Table
 * @param value
 * @param onChange
 * @param options
 * @param props
 * @constructor
 */
const InternalRadioTable = memo<RadioTableProps>(({ value, onChange, options, ...tableProps }) => (
  <Table
    dataSource={options}
    rowKey="id"
    rowSelection={{
      type: 'radio',
      selectedRowKeys: value ? [value] : [],
      onChange: (selectedRowKeys) => {
        onChange?.(!!selectedRowKeys.length ? selectedRowKeys[0] : '', []);
      },
    }}
    {...(tableProps ?? {})}
  />
));

const RadioTable = InternalRadioTable as DisplayNameInternal<typeof InternalRadioTable>;
RadioTable.displayName = 'RadioTable';

export default RadioTable;
