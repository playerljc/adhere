import { IListStandardProps } from '@/types';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import CommentList, {
  propTypes as SystemListPropTypes,
  defaultProps as SystemListDefaultProps,
} from '../List';

const { VerticalFlexLayout, VerticalFlexLayoutDefaultProps, VerticalFlexLayoutPropTypes } =
  FlexLayout;

const selectorPrefix = 'adhere-ui-comment-list-standard';

/**
 * ListStandard
 * @param props
 * @return {JSX.Element}
 * @constructor
 * @classdesc 上拉下拽
 */
function ListStandard(props: IListStandardProps) {
  const paging = useRef({
    page: 1,
    limit: props.limit,
  });
  const callbackHandler = useRef();
  const status = useRef(ScrollLoad.NORMAL);
  const mainRef = useRef<HTMLDivElement | null>();

  const [data, setData] = useState({
    [props.dataKeys!.current]: 1,
    [props.dataKeys!.totalPage]: 0,
    [props.dataKeys!.list]: [],
    [props.dataKeys!.totalCount]: 0,
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
      limit: props.limit,
    };

    return fetchData((res) => {
      setData(res);
    });
  }

  /**
   * appendData
   * @description 加载更多
   * @return {*}
   */
  function appendData() {
    setLoading(true);

    paging.current.page = paging.current.page + 1;

    const { list } = props.dataKeys!;

    return fetchData((res) => {
      setData({
        ...res,
        [props.dataKeys!.list]: [...(data[list] as any), ...res[list]],
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
          // @ts-ignore
          callbackHandler?.current?.(status.current);
        }

        return error;
      });
  }

  /**
   * onLoadMore
   * @param callback
   */
  function onLoadMore(callback) {
    if (status.current === ScrollLoad.EMPTY) {
      status.current = ScrollLoad.EMPTY;
      callback(ScrollLoad.EMPTY);
      return;
    }

    callbackHandler.current = callback;

    setTimeout(() => appendData(), 100);
  }

  /**
   * isEmpty
   * @return {boolean}
   */
  function isEmpty() {
    return paging.current.page === 1 && (data[props.dataKeys!.list] as Array<any>).length === 0;
  }

  useEffect(() => {
    loadData();
  }, []);

  useLayoutEffect(() => {
    if (callbackHandler.current) {
      status.current =
        paging.current.page < data[props.dataKeys!.totalPage]
          ? ScrollLoad.NORMAL
          : ScrollLoad.EMPTY;
      // @ts-ignore
      callbackHandler?.current(status.current);
    }
  }, [data]);

  return (
    <VerticalFlexLayout
      {...props.flexLayoutProps}
      className={`${selectorPrefix}`}
      renderMain={
        // @ts-ignore
        <div className={`${selectorPrefix}-auto`} ref={mainRef}>
          <CommentList
            getScrollWrapContainer={props.getScrollWrapContainer}
            isLoading={loading}
            hasMore={
              (data[props.dataKeys!.list] as Array<any>).length <= data[props.dataKeys!.totalCount]
            }
            onLoadMore={onLoadMore}
            renderFirstLoading={props.renderFirstLoading}
            {...props.listProps}
          >
            {/*@ts-ignore*/}
            <ConditionalRender conditional={!isEmpty()} noMatch={() => props?.renderEmpty?.()}>
              {() => props?.renderList?.(data)}
            </ConditionalRender>
          </CommentList>
        </div>
      }
    />
  );
}

ListStandard.defaultProps = {
  flexLayoutProps: { ...VerticalFlexLayoutDefaultProps },
  listProps: { ...SystemListDefaultProps },
  limit: 10,
  renderEmpty: () => <Empty />,
  dataKeys: {
    current: 'current',
    totalPage: 'totalPage',
    list: 'list',
    totalCount: 'totalCount',
  },
};

ListStandard.propTypes = {
  getScrollWrapContainer: PropTypes.func,
  flexLayoutProps: PropTypes.shape({ ...VerticalFlexLayoutPropTypes }),
  listProps: PropTypes.shape({ ...SystemListPropTypes }),
  limit: PropTypes.number,
  renderList: PropTypes.func,
  renderEmpty: PropTypes.func,
  renderFirstLoading: PropTypes.func,
  fetchData: PropTypes.func,
  dataKeys: PropTypes.shape({
    current: PropTypes.string,
    totalPage: PropTypes.string,
    list: PropTypes.string,
    totalCount: PropTypes.string,
  }),
  scrollLoadProps: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object,
    loadClassName: PropTypes.string,
    loadStyle: PropTypes.object,
    emptyClassName: PropTypes.string,
    emptyStyle: PropTypes.object,
    errorClassName: PropTypes.string,
    errorStyle: PropTypes.object,
    distance: PropTypes.number,
    onScrollBottom: PropTypes.func,
    onEmptyClick: PropTypes.func,
    onErrorClick: PropTypes.func,
    renderLoading: PropTypes.func,
    renderEmpty: PropTypes.func,
    renderError: PropTypes.func,
  }),
};

export default ListStandard;
