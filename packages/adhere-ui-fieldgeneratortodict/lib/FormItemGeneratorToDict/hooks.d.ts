import { LabelValue } from '../types';
/**
 * useTreeSelectLeaf
 * @description 处理TreeSelect数据的leaf
 * @param dataSource
 */
export declare function useTreeSelectLeaf(dataSource: any): LabelValue[];
/**
 * useAsyncTreeSelect
 * @param dictName
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param defaultId
 * @param value
 */
export declare function useAsyncTreeSelect(dictName: string, { cascadeParams, onDataSourceChange, fetchBranch, defaultId, value }: {
    cascadeParams: any;
    onDataSourceChange: any;
    fetchBranch: any;
    defaultId: any;
    value: any;
}): {
    treeData: LabelValue[];
    onLoadData: ({ value: id }: {
        value: any;
    }) => Promise<unknown>;
    onChange: (callback: any, params: any) => void;
};
/**
 * useAsyncCascader
 * @param dictName
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param defaultId
 * @param value
 */
export declare function useAsyncCascader(dictName: string, { cascadeParams, onDataSourceChange, fetchBranch, defaultId, value }: {
    cascadeParams: any;
    onDataSourceChange: any;
    fetchBranch: any;
    defaultId: any;
    value: any;
}): {
    treeData: LabelValue[];
    onLoadData: (selectedOptions: any) => Promise<unknown>;
    onChange: (callback: any, params: any) => void;
};
