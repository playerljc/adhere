import { ReactNode } from 'react';

import type WidgetProperty from '../WidgetProperty/WidgetProperty';
import { Type as WidgetPropertyFieldType } from '../types/WidgetPropertyFieldTypes';
import { IWidget } from '../types/WidgetTypes';
import type { GroupType, Type as WidgetType } from '../types/WidgetTypes';
import { parseProperty } from '../util';

/**
 * Widget
 * @description 小部件(在Area中的)
 */
abstract class Widget implements IWidget {
  constructor(id: string, groupType: GroupType, type: WidgetType, propertys: WidgetProperty[]) {
    this.id = id;
    this.groupType = groupType;
    this.type = type;
    this.setPropertys(propertys);
  }

  // 唯一标识
  readonly id: string;

  // 分组类型
  readonly groupType: GroupType;

  // 小部件类型
  readonly type: WidgetType;

  // propertys(属性面板的所有属性)
  readonly propertys: WidgetProperty[] = [];

  /**
   * setPropertys
   * @description 处理公共propertys
   * @param propertys
   * @private
   */
  private setPropertys(propertys: WidgetProperty[]) {
    const defaultPropertys: WidgetProperty[] = [];

    if (!propertys.find((property) => property.getKey() === 'name')) {
      defaultPropertys.push(
        parseProperty({
          key: 'name',
          name: '字段标识',
          required: true,
          value: {
            type: WidgetPropertyFieldType.INPUT,
            props: {},
          },
        }),
      );
    }

    if (!propertys.find((property) => property.getKey() === 'value')) {
      defaultPropertys.push(
        parseProperty({
          key: 'value',
          name: '值',
          required: false,
          value: {
            type: WidgetPropertyFieldType.INPUT,
            props: {},
          },
        }),
      );
    }

    if (!propertys.find((property) => property.getKey() === 'title')) {
      defaultPropertys.push(
        parseProperty({
          key: 'title',
          name: '标题',
          required: false,
          value: {
            type: WidgetPropertyFieldType.INPUT,
            props: {},
          },
        }),
      );
    }

    this.propertys.push(...defaultPropertys, ...propertys);
  }

  getId() {
    return this.id;
  }

  getGroupType() {
    return this.groupType;
  }

  getType() {
    return this.type;
  }

  getPropertys() {
    return this.propertys;
  }

  render(): ReactNode {
    return null;
  }

  renderDesign(): ReactNode {
    return null;
  }
}

export default Widget;
