import { ReactNode } from 'react';
import { SelectWidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';
import WidgetPropertyField from '../WidgetPropertyField';
/**
 * SelectPropertyField
 * @description Select
 */
declare class SelectPropertyField extends WidgetPropertyField<SelectWidgetPropertyFieldProps> {
    render(): ReactNode;
}
export default SelectPropertyField;
