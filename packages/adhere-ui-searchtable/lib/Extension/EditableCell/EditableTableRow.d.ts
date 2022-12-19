import type { FormInstance } from 'antd/es/form';
import React, { FC } from 'react';
import { EditableRowProps } from '../../types';
export declare const EditableContext: React.Context<FormInstance<any> | null>;
/**
 * EditableTableRow
 * @description 行编辑
 *
 * record: any;
 * rowIndex: number;
 * columns: any[];
 */
declare const EditableTableRow: FC<EditableRowProps>;
export default EditableTableRow;
