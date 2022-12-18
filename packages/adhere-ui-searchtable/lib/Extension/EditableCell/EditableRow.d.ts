import type { FormInstance } from 'antd/es/form';
import React, { FC } from 'react';
import { EditableRowProps } from '../../types';
export declare const EditableContext: React.Context<FormInstance<any> | null>;
/**
 * EditableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 * $context: SearchTable;
 */
declare const EditableRow: FC<EditableRowProps>;
export default EditableRow;
