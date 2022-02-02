import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';
import Intl from '@baifendian/adhere-util-intl';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Resource from '@baifendian/adhere-util-resource';
import Util from '@baifendian/adhere-util';

import { IPullRefreshProps, IPullRefreshState } from './types';

const selectorPrefix = 'adhere-ui-pullrefresh';

const defaultImg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==';

/**
 * PullRefresh
 * @class PullRefresh
 * @classdesc PullRefresh
 */
class PullRefresh extends React.Component<IPullRefreshProps, IPullRefreshState> {
  static defaultProps: any;
  static propTypes: any;

  state: IPullRefreshState = {
    isCan: false,
    preUpdateTime: moment().valueOf(),
  };

  // 是否到顶了
  private isTop: boolean = true;

  private el: HTMLElement | null = null;
  private scrollEl: HTMLElement | null = null;
  private iconEl: HTMLElement | null = null;
  private triggerInnerEl: HTMLElement | null = null;
  private maskEl: HTMLElement | null = null;

  private pullHeight: number = 200;
  private startPageY: number | undefined;
  private isDownPull: boolean = false;
  private refreshHeight: number = 0;

  private elRef = React.createRef();
  private scrollElRef = React.createRef();
  private iconElRef = React.createRef();
  private refreshElRef = React.createRef();
  private triggerInnerElRef = React.createRef();

  constructor(props) {
    super(props);

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.renderMask();
  }

  componentDidMount() {
    this.el = this.elRef.current as HTMLElement;
    this.iconEl = this.iconElRef.current as HTMLElement;
    this.scrollEl = this.scrollElRef.current as HTMLElement;
    this.triggerInnerEl = this.triggerInnerElRef.current as HTMLElement;

    this.pullHeight = this.getPullHeight();
    this.refreshHeight = this.el.clientHeight;

    this.addEvents();
  }

  componentWillReceiveProps(nextProps: Readonly<IPullRefreshProps>, nextContext: any) {
    if ('updateTime' in nextProps && nextProps.updateTime !== this.props.updateTime) {
      this.setState({
        // @ts-ignore
        preUpdateTime: nextProps.updateTime,
      });
    }
  }

  /**
   * getPullHeight
   * @private
   * @return number
   */
  private getPullHeight(): number {
    const { pullHeight } = this.props;

    if (pullHeight <= 0) {
      return 200;
    } else {
      // @ts-ignore
      if (pullHeight > this.scrollEl.clientHeight) {
        // @ts-ignore
        return this.scrollEl.clientHeight;
      } else {
        return pullHeight;
      }
    }
  }

  /**
   * renderMask
   * @private
   */
  private renderMask(): void {
    this.maskEl = document.querySelector(`.${selectorPrefix}-mask`);

    if (!this.maskEl) {
      this.maskEl = document.createElement('div');
      this.maskEl.className = `${selectorPrefix}-mask`;
      document.body.appendChild(this.maskEl);
    }
  }

  /**
   * addEvents
   * @private
   */
  private addEvents(): void {
    // @ts-ignore
    this.scrollEl.addEventListener('touchstart', this.onTouchStart);
    // @ts-ignore
    this.scrollEl.addEventListener('mousedown', this.onTouchStart);
    // @ts-ignore
    this.scrollEl.addEventListener('scroll', this.onScroll);
  }

  /**
   * removeEvents
   * @private
   */
  private removeEvents(): void {
    // @ts-ignore
    this.scrollEl.removeEventListener('mousemove', this.onTouchMove);
    // @ts-ignore
    this.scrollEl.removeEventListener('mouseup', this.onTouchEnd);
    // @ts-ignore
    this.scrollEl.removeEventListener('touchmove', this.onTouchMove);
    // @ts-ignore
    this.scrollEl.removeEventListener('touchend', this.onTouchEnd);
  }

