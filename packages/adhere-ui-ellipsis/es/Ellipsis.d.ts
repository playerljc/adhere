import React from 'react';
import type { EllipsisProps } from './types';
/**
 * 文本省略号组件
 *
 * 支持单行和多行文本省略，可配置 tooltip 提示，支持展开/收起功能
 *
 * @example
 * ```tsx
 * // 单行省略
 * <Ellipsis>这是一段很长的文本内容，超出部分会显示省略号</Ellipsis>
 *
 * // 多行省略
 * <Ellipsis wrap wrapLines={3}>这是一段很长的文本内容，超出三行部分会显示省略号</Ellipsis>
 *
 * // 自定义 tooltip
 * <Ellipsis isUseNativeTooltip={false} tooltip="完整内容">省略的文本</Ellipsis>
 * ```
 *
 * @param props - 组件属性
 * @returns Ellipsis 组件实例
 */
declare const Ellipsis: React.NamedExoticComponent<EllipsisProps>;
export default Ellipsis;
