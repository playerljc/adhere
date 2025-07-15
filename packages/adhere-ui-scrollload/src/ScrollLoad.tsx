import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';

import type { 
  ScrollLoadComponent, 
  ScrollLoadProps, 
  ScrollLoadRefHandle,
  ScrollLoadStatus 
} from './types';
import { SCROLL_LOAD_STATUS } from './types';

const selectorPrefix = 'adhere-ui-scroll-load';

const { useTheme } = ConfigProvider;

/**
 * 内部滚动加载组件
 * 提供滚动到底部自动加载数据的功能
 */
const InternalScrollLoad = memo<
  PropsWithoutRef<ScrollLoadProps> & RefAttributes<ScrollLoadRefHandle>
>(
  forwardRef<ScrollLoadRefHandle, ScrollLoadProps>((props, ref) => {
    const {
      className,
      style = {},
      loadClassName,
      loadStyle = {},
      emptyClassName,
      emptyStyle = {},
      errorClassName,
      errorStyle = {},
      getScrollContainer,
      distance = 50,
      renderLoading,
      renderEmpty,
      renderError,
      onScrollBottom,
      onEmptyClick,
      onErrorClick,
      disabled = false,
      children,
      ...rest
    } = props;

    // 当前组件状态
    const currentStatus = useRef<ScrollLoadStatus>(SCROLL_LOAD_STATUS.NORMAL);
    // 防止重复触发的锁
    const lock = useRef(false);
    // 主容器引用
    const el = useRef<HTMLDivElement | null>(null);
    // 加载状态容器引用
    const loadEl = useRef<HTMLDivElement | null>(null);
    // 空数据状态容器引用
    const emptyEl = useRef<HTMLDivElement | null>(null);
    // 错误状态容器引用
    const errorEl = useRef<HTMLDivElement | null>(null);

    useTheme<HTMLElement>({
      elRef: el,
      group: 'normal',
      displayName: 'ScrollLoad',
    });

    /**
     * 获取滚动容器元素
     * @returns 滚动容器元素
     */
    const _getScrollContainer = useCallback((): HTMLElement | null => {
      return getScrollContainer ? getScrollContainer() : el.current;
    }, [getScrollContainer]);

    /**
     * 初始化事件监听器
     */
    const initEvents = useCallback(() => {
      const scrollContainer = _getScrollContainer();
      
      if (!disabled && scrollContainer) {
        scrollContainer.addEventListener('scroll', _onScroll);
      }

      if (emptyEl.current) {
        emptyEl.current.addEventListener('click', _onEmptyClick);
      }
      
      if (errorEl.current) {
        errorEl.current.addEventListener('click', _onErrorClick);
      }
    }, [disabled, _getScrollContainer]);

    /**
     * 移除事件监听器
     */
    const removeEvents = useCallback(() => {
      const scrollContainer = _getScrollContainer();
      
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', _onScroll);
      }
      
      if (emptyEl.current) {
        emptyEl.current.removeEventListener('click', _onEmptyClick);
      }
      
      if (errorEl.current) {
        errorEl.current.removeEventListener('click', _onErrorClick);
      }
    }, [_getScrollContainer]);

    /**
     * 滚动事件处理函数
     */
    const _onScroll = useCallback(() => {
      const scrollContainer = _getScrollContainer();
      if (!scrollContainer || !onScrollBottom) return;

      const bottomHeight = scrollContainer.scrollHeight - scrollContainer.offsetHeight;
      const scrollTop = scrollContainer.scrollTop;

      // 检查是否滚动到底部（考虑距离阈值）
      if (Math.abs(scrollTop - bottomHeight) <= distance) {
        // 如果是空数据状态则不触发滚动事件
        if (currentStatus.current === SCROLL_LOAD_STATUS.EMPTY || currentStatus.current === SCROLL_LOAD_STATUS.HIDE_EMPTY) {
          return;
        }

        // 防止重复触发
        if (lock.current) return;

        lock.current = true;

        // 显示加载状态
        if (loadEl.current) {
          loadEl.current.style.display = 'flex';
        }

        /**
         * 调用滚动到底部的回调函数
         * @param status 状态设置函数，用于设置组件状态
         */
        onScrollBottom((status) => {
          currentStatus.current = status || SCROLL_LOAD_STATUS.NORMAL;

          // 隐藏加载状态
          if (loadEl.current) {
            loadEl.current.style.display = 'none';
          }

          // 根据状态显示对应的UI
          if (currentStatus.current === SCROLL_LOAD_STATUS.EMPTY) {
            if (emptyEl.current) {
              emptyEl.current.style.display = 'block';
            }
          } else if (currentStatus.current === SCROLL_LOAD_STATUS.ERROR) {
            if (errorEl.current) {
              errorEl.current.style.display = 'block';
            }
          } else if (currentStatus.current === SCROLL_LOAD_STATUS.HIDE_EMPTY) {
            if (emptyEl.current) {
              emptyEl.current.style.display = 'none';
            }
          }

          lock.current = false;
        });
      }
    }, [distance, onScrollBottom, _getScrollContainer]);

    /**
     * 空数据状态点击事件处理函数
     */
    const _onEmptyClick = useCallback(() => {
      onEmptyClick?.();
    }, [onEmptyClick]);

    /**
     * 错误状态点击事件处理函数
     */
    const _onErrorClick = useCallback(() => {
      onErrorClick?.();
    }, [onErrorClick]);

    /**
     * 隐藏所有状态显示
     */
    const hideAll = useCallback(() => {
      currentStatus.current = SCROLL_LOAD_STATUS.NORMAL;

      if (loadEl.current) {
        loadEl.current.style.display = 'none';
      }
      if (errorEl.current) {
        errorEl.current.style.display = 'none';
      }
      if (emptyEl.current) {
        emptyEl.current.style.display = 'none';
      }
    }, []);

    /**
     * 渲染加载状态
     */
    const _renderLoading = useCallback(() => {
      if (renderLoading) {
        return (
          <div
            className={classNames(`${selectorPrefix}-load`, loadClassName)}
            style={loadStyle}
            ref={loadEl}
          >
            {renderLoading()}
          </div>
        );
      }

      return (
        <div
          className={classNames(`${selectorPrefix}-load`, 'standard', loadClassName)}
          style={loadStyle}
          ref={loadEl}
        >
          {Intl.get('data_loading')}
        </div>
      );
    }, [renderLoading, loadClassName, loadStyle]);

    /**
     * 渲染空数据状态
     */
    const _renderEmpty = useCallback(() => {
      if (renderEmpty) {
        return (
          <div
            className={classNames(`${selectorPrefix}-empty`, emptyClassName)}
            style={emptyStyle}
            ref={emptyEl}
          >
            {renderEmpty()}
          </div>
        );
      }

      return (
        <div
          className={classNames(`${selectorPrefix}-empty`, emptyClassName)}
          style={emptyStyle}
          ref={emptyEl}
        >
          ~{Intl.get('no_more')}
        </div>
      );
    }, [renderEmpty, emptyClassName, emptyStyle]);

    /**
     * 渲染错误状态
     */
    const _renderError = useCallback(() => {
      if (renderError) {
        return (
          <div
            className={classNames(`${selectorPrefix}-error`, errorClassName)}
            style={errorStyle}
            ref={errorEl}
          >
            {renderError()}
          </div>
        );
      }

      return (
        <div
          className={classNames(`${selectorPrefix}-error`, errorClassName)}
          style={errorStyle}
          ref={errorEl}
        >
          {Intl.get('error_occurred_ext1')}
        </div>
      );
    }, [renderError, errorClassName, errorStyle]);

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
      hideAll,
      getScrollContainer: () => _getScrollContainer(),
    }));

    // 初始化事件监听器
    useLayoutEffect(() => {
      initEvents();
      return removeEvents;
    }, [initEvents, removeEvents]);

    // 监听 disabled 状态变化
    useUpdateEffect(() => {
      const scrollContainer = _getScrollContainer();
      
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', _onScroll);
        
        if (!disabled) {
          scrollContainer.addEventListener('scroll', _onScroll);
        }
      }

      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', _onScroll);
        }
      };
    }, [disabled, _getScrollContainer, _onScroll]);

    return (
      <div
        ref={el}
        {...rest}
        className={classNames(selectorPrefix, className)}
        style={{
          ...style,
          overflowY: _getScrollContainer() === el.current ? 'auto' : 'initial',
        }}
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

ScrollLoad.displayName = 'ScrollLoad';

// 设置静态属性
ScrollLoad.EMPTY = SCROLL_LOAD_STATUS.EMPTY;
ScrollLoad.ERROR = SCROLL_LOAD_STATUS.ERROR;
ScrollLoad.NORMAL = SCROLL_LOAD_STATUS.NORMAL;
ScrollLoad.HIDE_EMPTY = SCROLL_LOAD_STATUS.HIDE_EMPTY;

export default ScrollLoad;