  /**
   * onTouchStart
   * @param e
   * @private
   */
  private onTouchStart(e) {
    this.trigger('onPullStart');

    this.startPageY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

    const { scrollEl } = this;

    // @ts-ignore
    scrollEl.addEventListener('touchmove', this.onTouchMove);
    // @ts-ignore
    scrollEl.addEventListener('mousemove', this.onTouchMove);
    // @ts-ignore
    scrollEl.addEventListener('touchend', this.onTouchEnd);
    // @ts-ignore
    scrollEl.addEventListener('mouseup', this.onTouchEnd);
  }

  /**
   * onTouchMove
   * @param e
   * @private
   */
  private onTouchMove(e) {
    // @ts-ignore
    this.scrollEl.style.overflow = 'hidden';

    const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

    // @ts-ignore
    const difference = targetY - this.startPageY;

    const distance = Math.abs(difference);

    // 中线下
    if (difference > 0) {
      e.preventDefault();

      this.isDownPull = true;

      // 正常拉
      if (distance < this.pullHeight) {
        this.translateY(this.scrollEl, `${distance}px`, 0);

        this.translateY(this.el, `calc(-100% + ${distance}px)`, 0);

        // 具备刷新条件
        if (distance >= this.refreshHeight + 80) {
          console.log('3.具备刷新条件');
          this.rotateIcon(this.iconEl, 0, 150);

          this.setState(
            {
              isCan: true,
            },
            () => {
              this.trigger('onPullCanRefresh');
            },
          );
        }
        // 不具备刷新条件
        else {
          this.rotateIcon(this.iconEl, 180, 150);

          this.setState({
            isCan: false,
          });
        }

        // @ts-ignore
        this.el.style.display = 'flex';
      }
      // 越界了
      else {
        this.translateY(this.scrollEl, `${this.pullHeight}px`, 0);

        this.translateY(this.el, `calc(-100% + ${this.pullHeight}px)`, 0);

        this.rotateIcon(this.iconEl, 0, 150);

        console.log('4.拉动到了底部');
        this.setState(
          {
            isCan: true,
          },
          () => {
            this.trigger('onPullBottom');
          },
        );
      }
    }
    // 中线上
    else if (this.isDownPull) {
      e.preventDefault();

      this.translateY(this.scrollEl, '0px', 0);

      this.translateY(this.el, 'calc(-100% + 0px)', 0);

      this.rotateIcon(this.iconEl, 180, 0);
    }
    // 其他
    else {
      this.clear.call(this);
    }
  }

  private onTouchEnd(e) {
    const self = this;

    const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

    // @ts-ignore
    const difference = targetY - this.startPageY;

    const distance = Math.abs(difference);

    // 中线下
    if (difference > 0) {
      // 正常拉
      if (distance < this.pullHeight) {
        if (distance >= this.refreshHeight + 80) {
          self.refresh();
        } else {
          console.log('2.没有具备刷新条件弹回');
          // self.events.trigger('pullRebound');
          self.trigger('onPullRebound');
          self.reset();
        }
      }
      // 越界了
      else {
        self.refresh();
      }
    }
    // 中线上
    else {
      self.clear();
    }
  }

  private onScroll(e) {
    const self = this;

    if (e.target.scrollTop === 0) {
      self.isTop = true;

      // @ts-ignore
      self.scrollEl.addEventListener('touchstart', this.onTouchStart);

      // @ts-ignore
      self.scrollEl.addEventListener('mousedown', this.onTouchStart);
    } else if (self.isTop) {
      self.isTop = false;

      // @ts-ignore
      self.scrollEl.removeEventListener('touchstart', this.onTouchStart);

      // @ts-ignore
      self.scrollEl.removeEventListener('mousedown', this.onTouchStart);
    }
  }

  /**
   * translateY - Y平移
   * @param el
   * @param y
   * @param duration
   * @private
   */
  private translateY(el, y: string, duration = 0) {
    el.style.transition = el.style.webkitTransition = `transform ${duration}ms ease`;
    el.style.transform = el.style.webkitTransform = `translate3d(0,${y},0)`;
  }

