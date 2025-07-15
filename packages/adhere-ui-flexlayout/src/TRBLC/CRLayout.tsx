import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CRLayout 组件属性
 * 中心-右侧布局组件，水平方向排列
 */
export interface CRLayoutProps extends TBLRCLayoutProps {
  /** 右侧区域属性 */
  rProps?: TBLRProps;
  /** 右侧分割线 */
  rSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
}

/**
 * CRLayout 组件
 * 中心-右侧布局组件，用于创建水平方向的中心区域和右侧固定区域的布局
 * 
 * @example
 * ```tsx
 * <CRLayout
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   rSplit={<div>分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const CRLayout = memo<PropsWithoutRef<CRLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, CRLayoutProps>(
    ({ wrapClassName, wrapStyle, rProps, rSplit, cProps, ...props }, ref) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const RProps = rProps ? omit<TBLRProps, 'children'>(rProps, ['children']) : {};
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
            className={classNames(`${selectorPrefix}-cr-layout`, props?.className ?? '')}
            direction="horizontal"
          >
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

CRLayout.displayName = 'CRLayout';

export default CRLayout;
