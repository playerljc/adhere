import { useMount, useUpdateEffect } from 'ahooks';
import { useCallback, useState } from 'react';

import type { PagingWrapperProps } from '@baifendian/adhere-ui-anthoc/es/types';
import { AsyncCascaderProps, AsyncTreeSelectProps } from '@baifendian/adhere-ui-anthoc/src/types';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import Dict from '@baifendian/adhere-util-dict';

import { UseDictParams } from '../types';
import { deepDep } from './util';

/**
 * useDict
 * @description 静态字典处理
 * @param {string} dictName 字典名称
 * @param {Object} cascadeParams 级联参数
 * @param {Function} onDataSourceChange dataSource改变
 */
export function useDict<D>({ dictName, cascadeParams, onDataSourceChange }: UseDictParams<D>): D {
  const dictValue = Dict.value[dictName].value;

  // @ts-ignore
  const [dataSource, setDataSource] = useState<D>([]);

  function loadData() {
    if (dictValue instanceof Function) {
      setDataSource(dictValue(cascadeParams));
    } else {
      setDataSource(dictValue);
    }
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [deepDep(cascadeParams)]);

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

  const dictValue = Dict.value[dictName].value;

  function loadData() {
    if (dictValue instanceof Function) {
      dictValue(cascadeParams).then((res) => {
        setDataSource(res);
      });
    } else if (dictValue.then) {
      dictValue.then((res) => {
        setDataSource(res);
      });
    }
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [deepDep(cascadeParams)]);

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
  const dictValue = Dict.value[dictName].value;

  // @ts-ignore
  const [dataSource, setDataSource] = useState<D>([]);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  return {
    options: [...((dataSource as any) ?? [])],
    loadData: (_kw) =>
      new Promise((resolve, reject) => {
        dictValue(_kw, cascadeParams)
          .then((res) => {
            setDataSource(res);
            resolve();
          })
          .catch((error) => reject(error));
      }),
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
  const dictValue = Dict.value[dictName].value;

  // @ts-ignore
  return useCallback(
    () => (page, limit) =>
      dictValue(page, limit, cascadeParams).then((res) => {
        onDataSourceChange?.(res);
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
  const dictValue = Dict.value[dictName].value;

  return useCallback<any>(
    () => (page, limit, kw) =>
      dictValue(page, limit, kw, cascadeParams).then((res) => {
        onDataSourceChange?.(res);
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
}: UseDictParams<D>): AsyncTreeSelectProps['fetchData'] | AsyncCascaderProps['fetchData'] {
  const dictValue = Dict.value[dictName].value;

  return useCallback<any>(() => dictValue, [dictName]);
}
