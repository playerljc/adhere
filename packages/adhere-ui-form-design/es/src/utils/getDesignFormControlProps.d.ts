import type { FormItemProps } from '../types';
import type { DesignFormInjectedProps } from '../components/FormItemBridge';
export type DesignFormControlPropsInput = DesignFormInjectedProps & {
    /** DesignPreviewFieldWithDataSource 提供的 initialValue 回退 */
    previewValue?: unknown;
};
/**
 * 将 Form.Item 注入的属性映射为 antd 控件可识别的受控/非受控 props。
 */
export declare function getDesignFormControlProps(formItemProps: FormItemProps | undefined, injected: DesignFormControlPropsInput): Record<string, unknown>;
