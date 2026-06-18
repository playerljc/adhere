import React, { type CSSProperties } from 'react';
import type { TreeDataNode } from '../../../../utils/treeDataSource';
import { type TreeSelectionFieldConfig } from './resolveTreeSelectionFieldProps';
import './index.less';
export type TreeSelectionCheckedKeys = React.Key[] | {
    checked: React.Key[];
    halfChecked: React.Key[];
};
export type TreeSelectionFieldProps = TreeSelectionFieldConfig & {
    value?: TreeSelectionCheckedKeys;
    onChange?: (value: TreeSelectionCheckedKeys) => void;
    treeData?: TreeDataNode[];
    loading?: boolean;
    lang?: string;
    style?: CSSProperties;
    className?: string;
    actions?: Record<string, (...args: any[]) => any>;
};
declare const TreeSelectionField: React.FC<TreeSelectionFieldProps>;
export default TreeSelectionField;
