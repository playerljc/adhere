import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IStickupLayoutProps, IIndexItem } from './types';
import StickupLayoutItem from './item';

const selectorPrefix = 'adhere-ui-stickuplayout';

/**
 * StickupLayout
 * @class StickupLayout
 * @classdesc StickupLayout
 */
class StickupLayout extends React.Component<IStickupLayoutProps> {
  static defaultProps: any;
  static propTypes: any;
  static Item = StickupLayoutItem;

  private el: HTMLDivElement | null | undefined;
  private fixedEl: HTMLDivElement | null | undefined;
  private innerEl: HTMLDivElement | null | undefined;
  private key: boolean | undefined;
  private index: Array<IIndexItem> | undefined;
  private headerEls: NodeList | undefined;
  private preScrollObj: IIndexItem | null | undefined;
  private maskEl: HTMLElement | undefined;

  componentDidMount() {
    this.initial();
  }

  componentDidUpdate() {
    this.initial();
  }

  componentWillUnmount() {
    if (this.maskEl) {
      // @ts-ignore
      this.maskEl.parentElement.removeChild(this.maskEl);
    }
  }

  private onScroll = () => {
    this.position();
  };

  private initial() {
    this.key = false;
    this.index = [];
    // @ts-ignore
    this.headerEls = this.el.querySelectorAll(`.${selectorPrefix}-item-header`);

    this.createIndex();

    this.position();

    // @ts-ignore
    this.innerEl.removeEventListener('scroll', this.onScroll);
    // @ts-ignore
    this.innerEl.addEventListener('scroll', this.onScroll);
  }

  private createIndex() {
    let pre = 0;

    this.index = [];

    this.preScrollObj = null;

    // @ts-ignore
    for (let i = 0, len = this.headerEls.length; i < len; i++) {
      // @ts-ignore
      const header = this.headerEls[i];

      let rangeStart = pre;

      let rangeEnd;

      if (i !== len - 1) {
        // @ts-ignore
        rangeEnd = this.headerEls[i + 1].offsetTop - header.offsetHeight;
      } else {
        // @ts-ignore
        rangeEnd = this.innerEl.scrollHeight;
      }

      this.index.push({
        start: rangeStart,
        end: rangeEnd,
        // @ts-ignore
        dom: header,
        index: i,
      });
      pre = rangeEnd;

      // @ts-ignore
      if (pre > this.innerEl.scrollHeight - this.innerEl.offsetHeight) {
        break;
      }
    }
  }

  private position() {
    // @ts-ignore
    const val = this.innerEl.scrollTop;

    let low = 0,
      // @ts-ignore
      high = this.index.length - 1,
      middle,
      target;
    // @ts-ignore
    while (low <= high && low <= this.index.length - 1 && high <= this.index.length - 1) {
      middle = (high + low) >> 1;
      // @ts-ignore
      const targetVal = this.index[middle];
      if (val >= targetVal.start && val < targetVal.end) {
        target = targetVal;
        break;
      } else if (val < targetVal.start) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }

    if (target) {
      if (this.preScrollObj && this.preScrollObj.index === target.index) {
        return false;
      } else {
        this.preScrollObj = target;
        // @ts-ignore
        this.fixedEl.innerHTML = target.dom.outerHTML;

        const { onChange } = this.props;
        if (onChange) {
          onChange(target.index);
        }
      }
    }
  }

