import React from 'react';
import type { PropsProps } from './types';
/**
 * Props组件
 * @component Props
 * @description 属性说明组件，用于展示组件的属性配置信息
 * @param props - 组件属性
 * @param props.data - 属性数据列表
 * @param props.children - 子组件
 * @param props.restProps - 其他传递给Collapse的属性
 * @returns JSX.Element
 * @example
 * ```tsx
 * <Props
 *   data={[
 *     { params: 'name', desc: '组件名称', type: 'string', defaultVal: '-' },
 *     { params: 'disabled', desc: '是否禁用', type: 'boolean', defaultVal: 'false' }
 *   ]}
 *   title="组件属性"
 * >
 *   属性说明内容
 * </Props>
 * ```
 */
declare const Props: React.NamedExoticComponent<PropsProps>;
export default Props;
