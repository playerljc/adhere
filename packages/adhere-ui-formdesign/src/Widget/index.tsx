import classNames from 'classnames';
import Merge from 'lodash.merge';
import React, { CSSProperties, ReactNode } from 'react';
import { v4 } from 'uuid';

import { selectorPrefix } from '../FormDesign/FormDesign';
import type WidgetProperty from '../WidgetProperty/WidgetProperty';
import { WidgetPropertyFieldType } from '../types/WidgetPropertyFieldTypes';
import { DWidgetProperty } from '../types/WidgetPropertyTypes';
import { IWidget } from '../types/WidgetTypes';
import type { GroupType, Type } from '../types/WidgetTypes';
import { getPropertyValueByName, parseProperty, transformInlineCSSToCSSProperties } from '../util';
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
   * @param {WidgetProperty[]} properties 所有属性
   */
  constructor(id: string, groupType: GroupType, type: Type, properties: WidgetProperty[]) {
    this.id = id;

    this.groupType = groupType;

    this.type = type;

    this.properties = this.defineProperts().map((_t) => parseProperty(_t));

    this.setProperties(properties);
  }

  // 唯一标识
  readonly id: string;

  // 分组类型
  readonly groupType: GroupType;

  // 小部件类型
  readonly type: Type;

  // properties(属性面板的所有属性) 默认值
  properties: WidgetProperty[] = [];

  /**
   * defineProperts
   * @description 定义缺省的properties
   * @return {Array<DWidgetProperty>}
   * @protected
   */
  protected defineProperts(): Array<DWidgetProperty> {
    return [
      {
        key: 'name',
        name: '字段标识',
        required: true,
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: v4(),
          },
        },
      },
      {
        key: 'value',
        name: '默认值',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {},
        },
      },
      {
        key: 'title',
        name: '标题',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: '',
          },
        },
      },
      {
        key: 'wrapTitle',
        name: '标签换行',
        required: false,
        value: {
          type: WidgetPropertyFieldType.SWITCH,
          props: {
            value: false,
          },
        },
      },
      {
        key: 'hideTitle',
        name: '隐藏标签',
        required: false,
        value: {
          type: WidgetPropertyFieldType.SWITCH,
          props: {
            value: false,
          },
        },
      },
      /*{
        key: 'titleWidth',
        name: '标签宽度',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT_NUMBER,
          props: {
            value: false,
            precision: 0,
          },
        },
      },*/
      {
        key: 'className',
        name: '自定义Class',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: [],
          },
        },
      },
      {
        key: 'style',
        name: '自定义Style',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: '',
          },
        },
      },
      {
        key: 'required',
        name: '必填',
        required: false,
        value: {
          type: WidgetPropertyFieldType.REQUIRED,
          props: {
            value: {
              required: false,
              validationMessage: '',
            },
          },
        },
      },
      {
        key: 'readonly',
        name: '只读',
        required: false,
        value: {
          type: WidgetPropertyFieldType.SWITCH,
          props: {
            value: false,
          },
        },
      },
      {
        key: 'disabled',
        name: '禁用',
        required: false,
        value: {
          type: WidgetPropertyFieldType.SWITCH,
          props: {
            value: false,
          },
        },
      },
      {
        key: 'tooltip',
        name: '提示说明',
        required: false,
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: '',
          },
        },
      },
    ];
  }

  /**
   * setProperties
   * @description 处理公共properties
   * @param properties
   * @private
   */
  protected setProperties(properties: WidgetProperty[]) {
    properties.forEach((_sourceProperty) => {
      const _targetPropertyIndex = this.properties.findIndex(
        (_p) => _p.key === _sourceProperty.key,
      );

      if (_targetPropertyIndex !== -1) {
        this.properties[_targetPropertyIndex] = {
          ...this.properties[_targetPropertyIndex],
          ..._sourceProperty,
        };
      } else {
        this.properties.push(_sourceProperty);
      }
    });
  }

  /**
   * mergeProperties
   * @description 两个DWidgetProperty[]进行merge
   * @param {DWidgetProperty[]} sourceProperties
   * @param {DWidgetProperty[]} targetProperties
   * @return {DWidgetProperty[]}
   * @protected
   */
  protected mergeProperties(
    sourceProperties: DWidgetProperty[],
    targetProperties: Partial<DWidgetProperty>[],
  ): Partial<DWidgetProperty>[] {
    const result: Partial<DWidgetProperty>[] = [...sourceProperties];

    targetProperties.forEach((_sourceProperty) => {
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

  getProperties() {
    return this.properties;
  }

  /**
   * renderDesign
   * @description 包装一层DNDWidget
   * @param {ReactNode} children
   * @return {ReactNode}
   */
  renderDesign(children: ReactNode): ReactNode {
    const { id, groupType, type, properties } = this;
    const props = {
      id,
      groupType,
      type,
      properties,
    };

    return <DNDWidget {...props}>{children}</DNDWidget>;
  }

  /**
   * render
   * @description 处理className、style、title布局
   * @param {ReactNode} children
   * @return {ReactNode}
   */
  render(children: ReactNode): ReactNode {
    const { properties } = this;

    // 处理className
    const className = getPropertyValueByName(properties, 'className');

    // 处理style
    const style = transformInlineCSSToCSSProperties(
      getPropertyValueByName(properties, 'style') ?? {},
    ) as CSSProperties;

    // 标题
    const title = getPropertyValueByName(properties, 'title');

    // 标签换行
    const wrapTitle = getPropertyValueByName(properties, 'wrapTitle');

    // 隐藏标签
    const hideTitle = getPropertyValueByName(properties, 'hideTitle');

    // 提示说明
    const tooltip = getPropertyValueByName(properties, 'tooltip');

    // require
    const required = getPropertyValueByName(properties, 'required').required;

    return (
      <div
        className={classNames(
          `${selectorPrefix}-widget`,
          {
            [`${selectorPrefix}-widget-label--wrap`]: wrapTitle,
          },
          ...(className || []),
        )}
        style={style ?? {}}
      >
        <div
          className={classNames(`${selectorPrefix}-widget-label`, {
            [`${selectorPrefix}-widget-require`]: required,
            [`${selectorPrefix}-widget-tooltip-label`]: !wrapTitle && tooltip,
          })}
        >
          {!hideTitle ? title : null}
        </div>

        {wrapTitle && tooltip && (
          <div className={`${selectorPrefix}-widget-tooltip`}>{tooltip}</div>
        )}

        <div className={`${selectorPrefix}-widget-value`}>
          {!wrapTitle && tooltip && (
            <div className={`${selectorPrefix}-widget-tooltip`}>{tooltip}</div>
          )}
          {children}
        </div>
      </div>
    );
  }
}

export default Widget;
