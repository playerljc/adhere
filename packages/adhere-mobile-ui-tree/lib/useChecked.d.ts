import type { TreeData, TreeDataItem } from './types';
/**
 * useChecked
 */
declare function useChecked(): {
    handleCheck: ({ node, checked, checkedKeys, checkStrictly, next }: {
        node: any;
        checked: any;
        checkedKeys: any;
        checkStrictly: any;
        next: any;
    }) => void;
    updateParentChecked: ({ key, checked, checkedKeys, parentId, childrenData, next }: {
        key: any;
        checked: any;
        checkedKeys: any;
        parentId: any;
        childrenData: any;
        next: any;
    }) => void;
    existsCheckableNodeInParentChildren: (children?: Readonly<TreeDataItem[]>) => boolean;
    getDefaultCheckedKeysWithCheckStrictly: (treeData: TreeData, defaultCheckedKeys: string[]) => string[];
};
export default useChecked;
