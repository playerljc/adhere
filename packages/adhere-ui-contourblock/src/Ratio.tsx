import React, { memo, forwardRef, useRef, useEffect, useState, useCallback } from 'react';

import { RatioProps } from './types';

const selectorPrefix = 'adhere-ui-ratio';

/**
 * 解析宽高比
 * @param aspectRatio - 宽高比，可以是数字或字符串
 * @returns 宽高比数值
 */
function parseAspectRatio(aspectRatio: number | string): number {
  if (typeof aspectRatio === 'number') {
    return aspectRatio;
  }

  // 处理字符串格式，如 "16:9" 或 "16/9"
  const ratioStr = aspectRatio.trim();
  
  // 尝试解析 "16:9" 格式
  if (ratioStr.includes(':')) {
    const [width, height] = ratioStr.split(':').map(Number);
    if (!isNaN(width) && !isNaN(height) && height !== 0) {
      return width / height;
    }
  }
  
  // 尝试解析 "16/9" 格式
  if (ratioStr.includes('/')) {
    const [width, height] = ratioStr.split('/').map(Number);
    if (!isNaN(width) && !isNaN(height) && height !== 0) {
      return width / height;
    }
  }
  
  // 尝试直接解析为数字
  const num = parseFloat(ratioStr);
  if (!isNaN(num)) {
    return num;
  }
  
  // 默认返回 1:1 比例
  console.warn(`Invalid aspectRatio format: ${aspectRatio}, using 1:1 ratio`);
  return 1;
}

/**
 * Ratio 组件
 * 
 * 一个根据宽高比自动计算尺寸的容器组件。
 * 可以根据容器的宽度自动计算高度，或根据高度自动计算宽度。
 * 
 * @example
 * ```tsx
 * // 根据宽度计算高度，16:9 比例
 * <Ratio aspectRatio="16:9" origin="width">
 *   <div>内容</div>
 * </Ratio>
 * 
 * // 根据高度计算宽度，4:3 比例
 * <Ratio aspectRatio={4/3} origin="height">
 *   <div>内容</div>
 * </Ratio>
 * ```
 * 
 * @param props - 组件属性
 * @param props.className - 自定义 CSS 类名
 * @param props.style - 自定义内联样式
 * @param props.aspectRatio - 宽高比，支持数字（如 16/9）或字符串（如 "16:9" 或 "16/9"）
 * @param props.origin - 基准方向，width 表示根据宽度计算高度，height 表示根据高度计算宽度，默认为 'width'
 * @param props.children - 子元素内容
 * @returns JSX.Element
 */
const Ratio = memo(
  forwardRef<HTMLDivElement, RatioProps>((props, ref) => {
    const { className = '', style = {}, aspectRatio, origin = 'width', children, ...attrs } = props;
    
    const containerRef = useRef<HTMLDivElement>(null);
    const [computedStyle, setComputedStyle] = useState<React.CSSProperties>({});
    
    // 解析宽高比
    const ratio = parseAspectRatio(aspectRatio);
    
    /**
     * 计算尺寸
     */
    const calculateSize = useCallback(() => {
      const element = containerRef.current;
      if (!element) return;
      
      if (origin === 'width') {
        // 根据宽度计算高度
        const width = element.offsetWidth;
        const height = width / ratio;
        setComputedStyle({ height: `${height}px` });
      } else if (origin === 'height') {
        // 根据高度计算宽度
        const height = element.offsetHeight;
        const width = height * ratio;
        setComputedStyle({ width: `${width}px` });
      }
    }, [origin, ratio]);
    
    // 监听容器尺寸变化
    useEffect(() => {
      const element = containerRef.current;
      if (!element) return;
      
      // 初始计算
      calculateSize();
      
      // 使用 ResizeObserver 监听尺寸变化
      const resizeObserver = new ResizeObserver(() => {
        calculateSize();
      });
      
      resizeObserver.observe(element);
      
      return () => {
        resizeObserver.disconnect();
      };
    }, [calculateSize]);
    
    // 合并样式
    const mergedStyle: React.CSSProperties = {
      ...style,
      ...computedStyle,
    };
    
    return (
      <div
        {...attrs}
        ref={(node) => {
          // 处理内部 ref
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          
          // 处理外部 ref
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        className={`${selectorPrefix} ${className}`.trim()}
        style={mergedStyle}
      >
        {children}
      </div>
    );
  })
);

Ratio.displayName = 'Ratio';

export default Ratio;

