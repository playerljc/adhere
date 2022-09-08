import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useImperativeHandle,
} from 'react';
import classNames from 'classnames';
import moment from 'moment';
import Intl from '@baifendian/adhere-util-intl';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Util from '@baifendian/adhere-util';
import Resource from '@baifendian/adhere-util-resource';
import Hooks from '@baifendian/adhere-ui-hooks';

import { PullRefreshRefHandle, PullRefreshProps } from './types';

const selectorPrefix = 'adhere-ui-pullrefresh';

const defaultImg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==';

const { useSetState } = Hooks;

const PullRefresh: ForwardRefRenderFunction<PullRefreshRefHandle, PullRefreshProps> = (
  props,
  ref,
) => {
  const {
    className = '',
    style = {},
    scrollClassName = '',
    scrollStyle = {},
    renderIcon,
    renderLabel = () => Intl.v('下拉刷新'),
    renderCanLabel = () => Intl.v('松开刷新'),
    renderLoadingAnimation = 'la-ball-circus la-dark',
    children,
  } = props;

  const [isCan, setCan] = useSetState(false);
  const [preUpdateTime, setPreUpdateTime] = useSetState(moment().valueOf());

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
  function _renderIcon() {
    return (
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
    );
  }

  function _renderLabel() {
    return (
      <p className={`${selectorPrefix}-trigger-label`}>
        <ConditionalRender conditional={isCan} noMatch={() => renderLabel?.()}>
          {() => renderCanLabel?.()}
        </ConditionalRender>
      </p>
    );
  }

  /**
   * renderUpdateTime
   */
  function renderUpdateTime() {
    const {
      isShowUpdateTime = true,
      updateTimeFormat = Resource.Dict.value.ResourceMomentFormat18.value(),
    } = props;

    return (
      <ConditionalRender conditional={isShowUpdateTime}>
        {() => (
          <p className={`${selectorPrefix}-trigger-update`}>
            {Intl.v('更新时间')}：
            <span className={`${selectorPrefix}-trigger-update-label`}>
              {moment(preUpdateTime).format(updateTimeFormat)}
            </span>
          </p>
        )}
      </ConditionalRender>
    );
  }

  function _renderLoadingAnimation() {
    return (
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
                className={classNames(`${selectorPrefix}-trigger-refresh`, renderLoadingAnimation)}
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
    );
  }

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

  function addEvents() {
    scrollEl.current?.addEventListener('touchstart', onTouchStart);
    scrollEl.current?.addEventListener('mousedown', onTouchStart);
    scrollEl.current?.addEventListener('scroll', onScroll);
  }

  /**
   * trigger
   * @param action
   * @param params
   */
  function trigger(action, params?: any) {
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
  function translateY(el, y: string, duration = 0) {
    el.style.transition = el.style.webkitTransition = `transform ${duration}ms ease`;
    el.style.transform = el.style.webkitTransform = `translate3d(0,${y},0)`;
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

    rotateIcon(iconEl.current, 180, 0);

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

      setPreUpdateTime(moment().valueOf());
    }

    (maskEl.current as HTMLElement).style.display = 'block';

    removeEvents();

    scrollEl.current?.addEventListener('transitionend', onTransitionEnd);

    translateY(scrollEl.current, `${refreshHeight.current}px`, 500);

    translateY(el.current, `calc(-100% + ${refreshHeight.current}px)`, 500);

    rotateIcon(iconEl.current, 180, 300);
  }

  /**
   * reset
   */
  function reset() {
    function onTransitionEnd() {
      scrollEl.current?.removeEventListener('transitionend', onTransitionEnd);

      (triggerInnerEl.current as HTMLElement).style.display = 'flex';
    }

    clear();

    scrollEl.current?.addEventListener('transitionend', onTransitionEnd);

    translateY(scrollEl.current, '0px', 200);

    translateY(el.current, 'calc(-100% + 0px)', 200);
  }

  /**
   * resetUpdateTime
   * @param updateTime
   * @return Promise
   */
  function resetUpdateTime(updateTime: number): Promise<void> {
    return new Promise((resolve) =>
      setPreUpdateTime(updateTime || moment().valueOf(), () => resolve()),
    );
  }

  /**
   * getUpdateTime
   * @return number
   */
  function getUpdateTime() {
    return preUpdateTime;
  }

  /**
   * rotateIcon
   * @param el
   * @param distance
   * @param duration
   * @private
   */
  function rotateIcon(el, distance, duration = 0) {
    const deg = distance;
    el.style.transition = el.style.webkitTransition = `transform ${duration}ms linear`;
    el.style.transform = el.style.webkitTransform = `rotate(${deg}deg)`;
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
        translateY(scrollEl.current, `${distance}px`, 0);

        translateY(el.current, `calc(-100% + ${distance}px)`, 0);

        // 具备刷新条件
        if (distance >= refreshHeight.current + 80) {
          // console.log('3.具备刷新条件');
          rotateIcon(iconEl.current, 0, 150);

          setCan(true, () => trigger('onPullCanRefresh'));
        }
        // 不具备刷新条件
        else {
          rotateIcon(iconEl.current, 180, 150);

          setCan(false);
        }

        (el.current as HTMLElement).style.display = 'flex';
      }
      // 越界了
      else {
        translateY(scrollEl.current, `${pullHeight.current}px`, 0);

        translateY(el.current, `calc(-100% + ${pullHeight.current}px)`, 0);

        rotateIcon(iconEl.current, 0, 150);

        // console.log('4.拉动到了底部');
        setCan(true, () => trigger('onPullBottom'));
      }
    }
    // 中线上
    else if (isDownPull.current) {
      e.preventDefault();

      translateY(scrollEl.current, '0px', 0);

      translateY(el.current, 'calc(-100% + 0px)', 0);

      rotateIcon(iconEl.current, 180, 0);
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

      scrollEl.current?.addEventListener('touchstart', onTouchStart);

      scrollEl.current?.addEventListener('mousedown', onTouchStart);
    } else if (isTop.current) {
      isTop.current = false;

      scrollEl.current?.removeEventListener('touchstart', onTouchStart);

      scrollEl.current?.removeEventListener('mousedown', onTouchStart);
    }
  }

  useImperativeHandle(ref, () => ({
    refresh,
    reset,
    resetUpdateTime,
    getUpdateTime,
  }));

  useEffect(() => {
    setPreUpdateTime(props.updateTime || moment().valueOf());
  }, [props.updateTime]);

  useEffect(() => {
    renderMask();
  }, []);

  useLayoutEffect(() => {
    el.current = elRef.current;
    iconEl.current = iconElRef.current;
    scrollEl.current = scrollElRef.current;
    triggerInnerEl.current = triggerInnerElRef.current;

    pullHeight.current = getPullHeight();
    refreshHeight.current = (el.current as HTMLElement).clientHeight;

    addEvents();
  }, []);

  return (
    <div className={classNames(selectorPrefix, className || '')} style={style || {}}>
      <div
        className={classNames(`${selectorPrefix}-scroll`, scrollClassName || '')}
        style={scrollStyle || {}}
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
};
// /**
//  * PullRefresh
//  * @class PullRefresh
//  * @classdesc PullRefresh
//  */
// class PullRefresh extends React.Component<IPullRefreshProps, IPullRefreshState> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   state: IPullRefreshState = {
//     isCan: false,
//     preUpdateTime: moment().valueOf(),
//   };
//
//   // 是否到顶了
//   private isTop: boolean = true;
//
//   private el: HTMLElement | null = null;
//   private scrollEl: HTMLElement | null = null;
//   private iconEl: HTMLElement | null = null;
//   private triggerInnerEl: HTMLElement | null = null;
//   private maskEl: HTMLElement | null = null;
//
//   private pullHeight: number = 200;
//   private startPageY: number | undefined;
//   private isDownPull: boolean = false;
//   private refreshHeight: number = 0;
//
//   private elRef = React.createRef();
//   private scrollElRef = React.createRef();
//   private iconElRef = React.createRef();
//   private refreshElRef = React.createRef();
//   private triggerInnerElRef = React.createRef();
//
//   constructor(props) {
//     super(props);
//
//     this.onTouchStart = this.onTouchStart.bind(this);
//     this.onTouchMove = this.onTouchMove.bind(this);
//     this.onTouchEnd = this.onTouchEnd.bind(this);
//     this.onScroll = this.onScroll.bind(this);
//
//     this.renderMask();
//   }
//
//   componentDidMount() {
//     this.el = this.elRef.current as HTMLElement;
//     this.iconEl = this.iconElRef.current as HTMLElement;
//     this.scrollEl = this.scrollElRef.current as HTMLElement;
//     this.triggerInnerEl = this.triggerInnerElRef.current as HTMLElement;
//
//     this.pullHeight = this.getPullHeight();
//     this.refreshHeight = this.el.clientHeight;
//
//     this.addEvents();
//   }
//
//   componentWillReceiveProps(nextProps: Readonly<IPullRefreshProps>, nextContext: any) {
//     if ('updateTime' in nextProps && nextProps.updateTime !== this.props.updateTime) {
//       this.setState({
//         // @ts-ignore
//         preUpdateTime: nextProps.updateTime,
//       });
//     }
//   }
//
//   /**
//    * getPullHeight
//    * @private
//    * @return number
//    */
//   private getPullHeight(): number {
//     const { pullHeight } = this.props;
//
//     if (pullHeight <= 0) {
//       return 200;
//     } else {
//       // @ts-ignore
//       if (pullHeight > this.scrollEl.clientHeight) {
//         // @ts-ignore
//         return this.scrollEl.clientHeight;
//       } else {
//         return pullHeight;
//       }
//     }
//   }
//
//   /**
//    * renderMask
//    * @private
//    */
//   private renderMask(): void {
//     this.maskEl = document.querySelector(`.${selectorPrefix}-mask`);
//
//     if (!this.maskEl) {
//       this.maskEl = document.createElement('div');
//       this.maskEl.className = `${selectorPrefix}-mask`;
//       document.body.appendChild(this.maskEl);
//     }
//   }
//
//   /**
//    * addEvents
//    * @private
//    */
//   private addEvents(): void {
//     // @ts-ignore
//     this.scrollEl.addEventListener('touchstart', this.onTouchStart);
//     // @ts-ignore
//     this.scrollEl.addEventListener('mousedown', this.onTouchStart);
//     // @ts-ignore
//     this.scrollEl.addEventListener('scroll', this.onScroll);
//   }
//
//   /**
//    * removeEvents
//    * @private
//    */
//   private removeEvents(): void {
//     // @ts-ignore
//     this.scrollEl.removeEventListener('mousemove', this.onTouchMove);
//     // @ts-ignore
//     this.scrollEl.removeEventListener('mouseup', this.onTouchEnd);
//     // @ts-ignore
//     this.scrollEl.removeEventListener('touchmove', this.onTouchMove);
//     // @ts-ignore
//     this.scrollEl.removeEventListener('touchend', this.onTouchEnd);
//   }
//
//   /**
//    * onTouchStart
//    * @param e
//    * @private
//    */
//   private onTouchStart(e) {
//     this.trigger('onPullStart');
//
//     this.startPageY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
//
//     const { scrollEl } = this;
//
//     // @ts-ignore
//     scrollEl.addEventListener('touchmove', this.onTouchMove);
//     // @ts-ignore
//     scrollEl.addEventListener('mousemove', this.onTouchMove);
//     // @ts-ignore
//     scrollEl.addEventListener('touchend', this.onTouchEnd);
//     // @ts-ignore
//     scrollEl.addEventListener('mouseup', this.onTouchEnd);
//   }
//
//   /**
//    * onTouchMove
//    * @param e
//    * @private
//    */
//   private onTouchMove(e) {
//     // @ts-ignore
//     this.scrollEl.style.overflow = 'hidden';
//
//     const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
//
//     // @ts-ignore
//     const difference = targetY - this.startPageY;
//
//     const distance = Math.abs(difference);
//
//     // 中线下
//     if (difference > 0) {
//       e.preventDefault();
//
//       this.isDownPull = true;
//
//       // 正常拉
//       if (distance < this.pullHeight) {
//         this.translateY(this.scrollEl, `${distance}px`, 0);
//
//         this.translateY(this.el, `calc(-100% + ${distance}px)`, 0);
//
//         // 具备刷新条件
//         if (distance >= this.refreshHeight + 80) {
//           // console.log('3.具备刷新条件');
//           this.rotateIcon(this.iconEl, 0, 150);
//
//           this.setState(
//             {
//               isCan: true,
//             },
//             () => {
//               this.trigger('onPullCanRefresh');
//             },
//           );
//         }
//         // 不具备刷新条件
//         else {
//           this.rotateIcon(this.iconEl, 180, 150);
//
//           this.setState({
//             isCan: false,
//           });
//         }
//
//         // @ts-ignore
//         this.el.style.display = 'flex';
//       }
//       // 越界了
//       else {
//         this.translateY(this.scrollEl, `${this.pullHeight}px`, 0);
//
//         this.translateY(this.el, `calc(-100% + ${this.pullHeight}px)`, 0);
//
//         this.rotateIcon(this.iconEl, 0, 150);
//
//         // console.log('4.拉动到了底部');
//         this.setState(
//           {
//             isCan: true,
//           },
//           () => {
//             this.trigger('onPullBottom');
//           },
//         );
//       }
//     }
//     // 中线上
//     else if (this.isDownPull) {
//       e.preventDefault();
//
//       this.translateY(this.scrollEl, '0px', 0);
//
//       this.translateY(this.el, 'calc(-100% + 0px)', 0);
//
//       this.rotateIcon(this.iconEl, 180, 0);
//     }
//     // 其他
//     else {
//       this.clear.call(this);
//     }
//   }
//
//   private onTouchEnd(e) {
//     const self = this;
//
//     const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;
//
//     // @ts-ignore
//     const difference = targetY - this.startPageY;
//
//     const distance = Math.abs(difference);
//
//     // 中线下
//     if (difference > 0) {
//       // 正常拉
//       if (distance < this.pullHeight) {
//         if (distance >= this.refreshHeight + 80) {
//           self.refresh();
//         } else {
//           // console.log('2.没有具备刷新条件弹回');
//           // self.events.trigger('pullRebound');
//           self.trigger('onPullRebound');
//           self.reset();
//         }
//       }
//       // 越界了
//       else {
//         self.refresh();
//       }
//     }
//     // 中线上
//     else {
//       self.clear();
//     }
//   }
//
//   private onScroll(e) {
//     const self = this;
//
//     if (e.target.scrollTop === 0) {
//       self.isTop = true;
//
//       // @ts-ignore
//       self.scrollEl.addEventListener('touchstart', this.onTouchStart);
//
//       // @ts-ignore
//       self.scrollEl.addEventListener('mousedown', this.onTouchStart);
//     } else if (self.isTop) {
//       self.isTop = false;
//
//       // @ts-ignore
//       self.scrollEl.removeEventListener('touchstart', this.onTouchStart);
//
//       // @ts-ignore
//       self.scrollEl.removeEventListener('mousedown', this.onTouchStart);
//     }
//   }
//
//   /**
//    * translateY - Y平移
//    * @param el
//    * @param y
//    * @param duration
//    * @private
//    */
//   private translateY(el, y: string, duration = 0) {
//     el.style.transition = el.style.webkitTransition = `transform ${duration}ms ease`;
//     el.style.transform = el.style.webkitTransform = `translate3d(0,${y},0)`;
//   }
//
//   /**
//    * rotateIcon
//    * @param el
//    * @param distance
//    * @param duration
//    * @private
//    */
//   private rotateIcon(el, distance, duration = 0) {
//     const deg = distance;
//     el.style.transition = el.style.webkitTransition = `transform ${duration}ms linear`;
//     el.style.transform = el.style.webkitTransform = `rotate(${deg}deg)`;
//   }
//
//   /**
//    * clear
//    * @access private
//    */
//   private clear() {
//     this.removeEvents();
//
//     this.isDownPull = false;
//
//     this.isTop = true;
//
//     // @ts-ignore
//     this.el.style.display = 'flex';
//
//     // @ts-ignore
//     this.refreshElRef.current.style.display = 'none';
//
//     // @ts-ignore
//     this.triggerInnerEl?.style.display = 'flex';
//
//     this.rotateIcon(this.iconEl, 180, 0);
//
//     // @ts-ignore
//     this.scrollEl.style.overflowY = 'auto';
//
//     // @ts-ignore
//     this.maskEl.style.display = 'none';
//   }
//
//   /**
//    * trigger
//    * @param action
//    * @param params
//    * @private
//    */
//   private trigger(action, params?: any): void {
//     if (this.props[action]) {
//       this.props[action](params);
//     }
//   }
//
//   /**
//    * refresh
//    */
//   refresh() {
//     function onTransitionEnd() {
//       // @ts-ignore
//       self.triggerInnerEl.style.display = 'none';
//
//       // @ts-ignore
//       self.refreshElRef.current.style.display = 'block';
//
//       self.trigger('onPullRefresh', self);
//
//       // @ts-ignore
//       self.scrollEl.removeEventListener('transitionend', onTransitionEnd);
//
//       self.setState({
//         preUpdateTime: moment().valueOf(),
//       });
//     }
//
//     const self = this;
//
//     // @ts-ignore
//     this.maskEl.style.display = 'block';
//
//     this.removeEvents();
//
//     // @ts-ignore
//     self.scrollEl.addEventListener('transitionend', onTransitionEnd);
//
//     self.translateY(self.scrollEl, `${self.refreshHeight}px`, 500);
//
//     self.translateY(self.el, `calc(-100% + ${self.refreshHeight}px)`, 500);
//
//     self.rotateIcon(self.iconEl, 180, 300);
//   }
//
//   /**
//    * reset
//    */
//   reset() {
//     function onTransitionEnd() {
//       // @ts-ignore
//       self.scrollEl.removeEventListener('transitionend', onTransitionEnd);
//
//       // @ts-ignore
//       self.triggerInnerEl?.style.display = 'flex';
//     }
//
//     const self = this;
//
//     self.clear();
//
//     // @ts-ignore
//     self.scrollEl.addEventListener('transitionend', onTransitionEnd);
//
//     self.translateY(self.scrollEl, '0px', 200);
//
//     self.translateY(self.el, 'calc(-100% + 0px)', 200);
//   }
//
//   /**
//    * resetUpdateTime
//    * @param updateTime
//    * @return Promise
//    */
//   resetUpdateTime(updateTime: number): Promise<null> {
//     return new Promise((resolve) => {
//       this.setState(
//         {
//           preUpdateTime: updateTime || moment().valueOf(),
//         },
//         () => resolve(),
//       );
//     });
//   }
//
//   /**
//    * getUpdateTime
//    * @return number
//    */
//   getUpdateTime(): number {
//     return this.state.preUpdateTime;
//   }
//
//   private renderLoadingAnimation() {
//     // @ts-ignore
//     const { renderLoadingAnimation } = this.props;
//
//     return (
//       <ConditionalRender conditional={!!renderLoadingAnimation}>
//         {() => (
//           <ConditionalRender
//             conditional={Util.isString(renderLoadingAnimation)}
//             // @ts-ignore
//             noMatch={() => (
//               <div
//                 className={`${selectorPrefix}-trigger-refresh`}
//                 // @ts-ignore
//                 ref={this.refreshElRef}
//               >
//                 {(renderLoadingAnimation as Function)()}
//               </div>
//             )}
//           >
//             {() => (
//               <div
//                 className={classNames(
//                   `${selectorPrefix}-trigger-refresh`,
//                   ...(renderLoadingAnimation as unknown as string)|| '',
//                 )}
//                 // @ts-ignore
//                 ref={this.refreshElRef}
//               >
//                 <div></div>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//               </div>
//             )}
//           </ConditionalRender>
//         )}
//       </ConditionalRender>
//     );
//   }
//
//   /**
//    * renderIcon
//    * @private
//    */
//   private renderIcon() {
//     const { renderIcon } = this.props;
//
//     return (
//       <ConditionalRender
//         conditional={!!renderIcon}
//         // @ts-ignore
//         noMatch={() => (
//           <div className={`${selectorPrefix}-trigger-icon`}>
//             <img
//               className={`${selectorPrefix}-trigger-icon-inner`}
//               src={defaultImg}
//               alt=""
//               // @ts-ignore
//               ref={this.iconElRef}
//             />
//           </div>
//         )}
//       >
//         {() => (
//           <div className={`${selectorPrefix}-trigger-icon`}>
//             <div
//               className={`${selectorPrefix}-trigger-icon-inner`}
//               // @ts-ignore
//               ref={this.iconElRef}
//             >
//               {/* @ts-ignore */}
//               {renderIcon()}
//             </div>
//           </div>
//         )}
//       </ConditionalRender>
//     );
//   }
//
//   /**
//    * renderLabel
//    * @private
//    */
//   private renderLabel() {
//     const { renderLabel, renderCanLabel } = this.props;
//     const { isCan } = this.state;
//
//     return (
//       <p className={`${selectorPrefix}-trigger-label`}>
//         <ConditionalRender
//           conditional={isCan}
//           // @ts-ignore
//           noMatch={() => renderLabel()}
//         >
//           {() => renderCanLabel()}
//         </ConditionalRender>
//       </p>
//     );
//   }
//
//   /**
//    * renderUpdateTime
//    * @private
//    */
//   private renderUpdateTime() {
//     const { isShowUpdateTime, updateTimeFormat } = this.props;
//     const { preUpdateTime } = this.state;
//
//     return (
//       <ConditionalRender conditional={isShowUpdateTime}>
//         {() => (
//           <p className={`${selectorPrefix}-trigger-update`}>
//             {Intl.v('更新时间')}：
//             <span className={`${selectorPrefix}-trigger-update-label`}>
//               {moment(preUpdateTime).format(updateTimeFormat)}
//             </span>
//           </p>
//         )}
//       </ConditionalRender>
//     );
//   }
//
//   render() {
//     // @ts-ignore
//     const { className, style, scrollClassName, scrollStyle, children } = this.props;
//
//     return (
//       // @ts-ignore
//       <div className={classNames(selectorPrefix, ...className|| '')} style={{ ...style }}>
//         <div
//           // @ts-ignore
//           className={classNames(`${selectorPrefix}-scroll`, ...scrollClassName|| '')}
//           style={{ ...scrollStyle }}
//           // @ts-ignore
//           ref={this.scrollElRef}
//         >
//           {children}
//         </div>
//
//         <div
//           className={`${selectorPrefix}-trigger`}
//           // @ts-ignore
//           ref={this.elRef}
//         >
//           <div
//             className={`${selectorPrefix}-trigger-inner`}
//             // @ts-ignore
//             ref={this.triggerInnerElRef}
//           >
//             {this.renderIcon()}
//             {this.renderLabel()}
//             {this.renderUpdateTime()}
//           </div>
//           {this.renderLoadingAnimation()}
//         </div>
//       </div>
//     );
//   }
// }
//
// PullRefresh.defaultProps = {
//   className: '',
//   style: {},
//   scrollClassName: '',
//   scrollStyle: {},
//   pullHeight: 200,
//   renderLabel: () => Intl.v('下拉刷新'),
//   renderCanLabel: () => Intl.v('松开刷新'),
//   renderLoadingAnimation: 'la-ball-circus la-dark',
//   isShowUpdateTime: true,
//   updateTime: moment().valueOf(),
//   updateTimeFormat: Resource.Dict.value.ResourceMomentFormat18.value(),
// };
//
// PullRefresh.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   scrollClassName: PropTypes.string,
//   scrollStyle: PropTypes.object,
//   pullHeight: PropTypes.number,
//   renderIcon: PropTypes.func,
//   renderLabel: PropTypes.func,
//   renderCanLabel: PropTypes.func,
//   renderLoadingAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
//   isShowUpdateTime: PropTypes.bool,
//   updateTime: PropTypes.number,
//   updateTimeFormat: PropTypes.string,
//   onPullStart: PropTypes.func,
//   onPullCanRefresh: PropTypes.func,
//   onPullRefresh: PropTypes.func,
//   onPullBottom: PropTypes.func,
//   onPullRebound: PropTypes.func,
// };

export default forwardRef<PullRefreshRefHandle, PullRefreshProps>(PullRefresh);
