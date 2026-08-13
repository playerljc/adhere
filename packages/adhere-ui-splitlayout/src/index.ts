/**
 * @fileoverview SplitLayout 分割布局组件主入口
 * 
 * @description
 * 该模块导出了 SplitLayout 主组件，它是一个可拖拽的分割布局组件，
 * 支持水平和垂直方向的分割，并提供多种预定义的布局模式。
 * 
 * @example
 * ```tsx
 * import SplitLayout from '@baifendian/adhere-ui-splitlayout';
 * 
 * // 基础用法
 * <SplitLayout minSize={100} maxSize="80%" />
 * 
 * // 使用预定义布局
 * <SplitLayout.TRBLC.TLRCSplitLayout
 *   tProps={{ children: <div>顶部</div> }}
 *   lProps={{ children: <div>左侧</div> }}
 *   rProps={{ children: <div>右侧</div> }}
 *   cProps={{ children: <div>中心</div> }}
 * />
 * ```
 */

import SplitLayout from './SplitLayout';

export default SplitLayout;
