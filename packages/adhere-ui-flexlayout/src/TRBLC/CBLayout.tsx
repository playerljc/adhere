import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * CBLayout 组件属性
 * 中心-底部布局组件，垂直方向排列
 */
export interface CBLayoutProps extends TBLRCLayoutProps {
  /** 底部区域属性 */
  bProps?: TBLRProps;
  /** 底部分割线 */
  bSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
}

/**
 * CBLayout 组件
 * 中心-底部布局组件，用于创建垂直方向的中心区域和底部固定区域的布局
 * 
 * @example
 * ```tsx
 * <CBLayout
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   bSplit={<div>分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const CBLayout = memo<PropsWithoutRef<CBLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, CBLayoutProps>(
    ({ wrapClassName, wrapStyle, bProps, bSplit, cProps, ...props }, ref) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const BProps = bProps ? omit<TBLRProps, 'children'>(bProps, ['children']) : {};
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
            className={classNames(`${selectorPrefix}-cb-layout`, props?.className ?? '')}
            direction="vertical"
          >
            {/* 中心区域 - 自动适应高度 */}
            <Auto {...(CProps ?? {})}>{cProps?.children}</Auto>

            {/* 底部分割线 */}
            {bSplit}

            {/* 底部区域 - 固定高度 */}
            <Fixed collapseDirection="B" {...(BProps ?? {})}>
              {bProps?.children}
            </Fixed>
          </FlexLayout>
        </div>
      );
    },
  ),
);

CBLayout.displayName = 'CBLayout';

export default CBLayout;
