import React from 'react';
import type { MagicPanelProps } from './types';
/**
 * MagicPanel
 * @description 魔法面板组件，一个响应式的面板组件，能够根据容器尺寸变化自动调整内部元素的位置和大小
 * @param props - 组件属性
 * @returns React 元素
 * @example
 * ```tsx
 * <MagicPanel
 *   metaData={{
 *     elementsInfo: [{ x: 0, y: 0, width: 100, height: 100 }],
 *     originWidth: 800,
 *     originHeight: 600
 *   }}
 *   renderBody={(ref) => <div ref={ref}>内容</div>}
 *   items={[{ key: 'item1', children: () => <span>项目1</span> }]}
 *   onChange={(elements) => console.log('元素信息变化:', elements)}
 * />
 * ```
 */
declare const MagicPanel: React.NamedExoticComponent<MagicPanelProps>;
export default MagicPanel;
