import React from 'react';
import type { TableRowComponentProps } from '../../types';
/**
 * TableRow
 * @description 表格行组件（virtual 模式必须透传 ref 到 tr）
 */
declare const TableRow: React.ForwardRefExoticComponent<Omit<TableRowComponentProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
export default TableRow;
