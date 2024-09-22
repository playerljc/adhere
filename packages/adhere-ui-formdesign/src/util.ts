import transform from 'css-to-react-native';
import type { Style } from 'css-to-react-native';
import cloneDeepWith from 'lodash.clonedeepwith';
import { CSSProperties } from 'react';
import parse from 'style-to-object';
import { v4 } from 'uuid';

import { Form } from '@baifendian/adhere-ui-anthoc';

import WidgetPropertyField from './WidgetProperty/Field/WidgetPropertyField';
import { getFieldClassByType } from './WidgetProperty/Field/WidgetPropertyFieldManager';
import WidgetProperty from './WidgetProperty/WidgetProperty';
import { getWidgetClassByType } from './WidgetToolBox/WidgetToolBoxManager';
import { DWidgetProperty } from './types/WidgetPropertyTypes';
import { GroupType, Type } from './types/WidgetTypes';
import { DLayoutWidget, DWidget, ILayoutWidget, IWidget } from './types/WidgetTypes';

/**
 * parseWidgets
 * @description 把数据转换成对象
 * @param {Array<DWidget | DLayoutWidget>} dataSource
 * @return Array<CWidget | CLayoutWidget>
 */
export function parseWidgets(
  dataSource: Array<DWidget | DLayoutWidget>,
): Array<IWidget | ILayoutWidget> {
  return dataSource.current.map((_widget) => parseWidget(_widget));
}

/**
 * parseWidget
 * @param {DWidget | DLayoutWidget} widgetData
 * @return IWidget | ILayoutWidget
 */
export function parseWidget(widgetData: DWidget | DLayoutWidget) {
  const { id, type, groupType, properties } = widgetData;

  const WidgetClass = getWidgetClassByType(type);

  // @ts-ignore
  return new WidgetClass(
    id,
    groupType,
    type,
    parseProperties(properties),
    // @ts-ignore
    parseWidgets(widgetData.widgets || []),
  );
}

/**
 * parseProperties
 * @param {DWidgetProperty[]} properties
 * @return {WidgetProperty []}
 */
export function parseProperties(properties: DWidgetProperty[]) {
  return properties.map((property) => parseProperty(property));
}

/**
 * parseProperty
 * @param {DWidgetProperty} property
 * @return {WidgetProperty}
 */
export function parseProperty(property: DWidgetProperty) {
  const { key, name, value, required } = property;
  const WidgetPropertyFieldClass = getFieldClassByType(value.type) as typeof WidgetPropertyField;

  return new WidgetProperty(
    key,
    name,
    new WidgetPropertyFieldClass(key, name, required, value.type, value.props),
    required,
  );
}

/**
 * findWidgetById
 * @description 根据id寻找widget
 * @param {string} id
 * @param {Array<DWidget | DLayoutWidget>} dataSource
 * @return {DWidget | DLayoutWidget | null}
 */
export function findWidgetById(
  id: string,
  dataSource: Array<DWidget | DLayoutWidget>,
): DWidget | DLayoutWidget | null {
  let widget: DWidget | DLayoutWidget | null = null;

  for (let i = 0; i < dataSource.length; i++) {
    const item = dataSource[i];

    if (item.id === id) {
      widget = item;
      break;
    } else {
      widget = findWidgetById(id, item.widgets || []);

      if (widget) {
        break;
      }
    }
  }

  return widget;
}

/**
 * findParentLayoutWidgetById
 * @description 根据id寻找widget的父亲
 * @param {string} id
 * @param {Array<DWidget | DLayoutWidget>} dataSource
 * @return {DWidget | DLayoutWidget | null}
 */
export function findParentLayoutWidgetById(
  id: string,
  dataSource: Array<DWidget | DLayoutWidget>,
): DLayoutWidget | null {
  // @ts-ignore
  const layoutWidget: DLayoutWidget = {
    widgets: dataSource,
  };

  function loop(_layoutWidget: DLayoutWidget): DLayoutWidget | null {
    let result;

    const widgets = _layoutWidget.widgets || [];

    for (let i = 0; i < widgets.length; i++) {
      const itemDWidget = widgets[i];

      if (itemDWidget.id === id) {
        result = _layoutWidget;
        break;
      } else {
        result = loop(itemDWidget);

        if (result) {
          break;
        }
      }
    }

    return result;
  }

  return loop(layoutWidget);
}

