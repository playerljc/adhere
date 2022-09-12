import React, { FC, ReactElement, useRef } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Skeleton } from 'antd';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';
import BackTopAnimation from '@baifendian/adhere-ui-backtopanimation';

import { ListProps } from '../../types';

const selectorPrefix = 'adhere-ui-comment-inner-list';

/**
 * CommentList
 * @constructor
 * @classdesc 评论列表
 */
const CommentList: FC<ListProps> = (props) => {
  const {
    className = '',
    style = {},
    isLoading = false,
    hasMore = false,
    onLoadMore,
    scrollLoadProps = {},
    renderFirstLoading,
    getScrollWrapContainer,
    children,
  } = props;

  // 第一次
  const isFirst = useRef(true);

  // 第一次加载
  const isFirstLoading = useRef(false);

  const wrapRef = useRef<HTMLDivElement>(null);

  /**
   * renderDispatch
   * @description 渲染的一个分配
   * @return {*}
   */
  function renderDispatch() {
    const loading = isLoading;

    if (isFirst.current && !isFirstLoading.current && loading) {
      isFirstLoading.current = true;
    }

    if (isFirst.current && isFirstLoading.current && !loading) {
      isFirst.current = false;
      isFirstLoading.current = false;
    }

    if (isFirst.current) {
      return _renderFirstLoading();
    }

    return renderNormal();
  }

  /**
   * _renderFirstLoading
   * @description 渲染第一次的UI
   * @return {JSX.Element}
   */
  function _renderFirstLoading() {
    if (renderFirstLoading) {
      return renderFirstLoading();
    }

    const result: ReactElement[] = [];

    for (let i = 0; i < 7; i++) {
      result.push(<Skeleton key={i + 1} loading avatar />);
    }

    return <div className={`${selectorPrefix}-first-loading-wrap`}>{result}</div>;
  }

  /**
   * renderNormal
   * @description 渲染真正的UI
   * @return {JSX.Element}
   */
  function renderNormal() {
    const defaultScrollLoadProps = {
      getScrollContainer: () => getScrollWrapContainer?.()?.firstElementChild as HTMLElement,
      onScrollBottom: onLoadMore!,
    };

    return (
      <ConditionalRender conditional={hasMore}>
        {() => (
          <div className={`${selectorPrefix}-normal-wrap`}>
            <ScrollLoad
              {...defaultScrollLoadProps}
              {...(scrollLoadProps || {})}
              distance={scrollLoadProps?.distance || 50}
            >
              {children}
            </ScrollLoad>

            <ConditionalRender
              conditional={!!(getScrollWrapContainer ? getScrollWrapContainer() : null)}
              noMatch={() => (
                <BackTopAnimation
                  getContainer={() =>
                    wrapRef?.current?.querySelector?.('.adhere-ui-scrollload') as HTMLElement
                  }
                  onTrigger={() => Promise.resolve()}
                />
              )}
            >
              {() =>
                ReactDOM.createPortal(
                  <BackTopAnimation
                    getContainer={() =>
                      getScrollWrapContainer?.()?.firstElementChild as HTMLElement
                    }
                    onTrigger={() => Promise.resolve()}
                  />,
                  getScrollWrapContainer?.() as HTMLElement,
                )
              }
            </ConditionalRender>
          </div>
        )}
      </ConditionalRender>
    );
  }

  return (
    <div className={classnames(selectorPrefix, className || '')} style={style || {}} ref={wrapRef}>
      {renderDispatch()}
    </div>
  );
};

export default CommentList;
