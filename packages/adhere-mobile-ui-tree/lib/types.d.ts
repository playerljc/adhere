import type { CSSProperties, ReactNode } from 'react';
export interface TreeDataItem {
    key: string;
    title?: ReactNode;
    disabled?: boolean;
    selectable?: boolean;
    checkable?: boolean;
    children?: TreeData;
}
export type TreeData = TreeDataItem[];
export interface TreeProps {
    className?: string;
    style?: CSSProperties;
    treeData?: TreeData;
    checkable?: boolean;
    checkedKeys?: string[];
    expandAll?: boolean;
    expandedKeys?: string[];
    selectedKeys?: string[];
    switcherIcon?: (expanded: boolean) => ReactNode;
    titleRender?: (nodeData: TreeDataItem) => ReactNode;
    renderEmpty?: () => ReactNode;
    size?: 'large' | 'middle' | 'small';
    multiple?: boolean;
}
export type TreeNodeProps = {
    level: number;
    isLeaf?: boolean;
    icon?: TreeProps['switcherIcon'];
    titleRender?: TreeProps['titleRender'];
    checkable?: TreeDataItem['checkable'];
    disabled?: TreeDataItem['disabled'];
    id: TreeDataItem['key'];
    selectable?: TreeDataItem['selectable'];
    title?: TreeDataItem['title'];
    children?: TreeDataItem['children'];
};
export interface TreeNodeContext {
    updateParentChecked: (params: {
        key: string;
        checked: boolean;
        checkedKeys: string[];
    }) => void;
}
export interface TreeContext {
    expandedKeys: () => string[];
    selectedKeys: () => string[];
    checkedKeys: () => string[];
    treeData: () => TreeProps['treeData'];
    size(): 'large' | 'middle' | 'small';
    rowGap: () => number;
    multiple: () => boolean;
    checkable: () => boolean;
    setExpandedKeys: Function;
    setSelectedKeys: Function;
    setCheckedKeys: Function;
}
