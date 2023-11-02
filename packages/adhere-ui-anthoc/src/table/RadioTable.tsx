import React, { memo } from 'react';
import type { FC } from 'react';

import type { RadioTableProps } from '../types';
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
const RadioTable: FC<RadioTableProps> = ({ value, onChange, options, ...props }) => (
  <Table
    dataSource={options}
    // pagination={false}
    rowKey="id"
    rowSelection={{
      type: 'radio',
      selectedRowKeys: [value],
      onChange: (selectedRowKeys) => {
        onChange?.(!!selectedRowKeys.length ? selectedRowKeys[0] : '', []);
      },
    }}
    {...props}
  />
);

export default memo(RadioTable);
