import { Form } from 'antd';
import { FormListFieldData, FormListOperation } from 'antd/es/form';
import type { FormInstance } from 'antd/es/form';
import React, { FC, ReactNode, createContext, useContext } from 'react';

import SearchTable, { SearchTableContext } from '../../SearchTable';
import { EditableRowProps } from '../../types';

export const EditableContext = createContext<FormInstance<any> | null>(null);

/**
 * EditableTableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
const EditableTableRow: FC<EditableRowProps> = ({
  record = {},
  columns = [],
  rowIndex,
  rowKey,
  rowConfig,
  ...restProps
}) => {
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

  const nameItemPath = [context?.formList?.fields[rowIndex]?.name as number, rowKey];

  if ((columns || []).some((column) => !!column?.$editable?.editable)) {
    return (
      <>
        <Form.Item name={nameItemPath} hidden />
        <tr {...(restProps || {})} />
      </>
    );
  }

  return <tr {...(restProps || {})} />;
};

export default EditableTableRow;
