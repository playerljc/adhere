import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * TCLayout 组件
 * 顶部-中心布局组件，支持可拖拽的分割线
 * 
 * @description
 * 该组件提供了一个两区域布局：
 * - 顶部区域 (Top) - 位于顶部，可配置固定尺寸或百分比
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 * 
 * 两个区域之间有一个可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 * 
 * @example
 * ```tsx
 * <TCLayout
 *   tSplitProps={{ 
 *     minSize: 50, 
 *     maxSize: '30%',
 *     onChange: (params) => console.log('拖拽中:', params)
 *   }}
 * >
 *   <div>顶部内容区域</div>
 *   <div>中心内容区域</div>
 * </TCLayout>
 * ```
 * 
 * @param props - 组件属性
 * @param props.tSplitProps - 顶部分割线配置属性
 * @param props.children - 子元素，第一个为顶部区域，第二个为中心区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
const TCLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(({ tSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.TCLayout
        ref={ref}
        {...props}
        tSplit={<SplitLayout {...(tSplitProps ?? {})} />}
      />
    );
  }),
);

TCLayout.displayName = 'TCLayout';

export default TCLayout;
