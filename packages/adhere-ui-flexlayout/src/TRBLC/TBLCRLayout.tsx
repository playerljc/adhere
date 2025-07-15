import classNames from 'classnames';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
import { filterProps, getTRBLCClassList, getAutoWrapClassList, getAutoInnerClassList } from './utils';

/**
 * TBLCRLayout 组件属性
 * 顶部-底部-左侧-中心-右侧布局组件，支持嵌套布局
 */
export interface TBLCRLayoutProps extends TBLRCLayoutProps {
  /** 顶部区域属性 */
  tProps?: TBLRProps;
  /** 顶部分割线 */
  tSplit?: React.ReactNode;
  /** 底部区域属性 */
  bProps?: TBLRProps;
  /** 底部分割线 */
  bSplit?: React.ReactNode;
  /** 左侧区域属性 */
  lProps?: TBLRProps;
  /** 左侧分割线 */
  lSplit?: React.ReactNode;
  /** 右侧区域属性 */
  rProps?: TBLRProps;
  /** 右侧分割线 */
  rSplit?: React.ReactNode;
  /** 中心区域属性 */
  cProps?: CenterProps;
  /** 自动包装属性 */
  autoWrapProps?: AutoProps;
  /** 自动内部属性 */
  autoInnerProps?: FlexLayoutProps;
}

/**
 * TBLCRLayout 组件
 * 顶部-底部-左侧-中心-右侧布局组件，用于创建复杂的嵌套布局，包含顶部区域、底部区域、左侧区域、中心区域和右侧区域
 * 
 * @example
 * ```tsx
 * <TBLCRLayout
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   bProps={{ span: 6, children: <div>底部区域</div> }}
 *   lProps={{ span: 6, children: <div>左侧区域</div> }}
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   tSplit={<div>顶部分割线</div>}
 *   bSplit={<div>底部分割线</div>}
 *   lSplit={<div>左侧分割线</div>}
 *   rSplit={<div>右侧分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const TBLCRLayout = memo<PropsWithoutRef<TBLCRLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLCRLayoutProps>(
    (
      {
        wrapClassName,
        wrapStyle,
        autoWrapProps,
        autoInnerProps,
        tProps,
        tSplit,
        lProps,
        lSplit,
        rProps,
        rSplit,
        cProps,
        bProps,
        bSplit,
        ...props
      },
      ref,
    ) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const TProps = filterProps(tProps);
      const BProps = filterProps(bProps);
      const LProps = filterProps(lProps);
      const RProps = filterProps(rProps);
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
        () => getAutoInnerClassList(selectorPrefix, autoInnerProps, `${selectorPrefix}-horizontal-flex-layout`),
        [autoInnerProps],
      );

      return (
        <div ref={ref} className={classList} style={wrapStyle ?? {}}>
          <FlexLayout
            {...(props ?? {})}
            className={classNames(`${selectorPrefix}-tblcr-layout`, props?.className ?? '')}
            direction="vertical"
          >
            {/* 顶部区域 - 固定高度 */}
            <Fixed collapseDirection="T" {...(TProps ?? {})}>
              {tProps?.children}
            </Fixed>

            {/* 顶部分割线 */}
            {tSplit}

            {/* 自动包装容器 - 包含左侧区域、中心区域和右侧区域 */}
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

                {/* 右侧分割线 */}
                {rSplit}

                {/* 右侧区域 - 固定宽度 */}
                <Fixed collapseDirection="R" {...(RProps ?? {})}>
                  {rProps?.children}
                </Fixed>
              </FlexLayout>
            </Auto>

            {/* 底部分割线 */}
            {bSplit}

            {/* 底部区域 - 固定高度 */}
            <Fixed {...(BProps ?? {})}>{bProps?.children}</Fixed>
          </FlexLayout>
        </div>
      );
    },
  ),
);

TBLCRLayout.displayName = 'TBLCRLayout';

export default TBLCRLayout;
