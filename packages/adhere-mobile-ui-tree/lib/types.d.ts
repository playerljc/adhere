import type { CSSProperties, MouseEvent, NamedExoticComponent, ReactNode, TouchEvent } from 'react';
import TreeSelect from './TreeSelect';
export type TreeDataItem = Readonly<{
    key: string;
    title?: ReactNode;
    disabled?: boolean;
    selectable?: boolean;
    checkable?: boolean;
    props?: any;
    children?: TreeData;
    checkboxWidth?: TreeProps['checkboxWidth'];
    checkboxGap?: TreeProps['checkboxGap'];
    titleGap?: TreeProps['titleGap'];
    iconGap?: TreeProps['iconGap'];
    indent?: TreeProps['indent'];
}>;
export type TreeDataItemExtra = Readonly<Omit<TreeDataItem, 'title' | 'children'> & {
    level: number;
    isLeaf: boolean;
    props?: any;
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
    loadData?: (nodeData: TreeDataItemExtra) => Promise<void>;
    loadedKeys?: string[];
    showSearch?: boolean;
    filterKey?: string;
    rowGap?: number;
    checkboxWidth?: number;
    checkboxGap?: number;
    titleGap?: number;
    iconGap?: number;
    indent?: number;
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
export type TreeSelectProps = Omit<TreeProps, 'className' | 'style' | 'checkable' | 'onCheck'> & {
    className?: string;
    style?: CSSProperties;
    treeClassName?: string;
    treeStyle?: CSSProperties;
    value?: string[];
    onChange?: TreeProps['onCheck'];
};
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
    existsCheckableNodeInParentChildren: () => boolean;
}
export interface TreeContext {
    expandedKeys: () => string[];
    selectedKeys: () => string[];
    checkedKeys: () => string[];
    loadedKeys: () => string[];
    treeData: () => TreeProps['treeData'];
    size(): 'large' | 'middle' | 'small';
    checkStrictly: () => boolean;
    rowGap: () => number;
    multiple: () => boolean;
    checkable: () => boolean;
    icon?: TreeProps['icon'];
    checkboxWidth: () => string;
    checkboxGap: () => string;
    titleGap: () => string;
    iconGap: () => string;
    indent: () => string;
    titleRender?: TreeProps['titleRender'];
    switcherIcon?: TreeProps['switcherIcon'];
    children?: TreeDataItem['children'];
    setExpandedKeys: Function;
    setSelectedKeys: Function;
    setCheckedKeys: Function;
    setLoadedKeys: Function;
    loadData?: TreeProps['loadData'];
    onSelect?: TreeProps['onSelect'];
    onExpand?: TreeProps['onExpand'];
    onCheck?: TreeProps['onCheck'];
}
export type TreeComponent = NamedExoticComponent<TreeProps> & {
    TreeSelect: typeof TreeSelect;
};
