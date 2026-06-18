import type { DesignValueProps, FieldProps, Terminal } from '../../../types';
/**
 * resolveFieldPropsForDesignEditor
 * @description 解析设计编辑器中的字段属性。
 *
 * 根据当前终端类型（Terminal）和基础属性，计算最终展示的 FieldProps。
 * 特别是在移动端预览时，会应用移动端建议样式（如竖向布局、增加触控间距），
 * 但允许用户通过 fieldPropsByTerminal.mobile 进行覆盖。
 *
 * @param props - 设计值属性对象，包含基础字段属性等
 * @param terminal - 当前终端类型（如 mobile, pc 等）
 * @returns 解析后的完整字段属性
 */
export declare function resolveFieldPropsForDesignEditor(props: DesignValueProps, terminal: Terminal): FieldProps;
