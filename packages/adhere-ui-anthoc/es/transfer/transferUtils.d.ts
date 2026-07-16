import type { GetProp, TransferProps } from 'antd';
import type { DataNode as TreeDataNode } from 'antd/es/tree';
import type { Key } from 'react';
export type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
export type TransferSelectOptionValue = string | number;
export declare function normalizeTreeData(treeNodes?: TreeDataNode[]): TreeDataNode[];
export declare function flattenTreeData(treeNodes?: TreeDataNode[], result?: TransferItem[]): TransferItem[];
export declare function treeToSelectOptions(treeNodes?: TreeDataNode[], result?: {
    label: string;
    value: TransferSelectOptionValue;
}[]): {
    label: string;
    value: TransferSelectOptionValue;
}[];
export declare function isTransferTreeNodeChecked(selectedKeys: Key[], eventKey: Key): boolean;
export declare function generateTransferTree(treeNodes?: TreeDataNode[], checkedKeys?: TransferProps['targetKeys']): TreeDataNode[];
export declare function toTableTransferDataSource<T extends Record<string, any>>(items: unknown): T[];
