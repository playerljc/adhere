import type { FormInstance } from 'antd/es/form';
import React from 'react';
import type { TableRowComponentReducer } from '../../types';
export declare const EditableContext: React.Context<FormInstance<any> | null>;
/**
 * EditableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
declare const EditableRow: TableRowComponentReducer;
export default EditableRow;
