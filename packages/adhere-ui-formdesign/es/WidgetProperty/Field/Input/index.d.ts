import { InputProps } from 'antd';
import { ReactNode } from 'react';
import WidgetPropertyField from '../WidgetPropertyField';
/**
 * InputPropertyField
 * @description 单行文本框
 */
declare class InputPropertyField extends WidgetPropertyField<InputProps> {
    render(): ReactNode;
}
export default InputPropertyField;
