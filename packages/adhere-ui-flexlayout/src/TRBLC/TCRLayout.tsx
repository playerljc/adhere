import classNames from 'classnames';
import React, { PropsWithoutRef, RefAttributes, forwardRef, memo, useMemo } from 'react';

import Auto from '../Auto';
import Fixed from '../Fixed';
import FlexLayout, { selectorPrefix } from '../FlexLayout';
import type { AutoProps, CenterProps, FlexLayoutProps, TBLRCLayoutProps, TBLRProps } from '../types';
import { filterProps, getTRBLCClassList, getAutoWrapClassList, getAutoInnerClassList } from './utils';

/**
 * TCRLayout 组件属性
 * 顶部-中心-右侧布局组件，支持嵌套布局
 */
export interface TCRLayoutProps extends TBLRCLayoutProps {
  /** 右侧区域属性 */
  rProps?: TBLRProps;
  /** 右侧分割线 */
  rSplit?: React.ReactNode;
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
 * TCRLayout 组件
 * 顶部-中心-右侧布局组件，用于创建复杂的嵌套布局，包含顶部区域、中心区域和右侧区域
 * 
 * @example
 * ```tsx
 * <TCRLayout
 *   tProps={{ span: 6, children: <div>顶部区域</div> }}
 *   cProps={{ children: <div>中心区域</div> }}
 *   rProps={{ span: 6, children: <div>右侧区域</div> }}
 *   tSplit={<div>顶部分割线</div>}
 *   rSplit={<div>右侧分割线</div>}
 * />
 * ```
 * 
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const TCRLayout = memo<PropsWithoutRef<TCRLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TCRLayoutProps>(
    (
      {
        wrapClassName,
        wrapStyle,
        autoWrapProps,
        autoInnerProps,
        rProps,
        rSplit,
        tProps,
        tSplit,
        cProps,
        ...props
      },
      ref,
    ) => {
      // 过滤掉 children 属性，避免传递给 Fixed 和 Auto 组件
      const RProps = filterProps(rProps);
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
            className={classNames(`${selectorPrefix}-tcr-layout`, props?.className ?? '')}
            direction="horizontal"
          >
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

TCRLayout.displayName = 'TCRLayout';

export default TCRLayout;
