import React from 'react';
import type { TreeFilterProps } from './types';
export declare const treeTransformConfig: {
    keyAttr: string;
    titleAttr: string;
    parentIdAttr: string;
    rootParentId: number;
};
declare function TreeFilter({ treeData, treeDataSimpleMode, filterProps, wrapperClassName, wrapperStyle, filterWrapperClassName, filterWrapperStyle, bodyWrapperClassName, bodyWrapperStyle, renderEmpty, children, }: TreeFilterProps): React.JSX.Element;
export default TreeFilter;
