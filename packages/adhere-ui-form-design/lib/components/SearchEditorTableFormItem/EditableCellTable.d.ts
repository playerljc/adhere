import React from 'react';
import { EditorCellTable as SuperTable } from './Components';
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
declare function EditableCellTable({ subClass, value, onChange }: EditableCellTableProps): React.JSX.Element;
export default EditableCellTable;
