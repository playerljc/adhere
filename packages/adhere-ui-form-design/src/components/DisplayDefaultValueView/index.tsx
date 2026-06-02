import React, { memo, ReactNode } from 'react';

export interface DisplayDefaultValueViewProps {
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 默认显示值，当 children 为 undefined、null、空字符串或 false 时显示
   * @default '-'
   */
  defaultValue?: ReactNode;
  /**
   * 子元素内容
   */
  children?: ReactNode;
}

/**
 * DisplayDefaultValueView
 * @description 没有值的缺省显示组件
 * 当 children 为 undefined、null、空字符串或 false 时，显示 defaultValue
 * @param props - 组件属性
 * @returns 渲染的元素
 */
const DisplayDefaultValueView = memo<DisplayDefaultValueViewProps>(
  ({ className, style, defaultValue = '-', children }: DisplayDefaultValueViewProps) => {
    const shouldShowDefault = [undefined, null, '', false].includes(children as any);
    
    return (
      <div className={className} style={style}>
        {shouldShowDefault ? defaultValue : children}
      </div>
    );
  },
);

export default DisplayDefaultValueView;
