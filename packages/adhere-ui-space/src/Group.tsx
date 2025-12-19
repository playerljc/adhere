import React, { FC, Fragment, useMemo } from 'react';
import * as ReactIs from 'react-is';

import Space from './Space';
import type { SpaceGroupProps } from './types';

/**
 * SpaceGroup 组件
 *
 * 用于在多个子元素之间自动添加间距的组件。
 * 会自动处理 Fragment 和空值，并在相邻元素之间插入 Space 组件。
 *
 * @param props - SpaceGroup 组件属性
 * @param props.children - 子元素，可以是单个元素或数组
 * @param props.direction - 间距方向，默认为 'horizontal'
 * @param props.size - 间距大小，默认为 40
 * @param props.horizontalFit - 水平方向时是否适应容器高度
 * @param props.className - 自定义 CSS 类名
 * @param props.style - 自定义内联样式
 *
 * @example
 * ```tsx
 * <SpaceGroup size={20}>
 *   <div>元素1</div>
 *   <div>元素2</div>
 *   <div>元素3</div>
 * </SpaceGroup>
 * ```
 *
 * @returns 渲染的子元素，相邻元素之间会自动插入 Space 组件
 */
const SpaceGroup: FC<SpaceGroupProps> = ({ children, ...props }) => {
  // 过滤掉空值子元素
  const filterChildren = useMemo(() => {
    if (Array.isArray(children)) {
      return (children || []).filter((child) => child != null && child !== false);
    }
    return children;
  }, [children]);

  // 扁平化处理子元素，处理 Fragment 嵌套
  const childrenFlat = useMemo<React.ReactElement[]>(() => {
    const flat: React.ReactElement[] = [];

    /**
     * 递归处理子元素，将 Fragment 中的子元素提取出来
     * @param _children - 要处理的子元素
     */
    function loop(_children: React.ReactNode): void {
      React.Children.forEach(_children, (child) => {
        if (ReactIs.isFragment(child)) {
          // 如果是 Fragment，递归处理其子元素
          const fragmentElement = child as React.ReactElement;
          const fragmentChildren = ((fragmentElement?.props as any)?.children || []).filter(
            (t: React.ReactNode) => t != null && t !== false,
          );
          loop(fragmentChildren);
        } else if (child != null && child !== false) {
          // 如果是有效元素，添加到扁平化数组中
          flat.push(child as React.ReactElement);
        }
      });
    }

    loop(filterChildren);
    return flat;
  }, [filterChildren]);

  // 如果只有一个或没有子元素，直接返回
  if (childrenFlat.length <= 1) {
    return filterChildren;
  }

  // 渲染子元素，在相邻元素之间插入 Space 组件
  return childrenFlat.map((child, index) => {
    // 第一个元素不需要前置间距
    if (index === 0) {
      return React.cloneElement(child, { key: index });
    }

    // 其他元素前添加 Space 组件
    return (
      <Fragment key={index}>
        <Space {...props} />
        {React.cloneElement(child, { key: `child-${index}` })}
      </Fragment>
    );
  });
};

SpaceGroup.displayName = 'SpaceGroup';

export default SpaceGroup;
