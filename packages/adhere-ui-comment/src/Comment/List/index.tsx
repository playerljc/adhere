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
 * 评论列表组件
 * 
 * @description 提供评论列表的容器组件，支持首次加载、滚动加载、回到顶部等功能
 * @param props - 组件属性
 * @returns 评论列表组件实例
 * 
 * @example
 * ```tsx
 * <CommentList
 *   isLoading={loading}
 *   hasMore={hasMore}
 *   onLoadMore={loadMore}
 *   pages={totalPages}
 * >
 *   {commentItems}
 * </CommentList>
 * ```
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

  // 滚动加载引用
  const scrollLoadRef = useRef<ScrollLoadRefHandle | null>(null);

  // 是否为首次加载
  const isFirst = useRef(true);

  // 是否正在首次加载
  const isFirstLoading = useRef(false);

  // 容器引用
  const wrapRef = useRef<HTMLDivElement | null>(null);

  /**
   * 渲染分发函数
   * @description 根据加载状态决定渲染首次加载还是正常内容
   * @returns 渲染的JSX元素
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
   * 渲染首次加载状态
   * @description 渲染首次加载的骨架屏
   * @returns 首次加载JSX元素
   */
  function _renderFirstLoading(): ReactElement {
    if (renderFirstLoading) {
      const result = renderFirstLoading();
      return (result as ReactElement) || <div className={`${selectorPrefix}-first-loading-wrap`} />;
    }

    const result: ReactElement[] = [];

    for (let i = 0; i < 7; i++) {
      result.push(<Skeleton key={i + 1} loading avatar />);
    }

    return <div className={`${selectorPrefix}-first-loading-wrap`}>{result}</div>;
  }

  /**
   * 渲染正常内容
   * @description 渲染正常的评论列表和滚动加载功能
   * @returns 正常内容JSX元素
   */
  function renderNormal(): ReactElement {
    const defaultScrollLoadProps = {
      onScrollBottom: onLoadMore ? (handle?: (status?: any) => void) => onLoadMore(handle) : undefined,
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
