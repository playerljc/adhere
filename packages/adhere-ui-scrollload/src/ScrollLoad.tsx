import classNames from 'classnames';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { ScrollLoadComponent, ScrollLoadProps, ScrollLoadRefHandle } from './types';

const selectorPrefix = 'adhere-ui-scroll-load';

const EMPTY = 'empty';
const ERROR = 'error';
const NORMAL = 'normal';

const InternalScrollLoad = memo<ScrollLoadProps>(
  forwardRef<ScrollLoadRefHandle, ScrollLoadProps>((props, ref) => {
    const {
      className = '',
      style = {},
      children,
      getScrollContainer,
      distance = 50,
      onScrollBottom,
      onEmptyClick,
      onErrorClick,
      renderLoading,
      loadClassName = '',
      loadStyle = {},
      renderEmpty,
      emptyClassName = '',
      emptyStyle = {},
      renderError,
      errorClassName = '',
      errorStyle = {},
      ...attrs
    } = props;

    const lock = useRef(false); // 锁
    const el = useRef<HTMLDivElement>(null);
    const loadEl = useRef<HTMLDivElement>(null);
    const emptyEl = useRef<HTMLDivElement>(null);
    const errorEl = useRef<HTMLDivElement>(null);

    function _getScrollContainer() {
      return getScrollContainer ? getScrollContainer() : el.current;
    }

    function initEvents() {
      _getScrollContainer()?.addEventListener('scroll', _onScroll);
      emptyEl.current?.addEventListener('click', _onEmptyClick);
      errorEl.current?.addEventListener('click', _onErrorClick);
    }

    function removeEvents() {
      _getScrollContainer()?.removeEventListener('scroll', _onScroll);
      emptyEl.current?.removeEventListener('click', _onEmptyClick);
      errorEl.current?.removeEventListener('click', _onErrorClick);
    }

    function _onScroll() {
      const el = _getScrollContainer() as HTMLElement;

      const bottomHeight = el.scrollHeight - el.offsetHeight;
      const scrollTop = el.scrollTop;

      /**
       * 条件完全相等或误差值在1之间
       */
      if (onScrollBottom && Math.abs(scrollTop - bottomHeight) <= distance) {
        if (lock.current) return;

        lock.current = true;

        // 先显示loading
        (loadEl.current as HTMLElement).style.display = 'flex';

        /**
         * 完成
         * @param {string} status [empty(没有数据) | error(有错误) | normal(正常)]
         */
        onScrollBottom((status) => {
          (loadEl.current as HTMLElement).style.display = 'none';

          if (status === EMPTY) {
            (emptyEl.current as HTMLElement).style.display = 'block';
          } else if (status === ERROR) {
            (errorEl.current as HTMLElement).style.display = 'block';
          }

          lock.current = false;
        });
      }
    }

    function _onEmptyClick() {
      onEmptyClick && onEmptyClick();
    }

    function _onErrorClick() {
      onErrorClick && onErrorClick();
    }

    /**
     * hideAll
     */
    function hideAll() {
      (loadEl.current as HTMLElement).style.display = 'none';
      (errorEl.current as HTMLElement).style.display = 'none';
      (emptyEl.current as HTMLElement).style.display = 'none';
    }

    const _renderLoading = useCallback(() => {
      if (renderLoading) {
        return (
          <div
            className={classNames(`${selectorPrefix}-load`, loadClassName)}
            style={loadStyle ?? {}}
            ref={loadEl}
          >
            {renderLoading()}
          </div>
        );
      }

      return (
        <div
          className={classNames(`${selectorPrefix}-load`, 'standard', loadClassName)}
          style={loadStyle ?? {}}
          ref={loadEl}
        >
          {Intl.v('数据加载中')}
        </div>
      );
    }, [renderLoading, loadClassName, loadStyle]);

    const _renderEmpty = useCallback(() => {
      if (renderEmpty) {
        return (
          <div
            className={classNames(`${selectorPrefix}-empty`, emptyClassName)}
            style={emptyStyle ?? {}}
            ref={emptyEl}
          >
            {renderEmpty()}
          </div>
        );
      }

      return (
        <div
          className={classNames(`${selectorPrefix}-empty`, emptyClassName)}
          style={emptyStyle ?? {}}
          ref={emptyEl}
        >
          ~{Intl.v('没有更多')}
        </div>
      );
    }, [renderEmpty, emptyClassName, emptyStyle]);

    const _renderError = useCallback(() => {
      if (renderError) {
        return (
          <div
            className={classNames(`${selectorPrefix}-error`, errorClassName)}
            style={errorStyle ?? {}}
            ref={errorEl}
          >
            {renderError()}
          </div>
        );
      }

      return (
        <div
          className={classNames(`${selectorPrefix}-error`, errorClassName)}
          style={errorStyle ?? {}}
          ref={errorEl}
        >
          {Intl.v('出现错误')}
        </div>
      );
    }, [renderError, errorClassName, errorStyle]);

    useImperativeHandle(ref, () => ({
      hideAll,
    }));

    useLayoutEffect(() => {
      initEvents();

      return () => removeEvents();
    });

    return (
      <div
        {...attrs}
        className={classNames(selectorPrefix, className)}
        style={{
          ...(style ?? {}),
          overflowY: _getScrollContainer() === el.current ? 'auto' : 'initial',
        }}
        ref={el}
      >
        {children}
        {_renderLoading()}
        {_renderEmpty()}
        {_renderError()}
      </div>
    );
  }),
);

const ScrollLoad = InternalScrollLoad as ScrollLoadComponent;

ScrollLoad.EMPTY = 'empty';
ScrollLoad.ERROR = 'error';
ScrollLoad.NORMAL = 'normal';

export default ScrollLoad;
