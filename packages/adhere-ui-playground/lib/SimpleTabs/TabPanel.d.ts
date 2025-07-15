import React from 'react';
import type { TabPanelProps } from '../types';
/**
 * 标签面板组件
 * @component TabPanel
 * @description 标签页的内容面板，根据当前激活的标签页显示或隐藏内容
 * @param props - 组件属性
 * @param props.className - 自定义CSS类名
 * @param props.style - 自定义内联样式
 * @param props.children - 子组件内容
 * @param props.index - 标签页索引，用于标识当前面板
 * @returns JSX.Element
 * @example
 * ```tsx
 * <TabPanel index="tab1" title="标签页1">
 *   <div>标签页1的内容</div>
 * </TabPanel>
 * ```
 */
declare const TabPanel: React.NamedExoticComponent<TabPanelProps>;
export default TabPanel;
