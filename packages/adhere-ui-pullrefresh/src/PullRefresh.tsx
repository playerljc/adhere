import { useUpdate } from 'ahooks';
import classNames from 'classnames';
import dayjs from 'dayjs';
import debounce from 'lodash.debounce';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Hooks from '@baifendian/adhere-ui-hooks';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';
import { ResizeObserver } from '@juggle/resize-observer';

import { PullRefreshProps, PullRefreshRefHandle } from './types';

const selectorPrefix = 'adhere-ui-pull-refresh';

const defaultImg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==';

const { useSetState } = Hooks;

const PullRefresh = memo<PropsWithoutRef<PullRefreshProps> & RefAttributes<PullRefreshRefHandle>>(
  forwardRef<PullRefreshRefHandle, PullRefreshProps>((props, ref) => {
    const {
      className = '',
      style = {},
      scrollClassName = '',
      scrollStyle = {},
      renderIcon,
      renderLabel = () => Intl.v('下拉刷新'),
      renderCanLabel = () => Intl.v('松开刷新'),
      renderLoadingAnimation = 'la-ball-circus la-dark',
      isShowUpdateTime = true,
      updateTimeFormat = Resource.Dict.value.ResourceMomentFormat18.value(),
      children,
    } = props;
    const update = useUpdate();

    const ro = useRef<ResizeObserver>({} as ResizeObserver);
    const [isCanRef, setCan] = useSetState(false);
    const [preUpdateTimeRef, setPreUpdateTime] = useSetState(dayjs().valueOf());

    const rootEl = useRef<HTMLDivElement>(null);
    const elRef = useRef<HTMLDivElement>(null);
    const scrollElRef = useRef<HTMLDivElement>(null);
    const iconElRef = useRef<HTMLImageElement>(null);
    const refreshElRef = useRef<HTMLDivElement>(null);
    const triggerInnerElRef = useRef<HTMLDivElement>(null);

    const el = useRef<HTMLDivElement | null>(null);
    const scrollEl = useRef<HTMLDivElement | null>(null);
    const iconEl = useRef<HTMLDivElement | null>(null);
    const triggerInnerEl = useRef<HTMLDivElement | null>(null);
    const maskEl = useRef<HTMLDivElement | null>(null);

    // 是否到顶了
    const isTop = useRef(true);
    const pullHeight = useRef(200);
    const startPageY = useRef<number>(-1);
    const isDownPull = useRef(false);
    const refreshHeight = useRef(0);

    /**
     * renderIcon
     */
    const _renderIcon = useCallback(
      () => (
        <ConditionalRender
          conditional={!!renderIcon}
          noMatch={() => (
            <div className={`${selectorPrefix}-trigger-icon`}>
              <img
                className={`${selectorPrefix}-trigger-icon-inner`}
                src={defaultImg}
                alt=""
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

    const _renderLabel = useCallback(
      () => (
        <p className={`${selectorPrefix}-trigger-label`}>
          <ConditionalRender conditional={isCanRef.current} noMatch={() => renderLabel?.()}>
            {() => renderCanLabel?.()}
          </ConditionalRender>
        </p>
      ),
      [isCanRef.current, renderLabel, renderCanLabel],
    );

    /**
     * renderUpdateTime
     */
    const renderUpdateTime = useCallback(
      () => (
        <ConditionalRender conditional={isShowUpdateTime}>
          {() => (
            <p className={`${selectorPrefix}-trigger-update`}>
              {Intl.v('更新时间')}：
              <span className={`${selectorPrefix}-trigger-update-label`}>
                {dayjs(preUpdateTimeRef.current).format(updateTimeFormat)}
              </span>
            </p>
          )}
        </ConditionalRender>
      ),
      [isShowUpdateTime, preUpdateTimeRef.current, updateTimeFormat],
    );

    const _renderLoadingAnimation = useCallback(
      () => (
        <ConditionalRender conditional={!!renderLoadingAnimation}>
          {() => (
            <ConditionalRender
              conditional={Util.isString(renderLoadingAnimation)}
              noMatch={() => (
                <div className={`${selectorPrefix}-trigger-refresh`} ref={refreshElRef}>
                  {(renderLoadingAnimation as Function)()}
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

    /**
     * renderMask
     */
    function renderMask() {
      maskEl.current = document.querySelector(`.${selectorPrefix}-mask`);

      if (!maskEl.current) {
        maskEl.current = document.createElement('div');
        maskEl.current.className = `${selectorPrefix}-mask`;
        document.body.appendChild(maskEl.current);
      }
    }

    /**
     * getPullHeight
     */
    function getPullHeight(): number {
      const { pullHeight = 200 } = props;

      if ((pullHeight || 200) <= 0) {
        return 200;
      } else {
        if ((pullHeight || 200) > (scrollEl.current as HTMLElement).clientHeight) {
          return (scrollEl.current as HTMLElement).clientHeight;
        } else {
          return pullHeight || 200;
        }
      }
    }

    function initEvents() {
      scrollEl.current?.addEventListener?.('touchstart', onTouchStart);
      scrollEl.current?.addEventListener?.('mousedown', onTouchStart);
      scrollEl.current?.addEventListener?.('scroll', onScroll);
    }

    /**
     * trigger
     * @param action
     * @param params
     */
    function trigger(action: string, params?: any) {
      if (props[action]) {
        props[action](params);
      }
    }

    /**
     * translateY - Y平移
     * @param el
     * @param y
     * @param duration
     * @private
     */
    function translateY(el: HTMLDivElement, y: string, duration = 0) {
      el.style.transition = el.style.transition = `transform ${duration}ms ease`;
      el.style.transform = el.style.transform = `translate3d(0,${y},0)`;
    }

    /**
     * clear
     */
    function clear() {
      removeEvents();

      isDownPull.current = false;

      isTop.current = true;

      (el.current as HTMLElement).style.display = 'flex';

      (refreshElRef.current as HTMLElement).style.display = 'none';

      (triggerInnerEl.current as HTMLElement).style.display = 'flex';

      rotateIcon(iconEl.current as HTMLDivElement, 180, 0);

      (scrollEl.current as HTMLElement).style.overflowY = 'auto';

      (maskEl.current as HTMLElement).style.display = 'none';
    }

    /**
     * removeEvents
     */
    function removeEvents() {
      scrollEl.current?.removeEventListener('mousemove', onTouchMove);
      scrollEl.current?.removeEventListener('mouseup', onTouchEnd);
      scrollEl.current?.removeEventListener('touchmove', onTouchMove);
      scrollEl.current?.removeEventListener('touchend', onTouchEnd);
    }

    /**
     * refresh
     */
    function refresh() {
      function onTransitionEnd() {
        (triggerInnerEl.current as HTMLElement).style.display = 'none';

        (refreshElRef.current as HTMLElement).style.display = 'block';

        trigger('onPullRefresh');

        scrollEl.current?.removeEventListener('transitionend', onTransitionEnd);

        setPreUpdateTime(dayjs().valueOf());
      }

      (maskEl.current as HTMLElement).style.display = 'block';

      removeEvents();

      scrollEl.current?.addEventListener?.('transitionend', onTransitionEnd);

      translateY(scrollEl.current as HTMLDivElement, `${refreshHeight.current}px`, 500);

      translateY(el.current as HTMLDivElement, `calc(-100% + ${refreshHeight.current}px)`, 500);

      rotateIcon(iconEl.current as HTMLDivElement, 180, 300);
    }

    /**
     * reset
     */
    function reset() {
      function onTransitionEnd() {
        scrollEl.current?.removeEventListener?.('transitionend', onTransitionEnd);

        (triggerInnerEl.current as HTMLElement).style.display = 'flex';
      }

      clear();

      scrollEl.current?.addEventListener?.('transitionend', onTransitionEnd);

      translateY(scrollEl.current as HTMLDivElement, '0px', 200);

      translateY(el.current as HTMLDivElement, 'calc(-100% + 0px)', 200);
    }

    /**
     * resetUpdateTime
     * @param updateTime
     * @return Promise
     */
    function resetUpdateTime(updateTime: number): Promise<void> {
      return new Promise((resolve) =>
        setPreUpdateTime(updateTime || dayjs().valueOf(), () => resolve()),
      );
    }

    /**
     * getUpdateTime
     * @return number
     */
    function getUpdateTime() {
      return preUpdateTimeRef.current;
    }

    /**
     * rotateIcon
     * @param el
     * @param distance
     * @param duration
     * @private
     */
    function rotateIcon(el: HTMLDivElement, distance: number, duration = 0) {
      const deg = distance;
      el.style.transition = el.style.transition = `transform ${duration}ms linear`;
      el.style.transform = el.style.transform = `rotate(${deg}deg)`;
    }

    /**
     * onTouchStart
     */
    function onTouchStart(e) {
      trigger('onPullStart');

      startPageY.current = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      scrollEl.current?.addEventListener('touchmove', onTouchMove);
      scrollEl.current?.addEventListener('mousemove', onTouchMove);
      scrollEl.current?.addEventListener('touchend', onTouchEnd);
      scrollEl.current?.addEventListener('mouseup', onTouchEnd);
    }

    /**
     * onTouchMove
     * @param e
     */
    function onTouchMove(e) {
      (scrollEl.current as HTMLElement).style.overflow = 'hidden';

      const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      const difference = targetY - startPageY.current;

      const distance = Math.abs(difference);

      // 中线下
      if (difference > 0) {
        e.preventDefault();

        isDownPull.current = true;

        // 正常拉
        if (distance < pullHeight.current) {
          translateY(scrollEl.current as HTMLDivElement, `${distance}px`, 0);

          translateY(el.current as HTMLDivElement, `calc(-100% + ${distance}px)`, 0);

          // 具备刷新条件
          if (distance >= refreshHeight.current + 80) {
            // console.log('3.具备刷新条件');
            rotateIcon(iconEl.current as HTMLDivElement, 0, 150);

            setCan(true, () => trigger('onPullCanRefresh'));
          }
          // 不具备刷新条件
          else {
            rotateIcon(iconEl.current as HTMLDivElement, 180, 150);

            setCan(false);
          }

          (el.current as HTMLElement).style.display = 'flex';
        }
        // 越界了
        else {
          translateY(scrollEl.current as HTMLDivElement, `${pullHeight.current}px`, 0);

          translateY(el.current as HTMLDivElement, `calc(-100% + ${pullHeight.current}px)`, 0);

          rotateIcon(iconEl.current as HTMLDivElement, 0, 150);

          // console.log('4.拉动到了底部');
          setCan(true, () => trigger('onPullBottom'));
        }
      }
      // 中线上
      else if (isDownPull.current) {
        e.preventDefault();

        translateY(scrollEl.current as HTMLDivElement, '0px', 0);

        translateY(el.current as HTMLDivElement, 'calc(-100% + 0px)', 0);

        rotateIcon(iconEl.current as HTMLDivElement, 180, 0);
      }
      // 其他
      else {
        clear();
      }
    }

    function onTouchEnd(e) {
      const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      const difference = targetY - startPageY.current;

      const distance = Math.abs(difference);

      // 中线下
      if (difference > 0) {
        // 正常拉
        if (distance < pullHeight.current) {
          if (distance >= refreshHeight.current + 80) {
            refresh();
          } else {
            // console.log('2.没有具备刷新条件弹回');
            // self.events.trigger('pullRebound');
            trigger('onPullRebound');
            reset();
          }
        }
        // 越界了
        else {
          refresh();
        }
      }
      // 中线上
      else {
        clear();
      }
    }

    function onScroll(e) {
      if (e.target.scrollTop === 0) {
        isTop.current = true;

        scrollEl.current?.addEventListener?.('touchstart', onTouchStart);

        scrollEl.current?.addEventListener?.('mousedown', onTouchStart);
      } else if (isTop.current) {
        isTop.current = false;

        scrollEl.current?.removeEventListener?.('touchstart', onTouchStart);

        scrollEl.current?.removeEventListener?.('mousedown', onTouchStart);
      }
    }

    function imer() {
      pullHeight.current = getPullHeight();
      refreshHeight.current = (el.current as HTMLElement).clientHeight;
    }

    useImperativeHandle(ref, () => ({
      refresh,
      reset,
      resetUpdateTime,
      getUpdateTime,
    }));

    useEffect(() => {
      setPreUpdateTime(props.updateTime || dayjs().valueOf());
    }, [props.updateTime]);

    useEffect(() => {
      renderMask();
    }, []);

    useLayoutEffect(() => {
      el.current = elRef.current;
      iconEl.current = iconElRef.current;
      scrollEl.current = scrollElRef.current;
      triggerInnerEl.current = triggerInnerElRef.current;

      imer();
    }, []);

    useLayoutEffect(() => {
      initEvents();

      return () => removeEvents();
    });

    useLayoutEffect(() => {
      const onResize = debounce(() => {
        imer();
        update();
      }, 300);

      ro.current = new ResizeObserver(onResize);

      ro.current.observe(rootEl.current as HTMLElement);

      return () => {
        ro?.current?.disconnect();
      };
    }, []);

    return (
      <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}} ref={rootEl}>
        <div
          className={classNames(`${selectorPrefix}-scroll`, scrollClassName ?? '')}
          style={scrollStyle ?? {}}
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
