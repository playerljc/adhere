import { useMount, useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import React, { cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import type { FC } from 'react';
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
  const callbackHandler = useRef(null);
  const status = useRef(ScrollLoad.NORMAL);

  const [loading, setLoading] = useState(true);

  const [paging, setPaging] = useImmer({
    page: 1,
    limit: DEFAULT_LIMIT,
    data: [],
    ...(defaultPaging ?? {}),
  });

  const pages = useMemo(() => {
    return (
      Math.floor(options.length / paging.limit) + (options.length % paging.limit === 0 ? 0 : 1)
    );
  }, [paging.limit, options]);

  const pagingChildren = useMemo(
    () =>
      cloneElement(children, {
        ...children.props,
        options: paging.data,
      }),
    [paging.data, children],
  );

  function onRefresh() {
    const scrollEl = pagingRef.current.getScrollEl();

    if (scrollEl) {
      scrollEl.scrollTop = 0;
    }

    pagingRef.current.hideAll();

    callbackHandler.current = null;
    status.current = ScrollLoad.NORMAL;

    setPaging((draft) => {
      draft.page = 1;
      draft.limit = (defaultPaging ?? {}).limit ?? DEFAULT_LIMIT;
      draft.data = [];
    });
  }

  function onLoadMore(callback) {
    if (status.current === ScrollLoad.EMPTY) {
      status.current = ScrollLoad.EMPTY;
      callback(ScrollLoad.EMPTY);
      return;
    }

    console.log('draft.page', paging.page, pages);

    callbackHandler.current = callback;

    setPaging((draft) => {
      draft.page = draft.page + 1;
    });
  }

  useUpdateLayoutEffect(() => {
    if (callbackHandler.current) {
      status.current = paging.page < pages ? ScrollLoad.NORMAL : ScrollLoad.EMPTY;

      callbackHandler.current(status.current);
    }
  }, [paging.data]);

  useUpdateEffect(() => {
    setPaging((draft) => {
      const newPaging = defaultPaging ?? {};

      draft.page = newPaging.page ?? 1;
      draft.limit = (defaultPaging ?? {}).limit ?? DEFAULT_LIMIT;
    });
  }, [options, defaultPaging]);

  useEffect(() => {
    setPaging((draft) => {
      draft.data = [
        ...draft.data,
        ...options.slice((draft.page - 1) * draft.limit, draft.page * draft.limit),
      ];
    });
  }, [paging.page, paging.limit]);

  useMount(() => {
    setLoading(false);
  });

  return (
    <Paging
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
