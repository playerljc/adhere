import { IListProps } from '@/types';
import React, { forwardRef, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Skeleton } from 'antd';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';
import BackTopAnimation from '@baifendian/adhere-ui-backtopanimation';

const selectorPrefix = 'adhere-ui-comment-inner-list';

class BackTopAnimationImpl extends BackTopAnimation {
  componentWillUnmount() {
    try {
      super.componentWillUnmount();
    } catch (e) {}
  }
}

/**
 * CommentList
 * @constructor
 * @classdesc 评论列表
 */
function CommentList({
  className,
  style,
  isLoading,
  hasMore,
  onLoadMore,
  scrollLoadProps,
  renderFirstLoading,
  getScrollWrapContainer,
  children,
}: IListProps) {
  // 第一次
  const isFirst = useRef(true);

  // 第一次加载
  const isFirstLoading = useRef(false);

  const wrapRef = useRef<HTMLDivElement>();

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

    const result = [];

    for (let i = 0; i < 7; i++) {
      // @ts-ignore
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
            {/*@ts-ignore*/}
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
                <BackTopAnimationImpl
                  target={() =>
                    wrapRef?.current?.querySelector?.('.adhere-ui-scrollload') as HTMLElement
                  }
                  onTrigger={() => Promise.resolve(null)}
                />
              )}
            >
              {() =>
                ReactDOM.createPortal(
                  <BackTopAnimationImpl
                    target={() => getScrollWrapContainer?.()?.firstElementChild as HTMLElement}
                    onTrigger={() => Promise.resolve(null)}
                  />,
                  getScrollWrapContainer?.()!,
                )
              }
            </ConditionalRender>
          </div>
        )}
      </ConditionalRender>
    );
  }

  return (
    // @ts-ignore
    <div className={classnames(selectorPrefix, className || '')} style={{ ...style }} ref={wrapRef}>
      {renderDispatch()}
    </div>
  );
}

export const defaultProps = {};

export const propTypes = {
  getScrollWrapContainer: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  // 是否是加载数据
  isLoading: PropTypes.bool,
  // 是否还有更多
  hasMore: PropTypes.bool,
  // 加载更多
  onLoadMore: PropTypes.func,
  renderFirstLoading: PropTypes.func,
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

CommentList.defaultProps = defaultProps;

CommentList.propTypes = propTypes;

// @ts-ignore
export default forwardRef(CommentList);
