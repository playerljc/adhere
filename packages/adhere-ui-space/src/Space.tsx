import classNames from 'classnames';
import React, { CSSProperties, memo, useContext, useMemo } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { getValue } from './Util';
import type { SpaceComponent, SpaceProps } from './types';

const selectorPrefix = 'adhere-ui-space';

/**
 * Space 组件
 * 
 * 用于在元素之间创建间距的组件。支持水平和垂直方向，
 * 可以根据媒体查询自动调整尺寸。
 * 
 * @param props - Space 组件属性
 * @param props.className - 自定义 CSS 类名
 * @param props.style - 自定义内联样式
 * @param props.direction - 间距方向，'vertical' | 'horizontal'，默认为 'horizontal'
 * @param props.size - 间距大小，可以是数字（像素）或字符串（CSS 值），默认为 40
 * @param props.horizontalFit - 水平方向时是否适应容器高度，默认为 false
 * 
 * @example
 * ```tsx
 * // 水平间距
 * <Space size={20} />
 * 
 * // 垂直间距
 * <Space direction="vertical" size={16} />
 * 
 * // 自定义样式
 * <Space size="1rem" className="custom-space" />
 * ```
 * 
 * @returns 渲染的间距元素
 */
const InternalSpace = memo<SpaceProps>((props) => {
  const {
    className = '',
    style = {},
    direction = 'horizontal',
    size = 40,
    horizontalFit = false,
  } = props;

  // 获取媒体查询配置
  const { media } = useContext(ConfigProvider.Context);

  // 根据媒体查询配置计算最终的尺寸值
  const value = useMemo(() => getValue(media, size), [media, size]);

  // 根据方向计算目标样式
  const targetStyle = useMemo<CSSProperties>(() => {
    if (direction === 'horizontal') {
      const styles: CSSProperties = {
        display: 'inline-block',
        marginRight: `${value}`,
      };

      // 如果需要适应容器高度
      if (horizontalFit) {
        styles.height = '100%';
      }

      return styles;
    }

    // 垂直方向的样式
    return {
      width: '100%',
      marginTop: `${value}`,
    };
  }, [direction, value, horizontalFit]);

  return (
    <div
      className={classNames(selectorPrefix, className)}
      style={{ ...targetStyle, ...style }}
    />
  );
});

const Space = InternalSpace as SpaceComponent;

Space.displayName = 'Space';

export default Space;
