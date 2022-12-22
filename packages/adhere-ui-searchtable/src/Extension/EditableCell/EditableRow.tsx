import { Form } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React, { createContext } from 'react';

import { TableRowComponentReducer } from '../../types';

export const EditableContext = createContext<FormInstance<any> | null>(null);

/**
 * EditableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
const EditableRow: TableRowComponentReducer = (
  { record = {}, columns = [], rowIndex, rowConfig, rowKey },
  trREL,
) => {
  const [form] = Form.useForm();

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

  return () => res;
};

export default EditableRow;
