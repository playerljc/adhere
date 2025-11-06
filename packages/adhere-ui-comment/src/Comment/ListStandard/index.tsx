import { Empty } from 'antd';
import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';

import type { ListStandardProps } from '../../types';
import CommentList from '../List';

const { VerticalFlexLayout } = FlexLayout;

const selectorPrefix = 'adhere-ui-comment-list-standard';

const DEFAULT_KEYS = {
  current: 'current',
  totalPage: 'totalPage',
  list: 'list',
  totalCount: 'totalCount',
};

const DEFAULT_RENDER_EMPTY = () => <Empty />;

/**
 * ListStandard
 * @param props
 * @return {JSX.Element}
 * @constructor
 * @classdesc 上拉下拽
 */
const ListStandard = memo<ListStandardProps>((props) => {
  const {
    limit = 10,
    dataKeys = DEFAULT_KEYS,
    listProps = {},
    flexLayoutProps = {},
    renderFirstLoading,
    renderEmpty = DEFAULT_RENDER_EMPTY,
    renderList,
  } = props;

  const paging = useRef({
    page: 1,
    limit,
  });
  const callbackHandler = useRef<(params?: any) => void>(undefined);
  const status = useRef<string>(ScrollLoad.NORMAL);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const [data, setData] = useState({
    [dataKeys.current]: 1,
    [dataKeys.totalPage]: 0,
    [dataKeys.list]: [],
    [dataKeys.totalCount]: 0,
  });
  const [loading, setLoading] = useState(true);

  /**
   * fetchData
   * @description 调用接口
   */
  const fetchData = useCallback((callback: (data: any) => void) => {
    return props
      ?.fetchData?.(paging?.current)
      .then((data) => {
        callback(data);

        setLoading(false);

        return data;
      })
      .catch((error) => {
        setLoading(false);

        if (callbackHandler.current) {
          status.current = ScrollLoad.ERROR as string;
          callbackHandler?.current?.(status.current);
        }

        return error;
      });
  }, [props?.fetchData]);

  /**
   * loadData
   * @description 重新加载数据
   * @return {*}
   */
  const loadData = useCallback(() => {
    setLoading(true);

    paging.current = {
      page: 1,
      limit,
    };

    return fetchData((res) => setData(res));
  }, [limit, fetchData]);

  /**
   * appendData
   * @description 加载更多
   * @return {*}
   */
  const appendData = useCallback(() => {
    setLoading(true);

    paging.current.page = paging.current.page + 1;

    const { list } = dataKeys!;

    return fetchData((res) => {
      setData((_data) => {
        return {
          ...res,
          [dataKeys.list]: [...(_data[list] as any), ...res[list]],
        };
      });
    });
  }, [dataKeys.list, fetchData]);

  /**
   * onLoadMore
   * @param callback
   */
  const onLoadMore = useCallback((callback?: (status?: string) => void) => {
    // if (status.current === ScrollLoad.EMPTY) {
    //   status.current = ScrollLoad.EMPTY;
    //   callback(ScrollLoad.EMPTY);
    //   return;
    // }

    callbackHandler.current = callback;

    setTimeout(() => appendData(), 100);
  }, [appendData]);

  /**
   * isEmpty
   * @return {boolean}
   */
  const isEmpty = useCallback(
    () => paging.current.page === 1 && (data[dataKeys!.list] as Array<any>).length === 0,
    [data, dataKeys.list],
  );

  const _CommentList = useMemo(
    () => (
      <CommentList
        isLoading={loading}
        hasMore={(data[dataKeys!.list] as Array<any>).length < (data[dataKeys!.totalCount] as number)}
        onLoadMore={onLoadMore}
        renderFirstLoading={renderFirstLoading}
        {...(listProps ?? {})}
        pages={data[dataKeys!.totalPage] as number}
      >
        <ConditionalRender conditional={!isEmpty()} noMatch={() => renderEmpty()}>
          {() => renderList?.(data)}
        </ConditionalRender>
      </CommentList>
    ),
    [loading, data, dataKeys.totalCount, dataKeys.list, dataKeys.totalPage, renderFirstLoading, listProps, renderEmpty, onLoadMore, isEmpty, renderList],
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  useLayoutEffect(() => {
    if (callbackHandler.current) {
      const totalPage = data[dataKeys!.totalPage] as number;

      status.current =
        paging.current.page < totalPage ? ScrollLoad.NORMAL : (ScrollLoad.EMPTY as string);

      callbackHandler?.current(status.current);
    }
  }, [data, dataKeys.totalPage]);

  return (
    <VerticalFlexLayout
      {...(flexLayoutProps ?? {})}
      className={`${selectorPrefix}`}
      renderMain={
        <div className={`${selectorPrefix}-auto`} ref={mainRef}>
          {_CommentList}
        </div>
      }
    />
  );
});

ListStandard.displayName = 'ListStandard';

export default ListStandard;
