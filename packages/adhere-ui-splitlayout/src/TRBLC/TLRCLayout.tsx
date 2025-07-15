import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * TLRCLayout 组件
 * 顶部-左侧-右侧-中心布局组件，支持可拖拽的分割线
 * 
 * @description
 * 该组件提供了一个四区域布局：
 * - 顶部区域 (Top) - 位于顶部，可配置固定尺寸或百分比
 * - 左侧区域 (Left) - 位于左侧，可配置固定尺寸或百分比
 * - 右侧区域 (Right) - 位于右侧，可配置固定尺寸或百分比
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 * 
 * 每个区域之间都有可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 * 
 * @example
 * ```tsx
 * <TLRCLayout
 *   tSplitProps={{ minSize: 50, maxSize: '20%' }}
 *   lSplitProps={{ minSize: 120, maxSize: '30%' }}
 *   rSplitProps={{ minSize: 100, maxSize: '25%' }}
 * >
 *   <div>顶部内容区域</div>
 *   <div>左侧内容区域</div>
 *   <div>右侧内容区域</div>
 *   <div>中心内容区域</div>
 * </TLRCLayout>
 * ```
 * 
 * @param props - 组件属性
 * @param props.tSplitProps - 顶部分割线配置属性
 * @param props.lSplitProps - 左侧分割线配置属性
 * @param props.rSplitProps - 右侧分割线配置属性
 * @param props.children - 子元素，依次为顶部、左侧、右侧、中心区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
const TLRCLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ tSplitProps, lSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.TLRCLayout
          ref={ref}
          {...props}
          tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
          lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
        />
      );
    },
  ),
);

TLRCLayout.displayName = 'TLRCLayout';

export default TLRCLayout;
