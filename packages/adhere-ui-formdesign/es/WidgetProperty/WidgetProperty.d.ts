import { IWidgetProperty } from '../types/WidgetPropertyTypes';
import WidgetPropertyField from './Field/WidgetPropertyField';
/**
 * WidgetProperty
 * @description 小部件的一个属性
 */
declare class WidgetProperty implements IWidgetProperty {
    constructor(key: any, name: any, value: any, required: any);
    readonly key: string;
    readonly name: string;
    readonly required: boolean;
    readonly value: WidgetPropertyField;
    getKey(): string;
    getName(): string;
    getValue(): any;
    getRequired(): boolean;
}
export default WidgetProperty;
