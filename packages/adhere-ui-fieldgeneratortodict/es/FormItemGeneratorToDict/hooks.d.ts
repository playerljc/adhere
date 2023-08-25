import type { LabelValue, UseTreeSelectLeaf } from '../types';
/**
 * useTreeSelectLeaf
 * @description 处理TreeSelect数据的isLeaf
 * @param dataSource
 */
export declare const useTreeSelectLeaf: UseTreeSelectLeaf;
/**
 * useAsyncTreeSelect
 * @param dictName
 * @param cascadeParams
 * @param onDataSourceChange
 * @param fetchBranch
 * @param defaultId
 * @param value
 * @param treeDataSimpleMode
 */
export declare const useAsyncTreeSelect: (dictName: string, { cascadeParams, onDataSourceChange, fetchBranch, defaultId, value, treeDataSimpleMode }: {
    cascadeParams: any;
    onDataSourceChange: any;
    fetchBranch: any;
    defaultId: any;
    value: any;
    treeDataSimpleMode: any;
}) => {
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
 * @param treeDataSimpleMode
 */
export declare function useAsyncCascader(dictName: string, { cascadeParams, onDataSourceChange, fetchBranch, defaultId, value, treeDataSimpleMode }: {
    cascadeParams: any;
    onDataSourceChange: any;
    fetchBranch: any;
    defaultId: any;
    value: any;
    treeDataSimpleMode: any;
}): {
    treeData: LabelValue[];
    onLoadData: (selectedOptions: any) => Promise<unknown>;
    onChange: (callback: any, params: any) => void;
};
/**
 * useCascaderData
 * @description 拉平数据处理
 * @param {Array} options
 * @param {Object} config
 * @param {boolean} async
 */
export declare function useCascaderData({ options, treeDataSimpleMode, config }: {
    options: any;
    treeDataSimpleMode: any;
    config: any;
}): any;
