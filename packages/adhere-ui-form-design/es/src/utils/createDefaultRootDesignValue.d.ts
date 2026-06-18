import type { DesignValue } from '../types';
/**
 * 画布上是否存在可清空的子项（根下是否有子节点）
 */
export declare function hasDesignCanvasUserContent(value: DesignValue | undefined): boolean;
/**
 * 创建与初次进入设计器（无 value）时一致的默认根布局
 */
export declare function createDefaultRootDesignValue(): DesignValue;
