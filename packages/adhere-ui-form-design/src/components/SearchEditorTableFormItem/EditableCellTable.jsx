import React, { useMemo } from 'react';

import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { StateTable, EditorCellTable as SuperTable } from './Components';

export { SuperTable };

/**
 * EditableCellTable
 * @description 单元格可编辑表格组件，支持在表单中嵌入可编辑的表格，每个单元格可单独编辑
 * @param {Class} subClass - 子类组件，用于扩展表格功能
 * @param {Record<string, any>[]} value - 默认列表数据
 * @param {(value: Record<string, any>[]) => void} onChange - 数据变化时的回调函数
 * @param {ReactElement | string} title - 表格标题
 * @param {string} titleToolTip - 标题提示文本
 * @return {React.JSX.Element}
 */
function EditableCellTable({ subClass, value, onChange, title, titleToolTip }) {
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
