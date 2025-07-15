import { Empty, Spin } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';

import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import type { UseCommon, UseCommonParams, UseCommonReturn } from './types';

const { memoized } = WatchMemoized;

/** 选择器前缀类名 */
const selectorPrefix = 'adhere-ui-auto-complete';

/**
 * 通用 Hook，提供 AutoComplete 和 TreeAutoComplete 组件的共享逻辑
 * 
 * @param params - Hook 参数对象
 * @param params.renderLoading - 自定义加载状态渲染函数
 * @param params.emptyContent - 空状态内容
 * @param params.loadData - 数据加载函数
 * @returns 返回包含状态和方法的对象
 * 
 * @example
 * ```tsx
 * const {
 *   fetching,
 *   open,
 *   setOpen,
 *   onClear,
 *   onInputMemo
 * } = useCommon({
 *   renderLoading: () => <CustomLoading />,
 *   emptyContent: <CustomEmpty />,
 *   loadData: async (keyword) => {
 *     // 加载数据逻辑
 *   }
 * });
 * ```
 */
const useCommonInternal: UseCommon = ({ renderLoading, emptyContent, loadData }: UseCommonParams): UseCommonReturn => {
  /** 是否正在获取数据 */
  const [fetching, setFetching] = useState<boolean>(false);

  /** 下拉框是否打开 */
  const [open, setOpen] = useState<boolean>(false);

  /**
   * 加载状态组件
   * 如果提供了自定义的 renderLoading 函数，则使用自定义组件
   * 否则使用默认的 Spin 组件
   */
  const fetchLoading = useMemo<React.ReactElement>(() => {
    return renderLoading?.() ?? (
      <div className={`${selectorPrefix}-loading`}>
        <Spin size="large" />
      </div>
    );
  }, [renderLoading]);

  /**
   * 空状态组件
   * 如果提供了自定义的 emptyContent，则使用自定义组件
   * 否则使用 Antd 的 Empty 组件
   */
  const empty = useMemo<React.ReactElement>(() => {
    return emptyContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }, [emptyContent]);

  /**
   * 输入防抖处理函数
   * 使用 memoized 进行性能优化，避免重复创建函数
   * 
   * @param keyword - 搜索关键词
   */
  const onInputMemo = useCallback(
    memoized.createMemoFun((keyword: string) => {
      setFetching(true);

      // 输入的不是空
      loadData?.(keyword).finally(() => {
        setFetching(false);
      });
    }) as (keyword: string) => void,
    [loadData],
  );

  /**
   * 清空回调函数
   * 当用户清空选择时触发，重新加载空数据
   */
  const onClear = useCallback((): void => {
    loadData?.('').finally(() => {
      setFetching(false);
    });
  }, [loadData]);

  return {
    defaultDebounceTimeout: 300,
    fetchLoading,
    empty,
    selectorPrefix,
    fetching,
    open,
    setOpen,
    onClear,
    onInputMemo,
  };
};

export default useCommonInternal;
