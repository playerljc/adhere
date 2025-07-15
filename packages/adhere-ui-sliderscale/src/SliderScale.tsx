import classNames from 'classnames';
import React, { type ReactElement, memo, useCallback, useLayoutEffect, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { SliderScaleProps, ScaleItemResult } from './types';

const selectorPrefix = 'adhere-ui-slider-scale';

const { useTheme } = ConfigProvider;

/**
 * 滑块刻度组件
 * 
 * 一个带有刻度显示的滑块组件，支持自定义最小值、最大值、步进值和刻度间隔。
 * 
 * @example
 * ```tsx
 * <SliderScale
 *   min={0}
 *   max={100}
 *   step={1}
 *   value={50}
 *   interval={10}
 *   onChange={(value) => console.log('当前值:', value)}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @returns 滑块刻度组件
 */
const SliderScale = memo<SliderScaleProps>((props) => {
  const {
    className,
    style = {},
    min = 0,
    max = 100,
    step = 1,
    value = 0,
    interval = 5,
    onChange,
  } = props;

  const el = useRef<HTMLDivElement>(null);
  const rangeEl = useRef<HTMLInputElement>(null);
  const preValue = useRef<number>(0);

  useTheme<HTMLElement>({
    elRef: el,
    group: 'normal',
    displayName: 'SliderScale',
  });

  /**
   * 渲染刻度项
   * @param index - 刻度索引
   * @returns 刻度项 JSX 元素
   */
  const renderScaleItem = useCallback((index: number): ScaleItemResult => {
    const currentValue = index + 1;
    
    // 如果是间隔刻度点
    if (currentValue % interval === 0) {
      return (
        <div
          key={index}
          className={`${selectorPrefix}-scale-item ${selectorPrefix}-scale-item-point`}
        >
          <span className={`${selectorPrefix}-scale-item-value`}>{currentValue}</span>
        </div>
      );
    }
    
    // 如果是最小值
    if (index === min) {
      return (
        <div key={index} className={`${selectorPrefix}-scale-item`}>
          <span className={`${selectorPrefix}-scale-item-value`}>{min}</span>
        </div>
      );
    }
    
    // 如果是最大值
    if (index === max - 1) {
      return (
        <div key={index} className={`${selectorPrefix}-scale-item`}>
          <span className={`${selectorPrefix}-scale-item-value`}>{currentValue}</span>
        </div>
      );
    }
    
    // 普通刻度点
    return <div key={index} className={`${selectorPrefix}-scale-item`} />;
  }, [min, max, interval]);

  /**
   * 渲染刻度
   * @returns 刻度 JSX 元素数组
   */
  const renderScale = useCallback((): ReactElement[] => {
    // 处理边界情况：最小值和最大值相等
    if (min === max) {
      return [
        <div key={0} className={`${selectorPrefix}-scale-item`}>
          <span className={`${selectorPrefix}-scale-item-value`}>0</span>
          <span 
            className={`${selectorPrefix}-scale-item-value`} 
            style={{ right: 0, left: 'auto' }}
          >
            {max}
          </span>
        </div>,
      ];
    }

    // 处理边界情况：最大值比最小值大1
    if (max - 1 === min) {
      return [
        <div key={min} className={`${selectorPrefix}-scale-item`}>
          <span className={`${selectorPrefix}-scale-item-value`}>{min}</span>
          <span
            className={`${selectorPrefix}-scale-item-value`}
            style={{ right: 0, left: 'auto' }}
          >
            {max}
          </span>
        </div>,
      ];
    }

    // 正常情况：渲染所有刻度
    const scaleItems: ReactElement[] = [];
    
    for (let i = min; i < max; i++) {
      const scaleItem = renderScaleItem(i);
      if (scaleItem) {
        scaleItems.push(scaleItem);
      }
    }

    return scaleItems;
  }, [min, max, renderScaleItem]);

  /**
   * 处理值变化事件
   * @param e - 事件对象
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    if (rangeEl.current) {
      rangeEl.current.value = String(currentValue);
    }

    // 只有当值真正改变时才触发回调
    if (preValue.current !== currentValue) {
      preValue.current = currentValue;
      onChange?.(currentValue);
    }
  }, [onChange]);

  // 当属性变化时更新滑块值
  useLayoutEffect(() => {
    if (rangeEl.current) {
      rangeEl.current.value = String(value);
      preValue.current = value;
    }
  }, [value]);

  return (
    <div ref={el} className={classNames(selectorPrefix, className)} style={style}>
      <div className={`${selectorPrefix}-scale`}>{renderScale()}</div>

      <input
        ref={rangeEl}
        className={`${selectorPrefix}-range`}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
});

SliderScale.displayName = 'SliderScale';

export default SliderScale;
