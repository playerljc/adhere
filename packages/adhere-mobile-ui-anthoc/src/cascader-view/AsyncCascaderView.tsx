import { useUpdateEffect } from 'ahooks';
import difference from 'lodash/difference';
import React, { memo, useMemo, useRef, useState } from 'react';
import { useImmer } from 'use-immer';

import Util from '@baifendian/adhere-util';

import { treeTransformConfig } from '../TreeFilter';
import type { AsyncCascaderViewProps, DisplayNameInternal } from '../types';
import InternalCascaderView from './InternalCascaderView';

/**
 * InternalAsyncCascader
 */
const InternalAsyncCascader = memo<AsyncCascaderViewProps>(
  ({ loadData, onDataSourceChange, isEveryAsync = false, ...internalCascaderViewProps }) => {
    const [options, setOptions] = useImmer<AsyncCascaderViewProps['options']>(
      internalCascaderViewProps.options,
    );

    // 加载状态
    const [loading, setLoading] = useState<AsyncCascaderViewProps['loading']>(false);

    // 保存上一次的值
    const preValue = useRef<AsyncCascaderViewProps['value']>(
      internalCascaderViewProps.value ?? internalCascaderViewProps.defaultValue,
    );

    // 将树形数据转换为扁平数据
    const flatOptions = useMemo(() => {
      if (internalCascaderViewProps.treeDataSimpleMode) {
        return options;
      }

      // @ts-ignore
      return Util.treeToArray(options ?? [], treeTransformConfig);
    }, [options, internalCascaderViewProps.treeDataSimpleMode]);

    /**
     * findTreeNodeByValue
     * @description 根据 value 查找节点
     * @param _treeData
     * @param _value
     */
    function findTreeNodeByValue(_treeData, _value: string) {
      // 如果是简单模式，直接查找
      if (internalCascaderViewProps.treeDataSimpleMode) {
        return _treeData.find((_option) => _option.value === _value);
      }

      // 递归查找
      function loop(children) {
        for (let i = 0; i < children.length; i++) {
          const item = children[i];

          if (item.value === _value) {
            return item;
          }

          if (item.children) {
            const result = loop(item.children);

            if (result) {
              return result;
            }
          }
        }
      }

      // 如果是树形数据，递归查找
      return loop(_treeData);
    }

    /**
     * deleteChildrenByValue
     * @description 根据 value 删除子节点
     * @param draft 树形数据
     * @param value
     */
    function deleteChildrenByValue(draft, value) {
      const deleteIndexes: number[] = [];

      function loop(parentId) {
        for (let i = 0; i < draft.length; i++) {
          const child = draft[i];

          if (child.pId === parentId) {
            deleteIndexes.push(i);

            loop(child.value);
          }
        }
      }

      loop(value);

      deleteIndexes.forEach((index) => {
        draft.splice(index, 1);
      });
    }

    /**
     * onChange
     * @description onChange
     * @param _values
     * @param extend
     */
    function onChange(_values, extend) {
      // 使用 lodash 的 difference 函数来找出新增的元素
      const addedItems = difference(_values, preValue.current);

      // 如果没有新增的元素，直接返回
      if (addedItems.length <= 0) {
        preValue.current = _values;
        internalCascaderViewProps?.onChange?.(_values, extend);
        return;
      }

      // 只处理第一个，因为只有一个
      const addedItem = flatOptions.find((_option) => _option.value === addedItems[0]);

      // 如果没有找到，直接返回
      if (!addedItem) {
        preValue.current = _values;
        internalCascaderViewProps?.onChange?.(_values, extend);
        return;
      }

      preValue.current = _values;

      let promise: Promise<any> | undefined;

      // 如果是每次都异步加载，直接加载
      if (isEveryAsync) {
        promise = loadData?.(addedItem.value);
      } else {
        // 如果没有加载过，加载
        if (!addedItem.isLoaded) {
          promise = loadData?.(addedItem.value);
        }
      }

      // 如果有 promise
      if (promise) {
        setLoading(true);

        // 执行
        promise
          .then((_options) => {
            setLoading(false);

            // 更新 options
            setOptions((_draft) => {
              // 找到当前的 item
              let currentNode = findTreeNodeByValue(_draft, addedItem.value);

              if (currentNode) {
                currentNode.isLoaded = true;

                // 如果不是简单模式，更新 children
                if (!internalCascaderViewProps.treeDataSimpleMode) {
                  currentNode.children = _options;
                }
                // 如果是简单模式，需要先删除currentNode的所有子节点，然后再添加新的子节点
                else {
                  // 删除当前节点的所有子节点
                  deleteChildrenByValue(_draft, currentNode.value);

                  // 添加新的子节点
                  _draft.push(
                    ..._options.map((_option) => ({ ..._option, pId: currentNode.value })),
                  );
                }
              }
            });
          })
          .catch(() => {
            setLoading(false);
          })
          .finally(() => {
            internalCascaderViewProps?.onChange?.(_values, extend);
          });
      } else {
        internalCascaderViewProps?.onChange?.(_values, extend);
      }
    }

    useUpdateEffect(() => {
      setOptions(internalCascaderViewProps.options);
    }, [internalCascaderViewProps.options]);

    useUpdateEffect(() => {
      preValue.current = internalCascaderViewProps.value ?? internalCascaderViewProps.defaultValue;
    }, [internalCascaderViewProps.defaultValue, internalCascaderViewProps.value]);

    useUpdateEffect(() => {
      onDataSourceChange?.(options);
    }, [options]);

    return (
      <InternalCascaderView
        loading={loading}
        {...internalCascaderViewProps}
        onChange={onChange}
        options={options}
      />
    );
  },
);

const AsyncCascaderView = InternalAsyncCascader as DisplayNameInternal<
  typeof InternalAsyncCascader
>;
AsyncCascaderView.displayName = 'AsyncCascaderView';

export default AsyncCascaderView;
