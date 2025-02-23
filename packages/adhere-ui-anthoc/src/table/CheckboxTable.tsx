import difference from 'lodash.difference';
// import differenceby from 'lodash.differenceby';
import React, { memo } from 'react';

import Util from '@baifendian/adhere-util';

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
  ({ value = [], onChange, options, ...tableProps }) => {
    return (
      <Table
        dataSource={options}
        rowKey="id"
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: value ?? [],
          onSelect: function (record, selected, selectedRows) {
            const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);

            let targetKeys;

            if (selected) {
              targetKeys = Array.from(new Set([...(value ?? []), ...selectedRowKeys]));
            } else {
              targetKeys = difference(
                value ?? [],
                difference(
                  Util.treeToArray(
                    options as any[],
                    {
                      parentIdAttr: 'pid',
                      rootParentId: '-1',
                    },
                    'id',
                  ).map((t) => t.id),
                  selectedRowKeys,
                ),
              );
            }

            onChange?.(targetKeys, []);
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
        {...(tableProps ?? {})}
      />
    );
  },
);

const CheckboxTable = InternalCheckboxTable as DisplayNameInternal<typeof InternalCheckboxTable>;
CheckboxTable.displayName = 'CheckboxTable';

export default CheckboxTable;
