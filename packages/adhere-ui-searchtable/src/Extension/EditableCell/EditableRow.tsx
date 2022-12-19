import { Form } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React, { FC, createContext } from 'react';

import { EditableRowProps } from '../../types';

export const EditableContext = createContext<FormInstance<any> | null>(null);

/**
 * EditableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
const EditableRow: FC<EditableRowProps> = ({
  record = {},
  columns = [],
  rowIndex,
  rowConfig,
  rowKey,
  ...restProps
}) => {
  const [form] = Form.useForm();

  if ((columns || []).some((column) => !!column?.$editable?.editable)) {
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...(restProps || {})} />
        </EditableContext.Provider>
      </Form>
    );
  }

  return <tr {...(restProps || {})} />;
};

export default EditableRow;
