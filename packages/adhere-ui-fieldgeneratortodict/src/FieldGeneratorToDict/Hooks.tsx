import { useMount, useUpdateEffect } from 'ahooks';
import cloneDeep from 'lodash.clonedeep';
import { useCallback, useRef, useState } from 'react';

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
 * 将 cascadeParams 转为稳定签名，避免调用方每次传入新对象引用时重复加载
 */
function getParamsSignature(value: unknown): string {
  try {
    return JSON.stringify(value ?? null);
  } catch {
    return '';
  }
}

/**
 * useDict
 * @description 静态字典处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export function useDict<D>({ dictName, cascadeParams, onDataSourceChange }: UseDictParams<D>): D {
  const dictValue = Dict.value[dictName]?.value;
  const cascadeParamsSignature = getParamsSignature(cascadeParams);

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
  }, [cascadeParamsSignature]);

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
  const requestIdRef = useRef(0);
  const cascadeParamsSignature = getParamsSignature(cascadeParams);

  // Intentionally read Dict.value inside loadData rather than at render time.
  // For handlers that return a Promise directly (not a function), accessing
  // Dict.value[dictName] triggers initValue → handler() → HTTP request immediately.
  // Deferring to an effect ensures the request fires only on mount / cascadeParams
  // change, not on every render.
  function loadData() {
    const requestId = ++requestIdRef.current;
    const dictValue = Dict.value[dictName]?.value;

    if (dictValue instanceof Function) {
      dictValue(cascadeParams).then((res) => {
        if (requestId === requestIdRef.current) {
          setDataSource(res);
        }
      });
    } else if (dictValue?.then) {
      dictValue.then((res) => {
        if (requestId === requestIdRef.current) {
          setDataSource(cloneDeep(res));
        }
      });
    }
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [cascadeParamsSignature]);

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
  // @ts-ignore
  const [dataSource, setDataSource] = useState<D>([]);
  const requestIdRef = useRef(0);
  const cascadeParamsSignature = getParamsSignature(cascadeParams);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  const loadData = useCallback(
    (_kw) =>
      new Promise<void>((resolve, reject) => {
        const requestId = ++requestIdRef.current;
        const dictValue = Dict.value[dictName]?.value;

        dictValue(_kw, cascadeParams)
          .then((res) => {
            if (requestId === requestIdRef.current) {
              setDataSource(res);
            }
            resolve();
          })
          .catch((error) => reject(error));
      }),
    [dictName, cascadeParamsSignature],
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
  // @ts-ignore
  const [dataSource, setDataSource] = useState<D>([]);
  const requestIdRef = useRef(0);
  const cascadeParamsSignature = getParamsSignature(cascadeParams);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  const loadData = useCallback(
    (_kw) =>
      new Promise<void>((resolve, reject) => {
        const requestId = ++requestIdRef.current;
        const dictValue = Dict.value[dictName]?.value;

        dictValue(_kw, cascadeParams)
          .then((res) => {
            if (requestId === requestIdRef.current) {
              setDataSource(res);
            }
            resolve();
          })
          .catch((error) => reject(error));
      }),
    [dictName, cascadeParamsSignature],
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
  const cascadeParamsSignature = getParamsSignature(cascadeParams);

  // @ts-ignore
  return useCallback(
    (page, limit) => {
      const dictValue = Dict.value[dictName]?.value;

      // 分页字典约定：(page, limit, cascadeParams)，kw 仅用于 AutoComplete 分页
      return dictValue(page, limit, cascadeParams).then((res) => {
        onDataSourceChange?.(res, { type: 'paging', info: { page, limit } });
        return res;
      });
    },
    [dictName, onDataSourceChange, cascadeParamsSignature],
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
  const cascadeParamsSignature = getParamsSignature(cascadeParams);

  return useCallback<any>(
    (page, limit, kw) => {
      const dictValue = Dict.value[dictName]?.value;

      return dictValue(page, limit, kw, cascadeParams).then((res) => {
        onDataSourceChange?.(res, { type: 'paging', info: { page, limit } });
        return res;
      });
    },
    [dictName, onDataSourceChange, cascadeParamsSignature],
  );
}

/**
 * useAsyncTree
 * @description TreeSelece或Cascader的Async
 * @param {string} dictName 字典名称
 * @param cascadeParams
 */
export function useAsyncTree<D>({
  dictName,
  cascadeParams,
}: UseDictParams<D>):
  | AsyncTreeSelectProps['fetchData']
  | AsyncCascaderProps['fetchData']
  | MobileAsyncTreeLeafSelectProps['loadData']
  | MobileAsyncTreeSelectProps['loadData'] {
  const cascadeParamsSignature = getParamsSignature(cascadeParams);

  return useCallback<any>(
    (...params) => {
      const dictValue = Dict.value[dictName]?.value;

      return dictValue(...params, cascadeParams);
    },
    [dictName, cascadeParamsSignature],
  );
}

/**
 * useMobileAsyncTree
 * @param {string} dictName
 * @param {boolean} treeDataSimpleMode
 */
export function useMobileAsyncTree({ dictName, treeDataSimpleMode }) {
  const [treeData, setTreeData] = useState<any[]>([]);

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

      const nextTreeData = cloneDeep(_treeData);
      // @ts-ignore
      const item = Util.findNodeByKey(nextTreeData, _nodeData.key, { keyAttr: 'key' });

      if (item) {
        item.children = resultTreeData ?? [];
      }

      return nextTreeData;
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

      const nextTreeData = cloneDeep(_treeData);
      // @ts-ignore
      const item = Util.findNodeByKey(nextTreeData, _nodeData.key, { keyAttr });

      if (item) {
        item.children = resultTreeData ?? [];
      }

      return treeToArray(nextTreeData);
    });
  }

  const loadData = useCallback(
    (_nodeData) => {
      const dictValue = Dict.value[dictName]?.value;

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
    [dictName, treeDataSimpleMode],
  );

  useMount(() => {
    loadData(undefined);
  });

  return {
    treeData,
    loadData,
  };
}
