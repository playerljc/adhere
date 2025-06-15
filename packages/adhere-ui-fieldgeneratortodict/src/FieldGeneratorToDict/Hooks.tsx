import { useMount, useUpdateEffect } from 'ahooks';
import cloneDeep from 'lodash.clonedeep';
import { useCallback, useState } from 'react';

import type {
  AsyncTreeLeafSelectProps as MobileAsyncTreeLeafSelectProps,
  AsyncTreeSelectProps as MobileAsyncTreeSelectProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import type { TreeAutoCompleteProps as MobileTreeAutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete/es/types';
import { TreeDataSimpleModeFromObject } from '@baifendian/adhere-mobile-ui-tree/es/types';
import type {
  AsyncCascaderProps,
  AsyncTreeSelectProps,
  PagingWrapperProps,
} from '@baifendian/adhere-ui-anthoc/es/types';
import type {
  AutoCompleteProps,
  TreeAutoCompleteProps,
} from '@baifendian/adhere-ui-auto-complete/es/types';
import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';

import type { UseDictParams } from '../types';

/**
 * useDict
 * @description 静态字典处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export function useDict<D>({ dictName, cascadeParams, onDataSourceChange }: UseDictParams<D>): D {
  const dictValue = Dict.value[dictName]?.value;

  // @ts-ignore
  const [dataSource, setDataSource] = useState<D>([]);

  function loadData() {
    if (dictValue instanceof Function) {
      setDataSource(dictValue(cascadeParams));
    } else {
      setDataSource(cloneDeep(dictValue));
    }
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [cascadeParams]);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  return dataSource;
}

/**
 * useDynamicDict
 * @description 动态字典处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export function useDynamicDict<D>({
  dictName,
  cascadeParams,
  onDataSourceChange,
}: UseDictParams<D>): D {
  // @ts-ignore
  const [dataSource, setDataSource] = useState<D>([]);

  const dictValue = Dict.value[dictName]?.value;

  function loadData() {
    if (dictValue instanceof Function) {
      dictValue(cascadeParams).then((res) => {
        setDataSource(res);
      });
    } else if (dictValue.then) {
      dictValue.then((res) => {
        setDataSource(cloneDeep(res));
      });
    }
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [cascadeParams]);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  return dataSource;
}

/**
 * useAutoCompleteDict
 * @description AutoComplete处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export function useAutoCompleteDict<D>({
  dictName,
  cascadeParams,
  onDataSourceChange,
}: UseDictParams<D>): { options: any[]; loadData: AutoCompleteProps['loadData'] } {
  const dictValue = Dict.value[dictName]?.value;

  // @ts-ignore
  const [dataSource, setDataSource] = useState<D>([]);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  const loadData = useCallback(
    (_kw) =>
      new Promise<void>((resolve, reject) => {
        dictValue(_kw, cascadeParams)
          .then((res) => {
            setDataSource(res);
            resolve();
          })
          .catch((error) => reject(error));
      }),
    [cascadeParams],
  );

  return {
    // @ts-ignore
    options: dataSource /*[...((dataSource as any) ?? [])]*/,
    loadData,
  };
}

/**
 * useTreeAutoCompleteDict
 * @param dictName
 * @param cascadeParams
 * @param onDataSourceChange
 */
export function useTreeAutoCompleteDict<D>({
  dictName,
  cascadeParams,
  onDataSourceChange,
}: UseDictParams<D>): {
  treeData: TreeAutoCompleteProps['treeData'] | MobileTreeAutoCompleteProps['searchDataSource'];
  loadData: TreeAutoCompleteProps['loadData'] | MobileTreeAutoCompleteProps['loadData'];
} {
  const dictValue = Dict.value[dictName]?.value;

  // @ts-ignore
  const [dataSource, setDataSource] = useState<D>([]);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  const loadData = useCallback(
    (_kw) =>
      new Promise<void>((resolve, reject) => {
        dictValue(_kw, cascadeParams)
          .then((res) => {
            setDataSource(res);
            resolve();
          })
          .catch((error) => reject(error));
      }),
    [cascadeParams],
  );

  return {
    // @ts-ignore
    treeData: dataSource,
    loadData,
  };
}

