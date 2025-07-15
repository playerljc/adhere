import { FC } from 'react';
import type { SpaceGroupProps } from './types';
/**
 * SpaceGroup 组件
 *
 * 用于在多个子元素之间自动添加间距的组件。
 * 会自动处理 Fragment 和空值，并在相邻元素之间插入 Space 组件。
 *
 * @param props - SpaceGroup 组件属性
 * @param props.children - 子元素，可以是单个元素或数组
 * @param props.direction - 间距方向，默认为 'horizontal'
 * @param props.size - 间距大小，默认为 40
 * @param props.horizontalFit - 水平方向时是否适应容器高度
 * @param props.className - 自定义 CSS 类名
 * @param props.style - 自定义内联样式
 *
 * @example
 * ```tsx
 * <SpaceGroup size={20}>
 *   <div>元素1</div>
 *   <div>元素2</div>
 *   <div>元素3</div>
 * </SpaceGroup>
 * ```
 *
 * @returns 渲染的子元素，相邻元素之间会自动插入 Space 组件
 */
declare const SpaceGroup: FC<SpaceGroupProps>;
export default SpaceGroup;
