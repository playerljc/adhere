import classNames from 'classnames';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
import { filterProps, getTRBLCClassList, getAutoWrapClassList, getAutoInnerClassList } from './utils';

/**
 * LCBLayout 组件属性
 * 左侧-中心-底部布局组件，支持嵌套布局
 */
export interface LCBLayoutProps extends TBLRCLayoutProps {
  /** 左侧区域属性 */
  lProps?: TBLRProps;
  /** 左侧分割线 */
  lSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
  /** 底部区域属性 */
  bProps?: TBLRProps;
  /** 底部分割线 */
  bSplit?: React.ReactNode;
  /** 自动包装属性 */
  autoWrapProps?: AutoProps;
  /** 自动内部属性 */
  autoInnerProps?: FlexLayoutProps;
}

/**
 * LCBLayout 组件
 * 左侧-中心-底部布局组件，用于创建复杂的嵌套布局，包含左侧区域、中心区域和底部区域
 * 
 * @example
 * ```tsx
 * <LCBLayout
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
const LCBLayout = memo<PropsWithoutRef<LCBLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, LCBLayoutProps>(
    (
      {
        wrapClassName,
        wrapStyle,
        autoWrapProps,
        autoInnerProps,
        lProps,
        lSplit,
        cProps,
        bProps,
        bSplit,
        ...props
      },
      ref,
    ) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const LProps = filterProps(lProps);
      const CProps = filterProps(cProps);
      const BProps = filterProps(bProps);

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
        () => getAutoInnerClassList(selectorPrefix, autoInnerProps, `${selectorPrefix}-horizontal-flex-layout`),
        [autoInnerProps],
      );

      return (
        <div ref={ref} className={classList} style={wrapStyle ?? {}}>
          <FlexLayout
            {...(props ?? {})}
            className={classNames(`${selectorPrefix}-lcb-layout`, props?.className ?? '')}
            direction="vertical"
          >
            {/* 自动包装容器 - 包含左侧区域和中心区域 */}
            <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
              <FlexLayout
                {...(autoInnerProps ?? {})}
                className={autoInnerClassList}
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
              </FlexLayout>
            </Auto>

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

LCBLayout.displayName = 'LCBLayout';

export default LCBLayout;
