import React from 'react';
import type { TableCellComponentProps } from '../../types';
/**
 * TableCell
 * @description 表格列组件（virtual 模式必须透传 ref 到 td）
 * @param {TableCellComponentProps} props
 */
declare const TableCell: React.ForwardRefExoticComponent<Omit<TableCellComponentProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
export default TableCell;
