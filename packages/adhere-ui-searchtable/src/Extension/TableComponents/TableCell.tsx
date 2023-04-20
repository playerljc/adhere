import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import type { FC, ReactElement, ReactNode } from 'react';
import React, { useContext, useMemo } from 'react';

import type SearchTable from '../../SearchTable';
import { SearchTableContext } from '../../SearchTable';
import type { TableCellComponentProps } from '../../types';
import useRowDragSortCell from '../DragSort/RowDragSort/DragSortCell';
import useEditableCell from '../EditableCell/EditableCell';
import useEditableTableCell from '../EditableCell/EditableTableCell';

/**
 * TableCell
 * @description 表格列组件
 * @param {TableCellComponentProps} props
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

  const styleList = useMemo(() => {
    if (column && 'align' in column) {
      return {
        ...(restProps.style || {}),
        textAlign: column.align,
      };
    }
    return restProps?.style || {};
  }, [restProps]);

  // 默认的row组件是一个td
  // ant-table-cell-with-append 这个是treeData的样式
  const tdREL = (
    <td {...(restProps || {})} style={styleList}>
      {restProps?.children}
    </td>
  );

  const reducerArgv = {
    record,
    column,
    rowIndex,
    columns,
    ...restProps,
  };

  const EditableCell = useEditableCell({
    ...reducerArgv,
  });

  const EditableTableCell = useEditableTableCell({
    ...reducerArgv,
  });

  const RowDragSortCell = useRowDragSortCell({
    ...reducerArgv,
  });

  const map = new Map<string, (tdREL: ReactElement) => any>([
    ['useEditableCell', EditableCell],
    ['useEditableTableCell', EditableTableCell],
    ['useRowDragSortCell', RowDragSortCell],
  ]);

  // 所有的reducer都去装饰tr，最终返回装饰后的tr
  return context?.context?.getTableCellComponentReducers()?.reduce?.(
    (pre, hookName) => {
      pre.value = map.get(hookName)?.(pre.value);
      return pre;
    },
    {
      value: tdREL,
    },
  ).value as any;
};

export default TableCell;
