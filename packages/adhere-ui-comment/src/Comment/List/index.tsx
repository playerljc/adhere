import { Skeleton } from 'antd';
import classnames from 'classnames';
import React, { ReactElement, memo, useRef } from 'react';

import BackTopAnimation from '@baifendian/adhere-ui-backtopanimation';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';
import type { ScrollLoadRefHandle } from '@baifendian/adhere-ui-scrollload/es/types';

import type { ListProps } from '../../types';

const selectorPrefix = 'adhere-ui-comment-inner-list';

/**
 * CommentList
 * @constructor
 * @classdesc 评论列表
 */
const CommentList = memo<ListProps>((props) => {
  const {
    className = '',
    style,
    isLoading = false,
    hasMore = false,
    onLoadMore,
    scrollLoadProps,
    renderFirstLoading,
    pages,
    children,
  } = props;

  const scrollLoadRef = useRef<ScrollLoadRefHandle | null>(null);

  // 第一次
  const isFirst = useRef(true);

  // 第一次加载
  const isFirstLoading = useRef(false);

  const wrapRef = useRef<HTMLDivElement | null>(null);

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
      onScrollBottom: onLoadMore,
    };

    return (
      <ConditionalRender conditional={hasMore}>
        {() => (
          <div className={`${selectorPrefix}-normal-wrap`}>
            <ScrollLoad
              ref={scrollLoadRef}
              {...defaultScrollLoadProps}
              {...(scrollLoadProps ?? {})}
              distance={scrollLoadProps?.distance || 50}
              disabled={pages <= 1}
            >
              {children}
            </ScrollLoad>

            <BackTopAnimation
              getContainer={() => scrollLoadRef?.current?.getScrollContainer?.()}
              onTrigger={() => Promise.resolve()}
            />
          </div>
        )}
      </ConditionalRender>
    );
  }

  return (
    <div className={classnames(selectorPrefix, className ?? '')} style={style ?? {}} ref={wrapRef}>
      {renderDispatch()}
    </div>
  );
});

CommentList.displayName = 'CommentList';

export default CommentList;