  /**
   * rotateIcon
   * @param el
   * @param distance
   * @param duration
   * @private
   */
  private rotateIcon(el, distance, duration = 0) {
    const deg = distance;
    el.style.transition = el.style.webkitTransition = `transform ${duration}ms linear`;
    el.style.transform = el.style.webkitTransform = `rotate(${deg}deg)`;
  }

  /**
   * clear
   * @access private
   */
  private clear() {
    this.removeEvents();

    this.isDownPull = false;

    this.isTop = true;

    // @ts-ignore
    this.el.style.display = 'flex';

    // @ts-ignore
    this.refreshElRef.current.style.display = 'none';

    // @ts-ignore
    this.triggerInnerEl?.style.display = 'flex';

    this.rotateIcon(this.iconEl, 180, 0);

    // @ts-ignore
    this.scrollEl.style.overflowY = 'auto';

    // @ts-ignore
    this.maskEl.style.display = 'none';
  }

  /**
   * trigger
   * @param action
   * @param params
   * @private
   */
  private trigger(action, params?: any): void {
    if (this.props[action]) {
      this.props[action](params);
    }
  }

  /**
   * refresh
   */
  refresh() {
    function onTransitionEnd() {
      // @ts-ignore
      self.triggerInnerEl.style.display = 'none';

      // @ts-ignore
      self.refreshElRef.current.style.display = 'block';

      self.trigger('onPullRefresh', self);

      // @ts-ignore
      self.scrollEl.removeEventListener('transitionend', onTransitionEnd);

      self.setState({
        preUpdateTime: moment().valueOf(),
      });
    }

    const self = this;

    // @ts-ignore
    this.maskEl.style.display = 'block';

    this.removeEvents();

    // @ts-ignore
    self.scrollEl.addEventListener('transitionend', onTransitionEnd);

    self.translateY(self.scrollEl, `${self.refreshHeight}px`, 500);

    self.translateY(self.el, `calc(-100% + ${self.refreshHeight}px)`, 500);

    self.rotateIcon(self.iconEl, 180, 300);
  }

  /**
   * reset
   */
  reset() {
    function onTransitionEnd() {
      // @ts-ignore
      self.scrollEl.removeEventListener('transitionend', onTransitionEnd);

      // @ts-ignore
      self.triggerInnerEl?.style.display = 'flex';
    }

    const self = this;

    self.clear();

    // @ts-ignore
    self.scrollEl.addEventListener('transitionend', onTransitionEnd);

    self.translateY(self.scrollEl, '0px', 200);

    self.translateY(self.el, 'calc(-100% + 0px)', 200);
  }

  /**
   * resetUpdateTime
   * @param updateTime
   * @return Promise
   */
  resetUpdateTime(updateTime: number): Promise<null> {
    return new Promise((resolve) => {
      this.setState(
        {
          preUpdateTime: updateTime || moment().valueOf(),
        },
        () => resolve(),
      );
    });
  }

  /**
   * getUpdateTime
   * @return number
   */
  getUpdateTime(): number {
    return this.state.preUpdateTime;
  }

