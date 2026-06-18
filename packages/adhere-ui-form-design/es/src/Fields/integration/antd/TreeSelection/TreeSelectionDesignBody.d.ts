import React, { type CSSProperties } from 'react';
import type { FieldProps } from '../../../../types';
import { type TreeSelectionCheckedKeys } from './TreeSelectionField';
export type TreeSelectionDesignBodyProps = {
    fieldProps: FieldProps;
    style?: CSSProperties;
    lang: string;
    actions?: Record<string, (...args: any[]) => any>;
    value?: TreeSelectionCheckedKeys;
    onChange?: (value: TreeSelectionCheckedKeys) => void;
};
declare const TreeSelectionDesignBody: React.FC<TreeSelectionDesignBodyProps>;
export default TreeSelectionDesignBody;
