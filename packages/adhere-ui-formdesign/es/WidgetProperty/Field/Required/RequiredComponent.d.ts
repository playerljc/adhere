import type { FC } from 'react';
import { RequiredWidgetPropertyFieldProps, WidgetPropertyFieldProps } from '../../../types/WidgetPropertyFieldTypes';
/**
 * RequiredComponent
 * @param props
 * @constructor
 */
declare const RequiredComponent: FC<WidgetPropertyFieldProps<RequiredWidgetPropertyFieldProps, {
    required: boolean;
    validationMessage: string;
}>>;
export default RequiredComponent;
