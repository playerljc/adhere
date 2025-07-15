import React, { PropsWithoutRef, RefAttributes, forwardRef, memo } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import SplitLayout from '../SplitLayout';
import type { TBLRCSplitLayoutProps } from '../types';

/**
 * CRLayout 组件
 * 中心-右侧布局组件，支持可拖拽的分割线
 * 
 * @description
 * 该组件提供了一个两区域布局：
 * - 中心区域 (Center) - 占据主要空间，自动填充剩余区域
 * - 右侧区域 (Right) - 位于右侧，可配置固定尺寸或百分比
 * 
 * 两个区域之间有一个可拖拽的分割线，支持自定义分割线属性，
 * 包括最小/最大尺寸限制、拖拽事件回调等
 * 
 * @example
 * ```tsx
 * <CRLayout
 *   rSplitProps={{ 
 *     minSize: 100, 
 *     maxSize: '40%',
 *     onChange: (params) => console.log('拖拽中:', params)
 *   }}
 * >
 *   <div>中心内容区域</div>
 *   <div>右侧内容区域</div>
 * </CRLayout>
 * ```
 * 
 * @param props - 组件属性
 * @param props.rSplitProps - 右侧分割线配置属性
 * @param props.children - 子元素，第一个为中心区域，第二个为右侧区域
 * @param ref - 组件引用
 * @returns 渲染的布局组件
 */
const CRLayout = memo<PropsWithoutRef<TBLRCSplitLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, TBLRCSplitLayoutProps>(
    ({ rSplitProps, ...props }, ref) => {
      return (
        <FlexLayout.TRBLC.CRLayout
          ref={ref}
          {...props}
          rSplit={<SplitLayout {...(rSplitProps ?? {})} />}
        />
      );
    },
  ),
);

CRLayout.displayName = 'CRLayout';

export default CRLayout;
