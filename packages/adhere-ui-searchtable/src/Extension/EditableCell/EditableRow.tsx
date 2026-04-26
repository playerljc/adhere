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
    console.log('EditableRow1', rowIndex);
    context?.context?.setEditableRowForm(rowIndex, form);
  }, []);

  useEffect(() => {
    console.log('EditableRow2', rowIndex);

    context?.context?.setEditableRowForm(rowIndex, form);

    return () => {
      // rowIndex 变更或组件卸载时，清除当前索引的注册，避免 Map 中残留脏数据
      context?.context?.deleteEditableRowForm(rowIndex);
    };
  }, [rowIndex]);

  return (trREL: React.ReactElement<any>) => {
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
