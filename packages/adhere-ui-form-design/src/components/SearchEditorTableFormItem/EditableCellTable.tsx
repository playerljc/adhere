import React, { useMemo } from 'react';

import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { StateTable, EditorCellTable as SuperTable } from './Components';

export { SuperTable };

export type EditableCellTableProps = {
  subClass: any;
  value?: Record<string, any>[];
  onChange?: (value: Record<string, any>[]) => void;
  title?: React.ReactNode;
  titleToolTip?: string;
};

/**
 * EditableCellTable
 * @description 单元格可编辑表格组件，支持在表单中嵌入可编辑的表格，每个单元格可单独编辑
 */
function EditableCellTable({ subClass, value, onChange }: EditableCellTableProps) {
  const List = useMemo(() => StateTable(subClass), [subClass]);

  return (
    <List
      FieldGeneratorToDict={FieldGeneratorToDict}
      isShowExpandSearch
      autoFixed
      fixedHeaderAutoTable
      fixedTableSpaceBetween
      value={value}
      onChange={onChange}
    />
  );
}

export default EditableCellTable;

