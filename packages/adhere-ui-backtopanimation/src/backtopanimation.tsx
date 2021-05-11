import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// @ts-ignore
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
      // @ts-ignore
      this.maskEl.parentElement.removeChild(this.maskEl);
    }
  }

  private initScrollEvent() {
    this.scrollEl = this.props.target();

    const self = this;

    function onScroll() {
      // @ts-ignore
      if (self.scrollEl.scrollTop !== 0) {
        window.requestAnimationFrame(() => {
          // @ts-ignore
          self.el.style.display = 'block';
        });
      } else {
        window.requestAnimationFrame(() => {
          // @ts-ignore
          self.el.style.display = 'none';
        });
      }
    }

    // @ts-ignore
    this.scrollEl.addEventListener('scroll', onScroll, false);
  }

  private renderMask(): void {
    // @ts-ignore
    this.maskEl = document.body.querySelector(`.${selectorPrefix}-mask`);

    if (!this.maskEl) {
      this.maskEl = document.createElement('div');
      this.maskEl.className = `${selectorPrefix}-mask`;
      document.body.appendChild(this.maskEl);
    }
  }

  private onTrigger = () => {
    const self = this;

    if (self.key) return;

    // @ts-ignore
    const { onTrigger, onScrollTop, duration } = this.props;

    if (!onTrigger) return;

    onTrigger().then(() => {
      self.key = true;

      // @ts-ignore
      self.maskEl.style.display = 'block';

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
          // @ts-ignore
          onScrollTop(scrollVal);
        }

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
          // @ts-ignore
          self.maskEl.style.display = 'none';

          self.key = false;
        }
      }

      window.requestAnimationFrame(scrollAnimation);
    });
  };

  render() {
    // @ts-ignore
    const { className, style } = this.props;

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
