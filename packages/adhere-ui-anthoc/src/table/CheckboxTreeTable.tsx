import difference from 'lodash.difference';
import React, { memo, useMemo } from 'react';

import Util from '@baifendian/adhere-util';

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
  ({ value = [], onChange, options, checkStrictly, ...tableProps }) => {
    const targetCheckStrictly = useMemo(() => {
      if (checkStrictly === undefined) return true;

      return checkStrictly;
    }, [checkStrictly]);

    return (
      <Table
        dataSource={options}
        rowKey="id"
        rowSelection={{
          checkStrictly: targetCheckStrictly,
          type: 'checkbox',
          selectedRowKeys: value ?? [],
          onSelect: (record, selected, selectedRows) => {
            const selectedRowKeys = selectedRows.filter((t) => !!t).map((t) => t.value);

            let targetKeys;

            if (selected) {
              targetKeys = Array.from(new Set([...(value ?? []), ...selectedRowKeys]));
            } else {
              targetKeys = difference(
                value,
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

            onChange?.(targetKeys, [], {
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
