import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
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
    getValueWithUnit: (pixel: number | string | undefined | null, media: ConfigProviderProps["media"]) => string | number | null | undefined;
    getValue: (pixel: number, media?: ConfigProviderProps["media"]) => number;
    omitDisabledKeys: (treeData: TreeData, keys: string[]) => string[];
    checkTreeDataSimpleModeFromObject: (treeDataSimpleMode: any) => void;
};
export default useUtil;
