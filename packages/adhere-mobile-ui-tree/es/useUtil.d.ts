import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import type { TreeData, TreeDataItemExtra } from './types';
/**
 * 树组件工具函数 Hook
 * @returns 包含各种工具函数的对象
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
    getValueWithUnit: (pixel: number | string | undefined | null, media: ConfigProviderProps["media"]) => string | number | undefined | null;
    getValue: (pixel: number, media?: ConfigProviderProps["media"]) => number;
    omitDisabledKeys: (treeData: TreeData, keys: string[]) => string[];
    checkTreeDataSimpleModeFromObject: (treeDataSimpleMode?: Record<string, any>) => boolean;
};
export default useUtil;
