import type { FC } from 'react';
import type { TreeSelectProps } from './types';
/**
 * TreeSelect
 * @description 能进行选取的Tree, 其实就是开启checkable模式
 * @param {string} className
 * @param {CSSProperties} style
 * @param {string} treeClassName
 * @param {CSSProperties} treeStyle
 * @param {string[]} value
 * @param {TreeProps['onCheck']} onChange
 * @param {Omit<TreeProps, 'className' | 'style' | 'checkable' | 'onCheck'>} treeProps
 * @constructor
 */
declare const TreeSelect: FC<TreeSelectProps>;
export default TreeSelect;
