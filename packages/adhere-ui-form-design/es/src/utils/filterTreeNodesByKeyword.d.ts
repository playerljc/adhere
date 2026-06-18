import type { TreeDataNode } from './treeDataSource';
export type TreeFieldNames = {
    title: string;
    key: string;
    children: string;
};
export declare const DEFAULT_TREE_FIELD_NAMES: TreeFieldNames;
/**
 * 按关键字过滤树节点：保留命中节点及其祖先链
 */
export declare function filterTreeNodesByKeyword(nodes: TreeDataNode[], keyword: string | undefined | null, fieldNames?: TreeFieldNames): TreeDataNode[];
export type TreeNodeKeyEntry = {
    key: string | number;
    title: string;
    parentKey?: string | number;
};
/**
 * 扁平化树节点，用于搜索后自动展开父节点
 */
export declare function collectTreeNodeKeyEntries(nodes: TreeDataNode[], fieldNames?: TreeFieldNames, parentKey?: string | number): TreeNodeKeyEntry[];
/**
 * 根据关键字收集需要展开的父节点 key
 */
export declare function collectExpandedKeysForKeyword(nodes: TreeDataNode[], keyword: string | undefined | null, fieldNames?: TreeFieldNames): (string | number)[];
