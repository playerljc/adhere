import type { TreeData, TreeDataItem } from './types';
/**
 * 树节点选中状态管理 Hook
 * @returns 包含选中状态管理函数的对象
 */
declare function useChecked(): {
    handleCheck: ({ node, checked, checkedKeys, checkStrictly, next, }: {
        node: TreeDataItem;
        checked: boolean;
        checkedKeys: string[];
        checkStrictly: boolean;
        next?: (params: {
            key: string;
            checked: boolean;
            checkedKeys: string[];
        }) => void;
    }) => void;
    updateParentChecked: ({ key, checked, checkedKeys, parentId, childrenData, next, }: {
        key: string;
        checked: boolean;
        checkedKeys: string[];
        parentId: string;
        childrenData?: TreeDataItem[];
        next?: (params: {
            key: string;
            checked: boolean;
            checkedKeys: string[];
        }) => void;
    }) => void;
    existsCheckableNodeInParentChildren: (children?: Readonly<TreeDataItem[]>) => boolean;
    getDefaultCheckedKeysWithCheckStrictly: (treeData: TreeData, defaultCheckedKeys: string[]) => string[];
};
export default useChecked;
