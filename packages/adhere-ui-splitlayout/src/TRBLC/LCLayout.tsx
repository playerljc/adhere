import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * LCLayout 组件
 * 左侧-中心布局组件，支持可拖拽的分割线
 * 
 * @description
 * 该组件提供了一个两区域布局：
 * - 左侧区域 (Left) - 位于左侧，可配置固定尺寸或百分比
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 * 
 * 两个区域之间有一个可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 * 
 * @example
 * ```tsx
 * <LCLayout
 *   lSplitProps={{ 
 *     minSize: 120, 
 *     maxSize: '40%',
 *     onChange: (params) => console.log('拖拽中:', params)
 *   }}
 * >
 *   <div>左侧内容区域</div>
 *   <div>中心内容区域</div>
 * </LCLayout>
 * ```
 * 
 * @param props - 组件属性
 * @param props.lSplitProps - 左侧分割线配置属性
 * @param props.children - 子元素，第一个为左侧区域，第二个为中心区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
const LCLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(({ lSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.LCLayout
        ref={ref}
        {...props}
        lSplit={<SplitLayout {...(lSplitProps ?? {})} />}
      />
    );
  }),
);

LCLayout.displayName = 'LCLayout';

export default LCLayout;
