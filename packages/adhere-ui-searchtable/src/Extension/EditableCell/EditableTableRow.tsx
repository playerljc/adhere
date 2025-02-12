import { Form } from 'antd';
import type { FormListFieldData, FormListOperation } from 'antd/es/form';
import type { FormInstance } from 'antd/es/form';
import type { ReactElement, ReactNode } from 'react';
import React, { useContext } from 'react';

import type SearchTable from '../../SearchTable';
import { SearchTableContext } from '../../SearchTable';
import type { TableRowComponentReducer } from '../../types';

/**
 * EditableTableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
const EditableTableRow: TableRowComponentReducer = ({ columns = [], rowIndex, rowKey }) => {
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

  return (trREL: ReactElement) => {
    let res = trREL;

    const nameItemPath = [
      context?.editable?.tableEditable?.formList?.fields[rowIndex]?.name as number,
      rowKey,
    ];

    if ((columns || []).some((column) => !!column?.$editable?.editable)) {
      res = React.cloneElement(
        trREL,
        trREL.props,
        [<Form.Item name={nameItemPath} hidden />, trREL.props.children].flat(),
      );
    }

    return res;
  };
};

export default EditableTableRow;
