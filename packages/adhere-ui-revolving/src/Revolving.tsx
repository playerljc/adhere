import classNames from 'classnames';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';

import type { RevolvingComponent, RevolvingProps, RevolvingRefHandle } from './types';

const selectorPrefix = 'adhere-ui-revolving';

const InternalRevolving = memo<PropsWithoutRef<RevolvingProps> & RefAttributes<RevolvingRefHandle>>(
  forwardRef<RevolvingRefHandle, RevolvingProps>((props, ref) => {
    const {
      className,
      style,
      classNameWrapper,
      styleWrapper,
      items,
      speed = 1000,
      delay = 1000,
      direction = 'top',
      loop = true,
      stopOnLastSlide = false,
      swiperConfig,
    } = props;

    const swiperRef = useRef<SwiperRef | null>(null);

    const targetDirection = useMemo(
      () => (direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical'),
      [direction],
    );

    const reverseDirection = useMemo(
      () => direction === 'right' || direction === 'bottom',
      [direction],
    );

    /**
     * start
     */
    function start() {
      swiperRef.current?.swiper?.autoplay?.start?.();
    }

    /**
     * stop
     */
    function stop() {
      swiperRef.current?.swiper?.autoplay?.stop?.();
    }

    /**
     * isRunning
     * @return {boolean}
     */
    function isRunning(): boolean {
      return swiperRef.current?.swiper?.autoplay?.running as boolean;
    }

    useImperativeHandle(ref, () => ({
      start,
      stop,
      isRunning,
    }));

    return (
      <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
        <Swiper
          ref={swiperRef}
          className={classNames(`${selectorPrefix}-wrapper`, classNameWrapper)}
          style={styleWrapper ?? {}}
          direction={targetDirection}
          loop={loop}
          speed={speed}
          mousewheel={{
            releaseOnEdges: true,
            sensitivity: 1,
          }}
          autoplay={{
            delay,
            stopOnLastSlide,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
            reverseDirection,
          }}
          modules={[Autoplay, Mousewheel]}
          {...(swiperConfig ?? {})}
        >
          {items?.map(({ key, ...rest }) => (
            <SwiperSlide key={key} {...rest} />
          ))}
        </Swiper>
      </div>
    );
  }),
);

const Revolving = InternalRevolving as RevolvingComponent;

Revolving.displayName = 'Revolving';

// Revolving.Item = RevolvingItem;

export default Revolving;
