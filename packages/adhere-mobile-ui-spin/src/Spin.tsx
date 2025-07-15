import { useMount, useUpdateEffect } from 'ahooks';
import { Toast } from 'antd-mobile';
import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';
import classNames from 'classnames';
import React, { memo, useMemo, useRef, useCallback, CSSProperties } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { SpinProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-spin';

/**
 * 默认的 Toast 显示配置
 */
const DEFAULT_SHOW_CONFIG = {
  icon: 'loading' as const,
  content: `${Intl.get('loading')}...`,
} as const;

/**
 * Spin 加载组件
 * 
 * 基于 antd-mobile 的 Toast 组件封装的加载指示器，
 * 支持自定义样式、文本和层级控制。
 * 
 * @example
 * ```tsx
 * <Spin spinning={true} text="正在加载数据..." />
 * ```
 * 
 * @param props - 组件属性
 * @param props.className - 自定义 CSS 类名
 * @param props.style - 自定义内联样式
 * @param props.spinning - 是否显示加载状态
 * @param props.text - 加载提示文本
 * @param props.zIndex - 组件的 z-index 层级
 * @param props.toastProps - 传递给 Toast 的其他属性
 * @returns 加载指示器组件
 */
const Spin = memo<SpinProps>(({ 
  className, 
  style, 
  spinning = false, 
  zIndex = 999, 
  text, 
  ...toastProps 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const toastHandler = useRef<ToastHandler | null>(null);

  // 计算目标样式
  const targetStyle = useMemo((): CSSProperties => ({
    zIndex,
    ...style,
  }), [zIndex, style]);

  // 计算目标内容
  const targetContent = useMemo(() => 
    text ?? DEFAULT_SHOW_CONFIG.content, 
    [text]
  );

  // 显示 Toast 的回调函数
  const showToast = useCallback(() => {
    if (!containerRef.current) return;

    toastHandler.current = Toast.show({
      ...DEFAULT_SHOW_CONFIG,
      ...toastProps,
      content: targetContent,
      duration: 0,
      getContainer: () => containerRef.current!,
    });
  }, [toastProps, targetContent]);

  // 关闭 Toast 的回调函数
  const closeToast = useCallback(() => {
    if (toastHandler.current) {
      toastHandler.current.close();
      toastHandler.current = null;
    }
  }, []);

  // 组件挂载时初始化
  useMount(() => {
    if (spinning) {
      showToast();
    }
  });

  // 监听 spinning 状态变化
  useUpdateEffect(() => {
    if (spinning) {
      showToast();
    } else {
      closeToast();
    }
  }, [spinning, showToast, closeToast]);

  // 如果不在加载状态，不渲染任何内容
  if (!spinning) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={classNames(selectorPrefix, className)}
      style={targetStyle}
    />
  );
});

Spin.displayName = 'Spin';

export default Spin;
