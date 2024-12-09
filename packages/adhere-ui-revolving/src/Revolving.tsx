import classNames from 'classnames';
import merge from 'lodash.merge';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { Swiper } from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';
import type SwiperType from 'swiper/types/swiper-class';

import RevolvingItem from './Item';
import type { RevolvingComponent, RevolvingProps, RevolvingRefHandle } from './types';

const selectorPrefix = 'adhere-ui-revolving';

const InternalRevolving = memo<PropsWithoutRef<RevolvingProps> & RefAttributes<RevolvingRefHandle>>(
  forwardRef<RevolvingRefHandle, RevolvingProps>((props, ref) => {
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

    Swiper.use([Autoplay, Mousewheel]);

    const el = useRef<HTMLDivElement | null>(null);
    const wrapperEl = useRef<HTMLDivElement | null>(null);

    const swiper = useRef<SwiperType | null>(null);

    function initial() {
      if (swiper.current) {
        if ('destory' in swiper.current && swiper.current.destory instanceof Function) {
          swiper.current.destory();
        }

        swiper.current = null;
      }

      swiper.current = new Swiper(
        el.current as HTMLElement,
        merge(
          {
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
          },
          {
            ...(swiperConfig ?? {}),
          },
        ),
      );
    }

    function getDirection(direction) {
      return direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';
    }

    /**
     * start
     */
    function start() {
      swiper.current?.autoplay?.start?.();
    }

    /**
     * stop
     */
    function stop() {
      swiper.current?.autoplay?.stop?.();
    }

    /**
     * isRunning
     * @return {boolean}
     */
    function isRunning() {
      return swiper.current?.autoplay?.running as boolean;
    }

    useImperativeHandle(ref, () => ({
      start,
      stop,
      isRunning,
    }));

    useEffect(() => {
      initial();
    }, [speed, delay, direction, loop, stopOnLastSlide, listeners, swiperConfig]);

    return (
      <div
        className={classNames(selectorPrefix, 'swiper', className ?? '')}
        style={style ?? {}}
        ref={el}
      >
        <div
          className={classNames(`${selectorPrefix}-wrapper`, 'swiper-wrapper', classNameWrapper)}
          style={styleWrapper ?? {}}
          ref={wrapperEl}
        >
          {children}
        </div>
      </div>
    );
  }),
);

const Revolving = InternalRevolving as RevolvingComponent;

Revolving.displayName = 'Revolving';

Revolving.Item = RevolvingItem;

export default Revolving;
