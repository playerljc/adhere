import { Form } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { ReactElement, useContext, useEffect } from 'react';
import React, { createContext } from 'react';

import SearchTable, { SearchTableContext } from '../../SearchTable';
import type { TableRowComponentReducer } from '../../types';

export const EditableContext = createContext<FormInstance<any> | null>(null);

/**
 * EditableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
const EditableRow: TableRowComponentReducer = ({ columns = [], rowIndex }) => {
  const [form] = Form.useForm();

  // 上下文
  const context = useContext<{
    context: SearchTable;
  } | null>(SearchTableContext);

  useEffect(() => {
    // 设置行的form句柄
    context?.context?.setEditableRowForm(rowIndex, form);
  }, []);

  return (trREL: ReactElement) => {
    let res = trREL;

    if ((columns || []).some((column) => !!column?.$editable?.editable)) {
      res = React.cloneElement(trREL, trREL.props, [
        <Form form={form} component={false}>
          <EditableContext.Provider value={form}>
            {
              // @ts-ignore
              trREL?.props?.children
            }
          </EditableContext.Provider>
        </Form>,
      ]);
    }

    return res;
  };
};

export default EditableRow;
