import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Intl from '@baifendian/adhere-util-intl';

import type { IScrollLoadProps } from './types';

const selectorPrefix = 'adhere-ui-scrollload';

/**
 * ScrollLoad
 * @class ScrollLoad
 * @classdesc ScrollLoad
 */
class ScrollLoad extends React.Component<IScrollLoadProps> {
  static defaultProps: any;
  static propTypes: any;

  static EMPTY = 'empty';
  static ERROR = 'error';
  static NORMAL = 'normal';

  private lock = false; // 锁
  private el: HTMLDivElement | null | undefined;
  private loadEl: HTMLDivElement | null | undefined;
  private emptyEl: HTMLDivElement | null | undefined;
  private errorEl: HTMLDivElement | null | undefined;

  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onEmptyClick = this.onEmptyClick.bind(this);
    this.onErrorClick = this.onErrorClick.bind(this);
  }

  componentDidMount() {
    this.initEvents();
  }

  private getScrollContainer() {
    return this.props.getScrollContainer ? this.props.getScrollContainer() : this.el;
  }

  private initEvents() {
    this.getScrollContainer()!.addEventListener('scroll', this.onScroll);
    this.emptyEl!.addEventListener('click', this.onEmptyClick);
    this.errorEl!.addEventListener('click', this.onErrorClick);
  }

  private onScroll() {
    const {
      loadEl,
      errorEl,
      emptyEl,
      props: { distance, onScrollBottom },
    } = this;

    const el = this.getScrollContainer();

    const bottomHeight = el!.scrollHeight - el!.offsetHeight;
    const scrollTop = el!.scrollTop;

    /**
     * 条件完全相等或误差值在1之间
     */
    if (onScrollBottom && Math.abs(scrollTop - bottomHeight) <= distance) {
      if (this.lock) return;

      this.lock = true;

      // 先显示loading
      loadEl!.style.display = 'flex';

      /**
       * 完成
       * @param {string} status [empty(没有数据) | error(有错误) | normal(正常)]
       */
      onScrollBottom((status) => {
        loadEl!.style.display = 'none';

        if (status === ScrollLoad.EMPTY) {
          emptyEl!.style.display = 'block';
        } else if (status === ScrollLoad.ERROR) {
          errorEl!.style.display = 'block';
        }

        this.lock = false;
      });
    }
  }

  private onEmptyClick() {
    const { onEmptyClick } = this.props;

    if (onEmptyClick) {
      onEmptyClick();
    }
  }

  private onErrorClick() {
    const { onErrorClick } = this.props;

    if (onErrorClick) {
      onErrorClick();
    }
  }

  /**
   * hideAll
   */
  hideAll() {
    this.loadEl!.style.display = 'none';
    this.errorEl!.style.display = 'none';
    this.emptyEl!.style.display = 'none';
  }

  private renderLoading(): React.ReactElement {
    const { renderLoading, loadClassName, loadStyle } = this.props;

    if (renderLoading) {
      return (
        <div
          className={classNames(`${selectorPrefix}-load`, loadClassName.split(/\s+/))}
          style={{ ...loadStyle }}
          ref={(el) => (this.loadEl = el)}
        >
          {renderLoading()}
        </div>
      );
    }

    return (
      <div
        className={classNames(`${selectorPrefix}-load`, 'standard', loadClassName.split(/\s+/))}
        style={{ ...loadStyle }}
        ref={(el) => (this.loadEl = el)}
      >
        {Intl.v('数据加载中')}
      </div>
    );
  }

  private renderEmpty(): React.ReactElement {
    const { renderEmpty, emptyClassName, emptyStyle } = this.props;

    if (renderEmpty) {
      return (
        <div
          className={classNames(`${selectorPrefix}-empty`, emptyClassName.split(/\s+/))}
          style={{ ...emptyStyle }}
          ref={(el) => (this.emptyEl = el)}
        >
          {renderEmpty()}
        </div>
      );
    }

    return (
      <div
        className={classNames(`${selectorPrefix}-empty`, emptyClassName.split(/\s+/))}
        style={{ ...emptyStyle }}
        ref={(el) => (this.emptyEl = el)}
      >
        ~{Intl.v('没有更多')}
      </div>
    );
  }

  private renderError(): React.ReactElement {
    const { renderError, errorClassName, errorStyle } = this.props;

    if (renderError) {
      return (
        <div
          className={classNames(`${selectorPrefix}-error`, errorClassName.split(/\s+/))}
          style={{ ...errorStyle }}
          ref={(el) => (this.errorEl = el)}
        >
          {renderError()}
        </div>
      );
    }

    return (
      <div
        className={classNames(`${selectorPrefix}-error`, errorClassName.split(/\s+/))}
        style={{ ...errorStyle }}
        ref={(el) => (this.errorEl = el)}
      >
        {Intl.v('出现错误')}
      </div>
    );
  }

  render() {
    const { className, style, children } = this.props;

    return (
      <div
        className={classNames(selectorPrefix, (className || '').split(/\s+/))}
        style={{
          ...style,
          overflowY: this.getScrollContainer() === this.el ? 'auto' : 'initial',
        }}
        ref={(el) => (this.el = el)}
      >
        {children}
        {this.renderLoading()}
        {this.renderEmpty()}
        {this.renderError()}
      </div>
    );
  }
}

ScrollLoad.defaultProps = {
  className: '',
  style: {},
  loadClassName: '',
  loadStyle: {},
  emptyClassName: '',
  emptyStyle: {},
  errorClassName: '',
  errorStyle: {},
  distance: 50,
  onScrollBottom: () => {},
  onEmptyClick: () => {},
  onErrorClick: () => {},
  renderLoading: undefined,
  renderEmpty: undefined,
  renderError: undefined,
};

ScrollLoad.propTypes = {
  getScrollContainer: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  loadClassName: PropTypes.string,
  loadStyle: PropTypes.object,
  emptyClassName: PropTypes.string,
  emptyStyle: PropTypes.object,
  errorClassName: PropTypes.string,
  errorStyle: PropTypes.object,
  distance: PropTypes.number,
  onScrollBottom: Function,
  onEmptyClick: Function,
  onErrorClick: Function,
  renderLoading: Function,
  renderEmpty: Function,
  renderError: Function,
};

export default ScrollLoad;
