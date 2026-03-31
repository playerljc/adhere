import React, { useMemo } from 'react';

import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { StateTable, EditableRowControlTable as SuperTable } from './Components';

export { SuperTable };

/**
 * EditableRowControlTable
 * @description 行控制可编辑表格组件，支持在表单中嵌入可编辑的表格，整行进入编辑模式
 * @param {Class} subClass - 子类组件，用于扩展表格功能
 * @param {Record<string, any>[]} value - 默认列表数据
 * @param {(value: Record<string, any>[]) => void} onChange - 数据变化时的回调函数
 * @param {ReactElement | string} title - 表格标题
 * @param {string} titleToolTip - 标题提示文本
 * @return {React.JSX.Element}
 */
function EditableRowControlTable({ subClass, value, onChange, title }) {
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
