import { ReactNode } from 'react';
import { RequiredWidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';
import WidgetPropertyField from '../WidgetPropertyField';
/**
 * RequiredPropertyField
 * @description Required
 */
declare class RequiredPropertyField extends WidgetPropertyField<RequiredWidgetPropertyFieldProps> {
    render(): ReactNode;
}
export default RequiredPropertyField;
