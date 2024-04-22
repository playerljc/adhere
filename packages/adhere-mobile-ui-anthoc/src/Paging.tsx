import { useMount, useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import type { Draft } from 'immer';
import React, { cloneElement, useMemo, useRef, useState } from 'react';
import { useImmer } from 'use-immer';

import ScrollLoad from '@baifendian/adhere-ui-scrollload';

import PRSL from './PRSL';
import type { PRSLHandle, PagingProps } from './types';

export const DEFAULT_LIMIT = 20;

/**
 * Paging
 * @param options
 * @param children
 * @param defaultPaging
 * @param isLocal
 * @param onLoad
 * @param onDataSourceChange
 * @param prslProps
 */
function Paging<Option>({
  options,
  children,
  defaultPaging,
  isLocal = true,
  onLoad,
  onDataSourceChange,
  ...prslProps
}: PagingProps<Option>) {
  const pagingRef = useRef<PRSLHandle>();
  const callbackHandler = useRef<Function | null>(null);
  const status = useRef(ScrollLoad.NORMAL);

  const [loading, setLoading] = useState(true);

  const [paging, setPaging] = useImmer<{
    page: number;
    limit: number;
    total?: number;
    data: Option[];
  }>({
    page: 1,
    limit: DEFAULT_LIMIT,
    data: [],
    ...(defaultPaging ?? {}),
  });

  function onRefresh() {
    reset();
  }

  function onLoadMore(callback) {
    if (status.current === ScrollLoad.EMPTY) {
      status.current = ScrollLoad.EMPTY;
      callback(ScrollLoad.EMPTY);
      return;
    }

    callbackHandler.current = callback;

    appendData();
  }

  function resetScrollLoad() {
    const scrollEl = pagingRef?.current?.getScrollEl?.();

    if (scrollEl) {
      scrollEl.scrollTop = 0;
    }

    pagingRef?.current?.hideAll?.();

    callbackHandler.current = null;
    status.current = ScrollLoad.NORMAL;
  }

  function resetPagingToLocal() {
    setPaging((draft) => {
      const newPaging: typeof defaultPaging = defaultPaging ?? {
        page: 1,
        limit: DEFAULT_LIMIT,
      };

      const page = newPaging.page ?? 1;
      const limit = newPaging.limit ?? DEFAULT_LIMIT;

      draft.page = page;
      draft.limit = limit;
      draft.data = (options ?? []).slice(
        (draft.page - 1) * draft.limit,
        draft.page * draft.limit,
      ) as Draft<Option>[];
    });
  }

  function resetPagingToRemote() {
    if (onLoad) {
      onLoad?.(1, paging.limit).then(({ total, data }) => {
        onDataSourceChange?.(1, data);

        setPaging((draft) => {
          const newPaging: typeof defaultPaging = defaultPaging ?? {
            page: 1,
            limit: DEFAULT_LIMIT,
          };

          const page = newPaging.page ?? 1;
          const limit = newPaging.limit ?? DEFAULT_LIMIT;

          draft.page = page;
          draft.limit = limit;
          draft.total = total;
          draft.data = data as Draft<Option>[];
        });
      });
    }
  }

  function resetPaging() {
    if (isLocal) {
      resetPagingToLocal();
    }

    resetPagingToRemote();
  }

  function reset() {
    resetScrollLoad();
    resetPaging();
  }

  function appendDataToLocal() {
    setPaging((draft) => {
      draft.page = draft.page + 1;

      draft.data = [
        ...draft.data,
        ...(options ?? []).slice((draft.page - 1) * draft.limit, draft.page * draft.limit),
      ] as Draft<Option>[];
    });
  }

  function appendDataToRemote() {
    if (onLoad) {
      onLoad?.(paging.page + 1, paging.limit).then(({ total, data = [] }) => {
        onDataSourceChange?.(paging.page + 1, data);

        setPaging((draft) => {
          draft.page = draft.page + 1;
          draft.total = total;
          draft.data = [...draft.data, ...data] as Draft<Option>[];
        });
      });
    }
  }

  /**
   * appendData
   * @description 追加数据
   */
  function appendData() {
    if (isLocal) {
      appendDataToLocal();
    }

    appendDataToRemote();
  }

  function getPagesByOptions() {
    const length = (options ?? []).length;

    return Math.floor(length / paging.limit) + (length % paging.limit === 0 ? 0 : 1);
  }

  function getPagesByPaging() {
    return (paging?.total ?? 0) / paging.limit;
  }

  // 总页数
  const pages = useMemo(() => {
    if (isLocal) {
      return getPagesByOptions();
    }

    return getPagesByPaging();
  }, [paging.limit, paging?.total, options, isLocal]);

  // 子组件
  const pagingChildren = useMemo(() => {
    return cloneElement(children, {
      ...children.props,
      options: paging.data,
    });
  }, [paging.data, children]);

  useUpdateLayoutEffect(() => {
    if (callbackHandler.current) {
      status.current = paging.page < pages ? ScrollLoad.NORMAL : ScrollLoad.EMPTY;

      callbackHandler.current(status.current);
    }
  }, [paging.data, pages]);

  useUpdateEffect(() => {
    reset();
  }, [options, defaultPaging]);

  useMount(() => {
    setLoading(false);
    resetPaging();
  });

  return (
    <PRSL
      // @ts-ignore
      ref={pagingRef}
      isLoading={loading}
      onRefresh={onRefresh}
      onLoadMore={onLoadMore}
      {...prslProps}
    >
      {pagingChildren}
    </PRSL>
  );
}

export default Paging;
