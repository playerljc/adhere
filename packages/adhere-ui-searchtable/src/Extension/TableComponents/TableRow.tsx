import { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import React, { FC, ReactNode, useContext } from 'react';

import SearchTable, { SearchTableContext } from '../../SearchTable';
import { TableRowComponentProps } from '../../types';
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
    form?: FormInstance;
    formList?: {
      fields: FormListFieldData[];
      operation?: FormListOperation;
      meta?: {
        errors?: ReactNode[];
        warnings?: ReactNode[];
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

  const EditableRow = useEditableRow(
    {
      ...reducerArgv,
    },
    trREL,
  );

  const EditableTableRow = useEditableTableRow(
    {
      ...reducerArgv,
    },
    trREL,
  );

  const map = new Map<string, () => any>([
    ['useEditableRow', EditableRow],
    ['useEditableTableRow', EditableTableRow],
  ]);

  // 所有的reducer都去装饰tr，最终返回装饰后的tr
  return context?.context?.getTableRowComponentReducers()?.reduce?.(
    (pre, hookName) => {
      pre.value = map.get(hookName)?.();
      return pre;
    },
    {
      value: trREL,
    },
  ).value as any;
};

export default TableRow;
