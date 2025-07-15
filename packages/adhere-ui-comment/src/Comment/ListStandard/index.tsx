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

import type { ListStandardProps, CommentListData, PagingParams } from '../../types';
import CommentList from '../List';

const { VerticalFlexLayout } = FlexLayout;

const selectorPrefix = 'adhere-ui-comment-list-standard';

/**
 * 默认数据键名配置
 */
const DEFAULT_KEYS = {
  current: 'current',
  totalPage: 'totalPage',
  list: 'list',
  totalCount: 'totalCount',
} as const;

/**
 * 默认空状态渲染函数
 */
const DEFAULT_RENDER_EMPTY = () => <Empty />;

/**
 * 列表标准组件
 * 
 * @description 提供评论列表的标准实现，支持分页加载、滚动加载等功能
 * @param props - 组件属性
 * @returns 列表标准组件实例
 * 
 * @example
 * ```tsx
 * <ListStandard
 *   fetchData={fetchComments}
 *   renderList={(data) => <CommentList data={data.list} />}
 *   renderEmpty={() => <Empty description="暂无评论" />}
 * />
 * ```
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

  // 分页信息
  const paging = useRef<PagingParams>({
    page: 1,
    limit,
  });
  
  // 回调处理器
  const callbackHandler = useRef<(params?: string) => void>();
  
  // 滚动加载状态
  const status = useRef<string>(ScrollLoad.NORMAL);
  
  // 主容器引用
  const mainRef = useRef<HTMLDivElement | null>(null);

  // 列表数据状态
  const [data, setData] = useState<CommentListData>({
    current: 1,
    totalPage: 0,
    list: [],
    totalCount: 0,
  });
  
  // 加载状态
  const [loading, setLoading] = useState(true);

  /**
   * 重新加载数据
   * @returns 数据加载Promise
   */
  function loadData() {
    setLoading(true);

    paging.current = {
      page: 1,
      limit,
    };

    return fetchData((res: CommentListData) => setData(res));
  }

  /**
   * 加载更多数据
   * @returns 数据加载Promise
   */
  function appendData() {
    setLoading(true);

    paging.current.page = paging.current.page + 1;

    return fetchData((res: CommentListData) => {
      setData((_data) => {
        return {
          ...res,
          list: [..._data.list, ...res.list],
        };
      });
    });
  }

  /**
   * 调用接口获取数据
   * @param callback - 数据回调函数
   * @returns 数据获取Promise
   */
  function fetchData(callback: (data: CommentListData) => void) {
    return props
      ?.fetchData?.(paging?.current)
      .then((data: CommentListData) => {
        callback(data);
        setLoading(false);
        return data;
      })
      .catch((error: any) => {
        setLoading(false);

        if (callbackHandler.current) {
          status.current = ScrollLoad.ERROR;
          callbackHandler?.current?.(status.current);
        }

        return error;
      });
  }

  /**
   * 加载更多回调
   * @param callback - 状态回调函数
   */
  const onLoadMore = useCallback((callback?: (status?: string) => void) => {
    if (callback) {
      callbackHandler.current = callback;
    }
    setTimeout(() => appendData(), 100);
  }, []);

  /**
   * 检查是否为空
   * @returns 是否为空
   */
  const isEmpty = useCallback(
    () => paging.current.page === 1 && data.list.length === 0,
    [data.list.length, paging.current.page],
  );

  /**
   * 评论列表组件
   */
  const _CommentList = useMemo(
    () => (
      <CommentList
        isLoading={loading}
        hasMore={data.list.length < data.totalCount}
        onLoadMore={onLoadMore}
        renderFirstLoading={renderFirstLoading}
        {...(listProps ?? {})}
        pages={data.totalPage}
      >
        <ConditionalRender conditional={!isEmpty()} noMatch={() => renderEmpty()}>
          {() => renderList?.(data)}
        </ConditionalRender>
      </CommentList>
    ),
    [loading, data, renderFirstLoading, listProps, renderEmpty, renderList, isEmpty, onLoadMore],
  );

  // 组件挂载时加载数据
  useEffect(() => {
    loadData();
  }, []);

  // 监听数据变化，更新滚动加载状态
  useLayoutEffect(() => {
    if (callbackHandler.current) {
      const totalPage = data.totalPage;

      status.current = paging.current.page < totalPage ? ScrollLoad.NORMAL : ScrollLoad.EMPTY;

      callbackHandler?.current(status.current);
    }
  }, [data]);

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
