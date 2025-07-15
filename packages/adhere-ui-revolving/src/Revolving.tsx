import classNames from 'classnames';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';

import type { 
  RevolvingComponent, 
  RevolvingProps, 
  RevolvingRefHandle,
  RevolvingDirection 
} from './types';

const selectorPrefix = 'adhere-ui-revolving';

/**
 * 内部 Revolving 组件
 * 基于 Swiper 实现的轮播图组件，支持自动播放、方向控制等功能
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const InternalRevolving = memo<PropsWithoutRef<RevolvingProps> & RefAttributes<RevolvingRefHandle>>(
  forwardRef<RevolvingRefHandle, RevolvingProps>((props, ref) => {
    const {
      className,
      style,
      classNameWrapper,
      styleWrapper,
      items = [],
      speed = 1000,
      delay = 1000,
      direction = 'top',
      loop = true,
      stopOnLastSlide = false,
      swiperConfig,
    } = props;

    const swiperRef = useRef<SwiperRef | null>(null);

    /**
     * 计算 Swiper 方向
     * 将自定义方向转换为 Swiper 支持的方向
     */
    const targetDirection = useMemo(
      (): 'horizontal' | 'vertical' => (direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical'),
      [direction],
    );

    /**
     * 计算是否反向播放
     * 右侧和底部方向需要反向播放
     */
    const reverseDirection = useMemo(
      () => direction === 'right' || direction === 'bottom',
      [direction],
    );

    /**
     * 开始自动播放
     * 调用 Swiper 的 autoplay.start() 方法
     */
    const start = useCallback(() => {
      try {
        swiperRef.current?.swiper?.autoplay?.start?.();
      } catch (error) {
        console.warn('Failed to start revolving autoplay:', error);
      }
    }, []);

    /**
     * 停止自动播放
     * 调用 Swiper 的 autoplay.stop() 方法
     */
    const stop = useCallback(() => {
      try {
        swiperRef.current?.swiper?.autoplay?.stop?.();
      } catch (error) {
        console.warn('Failed to stop revolving autoplay:', error);
      }
    }, []);

    /**
     * 检查是否正在运行
     * @returns {boolean} 是否正在自动播放
     */
    const isRunning = useCallback((): boolean => {
      try {
        return Boolean(swiperRef.current?.swiper?.autoplay?.running);
      } catch (error) {
        console.warn('Failed to check revolving status:', error);
        return false;
      }
    }, []);

    /**
     * 暴露组件方法给父组件
     */
    useImperativeHandle(ref, () => ({
      start,
      stop,
      isRunning,
    }), [start, stop, isRunning]);

    /**
     * 默认 Swiper 配置
     */
    const defaultSwiperConfig = useMemo(() => ({
      direction: targetDirection,
      loop,
      speed,
      mousewheel: {
        releaseOnEdges: true,
        sensitivity: 1,
      },
      autoplay: {
        delay,
        stopOnLastSlide,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
        reverseDirection,
      },
      modules: [Autoplay, Mousewheel],
    }), [targetDirection, loop, speed, delay, stopOnLastSlide, reverseDirection]);

    /**
     * 合并用户配置和默认配置
     */
    const mergedSwiperConfig = useMemo(() => ({
      ...defaultSwiperConfig,
      ...swiperConfig,
    }), [defaultSwiperConfig, swiperConfig]);

    return (
      <div 
        className={classNames(selectorPrefix, className)} 
        style={style ?? {}}
        data-testid="adhere-ui-revolving"
      >
        <Swiper
          ref={swiperRef}
          className={classNames(`${selectorPrefix}-wrapper`, classNameWrapper)}
          style={styleWrapper ?? {}}
          {...mergedSwiperConfig}
        >
          {items.map(({ key, ...rest }) => (
            <SwiperSlide key={key} {...rest} />
          ))}
        </Swiper>
      </div>
    );
  }),
);

// 设置组件显示名称
InternalRevolving.displayName = 'InternalRevolving';

/**
 * Revolving 轮播图组件
 * 
 * @example
 * ```tsx
 * import Revolving from '@baifendian/adhere-ui-revolving';
 * 
 * const MyComponent = () => {
 *   const revolvingRef = useRef<RevolvingRefHandle>(null);
 * 
 *   const items = [
 *     { key: '1', children: <div>Slide 1</div> },
 *     { key: '2', children: <div>Slide 2</div> },
 *   ];
 * 
 *   return (
 *     <Revolving
 *       ref={revolvingRef}
 *       items={items}
 *       direction="top"
 *       speed={1000}
 *       delay={2000}
 *       loop={true}
 *     />
 *   );
 * };
 * ```
 */
const Revolving = InternalRevolving as RevolvingComponent;

// 设置组件显示名称
Revolving.displayName = 'Revolving';

// Revolving.Item = RevolvingItem;

export default Revolving;
