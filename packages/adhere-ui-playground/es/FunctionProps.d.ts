import React from 'react';
import type { FunctionProps } from './types';
/**
 * FunctionProps组件
 * @component FunctionProps
 * @description 函数属性说明组件，用于展示函数的详细参数和返回值信息
 * @param props - 组件属性
 * @param props.data - 函数数据列表
 * @param props.restProps - 其他传递给Collapse的属性
 * @returns JSX.Element
 * @example
 * ```tsx
 * <FunctionProps
 *   data={[
 *     {
 *       name: 'handleClick',
 *       desc: '点击事件处理函数',
 *       modifier: 'public',
 *       params: [
 *         { name: 'event', desc: '事件对象', type: 'MouseEvent', defaultVal: '-', required: true }
 *       ],
 *       returnType: 'void',
 *       returnDesc: '无返回值'
 *     }
 *   ]}
 *   title="函数属性"
 * />
 * ```
 */
declare const FunctionProps: React.NamedExoticComponent<FunctionProps>;
export default FunctionProps;
