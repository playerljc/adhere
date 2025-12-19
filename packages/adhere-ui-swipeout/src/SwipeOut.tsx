import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { Swiper } from 'swiper';

import { SlideStateMap, SwipeOutProps, SwiperRef } from './types';

const selectorPrefix = 'adhere-ui-swipe-out';

/**
 * SwipeOut 组件
 *
 * 一个基于 Swiper 的滑动组件，支持前置和后置内容的显示与隐藏。
 * 可以通过 beforeShow 和 afterShow 属性控制前置和后置内容的显示状态。
 *
 * @example
 * ```tsx
 * <SwipeOut
 *   beforeShow={true}
 *   afterShow={false}
 *   before={() => <div>前置内容</div>}
 *   after={() => <div>后置内容</div>}
 * >
 *   <div>主内容</div>
 * </SwipeOut>
 * ```
 */
const SwipeOut = memo<SwipeOutProps>((props) => {
  const {
    className = '',
    style = {},
    contentClassName = '',
    contentStyle = {},
    beforeClassName = '',
    beforeStyle = {},
    afterClassName = '',
    afterStyle = {},
    before,
    after,
    beforeShow = false,
    afterShow = false,
    direction = 'horizontal',
    duration = 0,
    children,
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const swiper = useRef<SwiperRef>(null);

  /**
   * 滑动状态映射表
   * 根据 beforeShow 和 afterShow 的组合确定当前应该显示哪个 slide
   */
  const slideStateMap = useRef<SlideStateMap>(
    new Map([
      [[true, true].toString(), 1], // 前置和后置都显示，显示主内容
      [[false, false].toString(), 1], // 前置和后置都不显示，显示主内容
      [[true, false].toString(), 0], // 只显示前置，显示前置内容
      [[false, true].toString(), 2], // 只显示后置，显示后置内容
    ]),
  );

  /**
   * 触发回调函数
   * @param action - 回调函数名称
   * @param params - 回调参数
   */
  const trigger = useCallback(
    (action: string, params?: any): void => {
      const callback = props[action as keyof SwipeOutProps];
      if (typeof callback === 'function') {
        callback(params);
      }
    },
    [props],
  );

  /**
   * 滑动到指定位置
   */
  const slide = useCallback(() => {
    const targetSlide = slideStateMap.current.get([beforeShow, afterShow].toString());
    if (targetSlide !== undefined && swiper.current?.slideTo) {
      swiper.current.slideTo(targetSlide, duration);
    }
  }, [beforeShow, afterShow, duration]);

  /**
   * 创建 Swiper 实例
   */
  const createSwiper = useCallback(() => {
    if (swiper.current || !ref.current) {
      return;
    }

    const initialSlide = slideStateMap.current.get([beforeShow, afterShow].toString()) ?? 1;

    swiper.current = new Swiper(ref.current, {
      init: false,
      initialSlide,
      direction,
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 0,
    });

    // 绑定事件监听器
    swiper.current.on('init', () => {
      trigger('onInit');
    });

    swiper.current.on('slideChangeTransitionStart', () => {
      trigger('slideChangeTransitionStart', swiper.current?.activeIndex);
    });

    swiper.current.on('slideChangeTransitionEnd', () => {
      trigger('slideChangeTransitionEnd', swiper.current?.activeIndex);
    });

    // 初始化 Swiper
    swiper.current.init();
  }, [beforeShow, afterShow, direction, trigger]);

  /**
   * 清理 Swiper 实例
   */
  const destroySwiper = useCallback(() => {
    if (swiper.current) {
      swiper.current.destroy(true, true);
      swiper.current = undefined;
    }
  }, []);

  // 组件挂载时创建 Swiper 实例
  useLayoutEffect(
    () => {
      createSwiper();

      // 组件卸载时清理 Swiper 实例
      return () => {
        destroySwiper();
      };
    },
    [
      /*createSwiper, destroySwiper*/
    ],
  );

  // 当 beforeShow 或 afterShow 变化时，滑动到对应位置
  useEffect(() => {
    if (swiper.current) {
      slide();
    }
  }, [slide]);

  // 当方向变化时，更新 Swiper 方向
  useEffect(() => {
    if (swiper.current) {
      swiper.current.changeDirection(direction);
    }
  }, [direction]);

  return (
    <div className={classNames(selectorPrefix, 'swiper', className)} style={style} ref={ref}>
      <div className="swiper-wrapper">
        <div
          className={classNames('swiper-slide', `${selectorPrefix}-before`, beforeClassName)}
          style={beforeStyle}
        >
          {before?.()}
        </div>

        <div
          className={classNames('swiper-slide', `${selectorPrefix}-content`, contentClassName)}
          style={contentStyle}
        >
          {children}
        </div>

        <div
          className={classNames('swiper-slide', `${selectorPrefix}-after`, afterClassName)}
          style={afterStyle}
        >
          {after?.()}
        </div>
      </div>
    </div>
  );
});

SwipeOut.displayName = 'SwipeOut';

export default SwipeOut;
