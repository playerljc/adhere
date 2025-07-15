import classNames from 'classnames';
import React, { type CSSProperties, memo, useContext, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import SplitGroup from './Group';
import { getValue } from './Util';
import type { SplitComponent, SplitProps } from './types';

const selectorPrefix = 'adhere-ui-split';

const { useTheme } = ConfigProvider;

/**
 * Split组件 - 用于在元素之间创建分割条
 * 
 * @param props - Split组件的属性
 * @returns Split组件实例
 * 
 * @example
 * ```tsx
 * // 垂直分割
 * <Split direction="vertical" size={10} />
 * 
 * // 水平分割
 * <Split direction="horizontal" size="1rem" horizontalFit />
 * ```
 */
const InternalSplit = memo<SplitProps>((props) => {
  const { 
    className = '', 
    style, 
    direction = 'vertical', 
    size = 10, 
    horizontalFit = false 
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const { media } = useContext(ConfigProvider.Context);

  // 计算最终的尺寸值
  const value = useMemo(() => getValue(media, size), [media, size]);

  // 根据方向计算样式
  const targetStyle = useMemo<CSSProperties>(() => {
    if (direction === 'horizontal') {
      const styles: CSSProperties = {
        display: 'inline-block',
        width: 1,
        margin: `0 ${value}`,
        height: horizontalFit ? '100%' : 'auto',
      };

      return styles;
    }

    // 垂直方向
    return {
      width: '100%',
      height: 1,
      margin: `${value} 0`,
    };
  }, [direction, value, horizontalFit]);

  // 应用主题
  useTheme<HTMLDivElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'Split',
  });

  return (
    <div
      ref={wrapperRef}
      className={classNames(selectorPrefix, className)}
      style={{ ...targetStyle, ...style }}
    />
  );
});

// 类型断言为SplitComponent
const Split = InternalSplit as SplitComponent;

// 设置显示名称
Split.displayName = 'Split';

// 添加Group子组件
Split.Group = SplitGroup;

export default Split;