  private renderLoadingAnimation() {
    // @ts-ignore
    const { renderLoadingAnimation } = this.props;

    return (
      <ConditionalRender conditional={!!renderLoadingAnimation}>
        {() => (
          <ConditionalRender
            conditional={Util.isString(renderLoadingAnimation)}
            // @ts-ignore
            noMatch={() => (
              <div
                className={`${selectorPrefix}-trigger-refresh`}
                // @ts-ignore
                ref={this.refreshElRef}
              >
                {(renderLoadingAnimation as Function)()}
              </div>
            )}
          >
            {() => (
              <div
                className={classNames(
                  `${selectorPrefix}-trigger-refresh`,
                  ...(renderLoadingAnimation as unknown as string).split(/\s+/),
                )}
                // @ts-ignore
                ref={this.refreshElRef}
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
   * renderIcon
   * @private
   */
  private renderIcon() {
    const { renderIcon } = this.props;

    return (
      <ConditionalRender
        conditional={!!renderIcon}
        // @ts-ignore
        noMatch={() => (
          <div className={`${selectorPrefix}-trigger-icon`}>
            <img
              className={`${selectorPrefix}-trigger-icon-inner`}
              src={defaultImg}
              alt=""
              // @ts-ignore
              ref={this.iconElRef}
            />
          </div>
        )}
      >
        {() => (
          <div className={`${selectorPrefix}-trigger-icon`}>
            <div
              className={`${selectorPrefix}-trigger-icon-inner`}
              // @ts-ignore
              ref={this.iconElRef}
            >
              {/* @ts-ignore */}
              {renderIcon()}
            </div>
          </div>
        )}
      </ConditionalRender>
    );
  }

  /**
   * renderLabel
   * @private
   */
  private renderLabel() {
    const { renderLabel, renderCanLabel } = this.props;
    const { isCan } = this.state;

    return (
      <p className={`${selectorPrefix}-trigger-label`}>
        <ConditionalRender
          conditional={isCan}
          // @ts-ignore
          noMatch={() => renderLabel()}
        >
          {() => renderCanLabel()}
        </ConditionalRender>
      </p>
    );
  }

  /**
   * renderUpdateTime
   * @private
   */
  private renderUpdateTime() {
    const { isShowUpdateTime, updateTimeFormat } = this.props;
    const { preUpdateTime } = this.state;

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

  render() {
    // @ts-ignore
    const { className, style, scrollClassName, scrollStyle, children } = this.props;

    return (
      // @ts-ignore
      <div className={classNames(selectorPrefix, ...className.split(/\s+/))} style={{ ...style }}>
        <div
          // @ts-ignore
          className={classNames(`${selectorPrefix}-scroll`, ...scrollClassName.split(/\s+/))}
          style={{ ...scrollStyle }}
          // @ts-ignore
          ref={this.scrollElRef}
        >
          {children}
        </div>

        <div
          className={`${selectorPrefix}-trigger`}
          // @ts-ignore
          ref={this.elRef}
        >
          <div
            className={`${selectorPrefix}-trigger-inner`}
            // @ts-ignore
            ref={this.triggerInnerElRef}
          >
            {this.renderIcon()}
            {this.renderLabel()}
            {this.renderUpdateTime()}
          </div>
          {this.renderLoadingAnimation()}
        </div>
      </div>
    );
  }
}

PullRefresh.defaultProps = {
  className: '',
  style: {},
  scrollClassName: '',
  scrollStyle: {},
  pullHeight: 200,
  renderLabel: () => Intl.v('下拉刷新'),
  renderCanLabel: () => Intl.v('松开刷新'),
  renderLoadingAnimation: 'la-ball-circus la-dark',
  isShowUpdateTime: true,
  updateTime: moment().valueOf(),
  updateTimeFormat: Resource.Dict.value.ResourceMomentFormatFull.value,
};

PullRefresh.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  scrollClassName: PropTypes.string,
  scrollStyle: PropTypes.object,
  pullHeight: PropTypes.number,
  renderIcon: PropTypes.func,
  renderLabel: PropTypes.func,
  renderCanLabel: PropTypes.func,
  renderLoadingAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isShowUpdateTime: PropTypes.bool,
  updateTime: PropTypes.number,
  updateTimeFormat: PropTypes.string,
  onPullStart: PropTypes.func,
  onPullCanRefresh: PropTypes.func,
  onPullRefresh: PropTypes.func,
  onPullBottom: PropTypes.func,
  onPullRebound: PropTypes.func,
};

export default PullRefresh;
