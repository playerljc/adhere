import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * CBLayout 组件
 * 中心-底部布局组件，支持可拖拽的分割线
 * 
 * @description
 * 该组件提供了一个两区域布局：
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 * - 底部区域 (Bottom) - 位于底部，可配置固定尺寸或百分比
 * 
 * 两个区域之间有一个可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 * 
 * @example
 * ```tsx
 * <CBLayout
 *   bSplitProps={{ 
 *     minSize: 100, 
 *     maxSize: '50%',
 *     onChange: (params) => console.log('拖拽中:', params)
 *   }}
 * >
 *   <div>中心内容区域</div>
 *   <div>底部内容区域</div>
 * </CBLayout>
 * ```
 * 
 * @param props - 组件属性
 * @param props.bSplitProps - 底部分割线配置属性
 * @param props.children - 子元素，第一个为中心区域，第二个为底部区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
const CBLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(({ bSplitProps, ...props }, ref) => {
    return (
      <FlexLayout.TRBLC.CBLayout
        ref={ref}
        {...props}
        bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
      />
    );
  }),
);

CBLayout.displayName = 'CBLayout';

export default CBLayout;
