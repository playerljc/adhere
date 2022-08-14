import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Resource from '@baifendian/adhere-util-resource';

import { IBackTopAnimationProps } from './types';

const selectorPrefix = 'adhere-ui-backtopanimation';

/**
 * BackTopAnimation
 * @class BackTopAnimation
 * @classdesc BackTopAnimation
 */
class BackTopAnimation extends React.Component<IBackTopAnimationProps> {
  static defaultProps: any;
  static propTypes: any;

  private el: HTMLDivElement | null | undefined;
  private maskEl: HTMLDivElement | undefined | null;
  private scrollEl: HTMLElement | Window | undefined;
  private key: boolean = false;

  componentDidMount() {
    this.initScrollEvent();

    this.renderMask();
  }

  componentWillUnmount() {
    if (this.maskEl) {
      try {
        this.maskEl!.parentElement!.removeChild(this.maskEl);
      } catch (e) {}
    }
  }

  private initScrollEvent() {
    this.scrollEl = this.props.target();

    const self = this;

    function onScroll() {
      // @ts-ignore
      if (self.scrollEl.scrollTop !== 0) {
        typeof window !== 'undefined' &&
          window.requestAnimationFrame(() => {
            self.el!.style.display = 'block';
          });
      } else {
        typeof window !== 'undefined' &&
          window.requestAnimationFrame(() => {
            self.el!.style.display = 'none';
          });
      }
    }

    this.scrollEl.addEventListener('scroll', onScroll, false);
  }

  private renderMask(): void {
    this.maskEl = document.body.querySelector(`.${selectorPrefix}-mask`) as HTMLDivElement;

    if (!this.maskEl) {
      this.maskEl = document.createElement('div');
      this.maskEl.className = `${selectorPrefix}-mask`;
      this.maskEl.style.zIndex = `${this.props.zIndex}`;
      document.body.appendChild(this.maskEl);
    }
  }

  private onTrigger = () => {
    const self = this;

    if (self.key) return;

    const { onTrigger, onScrollTop, duration } = this.props;

    if (!onTrigger) return;

    onTrigger().then(() => {
      self.key = true;

      self.maskEl!.style.display = 'block';

      // @ts-ignore
      const srcTop = self.scrollEl.scrollTop;
      let scrollVal = srcTop;
      const targetTop = 0;

      // 一次滚动的步进
      const step =
        // @ts-ignore
        self.scrollEl.scrollHeight /
        // @ts-ignore
        (duration / (screen.updateInterval || 16.7) +
          // @ts-ignore
          (duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0));

      /**
       * 动画的滚动
       */
      function scrollAnimation() {
        if (srcTop < targetTop) {
          if (scrollVal + step > targetTop) {
            scrollVal = targetTop;
          } else {
            scrollVal += step;
          }
        } else if (scrollVal - step < targetTop) {
          scrollVal = targetTop;
        } else {
          scrollVal -= step;
        }

        // @ts-ignore
        self.scrollEl.scrollTop = scrollVal;

        if (onScrollTop) {
          onScrollTop(scrollVal);
        }

        if (srcTop < targetTop) {
          if (scrollVal >= targetTop) {
            clear();
          } else {
            typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
          }
        } else if (scrollVal <= targetTop) {
          clear();
        } else {
          typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
        }

        function clear() {
          self.maskEl!.style.display = 'none';

          self.key = false;
        }
      }

      typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
    });
  };

  render() {
    const { className, style, zIndex } = this.props;

    return (
      <div
        className={classNames(selectorPrefix, className?.split(/\s+/))}
        style={{ ...style, zIndex }}
        ref={(el) => (this.el = el)}
        onClick={this.onTrigger}
      />
    );
  }
}

BackTopAnimation.defaultProps = {
  className: '',
  style: {},
  zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
  duration: 300,
  target: () => window,
};

BackTopAnimation.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  zIndex: PropTypes.string,
  duration: PropTypes.number,
  target: PropTypes.func,
  onTrigger: PropTypes.func,
  onScrollTop: PropTypes.func,
};

export default BackTopAnimation;
