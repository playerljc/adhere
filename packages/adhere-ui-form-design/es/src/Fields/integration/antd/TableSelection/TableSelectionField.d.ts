import React, { type CSSProperties } from 'react';
import type { TableDataRow } from '../../../../utils/tableDataSource';
import { type TableSelectionFieldConfig } from './resolveTableSelectionFieldProps';
import './index.less';
export type TableSelectionFieldProps = TableSelectionFieldConfig & {
    value?: React.Key[];
    onChange?: (value: React.Key[]) => void;
    dataSource?: TableDataRow[];
    isMobile?: boolean;
    lang?: string;
    style?: CSSProperties;
    className?: string;
    actions?: Record<string, (...args: any[]) => any>;
};
declare const TableSelectionField: React.FC<TableSelectionFieldProps>;
export default TableSelectionField;
