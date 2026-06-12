import type { FormItemProps } from '../types';
import type { DesignFormInjectedProps } from '../components/FormItemBridge';

export type DesignFormControlPropsInput = DesignFormInjectedProps & {
  /** DesignPreviewFieldWithDataSource 提供的 initialValue 回退 */
  previewValue?: unknown;
};

/**
 * 将 Form.Item 注入的属性映射为 antd 控件可识别的受控/非受控 props。
 */
export function getDesignFormControlProps(
  formItemProps: FormItemProps | undefined,
  injected: DesignFormControlPropsInput,
): Record<string, unknown> {
  const { value, onChange, checked, targetKeys, previewValue } = injected;
  const valuePropName = formItemProps?.valuePropName ?? 'value';
  const initialValue = previewValue ?? formItemProps?.initialValue;

  if (typeof onChange !== 'function') {
    if (valuePropName === 'checked') {
      return initialValue !== undefined ? { defaultChecked: initialValue } : {};
    }
    if (valuePropName === 'targetKeys') {
      return initialValue !== undefined ? { defaultTargetKeys: initialValue } : {};
    }
    return initialValue !== undefined ? { defaultValue: initialValue } : {};
  }

  if (valuePropName === 'targetKeys') {
    return { targetKeys: targetKeys ?? [], onChange };
  }
  if (valuePropName === 'checked') {
    return { checked: checked ?? false, onChange };
  }
  return { value, onChange };
}
