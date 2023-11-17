import type { PagingWrapperProps } from '@baifendian/adhere-ui-anthoc/es/types';
import { AsyncCascaderProps, AsyncTreeSelectProps } from '@baifendian/adhere-ui-anthoc/src/types';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import { UseDictParams } from '../types';
/**
 * useDict
 * @description 静态字典处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export declare function useDict<D>({ dictName, cascadeParams, onDataSourceChange }: UseDictParams<D>): D;
/**
 * useDynamicDict
 * @description 动态字典处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export declare function useDynamicDict<D>({ dictName, cascadeParams, onDataSourceChange, }: UseDictParams<D>): D;
/**
 * useAutoCompleteDict
 * @description AutoComplete处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export declare function useAutoCompleteDict<D>({ dictName, cascadeParams, onDataSourceChange, }: UseDictParams<D>): {
    options: any[];
    loadData: AutoCompleteProps['loadData'];
};
/**
 * usePaging
 * @description 分页的处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export declare function usePaging<D>({ dictName, cascadeParams, onDataSourceChange, }: UseDictParams<D>): PagingWrapperProps<any>['loadData'];
/**
 * useAutoCompletePaging
 * @description AutoComplete的分页处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export declare function useAutoCompletePaging<D>({ dictName, cascadeParams, onDataSourceChange, }: UseDictParams<D>): (page: number, limit: number, kw?: string) => Promise<{
    totalCount: number;
    data: any[];
}>;
/**
 * useAsyncTree
 * @description TreeSelece或Cascader的Async
 * @param {string} dictName 字典名称
 */
export declare function useAsyncTree<D>({ dictName, }: UseDictParams<D>): AsyncTreeSelectProps['fetchData'] | AsyncCascaderProps['fetchData'];
