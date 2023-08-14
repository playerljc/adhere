import classNames from 'classnames';
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import Swiper from 'swiper';

import RevolvingItem from './item';
import { RevolvingHOCFunction, RevolvingProps, RevolvingRefHandle } from './types';

const selectorPrefix = 'adhere-ui-revolving';

const Revolving: ForwardRefRenderFunction<RevolvingRefHandle, RevolvingProps> = (props, ref) => {
  const {
    className = '',
    style = {},
    classNameWrapper = '',
    styleWrapper = {},
    children,
    speed = 1000,
    delay = 1000,
    direction = 'top',
    loop = true,
    stopOnLastSlide = false,
    listeners = {},
    swiperConfig = {},
  } = props;

  const el = useRef<HTMLDivElement>(null);
  const wrapperEl = useRef<HTMLDivElement>(null);
  const swiper = useRef<Swiper>();

  function initial() {
    if (swiper.current) {
      if ('destory' in swiper.current && swiper.current.destory instanceof Function) {
        swiper.current.destory();
      }

      swiper.current = null;
    }

    swiper.current = new Swiper(el.current, {
      allowTouchMove: false,
      direction: getDirection(direction),
      loop,
      speed,
      autoplay: {
        delay,
        stopOnLastSlide,
        reverseDirection: direction === 'right' || direction === 'bottom',
      },
      on: listeners,
      ...(swiperConfig ?? {}),
    });
  }

  function getDirection(direction) {
    return direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';
  }

  /**
   * start
   */
  function start() {
    swiper.current.autoplay.start();
  }

  /**
   * stop
   */
  function stop() {
    swiper.current.autoplay.stop();
  }

  /**
   * isRunning
   * @return {boolean}
   */
  function isRunning() {
    return swiper.current.autoplay.running;
  }

  useImperativeHandle(ref, () => ({
    start,
    stop,
    isRunning,
  }));

  useEffect(() => {
    initial();
  }, [speed, delay, direction, loop, stopOnLastSlide, listeners]);

  return (
    <div
      className={classNames(selectorPrefix, 'swiper-container', className ?? '')}
      style={style ?? {}}
      ref={el}
    >
      <div
        className={classNames(
          `${selectorPrefix}-wrapper`,
          'swiper-wrapper',
          classNameWrapper ?? '',
        )}
        style={styleWrapper ?? {}}
        ref={wrapperEl}
      >
        {children}
      </div>
    </div>
  );
};

// @ts-ignore
const RevolvingHOC: RevolvingHOCFunction<RevolvingRefHandle, RevolvingProps> = memo(
  forwardRef<RevolvingRefHandle, RevolvingProps>(Revolving),
);
RevolvingHOC.Item = RevolvingItem;

export default RevolvingHOC;