  /**
   * scrollAnimationTo
   * @access private
   * @param {number} targetTop
   * @param {number} duration
   */
  private scrollAnimationTo(targetTop = 0, duration = 300) {
    const self = this;

    if (self.key) return;

    this.initMask();

    self.key = true;

    // @ts-ignore
    this.maskEl.style.display = 'block';

    // @ts-ignore

    let srcTop = this.innerEl.scrollTop,
      scrollVal = srcTop,
      /**
       * 一次滚动的步进
       * @type {number}
       */
      setp =
        // @ts-ignore
        this.innerEl.scrollHeight /
        // @ts-ignore
        (duration / (screen.updateInterval || 16.7) +
          // @ts-ignore
          (duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0));

    /** *
     * 动画的滚动
     */
    function scrollAnimation() {
      if (srcTop < targetTop) {
        if (scrollVal + setp > targetTop) {
          scrollVal = targetTop;
        } else {
          scrollVal += setp;
        }
      } else if (scrollVal - setp < targetTop) {
        scrollVal = targetTop;
      } else {
        scrollVal -= setp;
      }

      // @ts-ignore
      self.innerEl.scrollTop = scrollVal;

      if (srcTop < targetTop) {
        if (scrollVal >= targetTop) {
          clear();
        } else {
          window.requestAnimationFrame(scrollAnimation);
        }
      } else if (scrollVal <= targetTop) {
        clear();
      } else {
        window.requestAnimationFrame(scrollAnimation);
      }

      function clear() {
        self.key = false;
        // @ts-ignore
        self.maskEl.style.display = 'none';
      }
    }

    /** *
     * 滚动core
     */
    window.requestAnimationFrame(scrollAnimation);
  }

  /**
   * scrollTo
   * @access private
   * @param {Object} item
   * @param {number} duration
   */
  private scrollTo(item: IIndexItem, duration = 300) {
    // @ts-ignore
    const targetTop = item.start + this.headerEls[item.index].offsetHeight;
    if (duration === 0) {
      // @ts-ignore
      this.innerEl.scrollTop = targetTop;
    } else {
      this.scrollAnimationTo(targetTop, duration);
    }
  }

  /**
   * initMask
   * @access private
   */
  private initMask() {
    if (!this.maskEl) {
      this.maskEl = document.createElement('div');

      this.maskEl.className = `${selectorPrefix}-mask`;

      window.document.body.appendChild(this.maskEl);
    }
  }

  refresh() {
    this.initial();
  }

  /**
   * scrollToByIndex
   * @param {number} index
   * @param {number} duration
   * @return {boolean}
   */
  scrollToByIndex(index, duration = 300) {
    let i = 0,
      item;
    // @ts-ignore
    for (; i < this.index.length; i++) {
      // @ts-ignore
      if (this.index[i].index === index) {
        // @ts-ignore
        item = this.index[i];
        break;
      }
    }
    if (!item) return false;

    this.scrollTo(item, duration);
  }

  /**
   * scrollToByHeaderEl
   * @param {HtmlElement} headerEl
   * @param {number} duration
   * @return {boolean}
   */
  scrollToByHeaderEl(headerEl, duration = 300) {
    let i = 0,
      item,
      index = -1;
    // @ts-ignore
    for (; i < this.index.length; i++) {
      // @ts-ignore
      if (this.index[i].dom === headerEl) {
        // @ts-ignore
        item = this.index[i];
        index = i;
        break;
      }
    }
    if (!item) return false;

    this.scrollTo(item, duration);
  }

  render() {
    // @ts-ignore
    const { className, style, fixedClassName, fixedStyle, innerClassName, innerStyle, children } =
      this.props;

    // @ts-ignore
    return (
      <div
        className={classNames(
          selectorPrefix,
          // @ts-ignore
          className.split(' '),
        )}
        style={{ ...style }}
        ref={(el) => (this.el = el)}
      >
        <div
          className={classNames(
            `${selectorPrefix}-fixed`,
            // @ts-ignore
            fixedClassName.split(' '),
          )}
          style={{ ...fixedStyle }}
          ref={(el) => (this.fixedEl = el)}
        />
        <div
          className={classNames(
            `${selectorPrefix}-inner`,
            // @ts-ignore
            innerClassName.split(' '),
          )}
          style={{ ...innerStyle }}
          ref={(el) => (this.innerEl = el)}
        >
          {children}
        </div>
      </div>
    );
  }
}

StickupLayout.defaultProps = {
  className: '',
  style: {},
  fixedClassName: '',
  fixedStyle: {},
  innerClassName: '',
  innerStyle: {},
  onChange: () => {},
};

StickupLayout.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fixedClassName: PropTypes.string,
  fixedStyle: PropTypes.object,
  innerClassName: PropTypes.string,
  innerStyle: PropTypes.object,
  onChange: PropTypes.func,
};

export default StickupLayout;
