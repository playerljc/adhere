import type { TreeData, TreeDataItemExtra } from './types';
/**
 * useUtil
 */
declare function useUtil(): {
    getTreeNodesByKeys: ({ treeData, keys, }: {
        treeData: TreeData;
        keys: string[];
    }) => TreeDataItemExtra[];
    getLeafKeys: ({ treeData, keys }: {
        treeData: TreeData;
        keys: string[];
    }) => string[];
};
export default useUtil;
