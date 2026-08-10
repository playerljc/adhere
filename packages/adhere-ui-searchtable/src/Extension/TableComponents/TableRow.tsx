import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import classNames from 'classnames';
import type { ReactElement, ReactNode } from 'react';
import React, { forwardRef, useContext } from 'react';

import type SearchTable from '../../SearchTable';
import { SearchTableContext } from '../../SearchTable';
import type { TableRowComponentProps } from '../../types';
import useRowDragSortRow from '../DragSort/RowDragSort/DragSortRow';
import useEditableRow from '../EditableCell/EditableRow';
import useEditableTableRow from '../EditableCell/EditableTableRow';

/**
 * TableRow
 * @description 表格行组件（virtual 模式必须透传 ref 到 tr）
 */
const TableRow = forwardRef<HTMLTableRowElement, TableRowComponentProps>(
  ({ record = {}, rowIndex, columns = [], rowKey, rowConfig, ...restProps }, ref) => {
    // 上下文
    const context = useContext<{
      context: SearchTable;
      editable?: {
        tableEditable?: {
          form?: FormInstance;
          formList?: {
            fields: FormListFieldData[];
            operation?: FormListOperation;
            meta?: {
              errors?: ReactNode[];
              warnings?: ReactNode[];
            };
          };
        };
      };
    } | null>(SearchTableContext);

    const { selectedRowKeys } = context?.context.state as any;
    // 表格是否使用CheckedStrategy模式
    const isUseCheckedStrategy = context?.context.isUseCheckedStrategy();
    const recordPrimaryValue = record[rowKey];

    // 默认的row组件是一个tr
    const trREL = (
      <tr
        {...(restProps ?? {})}
        ref={ref}
        className={classNames(
          restProps.className,
          // 如果使用CheckedStrategy模式选中后需要加入'ant-table-row-selected'样式
          {
            'ant-table-row-selected':
              isUseCheckedStrategy && selectedRowKeys.includes(recordPrimaryValue),
          },
        )}
      />
    );

    const reducerArgv = {
      rowIndex,
      record,
      rowKey,
      columns,
      rowConfig,
    };

    const EditableRow = useEditableRow({
      ...reducerArgv,
    });

    const EditableTableRow = useEditableTableRow({
      ...reducerArgv,
    });

    const RowDragSortRow = useRowDragSortRow({
      ...reducerArgv,
    });

    const map = new Map<string, (trREL: ReactElement) => any>([
      ['useEditableRow', EditableRow],
      ['useEditableTableRow', EditableTableRow],
      ['useRowDragSortRow', RowDragSortRow],
    ]);

    // 所有的reducer都去装饰tr，最终返回装饰后的tr
    return context?.context?.getTableRowComponentReducers()?.reduce?.(
      (pre, hookName) => {
        pre.value = map.get(hookName)?.(pre.value);
        return pre;
      },
      {
        value: trREL,
      },
    ).value as any;
  },
);

TableRow.displayName = 'TableRow';

export default TableRow;
