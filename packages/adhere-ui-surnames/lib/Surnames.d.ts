import React from 'react';
import type { SurnamesProps, SurnamesRefHandle } from './types';
/**
 * Surnames 组件 - 姓氏索引列表组件
 *
 * 支持垂直和水平方向的索引导航，提供平滑滚动动画和触摸/鼠标交互
 *
 * @example
 * ```tsx
 * <Surnames
 *   position="right"
 *   indexes={[
 *     { index: 'A', renderIndex: (index) => <span>{index.index}</span> },
 *     { index: 'B', renderIndex: (index) => <span>{index.index}</span> }
 *   ]}
 *   dataSource={[
 *     { index: 'A', data: [{ name: 'Alice' }] },
 *     { index: 'B', data: [{ name: 'Bob' }] }
 *   ]}
 *   onScroll={(name) => console.log('滚动到:', name)}
 * />
 * ```
 */
declare const Surnames: React.NamedExoticComponent<SurnamesProps & React.RefAttributes<SurnamesRefHandle>>;
export default Surnames;
