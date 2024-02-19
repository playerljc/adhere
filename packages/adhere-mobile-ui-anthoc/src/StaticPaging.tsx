import { useMount, useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import type { Draft } from 'immer';
import React, { cloneElement, useMemo, useRef, useState } from 'react';
import { useImmer } from 'use-immer';

import ScrollLoad from '@baifendian/adhere-ui-scrollload';

import Paging from './Paging';
import type { PagingHandle, StaticPagingProps } from './types';

const DEFAULT_LIMIT = 20;

/**
 * usePaging
 * @param options
 * @param children
 * @param defaultPaging
 * @param pagingProps
 */
function StaticPaging<Option>({
  options,
  children,
  defaultPaging,
  ...pagingProps
}: StaticPagingProps<Option>) {
  const pagingRef = useRef<PagingHandle>();
  const callbackHandler = useRef<Function | null>(null);
  const status = useRef(ScrollLoad.NORMAL);

  const [loading, setLoading] = useState(true);

  const [paging, setPaging] = useImmer<{
    page: number;
    limit: number;
    data: Option[];
  }>({
    page: 1,
    limit: DEFAULT_LIMIT,
    data: [],
    ...(defaultPaging ?? {}),
  });

  const pages = useMemo(() => {
    const length = (options ?? []).length;
    return Math.floor(length / paging.limit) + (length % paging.limit === 0 ? 0 : 1);
  }, [paging.limit, options]);

  const pagingChildren = useMemo(() => {
    return cloneElement(children, {
      ...children.props,
      options: paging.data,
    });
  }, [paging.data, children]);

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

  function resetPaging() {
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

  function reset() {
    resetScrollLoad();
    resetPaging();
  }

  function appendData() {
    setPaging((draft) => {
      draft.page = draft.page + 1;

      draft.data = [
        ...draft.data,
        ...(options ?? []).slice((draft.page - 1) * draft.limit, draft.page * draft.limit),
      ] as Draft<Option>[];
    });
  }

  useUpdateLayoutEffect(() => {
    if (callbackHandler.current) {
      status.current = paging.page < pages ? ScrollLoad.NORMAL : ScrollLoad.EMPTY;

      callbackHandler.current(status.current);
    }
  }, [paging.data]);

  useUpdateEffect(() => {
    reset();
  }, [options, defaultPaging]);

  useMount(() => {
    setLoading(false);
    resetPaging();
  });

  return (
    <Paging
      // @ts-ignore
      ref={pagingRef}
      isLoading={loading}
      onRefresh={onRefresh}
      onLoadMore={onLoadMore}
      {...pagingProps}
    >
      {pagingChildren}
    </Paging>
  );
}

export default StaticPaging;
