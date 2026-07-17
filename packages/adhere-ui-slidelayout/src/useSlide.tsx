import React, {
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { createMask } from './SlideLayout';
import type { OverlayProps, PositionConfig } from './types';

/**
 * 滑动布局Hook返回值接口
 */
interface UseSlideReturn {
  /** 获取动画持续时间 */
  getDuration: (time?: number | string | null | undefined) => number;
  /** 遮罩层元素引用 */
  maskEl: React.RefObject<HTMLDivElement | null>;
}

/**
 * 滑动布局自定义Hook
 * 管理滑动面板的状态、动画和遮罩层
 * 
 * @param props - 滑动布局属性
 * @param el - 滑动面板DOM元素引用
 * @param positionConfig - 位置配置对象
 * @returns 包含工具函数和遮罩层引用的对象
 * 
 * @example
 * ```typescript
 * const { getDuration, maskEl } = useSlide(props, elRef, positionConfig);
 * ```
 */
export default function useSlide(
  props: OverlayProps,
  el: RefObject<HTMLDivElement | null>,
  positionConfig: RefObject<PositionConfig>,
): UseSlideReturn {
  const {
    time = 300,
    mask = true,
    zIndex = 9999,
    direction = 'left',
    width = '80%',
    height = '40%',
    onBeforeClose,
  } = props;

  const [collapse, setCollapse] = useState<boolean>(props.collapse ?? false);
  const maskEl = useRef<HTMLDivElement | null>(null);

  /**
   * 关闭滑动面板
   * 执行关闭前回调并更新状态
   */
  const close = (): void => {
    if (onBeforeClose) {
      onBeforeClose();
    }
    setCollapse(false);
  };

  /**
   * 初始化滑动面板
   * 设置面板尺寸和初始位置
   */
  const initial = (): void => {
    if (!el.current) {
      console.warn('useSlide: 滑动面板元素不存在');
      return;
    }

    const element = el.current as HTMLElement;
    const parentElement = element.parentElement as HTMLElement;

    if (!parentElement) {
      console.warn('useSlide: 父元素不存在');
      return;
    }

    if (direction === 'left' || direction === 'right') {
      // 设置高度为100%
      element.style.height = '100%';

      // 设置宽度
      if (typeof width === 'string') {
        element.style.width = width;
      } else {
        const calculatedWidth = Math.min(parentElement.offsetWidth * 0.9, width);
        element.style.width = `${calculatedWidth}px`;
      }
    } else {
      // 设置宽度为100%
      element.style.width = '100%';

      // 设置高度
      if (typeof height === 'string') {
        element.style.height = height;
      } else {
        const calculatedHeight = Math.min(parentElement.offsetHeight * 0.3, height);
        element.style.height = `${calculatedHeight}px`;
      }
    }

    // 设置默认位置
    const initFunction = positionConfig.current.init[direction];
    if (initFunction) {
      initFunction();
    }

    // 如果初始状态为展开，立即显示
    if (collapse) {
      const showFunction = positionConfig.current.show[direction];
      if (showFunction) {
        showFunction(0);
      }
    }
  };

  // 监听collapse属性变化
  useEffect(() => {
    setCollapse(props.collapse ?? false);
  }, [props.collapse]);

  // 初始化遮罩层和面板
  useLayoutEffect(() => {
    if (mask) {
      try {
        maskEl.current = createMask(zIndex, close);

        if (el.current?.parentElement && maskEl.current) {
          (el.current.parentElement as HTMLDivElement).insertBefore(
            maskEl.current,
            el.current,
          );
        }
      } catch (error) {
        console.error('useSlide: 创建遮罩层失败', error);
      }
    }

    initial();

    // 清理函数
    return () => {
      if (maskEl.current) {
        try {
          maskEl.current.parentElement?.removeChild(maskEl.current);
        } catch (error) {
          // 忽略清理时的错误
        }
        maskEl.current = null;
      }
    };
  }, []);

  // 监听collapse状态变化，执行动画
  useLayoutEffect(() => {
    if (!el.current) return;

    if (collapse) {
      const showFunction = positionConfig.current.show[direction];
      if (showFunction) {
        showFunction();
      }
    } else {
      const closeFunction = positionConfig.current.close[direction];
      if (closeFunction) {
        closeFunction();
      }
    }
  }, [collapse, direction]);

  /**
   * 获取动画持续时间
   * 
   * @param _time - 指定的时间值
   * @returns 动画持续时间（毫秒）
   */
  const getDuration = (_time?: number | string | null | undefined): number => {
    if (_time !== undefined && _time !== null) {
      return typeof _time === 'string' ? parseInt(_time, 10) : _time;
    }
    return time;
  };

  return {
    getDuration,
    maskEl,
  };
}
