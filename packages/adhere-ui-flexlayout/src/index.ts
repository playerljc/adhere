/**
 * FlexLayout 主入口文件
 * 导出所有 FlexLayout 相关组件和类型
 */

import FlexLayout from './FlexLayout';

export default FlexLayout;

// 导出所有子组件
export { default as Auto } from './Auto';
export { default as Fixed } from './Fixed';
export { default as HorizontalFlexLayout } from './HorizontalFlexLayout';
export { default as VerticalFlexLayout } from './VerticalFlexLayout';
export { default as ToolBarLayout } from './ToolBarLayout';
export { default as BackLayout } from './BackLayout';
export { default as ScrollLayout, useScrollLayout } from './ScrollLayout';
export { default as SpaceAround } from './SpaceAround';
export { default as SpaceBetween } from './SpaceBetween';

// 导出上下文
export { FlexContext } from './Context';

// 导出工具函数
export { getGridStyle, getValueWithUnit, getValue } from './Util';

// 导出常量
export { selectorPrefix } from './FlexLayout';
export { gridCount } from './Fixed';

// 导出类型
export type * from './types';
