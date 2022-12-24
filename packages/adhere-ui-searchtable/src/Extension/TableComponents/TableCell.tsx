import { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import React, { FC, ReactNode, useContext } from 'react';

import SearchTable, { SearchTableContext } from '../../SearchTable';
import { TableCellComponentProps } from '../../types';
import useRowDragSortCell from '../DragSort/RowDragSort/DragSortCell';
import useEditableCell from '../EditableCell/EditableCell';
import useEditableTableCell from '../EditableCell/EditableTableCell';

/**
 * TableCell
 * @description 表格列组件
 */
const TableCell: FC<TableCellComponentProps> = (props) => {
  const { record, column, rowIndex, columns, ...restProps } = props;

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

  // 默认的row组件是一个td
  const tdREL = <td {...(restProps || {})}>{restProps?.children}</td>;

  const reducerArgv = {
    record,
    column,
    rowIndex,
    columns,
    ...restProps,
  };

  const EditableCell = useEditableCell(
    {
      ...reducerArgv,
    },
    tdREL,
  );

  const EditableTableCell = useEditableTableCell(
    {
      ...reducerArgv,
    },
    tdREL,
  );

  const RowDragSortCell = useRowDragSortCell(
    {
      ...reducerArgv,
    },
    tdREL,
  );

  const map = new Map<string, () => any>([
    ['useEditableCell', EditableCell],
    ['useEditableTableCell', EditableTableCell],
    ['useRowDragSortCell', RowDragSortCell],
  ]);

  // 所有的reducer都去装饰tr，最终返回装饰后的tr
  return context?.context?.getTableCellComponentReducers()?.reduce?.(
    (pre, hookName) => {
      pre.value = map.get(hookName)?.();
      return pre;
    },
    {
      value: tdREL,
    },
  ).value as any;
};

export default TableCell;
