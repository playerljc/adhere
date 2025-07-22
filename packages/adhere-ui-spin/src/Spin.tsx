import { useMount, useUpdateLayoutEffect } from 'ahooks';
import React, { memo, useRef, useCallback, useMemo } from 'react';
import { Spinner } from 'spin.js';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SpinProps, ScaleMap } from './types';

const { useTheme } = ConfigProvider;

/**
 * CSS类名前缀
 */
const selectorPrefix = 'adhere-ui-spin';

/**
 * 尺寸到缩放比例的映射常量
 */
const SCALE_MAP: ScaleMap = new Map([
  ['small', 0.1],
  ['default', 0.2],
  ['large', 0.3],
]);

/**
 * 默认的Spinner配置选项
 */
const DEFAULT_SPINNER_OPTIONS = {
  lines: 4, // 绘制的线条数量
  length: 0, // 每条线的长度
  width: 52, // 线条粗细
  radius: 29, // 内圆半径
  corners: 1, // 圆角程度 (0..1)
  speed: 2.1, // 每秒旋转圈数
  rotate: 19, // 旋转偏移量
  animation: 'spinner-line-fade-quick', // 线条的CSS动画名称
  direction: 1, // 1: 顺时针, -1: 逆时针
  fadeColor: 'transparent', // 淡出颜色
  top: '46%', // 相对于父元素的顶部位置
  left: '50%', // 相对于父元素的左侧位置
  shadow: '0 0 1px transparent', // 线条的阴影
  position: 'absolute', // 元素定位
} as const;

/**
 * Spin组件
 * @description 一个基于spin.js的加载指示器组件，支持多种尺寸和自定义配置
 * @param props - 组件属性
 * @param props.spinning - 是否显示加载状态，默认为false
 * @param props.text - 加载提示文本，默认为空字符串
 * @param props.zIndex - 组件的z-index层级，默认为ResourceNormalMaxZIndex
 * @param props.size - 组件尺寸，可选值：'small' | 'default' | 'large'，默认为'default'
 * @returns React组件
 * @example
 * ```tsx
 * <Spin spinning={true} text="加载中..." size="large" />
 * ```
 */
const Spin = memo<SpinProps>((props) => {
  const {
    spinning = false,
    text = '',
    zIndex = 1999,
    size = 'default',
  } = props;

  // 组件包装器的引用
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // Spinner实例的引用
  const spinRef = useRef<Spinner | null>(null);
  
  // 旋转点的DOM引用
  const dotRef = useRef<HTMLSpanElement>(null);

  // 应用主题
  useTheme<HTMLDivElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'Spin',
  });

  /**
   * 获取主题色
   * @returns 主题色值
   */
  const getThemeColor = useCallback((): string => {
    return document.documentElement.style.getPropertyValue('--adhere-color-primary') || '#1890ff';
  }, []);

  /**
   * 创建Spinner实例
   * @description 根据当前配置创建并启动Spinner
   */
  const createSpin = useCallback(() => {
    // 停止现有的Spinner
    if (spinRef.current) {
      spinRef.current.stop();
      spinRef.current = null;
    }

    // 获取缩放比例
    const scale = SCALE_MAP.get(size) ?? 0.2;
    
    // 获取主题色
    const color = getThemeColor();

    // 转换zIndex为数字类型
    const numericZIndex = typeof zIndex === 'string' ? parseInt(zIndex, 10) : zIndex;

    // 创建Spinner配置
    const spinnerOptions = {
      ...DEFAULT_SPINNER_OPTIONS,
      scale,
      color,
      zIndex: numericZIndex,
      className: `${selectorPrefix}-spinner`,
    };

    // 确保DOM元素存在
    if (dotRef.current) {
      spinRef.current = new Spinner(spinnerOptions);
      spinRef.current.spin(dotRef.current);
    }
  }, [size, zIndex, getThemeColor]);

  /**
   * 清理Spinner实例
   */
  const cleanupSpin = useCallback(() => {
    if (spinRef.current) {
      spinRef.current.stop();
      spinRef.current = null;
    }
  }, []);

  // 组件挂载时初始化
  useMount(() => {
    if (spinning) {
      createSpin();
    }
    
    // 组件卸载时清理
    return cleanupSpin;
  });

  // 当spinning状态或size变化时更新Spinner
  useUpdateLayoutEffect(() => {
    if (spinning) {
      createSpin();
    } else {
      cleanupSpin();
    }
  }, [spinning, size, createSpin, cleanupSpin]);

  // 渲染加载文本
  const renderText = useMemo(() => {
    if (!text) return null;
    
    return (
      <div className={`${selectorPrefix}-text`}>
        {text}
      </div>
    );
  }, [text]);

  return (
    <ConditionalRender conditional={spinning}>
      {() => (
        <div
          ref={wrapperRef}
          className={selectorPrefix}
          style={{ zIndex }}
        >
          <span ref={dotRef} className={`${selectorPrefix}-dot`} />
          {renderText}
        </div>
      )}
    </ConditionalRender>
  );
});

Spin.displayName = 'Spin';

export default Spin;
