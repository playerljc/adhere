import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * LCRLayout 组件属性
 * 左侧-中心-右侧布局组件，水平方向排列
 */
export interface LCRLayoutProps extends TBLRCLayoutProps {
  /** 左侧区域属性 */
  lProps?: TBLRProps;
  /** 左侧分割线 */
  lSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
  /** 右侧区域属性 */
  rProps?: TBLRProps;
  /** 右侧分割线 */
  rSplit?: React.ReactNode;
}

/**
 * LCRLayout 组件
 * 左侧-中心-右侧布局组件，用于创建水平方向的左侧固定区域、中心自动适应区域和右侧固定区域的布局
 * 
 * @example
 * ```tsx
 * <LCRLayout
 *   lProps={{ span: 6, children: <div>左侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   lSplit={<div>左侧分割线</div>}
 *   rSplit={<div>右侧分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const LCRLayout = memo<PropsWithoutRef<LCRLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, LCRLayoutProps>(
    ({ wrapClassName, wrapStyle, lProps, lSplit, cProps, rProps, rSplit, ...props }, ref) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const LProps = lProps ? omit<TBLRProps, 'children'>(lProps, ['children']) : {};
      const CProps = cProps ? omit<CenterProps, 'children'>(cProps, ['children']) : {};
      const RProps = rProps ? omit<TBLRProps, 'children'>(rProps, ['children']) : {};

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
            className={classNames(`${selectorPrefix}-lc-layout`, props?.className ?? '')}
            direction="horizontal"
          >
            {/* 左侧区域 - 固定宽度 */}
            <Fixed collapseDirection="L" {...(LProps ?? {})}>
              {lProps?.children}
            </Fixed>

            {/* 左侧分割线 */}
            {lSplit}

            {/* 中心区域 - 自动适应宽度 */}
            <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

            {/* 右侧分割线 */}
            {rSplit}

            {/* 右侧区域 - 固定宽度 */}
            <Fixed collapseDirection="R" {...(RProps ?? {})}>
              {rProps?.children}
            </Fixed>
          </FlexLayout>
        </div>
      );
    },
  ),
);

LCRLayout.displayName = 'LCRLayout';

export default LCRLayout;
