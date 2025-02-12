import { IWidgetProperty } from '../types/WidgetPropertyTypes';
import WidgetPropertyField from './Field/WidgetPropertyField';

/**
 * WidgetProperty
 * @description 小部件的一个属性
 */
class WidgetProperty implements IWidgetProperty {
  constructor(key, name, value, required) {
    this.key = key;
    this.name = name;
    this.value = value;
    this.required = required;
  }

  readonly key: string;

  readonly name: string;

  readonly required: boolean;

  readonly value: WidgetPropertyField;

  getKey() {
    return this.key;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  getRequired() {
    return this.required;
  }
}

export default WidgetProperty;
