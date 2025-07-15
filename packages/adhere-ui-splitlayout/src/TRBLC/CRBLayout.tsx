import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * CRBLayout 组件
 * 中心-右侧-底部布局组件，支持可拖拽的分割线
 * 
 * @description
 * 该组件提供了一个三区域布局：
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 * - 右侧区域 (Right) - 位于右侧，可配置固定尺寸或百分比
 * - 底部区域 (Bottom) - 位于底部，可配置固定尺寸或百分比
 * 
 * 区域之间都有可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 * 
 * @example
 * ```tsx
 * <CRBLayout
 *   rSplitProps={{ minSize: 100, maxSize: '35%' }}
 *   bSplitProps={{ minSize: 80, maxSize: '40%' }}
 * >
 *   <div>中心内容区域</div>
 *   <div>右侧内容区域</div>
 *   <div>底部内容区域</div>
 * </CRBLayout>
 * ```
 * 
 * @param props - 组件属性
 * @param props.rSplitProps - 右侧分割线配置属性
 * @param props.bSplitProps - 底部分割线配置属性
 * @param props.children - 子元素，依次为中心、右侧、底部区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
const CRBLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ bSplitProps, rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.CRBLayout
          ref={ref}
          {...props}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
          bSplit={<SplitLayout {...(bSplitProps ?? {})} />}
        />
      );
    },
  ),
);

CRBLayout.displayName = 'CRBLayout';

export default CRBLayout;
