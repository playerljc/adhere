import type { SimpleTabsComponent } from '../types';
/**
 * 简单标签页组件
 * @component SimpleTabs
 * @description 导出的简单标签页组件，包含TabPanel子组件
 * @example
 * ```tsx
 * import SimpleTabs from './SimpleTabs';
 *
 * <SimpleTabs activeKey="tab1">
 *   <SimpleTabs.TabPanel index="tab1" title="标签页1">内容1</SimpleTabs.TabPanel>
 *   <SimpleTabs.TabPanel index="tab2" title="标签页2">内容2</SimpleTabs.TabPanel>
 * </SimpleTabs>
 * ```
 */
declare const SimpleTabs: SimpleTabsComponent;
export default SimpleTabs;
