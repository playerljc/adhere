import { Type } from '../../types/WidgetPropertyFieldTypes';
import WidgetPropertyField from './WidgetPropertyField';
/**
 * registerField
 * @param {Type} type
 * @param {WidgetPropertyField} widgetPropertyFieldClass
 */
export declare function registerField<T extends typeof WidgetPropertyField>(type: Type, widgetPropertyFieldClass: T): void;
export declare function getFieldClassByType(type: Type): typeof WidgetPropertyField | undefined;
export declare function getAllFieldClass(): (typeof WidgetPropertyField)[];
