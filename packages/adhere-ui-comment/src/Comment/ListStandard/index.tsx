import { Empty } from 'antd';
import React, {
  FC,
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

import { ListStandardProps } from '../../types';
import CommentList from '../List';

const { VerticalFlexLayout } = FlexLayout;

const selectorPrefix = 'adhere-ui-comment-list-standard';

/**
 * ListStandard
 * @param props
 * @return {JSX.Element}
 * @constructor
 * @classdesc 上拉下拽
 */
const ListStandard: FC<ListStandardProps> = (props) => {
  const {
    limit = 10,
    dataKeys = {
      current: 'current',
      totalPage: 'totalPage',
      list: 'list',
      totalCount: 'totalCount',
    },
    listProps = {},
    flexLayoutProps = {},
    renderFirstLoading,
    renderEmpty = () => <Empty />,
    renderList,
    getScrollWrapContainer,
  } = props;

  const paging = useRef({
    page: 1,
    limit,
  });
  const callbackHandler = useRef<(params?: any) => void>();
  const status = useRef(ScrollLoad.NORMAL);
  const mainRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    [dataKeys.current]: 1,
    [dataKeys.totalPage]: 0,
    [dataKeys.list]: [],
    [dataKeys.totalCount]: 0,
  });
  const [loading, setLoading] = useState(true);

  /**
   * loadData
   * @description 重新加载数据
   * @return {*}
   */
  function loadData() {
    setLoading(true);

    paging.current = {
      page: 1,
      limit,
    };

    return fetchData((res) => setData(res));
  }

  /**
   * appendData
   * @description 加载更多
   * @return {*}
   */
  function appendData() {
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
  }

  /**
   * fetchData
   * @description 调用接口
   */
  function fetchData(callback) {
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
          status.current = ScrollLoad.ERROR;
          callbackHandler?.current?.(status.current);
        }

        return error;
      });
  }

  /**
   * onLoadMore
   * @param callback
   */
  const onLoadMore = useCallback((callback) => {
    if (status.current === ScrollLoad.EMPTY) {
      status.current = ScrollLoad.EMPTY;
      callback(ScrollLoad.EMPTY);
      return;
    }

    callbackHandler.current = callback;

    setTimeout(() => appendData(), 100);
  }, []);

  /**
   * isEmpty
   * @return {boolean}
   */
  const isEmpty = useCallback(
    () => paging.current.page === 1 && (data[dataKeys!.list] as Array<any>).length === 0,
    [data, dataKeys, paging.current.page],
  );

  const _CommentList = useMemo(
    () => (
      <CommentList
        getScrollWrapContainer={getScrollWrapContainer}
        isLoading={loading}
        // @ts-ignore
        hasMore={(data[dataKeys!.list] as Array<any>).length <= data[dataKeys!.totalCount]}
        onLoadMore={onLoadMore}
        renderFirstLoading={renderFirstLoading}
        {...(listProps || {})}
      >
        <ConditionalRender conditional={!isEmpty()} noMatch={() => renderEmpty()}>
          {() => renderList?.(data)}
        </ConditionalRender>
      </CommentList>
    ),
    [
      getScrollWrapContainer,
      loading,
      data,
      dataKeys.totalCount,
      dataKeys.list,
      renderFirstLoading,
      listProps,
      renderEmpty,
    ],
  );

  useEffect(() => {
    loadData();
  }, []);

  useLayoutEffect(() => {
    if (callbackHandler.current) {
      status.current =
        // @ts-ignore
        paging.current.page < data[dataKeys!.totalPage] ? ScrollLoad.NORMAL : ScrollLoad.EMPTY;
      callbackHandler?.current(status.current);
    }
  }, [data]);

  return (
    <VerticalFlexLayout
      {...(flexLayoutProps || {})}
      className={`${selectorPrefix}`}
      renderMain={
        <div className={`${selectorPrefix}-auto`} ref={mainRef}>
          {_CommentList}
        </div>
      }
    />
  );
};

export default memo(ListStandard);
