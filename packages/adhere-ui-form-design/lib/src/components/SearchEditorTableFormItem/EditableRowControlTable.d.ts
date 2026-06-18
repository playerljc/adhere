import React from 'react';
import type { FieldProps } from '../../types';
import { EditableRowControlTable as SuperTable } from './Components';
export { SuperTable };
export type EditableRowControlTableProps = {
    subClass: any;
    fieldProps?: FieldProps;
    value?: Record<string, any>[];
    onChange?: (value: Record<string, any>[]) => void;
};
/**
 * EditableRowControlTable
 * @description 行控制可编辑表格组件，支持在表单中嵌入可编辑的表格，整行进入编辑模式
 */
declare function EditableRowControlTable({ subClass, fieldProps, value, onChange, }: EditableRowControlTableProps): React.JSX.Element;
export default EditableRowControlTable;
