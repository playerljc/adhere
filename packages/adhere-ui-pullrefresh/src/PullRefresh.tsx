import { useUpdate } from 'ahooks';
import classNames from 'classnames';
import dayjs from 'dayjs';
import debounce from 'lodash.debounce';
import React, {
  type PropsWithoutRef,
  ReactElement,
  type RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Hooks from '@baifendian/adhere-ui-hooks';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';
import { ResizeObserver } from '@juggle/resize-observer';

import type { PullRefreshProps, PullRefreshRefHandle, PullRefreshState } from './types';

const selectorPrefix = 'adhere-ui-pull-refresh';

const { useTheme } = ConfigProvider;

/**
 * 默认下拉图标（SVG Base64）
 */
const defaultImg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==';

const { useSetState } = Hooks;

/**
 * PullRefresh 组件
 * 提供下拉刷新功能的 React 组件
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const PullRefresh = memo<PropsWithoutRef<PullRefreshProps> & RefAttributes<PullRefreshRefHandle>>(
  forwardRef<PullRefreshRefHandle, PullRefreshProps>((props, ref) => {
    const {
      className = '',
      style = {},
      scrollClassName = '',
      scrollStyle = {},
      renderIcon,
      renderLabel = () => Intl.get('pull_down_to_refresh'),
      renderCanLabel = () => Intl.get('release_to_refresh'),
      renderLoadingAnimation = 'la-ball-circus la-dark',
      isShowUpdateTime = true,
      updateTimeFormat = Resource.Dict.value.ResourceMomentFormat18?.value(),
      children,
    } = props;

    const update = useUpdate();

    // 引用对象
    const ro = useRef<ResizeObserver>({} as ResizeObserver);
    const [isCanRef, setCan] = useSetState<PullRefreshState['isCanRef']>(false);
    const [preUpdateTimeRef, setPreUpdateTime] = useSetState<PullRefreshState['preUpdateTime']>(
      dayjs().valueOf(),
    );

    // DOM 元素引用
    const rootEl = useRef<HTMLDivElement>(null);
    const elRef = useRef<HTMLDivElement>(null);
    const scrollElRef = useRef<HTMLDivElement>(null);
    const iconElRef = useRef<HTMLImageElement>(null);
    const refreshElRef = useRef<HTMLDivElement>(null);
    const triggerInnerElRef = useRef<HTMLDivElement>(null);

    // 内部状态引用
    const el = useRef<HTMLDivElement | null>(null);
    const scrollEl = useRef<HTMLDivElement | null>(null);
    const iconEl = useRef<HTMLDivElement | null>(null);
    const triggerInnerEl = useRef<HTMLDivElement | null>(null);
    const maskEl = useRef<HTMLDivElement | null>(null);

    // 交互状态
    const isTop = useRef<boolean>(true);
    const pullHeight = useRef<number>(200);
    const startPageY = useRef<number>(-1);
    const isDownPull = useRef<boolean>(false);
    const refreshHeight = useRef<number>(0);

    /**
     * 渲染下拉图标
     * @returns JSX.Element
     */
    const _renderIcon = useCallback(
      (): ReactElement => (
        <ConditionalRender
          conditional={!!renderIcon}
          noMatch={() => (
            <div className={`${selectorPrefix}-trigger-icon`}>
              <img
                className={`${selectorPrefix}-trigger-icon-inner`}
                src={defaultImg}
                alt="下拉刷新图标"
                ref={iconElRef}
              />
            </div>
          )}
        >
          {() => (
            <div className={`${selectorPrefix}-trigger-icon`}>
              <div className={`${selectorPrefix}-trigger-icon-inner`} ref={iconElRef}>
                {renderIcon?.()}
              </div>
            </div>
          )}
        </ConditionalRender>
      ),
      [renderIcon],
    );

    /**
     * 渲染下拉提示文本
     * @returns JSX.Element
     */
    const _renderLabel = useCallback(
      (): ReactElement => (
        <p className={`${selectorPrefix}-trigger-label`}>
          <ConditionalRender conditional={isCanRef.current} noMatch={() => renderLabel?.()}>
            {() => renderCanLabel?.()}
          </ConditionalRender>
        </p>
      ),
      [isCanRef.current, renderLabel, renderCanLabel],
    );

    /**
     * 渲染更新时间
     * @returns ReactElement
     */
    const renderUpdateTime = useCallback(
      (): ReactElement => (
        <ConditionalRender conditional={isShowUpdateTime}>
          {() => (
            <p className={`${selectorPrefix}-trigger-update`}>
              {Intl.get('update_time')}：
              <span className={`${selectorPrefix}-trigger-update-label`}>
                {dayjs(preUpdateTimeRef.current).format(updateTimeFormat)}
              </span>
            </p>
          )}
        </ConditionalRender>
      ),
      [isShowUpdateTime, preUpdateTimeRef.current, updateTimeFormat],
    );

    /**
     * 渲染加载动画
     * @returns ReactElement
     */
    const _renderLoadingAnimation = useCallback(
      (): ReactElement => (
        <ConditionalRender conditional={!!renderLoadingAnimation}>
          {() => (
            <ConditionalRender
              conditional={Util.isString(renderLoadingAnimation)}
              noMatch={() => (
                <div className={`${selectorPrefix}-trigger-refresh`} ref={refreshElRef}>
                  {(renderLoadingAnimation as () => React.ReactElement)()}
                </div>
              )}
            >
              {() => (
                <div
                  className={classNames(
                    `${selectorPrefix}-trigger-refresh`,
                    renderLoadingAnimation as string,
                  )}
                  ref={refreshElRef}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </ConditionalRender>
          )}
        </ConditionalRender>
      ),
      [renderLoadingAnimation],
    );

    // 主题配置
    useTheme<HTMLElement>({
      elRef: rootEl,
      group: 'normal',
      displayName: 'PullRefresh',
    });

    /**
     * 创建遮罩层
     */
    const renderMask = useCallback((): void => {
      maskEl.current = document.querySelector(`.${selectorPrefix}-mask`) as HTMLDivElement;

      if (!maskEl.current) {
        maskEl.current = document.createElement('div');
        maskEl.current.className = `${selectorPrefix}-mask`;
        document.body.appendChild(maskEl.current);
      }
    }, []);

    /**
     * 获取下拉高度
     * @returns 下拉高度（像素）
     */
    const getPullHeight = useCallback((): number => {
      const { pullHeight: propPullHeight = 200 } = props;
      const scrollElement = scrollEl.current as HTMLElement;

      if (!scrollElement) return 200;

      const height = propPullHeight || 200;

      if (height <= 0) {
        return 200;
      } else if (height > scrollElement.clientHeight) {
        return scrollElement.clientHeight;
      } else {
        return height;
      }
    }, [props.pullHeight]);

    /**
     * 初始化事件监听器
     */
    const initEvents = useCallback((): void => {
      const scrollElement = scrollEl.current;
      if (!scrollElement) return;

      scrollElement.addEventListener('touchstart', onTouchStart);
      scrollElement.addEventListener('mousedown', onTouchStart);
      scrollElement.addEventListener('scroll', onScroll);
    }, []);

    /**
     * 触发回调函数
     * @param action - 回调函数名称
     * @param params - 回调参数
     */
    const trigger = useCallback(
      (
        action: keyof Pick<
          PullRefreshProps,
          'onPullStart' | 'onPullCanRefresh' | 'onPullRefresh' | 'onPullBottom' | 'onPullRebound'
        >,
        params?: any,
      ): void => {
        const callback = props[action];
        if (typeof callback === 'function') {
          callback();
        }
      },
      [props],
    );

    /**
     * 设置元素的 Y 轴平移
     * @param el - 目标元素
     * @param y - Y 轴偏移量
     * @param duration - 动画持续时间（毫秒）
     */
    const translateY = useCallback((el: HTMLElement, y: string, duration = 0): void => {
      el.style.transition = `transform ${duration}ms ease`;
      el.style.transform = `translate3d(0,${y},0)`;
    }, []);

    /**
     * 清除组件状态
     */
    const clear = useCallback((): void => {
      removeEvents();

      isDownPull.current = false;
      isTop.current = true;

      const elElement = el.current as HTMLElement;
      const refreshElement = refreshElRef.current as HTMLElement;
      const triggerInnerElement = triggerInnerEl.current as HTMLElement;
      const scrollElement = scrollEl.current as HTMLElement;
      const maskElement = maskEl.current as HTMLElement;

      if (elElement) elElement.style.display = 'flex';
      if (refreshElement) refreshElement.style.display = 'none';
      if (triggerInnerElement) triggerInnerElement.style.display = 'flex';
      if (iconEl.current) rotateIcon(iconEl.current, 180, 0);
      if (scrollElement) scrollElement.style.overflowY = 'auto';
      if (maskElement) maskElement.style.display = 'none';
    }, []);

    /**
     * 移除事件监听器
     */
    const removeEvents = useCallback((): void => {
      const scrollElement = scrollEl.current;
      if (!scrollElement) return;

      scrollElement.removeEventListener('mousemove', onTouchMove);
      scrollElement.removeEventListener('mouseup', onTouchEnd);
      scrollElement.removeEventListener('touchmove', onTouchMove);
      scrollElement.removeEventListener('touchend', onTouchEnd);
    }, []);

    /**
     * 触发刷新
     */
    const refresh = useCallback((): void => {
      const onTransitionEnd = (): void => {
        const triggerInnerElement = triggerInnerEl.current as HTMLElement;
        const refreshElement = refreshElRef.current as HTMLElement;
        const scrollElement = scrollEl.current;

        if (triggerInnerElement) triggerInnerElement.style.display = 'none';
        if (refreshElement) refreshElement.style.display = 'block';

        trigger('onPullRefresh');

        scrollElement?.removeEventListener('transitionend', onTransitionEnd);

        setPreUpdateTime(dayjs().valueOf());
      };

      const maskElement = maskEl.current as HTMLElement;
      const scrollElement = scrollEl.current as HTMLElement;
      const elElement = el.current as HTMLElement;

      if (maskElement) maskElement.style.display = 'block';

      removeEvents();

      scrollElement?.addEventListener('transitionend', onTransitionEnd);

      translateY(scrollElement, `${refreshHeight.current}px`, 500);
      translateY(elElement, `calc(-100% + ${refreshHeight.current}px)`, 500);

      if (iconEl.current) rotateIcon(iconEl.current, 180, 300);
    }, [removeEvents, trigger, setPreUpdateTime, translateY]);

    /**
     * 重置组件状态
     */
    const reset = useCallback((): void => {
      const onTransitionEnd = (): void => {
        const scrollElement = scrollEl.current;
        scrollElement?.removeEventListener('transitionend', onTransitionEnd);

        const triggerInnerElement = triggerInnerEl.current as HTMLElement;
        if (triggerInnerElement) triggerInnerElement.style.display = 'flex';
      };

      clear();

      const scrollElement = scrollEl.current as HTMLElement;
      const elElement = el.current as HTMLElement;

      scrollElement?.addEventListener('transitionend', onTransitionEnd);

      translateY(scrollElement, '0px', 200);
      translateY(elElement, 'calc(-100% + 0px)', 200);
    }, [clear, translateY]);

    /**
     * 重置更新时间
     * @param updateTime - 新的更新时间戳
     * @returns Promise<void>
     */
    const resetUpdateTime = useCallback(
      (updateTime: number): Promise<void> => {
        return new Promise((resolve) =>
          setPreUpdateTime(updateTime || dayjs().valueOf(), () => resolve()),
        );
      },
      [setPreUpdateTime],
    );

    /**
     * 获取当前更新时间
     * @returns 当前更新时间戳
     */
    const getUpdateTime = useCallback((): number => {
      return preUpdateTimeRef.current;
    }, [preUpdateTimeRef]);

    /**
     * 旋转图标
     * @param el - 图标元素
     * @param distance - 旋转角度
     * @param duration - 动画持续时间
     */
    const rotateIcon = useCallback((el: HTMLDivElement, distance: number, duration = 0): void => {
      el.style.transition = `transform ${duration}ms linear`;
      el.style.transform = `rotate(${distance}deg)`;
    }, []);

    /**
     * 触摸开始事件处理
     * @param e - 触摸事件
     */
    const onTouchStart = useCallback(
      (e: TouchEvent | MouseEvent): void => {
        trigger('onPullStart');

        const touchEvent = e as TouchEvent;
        const mouseEvent = e as MouseEvent;
        startPageY.current = touchEvent.changedTouches
          ? touchEvent.changedTouches[0].pageY
          : mouseEvent.pageY;

        const scrollElement = scrollEl.current;
        if (!scrollElement) return;

        scrollElement.addEventListener('touchmove', onTouchMove);
        scrollElement.addEventListener('mousemove', onTouchMove);
        scrollElement.addEventListener('touchend', onTouchEnd);
        scrollElement.addEventListener('mouseup', onTouchEnd);
      },
      [trigger],
    );

    /**
     * 触摸移动事件处理
     * @param e - 触摸事件
     */
    const onTouchMove = useCallback(
      (e: TouchEvent | MouseEvent): void => {
        const scrollElement = scrollEl.current as HTMLElement;
        if (!scrollElement) return;

        scrollElement.style.overflow = 'hidden';

        const touchEvent = e as TouchEvent;
        const mouseEvent = e as MouseEvent;
        const targetY = touchEvent.changedTouches
          ? touchEvent.changedTouches[0].pageY
          : mouseEvent.pageY;
        const difference = targetY - startPageY.current;
        const distance = Math.abs(difference);

        // 向下拉动
        if (difference > 0) {
          e.preventDefault();
          isDownPull.current = true;

          // 正常拉动范围
          if (distance < pullHeight.current) {
            const elElement = el.current as HTMLDivElement;

            translateY(scrollElement, `${distance}px`, 0);
            translateY(elElement, `calc(-100% + ${distance}px)`, 0);

            // 达到刷新条件
            if (distance >= refreshHeight.current + 80) {
              if (iconEl.current) rotateIcon(iconEl.current, 0, 150);
              setCan(true, () => trigger('onPullCanRefresh'));
            } else {
              if (iconEl.current) rotateIcon(iconEl.current, 180, 150);
              setCan(false);
            }

            if (el.current) el.current.style.display = 'flex';
          } else {
            // 超出拉动范围
            const elElement = el.current as HTMLDivElement;

            translateY(scrollElement, `${pullHeight.current}px`, 0);
            translateY(elElement, `calc(-100% + ${pullHeight.current}px)`, 0);

            if (iconEl.current) rotateIcon(iconEl.current, 0, 150);
            setCan(true, () => trigger('onPullBottom'));
          }
        } else if (isDownPull.current) {
          // 向上回弹
          e.preventDefault();

          const elElement = el.current as HTMLDivElement;

          translateY(scrollElement, '0px', 0);
          translateY(elElement, 'calc(-100% + 0px)', 0);

          if (iconEl.current) rotateIcon(iconEl.current, 180, 0);
        } else {
          clear();
        }
      },
      [pullHeight, refreshHeight, setCan, trigger, translateY, rotateIcon, clear],
    );

    /**
     * 触摸结束事件处理
     * @param e - 触摸事件
     */
    const onTouchEnd = useCallback(
      (e: TouchEvent | MouseEvent): void => {
        const touchEvent = e as TouchEvent;
        const mouseEvent = e as MouseEvent;
        const targetY = touchEvent.changedTouches
          ? touchEvent.changedTouches[0].pageY
          : mouseEvent.pageY;
        const difference = targetY - startPageY.current;
        const distance = Math.abs(difference);

        // 向下拉动
        if (difference > 0) {
          // 正常拉动范围
          if (distance < pullHeight.current) {
            if (distance >= refreshHeight.current + 80) {
              refresh();
            } else {
              trigger('onPullRebound');
              reset();
            }
          } else {
            refresh();
          }
        } else {
          clear();
        }
      },
      [pullHeight, refreshHeight, refresh, trigger, reset, clear],
    );

    /**
     * 滚动事件处理
     * @param e - 滚动事件
     */
    const onScroll = useCallback(
      (e: Event): void => {
        const scrollElement = scrollEl.current;
        if (!scrollElement) return;

        const target = e.target as HTMLElement;
        if (target.scrollTop === 0) {
          isTop.current = true;
          scrollElement.addEventListener('touchstart', onTouchStart);
          scrollElement.addEventListener('mousedown', onTouchStart);
        } else if (isTop.current) {
          isTop.current = false;
          scrollElement.removeEventListener('touchstart', onTouchStart);
          scrollElement.removeEventListener('mousedown', onTouchStart);
        }
      },
      [onTouchStart],
    );

    /**
     * 初始化组件尺寸
     */
    const initDimensions = useCallback((): void => {
      pullHeight.current = getPullHeight();
      const elElement = el.current as HTMLElement;
      if (elElement) {
        refreshHeight.current = elElement.clientHeight;
      }
    }, [getPullHeight]);

    // 暴露组件方法
    useImperativeHandle(
      ref,
      () => ({
        refresh,
        reset,
        resetUpdateTime,
        getUpdateTime,
      }),
      [refresh, reset, resetUpdateTime, getUpdateTime],
    );

    // 监听更新时间变化
    useEffect(() => {
      setPreUpdateTime(props.updateTime || dayjs().valueOf());
    }, [props.updateTime, setPreUpdateTime]);

    // 初始化遮罩层
    useEffect(() => {
      renderMask();
    }, [renderMask]);

    // 初始化 DOM 引用
    useLayoutEffect(() => {
      el.current = elRef.current;
      iconEl.current = iconElRef.current;
      scrollEl.current = scrollElRef.current;
      triggerInnerEl.current = triggerInnerElRef.current;

      initDimensions();
    }, [initDimensions]);

    // 初始化事件监听器
    useLayoutEffect(() => {
      initEvents();
      return () => removeEvents();
    }, [initEvents, removeEvents]);

    // 监听容器尺寸变化
    useLayoutEffect(() => {
      const onResize = debounce(() => {
        initDimensions();
        update();
      }, 300);

      ro.current = new ResizeObserver(onResize);

      const rootElement = rootEl.current;
      if (rootElement) {
        ro.current.observe(rootElement);
      }

      return () => {
        ro.current?.disconnect();
      };
    }, [initDimensions, update]);

    return (
      <div ref={rootEl} className={classNames(selectorPrefix, className)} style={style}>
        <div
          className={classNames(`${selectorPrefix}-scroll`, scrollClassName)}
          style={scrollStyle}
          ref={scrollElRef}
        >
          {children}
        </div>

        <div className={`${selectorPrefix}-trigger`} ref={elRef}>
          <div className={`${selectorPrefix}-trigger-inner`} ref={triggerInnerElRef}>
            {_renderIcon()}
            {_renderLabel()}
            {renderUpdateTime()}
          </div>
          {_renderLoadingAnimation()}
        </div>
      </div>
    );
  }),
);

PullRefresh.displayName = 'PullRefresh';

export default PullRefresh;
