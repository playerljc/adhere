import type { FC } from 'react';
import type { TreeSelectProps } from './types';
/**
 * TreeSelect 组件
 * @description 能进行选取的Tree, 其实就是开启checkable模式
 * @param props - 组件属性
 * @param props.className - 自定义类名
 * @param props.style - 自定义样式
 * @param props.treeClassName - 树组件的类名
 * @param props.treeStyle - 树组件的样式
 * @param props.value - 选中的值
 * @param props.onChange - 值变化回调
 * @param props.treeProps - 传递给Tree组件的其他属性
 * @returns TreeSelect组件
 */
declare const TreeSelect: FC<TreeSelectProps>;
export default TreeSelect;
