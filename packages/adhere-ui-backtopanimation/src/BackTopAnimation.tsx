import classNames from 'classnames';
import React, { memo, useCallback, useLayoutEffect, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { BackTopAnimationProps, ScrollAnimationConfig } from './types';

const selectorPrefix = 'adhere-ui-back-top-animation';

const { useTheme } = ConfigProvider;

/**
 * 回到顶部动画组件
 *
 * 该组件提供了一个带有平滑滚动动画的回到顶部功能。
 * 当用户点击组件时，会触发平滑的滚动动画回到页面顶部。
 *
 * @example
 * ```tsx
 * <BackTopAnimation
 *   getContainer={() => document.querySelector('.scroll-container')}
 *   onTrigger={async () => {
 *     // 执行回到顶部的逻辑
 *   }}
 *   duration={500}
 *   onScrollTop={(scrollTop) => console.log('当前滚动位置:', scrollTop)}
 * />
 * ```
 *
 * @param props - 组件属性
 * @returns 回到顶部动画组件
 */
const BackTopAnimation = memo<BackTopAnimationProps>((props) => {
  const {
    className,
    style,
    zIndex = 9999,
    getContainer,
    onTrigger,
    onScrollTop,
    duration = 300,
  } = props;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'BackTopAnimation',
  });

  /**
   * 获取屏幕刷新间隔时间
   *
   * 用于计算动画帧率，确保动画的流畅性。
   * 如果浏览器支持 screen.updateInterval，则使用该值；
   * 否则使用默认的 16.7ms（约 60fps）。
   *
   * @returns 屏幕刷新间隔时间（毫秒）
   */
  const getUpdateInterval = useCallback((): number => {
    return 'updateInterval' in screen ? (screen as any).updateInterval : 16.7;
  }, []);

  /**
   * 计算滚动动画的步长
   *
   * 根据容器高度、动画持续时间和屏幕刷新率计算每次滚动的步长。
   *
   * @param container - 滚动容器元素
   * @param animationDuration - 动画持续时间
   * @returns 滚动步长
   */
  const calculateScrollStep = useCallback(
    (container: HTMLElement, animationDuration: number): number => {
      const updateInterval = getUpdateInterval();
      const totalFrames = Math.ceil(animationDuration / updateInterval);
      return container.scrollHeight / totalFrames;
    },
    [getUpdateInterval],
  );

  /**
   * 执行滚动动画
   *
   * 使用 requestAnimationFrame 实现平滑的滚动动画效果。
   *
   * @param config - 滚动动画配置
   * @param container - 滚动容器元素
   */
  const executeScrollAnimation = useCallback(
    (config: ScrollAnimationConfig, container: HTMLElement): void => {
      const { startTop, targetTop, step } = config;
      let currentTop = config.currentTop;

      const animate = (): void => {
        // 计算新的滚动位置
        if (startTop < targetTop) {
          // 向上滚动
          currentTop = Math.min(currentTop + step, targetTop);
        } else {
          // 向下滚动
          currentTop = Math.max(currentTop - step, targetTop);
        }

        // 设置滚动位置
        container.scrollTop = currentTop;

        // 触发滚动回调
        if (onScrollTop) {
          onScrollTop(currentTop);
        }

        // 检查是否到达目标位置
        const isReached = startTop < targetTop ? currentTop >= targetTop : currentTop <= targetTop;

        if (isReached) {
          // 动画完成，清理状态
          cleanup();
        } else {
          // 继续动画
          if (typeof window !== 'undefined') {
            window.requestAnimationFrame(animate);
          }
        }
      };

      const cleanup = (): void => {
        if (maskRef.current) {
          maskRef.current.style.display = 'none';
        }
        isAnimatingRef.current = false;
      };

      // 开始动画
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(animate);
      }
    },
    [onScrollTop],
  );

  /**
   * 处理回到顶部触发事件
   *
   * 当用户点击组件时，执行回到顶部的动画逻辑。
   */
  const handleTrigger = useCallback(async (): Promise<void> => {
    // 防止重复触发
    if (isAnimatingRef.current) {
      return;
    }

    // 检查是否有触发回调
    if (!onTrigger) {
      return;
    }

    try {
      // 执行用户定义的触发逻辑
      await onTrigger();

      // 设置动画状态
      isAnimatingRef.current = true;

      // 显示遮罩层
      if (maskRef.current) {
        maskRef.current.style.display = 'block';
      }

      // 获取滚动容器
      const container = getContainer();
      if (!container) {
        console.warn('BackTopAnimation: 无法获取滚动容器');
        return;
      }

      // 准备动画配置
      const startTop = container.scrollTop;
      const targetTop = 0;
      const step = calculateScrollStep(container, duration);

      const config: ScrollAnimationConfig = {
        startTop,
        targetTop,
        currentTop: startTop,
        step,
        duration,
      };

      // 执行滚动动画
      executeScrollAnimation(config, container);
    } catch (error) {
      console.error('BackTopAnimation: 执行回到顶部动画时发生错误:', error);
      // 重置状态
      isAnimatingRef.current = false;
      if (maskRef.current) {
        maskRef.current.style.display = 'none';
      }
    }
  }, [onTrigger, getContainer, duration, calculateScrollStep, executeScrollAnimation]);

  /**
   * 渲染遮罩层
   *
   * 创建或获取遮罩层元素，用于在动画期间覆盖页面内容。
   */
  const renderMask = useCallback((): void => {
    // 尝试获取已存在的遮罩层
    maskRef.current = document.body.querySelector(`.${selectorPrefix}-mask`) as HTMLDivElement;

    // 如果不存在则创建新的遮罩层
    if (!maskRef.current) {
      maskRef.current = document.createElement('div');
      maskRef.current.className = `${selectorPrefix}-mask`;
      maskRef.current.style.zIndex = `${zIndex}`;
      maskRef.current.style.display = 'none';
      document.body.appendChild(maskRef.current);
    }
  }, [zIndex]);

  /**
   * 处理滚动事件
   *
   * 监听容器的滚动事件，根据滚动位置显示或隐藏回到顶部按钮。
   */
  const handleScroll = useCallback((): void => {
    const container = getContainer();
    if (!container || !wrapperRef.current) {
      return;
    }

    const shouldShow = container.scrollTop > 0;
    wrapperRef.current.style.display = shouldShow ? 'block' : 'none';
  }, [getContainer]);

  // 初始化遮罩层
  useLayoutEffect(() => {
    renderMask();
  }, [renderMask]);

  // 监听滚动事件
  useLayoutEffect(() => {
    const container = getContainer();
    if (!container) {
      return;
    }

    container.addEventListener('scroll', handleScroll);

    // 初始检查显示状态
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [getContainer, handleScroll]);

  return (
    <div
      ref={wrapperRef}
      className={classNames(selectorPrefix, className)}
      style={{ zIndex, ...style }}
      onClick={handleTrigger}
      role="button"
      tabIndex={0}
      aria-label="回到顶部"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleTrigger();
        }
      }}
    />
  );
});

BackTopAnimation.displayName = 'BackTopAnimation';

export default BackTopAnimation;
