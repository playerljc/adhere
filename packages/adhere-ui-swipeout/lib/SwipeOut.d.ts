import React from 'react';
import { SwipeOutProps } from './types';
/**
 * SwipeOut 组件
 *
 * 一个基于 Swiper 的滑动组件，支持前置和后置内容的显示与隐藏。
 * 可以通过 beforeShow 和 afterShow 属性控制前置和后置内容的显示状态。
 *
 * @example
 * ```tsx
 * <SwipeOut
 *   beforeShow={true}
 *   afterShow={false}
 *   before={() => <div>前置内容</div>}
 *   after={() => <div>后置内容</div>}
 * >
 *   <div>主内容</div>
 * </SwipeOut>
 * ```
 */
declare const SwipeOut: React.NamedExoticComponent<SwipeOutProps>;
export default SwipeOut;
