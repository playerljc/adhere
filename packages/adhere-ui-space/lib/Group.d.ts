import { FC } from 'react';
import type { SpaceGroupProps } from './types';
/**
 * SpaceGroup 组件
 *
 * 用于在多个子元素之间自动添加间距的组件。
 * 会自动处理 Fragment 和空值，并在相邻元素之间插入 Space 组件。
 */
declare const SpaceGroup: FC<SpaceGroupProps>;
export default SpaceGroup;
