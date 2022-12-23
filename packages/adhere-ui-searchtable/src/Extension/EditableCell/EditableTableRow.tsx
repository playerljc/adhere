import { Form } from 'antd';
import { FormListFieldData, FormListOperation } from 'antd/es/form';
import type { FormInstance } from 'antd/es/form';
import React, { ReactNode, useContext } from 'react';

import SearchTable, { SearchTableContext } from '../../SearchTable';
import { TableRowComponentReducer } from '../../types';

/**
 * EditableTableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
const EditableTableRow: TableRowComponentReducer = (
  { record = {}, columns = [], rowIndex, rowKey, rowConfig },
  trREL,
) => {
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

  let res = trREL;

  const nameItemPath = [context?.formList?.fields[rowIndex]?.name as number, rowKey];

  if ((columns || []).some((column) => !!column?.$editable?.editable)) {
    res = React.cloneElement(
      trREL,
      trREL.props,
      [<Form.Item name={nameItemPath} hidden />, trREL.props.children].flat(),
    );
  }

  return () => res;
};

export default EditableTableRow;