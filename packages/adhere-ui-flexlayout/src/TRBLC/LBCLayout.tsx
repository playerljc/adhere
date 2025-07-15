import classNames from 'classnames';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
import { filterProps, getTRBLCClassList, getAutoWrapClassList, getAutoInnerClassList } from './utils';

/**
 * LBCLayout 组件属性
 * 左侧-底部-中心布局组件，支持嵌套布局
 */
export interface LBCLayoutProps extends TBLRCLayoutProps {
  /** 左侧区域属性 */
  lProps?: TBLRProps;
  /** 左侧分割线 */
  lSplit?: React.ReactNode;
  /** 底部区域属性 */
  bProps?: TBLRProps;
  /** 底部分割线 */
  bSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
  /** 自动包装属性 */
  autoWrapProps?: AutoProps;
  /** 自动内部属性 */
  autoInnerProps?: FlexLayoutProps;
}

/**
 * LBCLayout 组件
 * 左侧-底部-中心布局组件，用于创建复杂的嵌套布局，包含左侧区域、底部区域和中心区域
 * 
 * @example
 * ```tsx
 * <LBCLayout
 *   lProps={{ span: 6, children: <div>左侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   lSplit={<div>左侧分割线</div>}
 *   bSplit={<div>底部分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const LBCLayout = memo<PropsWithoutRef<LBCLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, LBCLayoutProps>(
    (
      {
        wrapClassName,
        wrapStyle,
        autoWrapProps,
        autoInnerProps,
        lProps,
        lSplit,
        bProps,
        bSplit,
        cProps,
        ...props
      },
      ref,
    ) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const LProps = filterProps(lProps);
      const BProps = filterProps(bProps);
      const CProps = filterProps(cProps);

      // 计算包装容器的类名
      const classList = useMemo(
        () => getTRBLCClassList(selectorPrefix, cProps, wrapClassName),
        [cProps, wrapClassName],
      );

      // 计算自动包装容器的类名
      const autoWrapClassList = useMemo(
        () => getAutoWrapClassList(selectorPrefix, autoWrapProps),
        [autoWrapProps],
      );

      // 计算自动内部容器的类名
      const autoInnerClassList = useMemo(
        () => getAutoInnerClassList(selectorPrefix, autoInnerProps),
        [autoInnerProps],
      );

      return (
        <div ref={ref} className={classList} style={wrapStyle ?? {}}>
          <FlexLayout
            {...(props ?? {})}
            className={classNames(`${selectorPrefix}-lbc-layout`, props?.className ?? '')}
            direction="horizontal"
          >
            {/* 左侧区域 - 固定宽度 */}
            <Fixed collapseDirection="L" {...(LProps ?? {})}>
              {lProps?.children}
            </Fixed>

            {/* 左侧分割线 */}
            {lSplit}

            {/* 自动包装容器 - 包含中心区域和底部区域 */}
            <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
              <FlexLayout
                {...(autoInnerProps ?? {})}
                className={autoInnerClassList}
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
            </Auto>
          </FlexLayout>
        </div>
      );
    },
  ),
);

LBCLayout.displayName = 'LBCLayout';

export default LBCLayout;
