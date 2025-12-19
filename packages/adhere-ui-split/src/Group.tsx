import React, { FC, Fragment, useMemo } from 'react';
import * as ReactIs from 'react-is';

import Split from './Split';
import type { SplitGroupProps } from './types';

/**
 * SplitGroup组件 - 自动在子元素之间插入分割条
 *
 * @param props - SplitGroup组件的属性
 * @returns 渲染后的组件，在子元素之间自动插入分割条
 *
 * @example
 * ```tsx
 * <SplitGroup direction="vertical" size={10}>
 *   <div>第一个元素</div>
 *   <div>第二个元素</div>
 *   <div>第三个元素</div>
 * </SplitGroup>
 * ```
 */
const SplitGroup: FC<SplitGroupProps> = ({ children, ...props }) => {
  // 过滤掉空值子元素
  const filterChildren = useMemo(() => {
    if (Array.isArray(children)) {
      return (children || []).filter((child) => child != null);
    }
    return children;
  }, [children]);

  // 扁平化处理子元素，处理Fragment嵌套
  const childrenFlat = useMemo<React.ReactElement[]>(() => {
    const flat: React.ReactElement[] = [];

    /**
     * 递归处理子元素，将Fragment展开
     * @param _children - 要处理的子元素
     */
    function loop(_children: React.ReactNode): void {
      React.Children.map(_children, (child) => {
        if (ReactIs.isFragment(child)) {
          // 如果是Fragment，递归处理其子元素
          const fragmentChildren =
            (React.isValidElement(child) ? (child.props as any)?.children : []) || [];
          const validChildren = Array.isArray(fragmentChildren)
            ? fragmentChildren.filter((t: any) => t != null)
            : [fragmentChildren].filter((t: any) => t != null);
          loop(validChildren);
        } else if (child != null && React.isValidElement(child)) {
          // 如果是有效元素，添加到扁平化数组
          flat.push(child);
        }
      });
    }

    loop(filterChildren);
    return flat;
  }, [filterChildren]);

  // 如果子元素数量小于等于1，直接返回
  if (childrenFlat.length <= 1) {
    return <>{filterChildren}</>;
  }

  // 在子元素之间插入分割条
  return (
    <>
      {childrenFlat.map((child, index) => {
        if (index === 0) {
          return <Fragment key={`split-child-${index}`}>{child}</Fragment>;
        }

        return (
          <Fragment key={`split-child-${index}`}>
            <Split {...props} />
            {child}
          </Fragment>
        );
      })}
    </>
  );
};

SplitGroup.displayName = 'SplitGroup';

export default SplitGroup;
