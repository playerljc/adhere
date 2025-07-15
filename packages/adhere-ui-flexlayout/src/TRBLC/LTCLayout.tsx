import classNames from 'classnames';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
import { filterProps, getTRBLCClassList, getAutoWrapClassList, getAutoInnerClassList } from './utils';

/**
 * LTCLayout 组件属性
 * 左侧-顶部-中心布局组件，支持嵌套布局
 */
export interface LTCLayoutProps extends TBLRCLayoutProps {
  /** 左侧区域属性 */
  lProps?: TBLRProps;
  /** 左侧分割线 */
  lSplit?: React.ReactNode;
  /** 顶部区域属性 */
  tProps?: TBLRProps;
  /** 顶部分割线 */
  tSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
  /** 自动包装属性 */
  autoWrapProps?: AutoProps;
  /** 自动内部属性 */
  autoInnerProps?: FlexLayoutProps;
}

/**
 * LTCLayout 组件
 * 左侧-顶部-中心布局组件，用于创建复杂的嵌套布局，包含左侧区域、顶部区域和中心区域
 * 
 * @example
 * ```tsx
 * <LTCLayout
 *   lProps={{ span: 6, children: <div>左侧区域</div> }}
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   lSplit={<div>左侧分割线</div>}
 *   tSplit={<div>顶部分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const LTCLayout = memo<PropsWithoutRef<LTCLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, LTCLayoutProps>(
    (
      {
        wrapClassName,
        wrapStyle,
        autoWrapProps,
        autoInnerProps,
        lProps,
        lSplit,
        tProps,
        tSplit,
        cProps,
        ...props
      },
      ref,
    ) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const LProps = filterProps(lProps);
      const TProps = filterProps(tProps);
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
            className={classNames(`${selectorPrefix}-ltc-layout`, props?.className ?? '')}
            direction="horizontal"
          >
            {/* 左侧区域 - 固定宽度 */}
            <Fixed collapseDirection="L" {...(LProps ?? {})}>
              {lProps?.children}
            </Fixed>

            {/* 左侧分割线 */}
            {lSplit}

            {/* 自动包装容器 - 包含顶部区域和中心区域 */}
            <Auto {...(autoWrapProps ?? {})} fit={false} className={autoWrapClassList}>
              <FlexLayout
                {...(autoInnerProps ?? {})}
                className={autoInnerClassList}
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
            </Auto>
          </FlexLayout>
        </div>
      );
    },
  ),
);

LTCLayout.displayName = 'LTCLayout';

export default LTCLayout;
