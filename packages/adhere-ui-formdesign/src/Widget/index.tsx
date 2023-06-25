import Merge from 'lodash.merge';
import React, { ReactNode } from 'react';

import type WidgetProperty from '../WidgetProperty/WidgetProperty';
import { Type as WidgetPropertyFieldType } from '../types/WidgetPropertyFieldTypes';
import { DWidgetProperty } from '../types/WidgetPropertyTypes';
import { IWidget } from '../types/WidgetTypes';
import type { GroupType, Type as WidgetType } from '../types/WidgetTypes';
import { parseProperty } from '../util';
import DNDWidget from './DNDWidget';

/**
 * Widget
 * @description 小部件(在Area中的)
 */
abstract class Widget implements IWidget {
  /**
   * constructor
   * @param {string} id 唯一标志
   * @param {GroupType} groupType 分组类型
   * @param {WidgetType} type Widget类型
   * @param {WidgetProperty[]} propertys 所有属性
   */
  constructor(id: string, groupType: GroupType, type: WidgetType, propertys: WidgetProperty[]) {
    this.id = id;

    this.groupType = groupType;

    this.type = type;

    this.propertys = this.defineProperts().map((_t) => parseProperty(_t));

    this.setPropertys(propertys);
  }

  // 唯一标识
  readonly id: string;

  // 分组类型
  readonly groupType: GroupType;

  // 小部件类型
  readonly type: WidgetType;

  // propertys(属性面板的所有属性) 默认值
  propertys: WidgetProperty[] = [];

  /**
   * defineProperts
   * @description 定义缺省的propertys
   * @return {Array<DWidgetProperty>}
   * @protected
   */
  protected defineProperts(): Array<DWidgetProperty> {
    return [
      // {
      //   key: 'name',
      //   name: '字段标识',
      //   required: true,
      //   value: {
      //     type: WidgetPropertyFieldType.INPUT,
      //     props: {},
      //   },
      // },
      // {
      //   key: 'value',
      //   name: '值',
      //   required: false,
      //   value: {
      //     type: WidgetPropertyFieldType.INPUT,
      //     props: {},
      //   },
      // },
      // {
      //   key: 'title',
      //   name: '标题',
      //   required: false,
      //   value: {
      //     type: WidgetPropertyFieldType.INPUT,
      //     props: {},
      //   },
      // },
    ];
  }

  /**
   * setPropertys
   * @description 处理公共propertys
   * @param propertys
   * @private
   */
  protected setPropertys(propertys: WidgetProperty[]) {
    propertys.forEach((_sourceProperty) => {
      const _targetPropertyIndex = this.propertys.findIndex((_p) => _p.key === _sourceProperty.key);

      if (_targetPropertyIndex !== -1) {
        this.propertys[_targetPropertyIndex] = {
          ...this.propertys[_targetPropertyIndex],
          ..._sourceProperty,
        };
      } else {
        this.propertys.push(_sourceProperty);
      }
    });
  }

  /**
   * mergePropertys
   * @description 两个DWidgetProperty[]进行merge
   * @param {DWidgetProperty[]} sourcePropertys
   * @param {DWidgetProperty[]} targetPropertys
   * @return {DWidgetProperty[]}
   * @protected
   */
  protected mergePropertys(
    sourcePropertys: DWidgetProperty[],
    targetPropertys: Partial<DWidgetProperty>[],
  ): Partial<DWidgetProperty>[] {
    const result: Partial<DWidgetProperty>[] = [...sourcePropertys];

    targetPropertys.forEach((_sourceProperty) => {
      const _targetPropertyIndex = result.findIndex((_p) => _p.key === _sourceProperty.key);

      if (_targetPropertyIndex !== -1) {
        result[_targetPropertyIndex] = Merge(result[_targetPropertyIndex], _sourceProperty);
      } else {
        result.push(_sourceProperty);
      }
    });

    return result;
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

  renderDesign(children: ReactNode): ReactNode {
    const { id, groupType, type, propertys } = this;
    const props = {
      id,
      groupType,
      type,
      propertys,
    };

    return <DNDWidget {...props}>{children}</DNDWidget>;
  }

  render(): ReactNode {
    return null;
  }
}

export default Widget;
