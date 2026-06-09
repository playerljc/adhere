import merge from 'lodash.merge';
import React, { useContext, useMemo } from 'react';
import type { FC } from 'react';

import TableGridLayout, { type DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { DesignContext } from '../../../Design/Context';
import type { InternalTableGridLayoutProps } from '../../../types';
import { parseDesign } from '../../parse';

function clampDataItemColSpan(row: DataItemRow, columnCount: number): DataItemRow {
  const maxSpan = Math.max(1, columnCount);
  const labelColSpan = Math.min(row.labelColSpan ?? 1, maxSpan);
  const valueColSpan = Math.min(row.valueColSpan ?? 1, maxSpan);

  if (row.labelColSpan === labelColSpan && row.valueColSpan === valueColSpan) {
    return row;
  }

  return { ...row, labelColSpan, valueColSpan };
}

/**
 * InternalTableGridLayout
 * @description TableGridLayout的内部实现
 */
const InternalTableGridLayout: FC<InternalTableGridLayoutProps> = ({ children, id, ...props }) => {
  const context = useContext(DesignContext);

  const targetProps = useMemo<TableGridLayoutProps>(() => {
    // 基本的数据在props中都给了
    const tableGridLayoutProps = merge({}, props);
    const columnCount = tableGridLayoutProps.data?.[0]?.columnCount ?? 1;

    // 对children进行解析
    tableGridLayoutProps.data[0].data = children?.map((_item) => {
      const row = parseDesign({
        parentId: id,
        value: _item,
        context,
      }) as DataItemRow;

      return clampDataItemColSpan(row, columnCount);
    });

    return tableGridLayoutProps;
  }, [children, context, id, props]);

  return <TableGridLayout {...targetProps} />;
};

export default InternalTableGridLayout;
