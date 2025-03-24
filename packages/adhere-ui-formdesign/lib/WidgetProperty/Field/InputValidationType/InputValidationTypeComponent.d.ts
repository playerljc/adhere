import type { FC } from 'react';
import { InputValidationTypeWidgetPropertyFieldProps, WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';
/**
 * InputValidationTypeComponent
 * @param props
 * @constructor
 */
declare const InputValidationTypeComponent: FC<WidgetPropertyFieldProps<InputValidationTypeWidgetPropertyFieldProps, {
    checked: boolean;
    type: string;
    validationMessage?: string;
}>>;
export default InputValidationTypeComponent;
