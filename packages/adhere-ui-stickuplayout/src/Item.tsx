import classNames from 'classnames';
import React, { ReactElement, memo } from 'react';

import { StickupLayoutItemProps } from './types';

const selectorPrefix = 'adhere-ui-stickup-layout-item';

/**
 * StickupLayoutItem 组件
 * 
 * 粘性布局的单个项目组件，包含头部标题和内容区域
 * 
 * @param props - 组件属性
 * @param props.className - 项容器类名
 * @param props.style - 项容器样式
 * @param props.title - 头部标题内容
 * @param props.content - 内容区域
 * @returns React 元素
 * 
 * @example
 * ```tsx
 * <StickupLayout.Item
 *   title="标题"
 *   content="内容"
 *   className="custom-class"
 * />
 * ```
 */
const StickupLayoutItem = memo<StickupLayoutItemProps>((props): ReactElement => {
  const { className, style, title, content } = props;

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <div className={`${selectorPrefix}-header`}>{title}</div>
      <div className={`${selectorPrefix}-content`}>{content}</div>
    </div>
  );
});

StickupLayoutItem.displayName = 'StickupLayoutItem';

export default StickupLayoutItem;
