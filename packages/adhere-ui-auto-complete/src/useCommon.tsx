import { Empty, Spin } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';

import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import type { UseCommon } from './types';

const { memoized } = WatchMemoized;
const selectorPrefix = 'adhere-ui-auto-complete';

const useCommonInternal: UseCommon = ({ renderLoading, emptyContent, loadData }) => {
  const [fetching, setFetching] = useState(false);

  const [open, setOpen] = useState(false);

  const fetchLoading = useMemo(
    () =>
      renderLoading?.() ?? (
        <div className={`${selectorPrefix}-loading`}>
          <Spin size="large" />
        </div>
      ),
    [renderLoading],
  );

  const empty = useMemo(
    () => emptyContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />,
    [emptyContent],
  );

  const onInputMemo = useCallback(
    memoized.createMemoFun((_kw) => {
      setFetching(true);

      // 输入的不是空
      loadData?.(_kw).then(() => {
        setFetching(false);
      });
    }),
    [loadData],
  );

  /**
   * onClear
   */
  function onClear() {
    loadData?.('').then(() => {
      setFetching(false);
    });
  }

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
