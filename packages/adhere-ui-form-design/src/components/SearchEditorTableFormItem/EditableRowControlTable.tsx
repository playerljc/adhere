import React, { useMemo } from 'react';

import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { StateTable, EditableRowControlTable as SuperTable } from './Components';

export { SuperTable };

export type EditableRowControlTableProps = {
  subClass: any;
  value?: Record<string, any>[];
  onChange?: (value: Record<string, any>[]) => void;
  title?: React.ReactNode;
};

/**
 * EditableRowControlTable
 * @description 行控制可编辑表格组件，支持在表单中嵌入可编辑的表格，整行进入编辑模式
 */
function EditableRowControlTable({ subClass, value, onChange, title }: EditableRowControlTableProps) {
  const List = useMemo(() => StateTable(subClass), [subClass]);

  return (
    <List
      FieldGeneratorToDict={FieldGeneratorToDict}
      isShowExpandSearch
      autoFixed
      fixedHeaderAutoTable
      fixedTableSpaceBetween
      title={title}
      // form
      value={value}
      onChange={onChange}
    />
  );
}

export default EditableRowControlTable;