/**
 * usePaging
 * @description 分页的处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export function usePaging<D>({
  dictName,
  cascadeParams,
  onDataSourceChange,
}: UseDictParams<D>): PagingWrapperProps<any>['loadData'] {
  const dictValue = Dict.value[dictName]?.value;

  // @ts-ignore
  return useCallback(
    (page, limit) =>
      dictValue(page, limit, cascadeParams).then((res) => {
        onDataSourceChange?.(res, { type: 'paging', info: { page, limit } });
        return res;
      }),
    [dictName, onDataSourceChange, cascadeParams],
  );
}

/**
 * useAutoCompletePaging
 * @description AutoComplete的分页处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export function useAutoCompletePaging<D>({
  dictName,
  cascadeParams,
  onDataSourceChange,
}: UseDictParams<D>): (
  page: number,
  limit: number,
  kw?: string,
) => Promise<{
  totalCount: number;
  data: any[];
}> {
  const dictValue = Dict.value[dictName]?.value;

  return useCallback<any>(
    (page, limit, kw) =>
      dictValue(page, limit, kw, cascadeParams).then((res) => {
        onDataSourceChange?.(res, { type: 'paging', info: { page, limit } });
        return res;
      }),
    [dictName, onDataSourceChange, cascadeParams],
  );
}

/**
 * useAsyncTree
 * @description TreeSelece或Cascader的Async
 * @param {string} dictName 字典名称
 */
export function useAsyncTree<D>({
  dictName,
}: UseDictParams<D>):
  | AsyncTreeSelectProps['fetchData']
  | AsyncCascaderProps['fetchData']
  | MobileAsyncTreeLeafSelectProps['loadData']
  | MobileAsyncTreeSelectProps['loadData'] {
  const dictValue = Dict.value[dictName]?.value;

  return useCallback<any>(dictValue, [dictName]);
}

/**
 * useMobileAsyncTree
 * @param {string} dictName
 * @param {boolean} treeDataSimpleMode
 */
export function useMobileAsyncTree({ dictName, treeDataSimpleMode }) {
  const [treeData, setTreeData] = useState([]);

  const dictValue = Dict.value[dictName]?.value;

  /**
   * normalData
   * @description 非简单数据(正常)
   * @param _nodeData
   * @param resultTreeData
   */
  function normalData({ _nodeData, resultTreeData }) {
    setTreeData((_treeData) => {
      if (!_nodeData) {
        return resultTreeData;
      }

      // @ts-ignore
      const item = Util.findNodeByKey(_treeData, _nodeData.key, { keyAttr: 'key' });

      if (item) {
        item.children = resultTreeData ?? [];
      }

      return cloneDeep(_treeData);
    });
  }

  /**
   * simpleData
   * @description 简单数据(拉平数据)
   * @param _nodeData
   * @param resultTreeData
   * @param config
   */
  function simpleData({
    _nodeData,
    resultTreeData,
    config: { parentIdAttr, rootParentId, keyAttr },
  }) {
    setTreeData((_treeData) => {
      function treeToArray(_originTreeData) {
        return Util.treeToArray(
          _originTreeData,
          {
            parentIdAttr,
            rootParentId,
          },
          keyAttr,
        );
      }

      if (!_nodeData) {
        return treeToArray(resultTreeData);
      }

      // @ts-ignore
      const item = Util.findNodeByKey(_treeData, _nodeData.key, { keyAttr });

      if (item) {
        item.children = resultTreeData ?? [];
      }

      const data = treeToArray(_treeData);

      return cloneDeep(data);
    });
  }

  const loadData = useCallback(
    (_nodeData) => {
      return dictValue(_nodeData).then((resultTreeData) => {
        if (['boolean', 'object'].includes(typeof treeDataSimpleMode)) {
          // 简单的数据
          if (typeof treeDataSimpleMode === 'boolean') {
            if (treeDataSimpleMode as boolean) {
              // 简单数据
              simpleData({
                _nodeData,
                resultTreeData,
                config: {
                  parentIdAttr: 'pId',
                  rootParentId: 0,
                  keyAttr: 'key',
                },
              });
            }
            //
            else {
              // 非简单数据
              normalData({ _nodeData, resultTreeData });
            }
          }
          //
          else {
            // 简单数据
            simpleData({
              _nodeData,
              resultTreeData,
              config: treeDataSimpleMode as TreeDataSimpleModeFromObject,
            });
          }
        }
        // 非简单数据
        else {
          normalData({ _nodeData, resultTreeData });
        }

        return resultTreeData;
      });
    },
    [dictName],
  );

  useMount(() => {
    loadData(undefined);
  });

  return {
    treeData,
    loadData,
  };
}
