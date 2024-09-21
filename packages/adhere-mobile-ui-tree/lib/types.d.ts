import type { CSSProperties, MouseEvent, ReactNode, TouchEvent } from 'react';
export type TreeDataItem = Readonly<{
    key: string;
    title?: ReactNode;
    disabled?: boolean;
    selectable?: boolean;
    checkable?: boolean;
    children?: TreeData;
}>;
export type TreeDataItemExtra = Readonly<Omit<TreeDataItem, 'title' | 'children'> & {
    level: number;
    isLeaf: boolean;
}>;
export type TreeData = Readonly<TreeDataItem[]>;
export interface TreeProps {
    className?: string;
    style?: CSSProperties;
    treeData?: TreeData;
    checkable?: boolean;
    checkedKeys?: string[];
    expandAll?: boolean;
    expandedKeys?: string[];
    selectedKeys?: string[];
    switcherIcon?: (expanded: boolean, nodeData: TreeDataItemExtra) => ReactNode;
    titleRender?: (nodeData: TreeDataItemExtra) => ReactNode;
    renderEmpty?: () => ReactNode;
    size?: 'large' | 'middle' | 'small';
    multiple?: boolean;
    checkStrictly?: boolean;
    icon?: (nodeData: TreeDataItemExtra) => ReactNode;
    onSelect?: (selectedKeys: string[], e: {
        selected: boolean;
        selectedNodes: TreeDataItemExtra[];
        node: TreeDataItemExtra;
        event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>;
    }) => void;
    onExpand?: (expandedKeys: string[], e: {
        expanded: boolean;
        expandedNodes: TreeDataItemExtra[];
        node: TreeDataItemExtra;
        event: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>;
    }) => void;
    onCheck?: (checkedKeys: string[], e: {
        checked: boolean;
        checkedNodes: TreeDataItemExtra[];
        node: TreeDataItemExtra;
    }) => void;
}
export type TreeNodeProps = TreeDataItem & {
    level: number;
    isLeaf?: boolean;
    id: TreeDataItem['key'];
};
export interface TreeNodeContext {
    updateParentChecked?: (params: {
        key: string;
        checked: boolean;
        checkedKeys: string[];
    }) => void;
    hasCheckableNodeInParentChildren: () => boolean;
}
export interface TreeContext {
    expandedKeys: () => string[];
    selectedKeys: () => string[];
    checkedKeys: () => string[];
    treeData: () => TreeProps['treeData'];
    size(): 'large' | 'middle' | 'small';
    checkStrictly: () => boolean;
    rowGap: () => number;
    multiple: () => boolean;
    checkable: () => boolean;
    icon?: TreeProps['icon'];
    titleRender?: TreeProps['titleRender'];
    switcherIcon?: TreeProps['switcherIcon'];
    children?: TreeDataItem['children'];
    setExpandedKeys: Function;
    setSelectedKeys: Function;
    setCheckedKeys: Function;
    onSelect?: TreeProps['onSelect'];
    onExpand?: TreeProps['onExpand'];
    onCheck?: TreeProps['onCheck'];
}
