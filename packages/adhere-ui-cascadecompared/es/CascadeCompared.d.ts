import React from 'react';
import type { CascadeComparedHandle, CascadeComparedProps } from './types';
/**
 * 级联对比组件
 *
 * 一个用于对比多组数据的级联表格组件，支持固定列、同步滚动等功能
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 级联对比组件
 *
 * @example
 * ```tsx
 * <CascadeCompared
 *   indicator={{
 *     columns: [
 *       { dataIndex: 'name', width: 100, isFixed: true },
 *       { dataIndex: 'value', width: 120 }
 *     ],
 *     dataSource: { name: '总计', value: 1000 }
 *   }}
 *   master={[
 *     {
 *       title: <span>分组1</span>,
 *       columns: [
 *         { dataIndex: 'name', width: 100, isFixed: true },
 *         { dataIndex: 'value', width: 120 }
 *       ],
 *       dataSource: [
 *         { name: '项目1', value: 100 },
 *         { name: '项目2', value: 200 }
 *       ]
 *     }
 *   ]}
 * />
 * ```
 */
declare const CascadeCompared: React.NamedExoticComponent<CascadeComparedProps & React.RefAttributes<CascadeComparedHandle>>;
export default CascadeCompared;
