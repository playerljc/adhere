import type { Form } from '@baifendian/adhere-ui-anthoc';
export type FormInstance = ReturnType<typeof Form.useForm>[0];
/**
 * FormContext
 * @description 透传当前所在 Form 的 antd FormInstance，供字段渲染层获取
 */
export declare const FormContext: import("react").Context<any>;
/**
 * useFormContext
 * @description 获取最近的 antd FormInstance（来自 DesignEditor 或 FormDesign.Form）
 */
export declare function useFormContext(): FormInstance | null;
