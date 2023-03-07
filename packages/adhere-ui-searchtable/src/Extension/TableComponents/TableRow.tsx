import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import type { FC, ReactElement, ReactNode } from 'react';
import React, { useContext } from 'react';

import type SearchTable from '../../SearchTable';
import { SearchTableContext } from '../../SearchTable';
import type { TableRowComponentProps } from '../../types';
import useRowDragSortRow from '../DragSort/RowDragSort/DragSortRow';
import useEditableRow from '../EditableCell/EditableRow';
import useEditableTableRow from '../EditableCell/EditableTableRow';

/**
 * TableRow
 * @description 表格行组件
 */
const TableRow: FC<TableRowComponentProps> = ({
  record = {},
  rowIndex,
  columns = [],
  rowKey,
  rowConfig,
  ...restProps
}) => {
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

  // 默认的row组件是一个tr
  const trREL = <tr {...(restProps || {})} />;

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
};

export default TableRow;
