import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Swiper from 'swiper';

import { IRevolvingProps } from './types';

import RevolvingItem from './item';

const selectorPrefix = 'adhere-ui-revolving';

/**
 * Revolving
 * @class Revolving
 * @classdesc Revolving
 */
class Revolving extends React.Component<IRevolvingProps> {
  static defaultProps: any;
  static propTypes: any;

  // @ts-ignore
  static Item: RevolvingItem = RevolvingItem;

  private el: HTMLDivElement | null | undefined;
  private wrapperEl: HTMLDivElement | null | undefined;
  private swiper: Swiper;

  componentDidMount() {
    this.initial();
  }

  componentDidUpdate(
    prevProps: Readonly<IRevolvingProps>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ) {
    this.initial();
  }

  private initial() {
    const { speed, delay, loop, direction, stopOnLastSlide, listeners } = this.props;

    if (this.swiper) {
      if ('destory' in this.swiper && this.swiper.destory instanceof Function) {
        this.swiper.destory();
      }

      this.swiper = null;
    }

    this.swiper = new Swiper(this.el, {
      allowTouchMove: false,
      direction: this.getDirection(direction),
      loop,
      speed,
      autoplay: {
        delay,
        stopOnLastSlide,
        reverseDirection: direction === 'right' || direction === 'bottom',
      },
      on: listeners,
    });
  }

  private getDirection(direction) {
    return direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';
  }

  /**
   * start
   */
  start() {
    this.swiper.autoplay.start();
  }

  /**
   * stop
   */
  stop() {
    this.swiper.autoplay.stop();
  }

  /**
   * isRunning
   * @return {boolean}
   */
  isRunning() {
    return this.swiper.autoplay.running;
  }

  render() {
    // @ts-ignore
    const { className, style, classNameWrapper, styleWrapper, children } = this.props;

    // @ts-ignore
    return (
      <div
        className={classNames(
          selectorPrefix,
          'swiper-container',
          // @ts-ignore
          className.split(' '),
        )}
        style={{ ...style }}
        ref={(el) => (this.el = el)}
      >
        <div
          className={classNames(
            `${selectorPrefix}-wrapper`,
            'swiper-wrapper',
            // @ts-ignore
            classNameWrapper.split(' '),
          )}
          style={{ ...styleWrapper }}
          ref={(el) => (this.wrapperEl = el)}
        >
          {children}
        </div>
      </div>
    );
  }
}

Revolving.defaultProps = {
  className: '',
  style: {},
  classNameWrapper: '',
  styleWrapper: {},

  speed: 1000,
  delay: 1000,
  direction: 'top',
  loop: true,
  stopOnLastSlide: false,
  listeners: {},
};

Revolving.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  classNameWrapper: PropTypes.string,
  styleWrapper: PropTypes.object,

  speed: PropTypes.number,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  loop: PropTypes.bool,
  stopOnLastSlide: PropTypes.bool,
  listeners: PropTypes.object,
};

export default Revolving;
