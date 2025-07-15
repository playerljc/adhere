import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout from '../FlexLayout';
import { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TCLayout 组件属性
 * 顶部-中心布局组件，垂直方向排列
 */
export interface TCLayoutProps extends TBLRCLayoutProps {
  /** 顶部区域属性 */
  tProps?: TBLRProps;
  /** 顶部分割线 */
  tSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
}

/**
 * TCLayout 组件
 * 顶部-中心布局组件，用于创建垂直方向的顶部固定区域和中心自动适应区域的布局
 * 
 * @example
 * ```tsx
 * <TCLayout
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   tSplit={<div>分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const TCLayout = memo<PropsWithoutRef<TCLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TCLayoutProps>(
    ({ wrapClassName, wrapStyle, tProps, tSplit, cProps, ...props }, ref) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const TProps = tProps ? omit<TBLRProps, 'children'>(tProps, ['children']) : {};
      const CProps = cProps ? omit<CenterProps, 'children'>(cProps, ['children']) : {};

      // 计算包装容器的类名
      const classList = useMemo(
        () =>
          classNames(
            `${selectorPrefix}-trblc`,
            {
              [`${selectorPrefix}-trblc-no-autofix`]:
                cProps && 'autoFixed' in cProps && !cProps.autoFixed,
            },
            wrapClassName ?? '',
          ),
        [cProps, wrapClassName],
      );

      return (
        <div ref={ref} className={classList} style={wrapStyle ?? {}}>
          <FlexLayout
            {...(props ?? {})}
            className={classNames(`${selectorPrefix}-tc-layout`, props?.className ?? '')}
            direction="vertical"
          >
            {/* 顶部区域 - 固定高度 */}
            <Fixed collapseDirection="T" {...(TProps ?? {})}>
              {tProps?.children}
            </Fixed>

            {/* 顶部分割线 */}
            {tSplit}

            {/* 中心区域 - 自动适应高度 */}
            <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>
          </FlexLayout>
        </div>
      );
    },
  ),
);

TCLayout.displayName = 'TCLayout';

export default TCLayout;
