import React, { type CSSProperties } from 'react';
import type { FieldProps } from '../../../../types';
export type TableSelectionDesignBodyProps = {
    fieldProps: FieldProps;
    style?: CSSProperties;
    lang: string;
    isMobile?: boolean;
    actions?: Record<string, (...args: any[]) => any>;
    value?: React.Key[];
    onChange?: (value: React.Key[]) => void;
};
declare const TableSelectionDesignBody: React.FC<TableSelectionDesignBodyProps>;
export default TableSelectionDesignBody;