/**
 * getPropertyValueByName
 * @description 根据name获取property的value
 * @param {DWidgetProperty[]} properties
 * @param {string} name
 * @return {string | menubar | Array<any> | null | undefined}
 */
export function getPropertyValueByName(properties: DWidgetProperty[], name: string) {
  return (properties || []).find((propery) => propery.key === name)?.value?.props?.value;
}

/**
 * copyWidget
 * @description 对Widget进行copy生成一个新的Widget
 * @param {DWidget | DLayoutWidget} sourceWidget
 * @return {DWidget | DLayoutWidget}
 */
export function copyWidget(sourceWidget: DWidget | DLayoutWidget): DWidget | DLayoutWidget {
  const cloneWidget = cloneDeepWith(sourceWidget, function (value) {
    if ('children' in value) {
      const { children, ...result } = value;
      return result;
    } else {
      return value;
    }
  });

  function loop(_widget) {
    // id需要修改
    _widget.id = v4();

    // property中key为name的value也需要修改
    const nameProperty = (_widget.properties || []).find((_property) => _property.key === 'name');
    if (nameProperty && nameProperty.value && nameProperty.value.props) {
      nameProperty.value.props.value = v4();
    }

    const widgets = _widget.widgets || [];

    widgets.forEach((_w) => loop(_w));
  }

  loop(cloneWidget);

  return cloneWidget;
}

/**
 * copyDataSource
 * @description 克隆dataSource
 * @param {Array<DWidget | DLayoutWidget>} dataSource
 * @return {Array<DWidget | DLayoutWidget>}
 */
export function copyDataSource(
  dataSource: Array<DWidget | DLayoutWidget>,
): Array<DWidget | DLayoutWidget> {
  return cloneDeepWith(dataSource, function (value) {
    if ('children' in value) {
      const { children, ...result } = value;
      return result;
    } else {
      return value;
    }
  });
}

/**
 * transformInlineCSSToCSSProperties
 * @description inline css to CSSProperties
 * @param {string} inlineCSS
 * @return {CSSProperties}
 */
export function transformInlineCSSToCSSProperties(inlineCSS: string): Style {
  const output = [];

  parse(inlineCSS, (name, value) => {
    output.push([name, value]);
  });

  return transform(output);
}

/**
 * getDefaultFormItemProps
 * @description Form.Item的默认props
 * @param {WidgetProperty[]} properties
 * @return {{ [prop: string]: any }}
 */
export function getDefaultFormItemProps(properties: (DWidgetProperty | WidgetProperty)[]): {
  [prop: string]: any;
} {
  return {
    name: getPropertyValueByName(properties, 'name'),
  };
}

/**
 * getDefaultFieldProps
 * @description Field的默认props
 * @param {WidgetProperty[]} properties
 * @return {{ [prop: string]: any }}
 */
export function getDefaultFieldProps(properties: (DWidgetProperty | WidgetProperty)[]): {
  [prop: string]: any;
} {
  return {
    readonly: getPropertyValueByName(properties, 'readonly'),
    disabled: getPropertyValueByName(properties, 'disabled'),
  };
}

/**
 * getDefaultProperties
 * @description 获取缺省的属性
 * @param {GroupType} groupType
 * @param {Type} type
 * @return {WidgetProperty[]}
 */
export function getDefaultProperties(groupType: GroupType, type: Type) {
  const WidgetClass = getWidgetClassByType(type);

  // @ts-ignore
  const Widget = new WidgetClass('', groupType, type, [], []);

  try {
    return JSON.parse(JSON.stringify(Widget?.properties || []));
  } catch (e) {
    return [];
  }
}

/**
 * getInputValidationTypeDataSource
 * @description 获取所有验证类型的DataSource
 */
export function getInputValidationTypeDataSource() {
  // Form.ValidatorRules.isIP
  return Object.keys(Form.ValidatorRules).map((key) => ({
    label: key.replace(/^is/, ''),
    value: key,
  }));
}
