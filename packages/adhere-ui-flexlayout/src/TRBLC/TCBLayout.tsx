import classNames from 'classnames';
import omit from 'omit.js';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout from '../FlexLayout';
import { selectorPrefix } from '../FlexLayout';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '../types';

/**
 * TCBLayout 组件属性
 * 顶部-中心-底部布局组件，垂直方向排列
 */
export interface TCBLayoutProps extends TBLRCLayoutProps {
  /** 顶部区域属性 */
  tProps?: TBLRProps;
  /** 顶部分割线 */
  tSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
  /** 底部区域属性 */
  bProps?: TBLRProps;
  /** 底部分割线 */
  bSplit?: React.ReactNode;
}

/**
 * TCBLayout 组件
 * 顶部-中心-底部布局组件，用于创建垂直方向的顶部固定区域、中心自动适应区域和底部固定区域的布局
 * 
 * @example
 * ```tsx
 * <TCBLayout
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   tSplit={<div>顶部分割线</div>}
 *   bSplit={<div>底部分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const TCBLayout = memo<PropsWithoutRef<TCBLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TCBLayoutProps>(
    ({ wrapClassName, wrapStyle, tProps, tSplit, cProps, bProps, bSplit, ...props }, ref) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const TProps = tProps ? omit<TBLRProps, 'children'>(tProps, ['children']) : {};
      const CProps = cProps ? omit<CenterProps, 'children'>(cProps, ['children']) : {};
      const BProps = bProps ? omit<TBLRProps, 'children'>(bProps, ['children']) : {};

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

TCBLayout.displayName = 'TCBLayout';

export default TCBLayout;
