import cloneDeepWith from 'lodash.clonedeepwith';
import { v4 } from 'uuid';

import WidgetPropertyField from './WidgetProperty/Field/WidgetPropertyField';
import { getFieldClassByType } from './WidgetProperty/Field/WidgetPropertyFieldManager';
import WidgetProperty from './WidgetProperty/WidgetProperty';
import { getWidgetClassByType } from './WidgetToolBox/WidgetToolBoxManager';
import { DWidgetProperty } from './types/WidgetPropertyTypes';
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
  return dataSource.map((_widget) => {
    const { id, type, groupType, propertys } = _widget;

    const WidgetClass = getWidgetClassByType(type);

    // @ts-ignore
    return new WidgetClass(
      id,
      groupType,
      type,
      parsePropertys(propertys),
      // @ts-ignore
      parseWidgets(_widget.widgets || []),
    );
  });
}

/**
 * parsePropertys
 * @param {DWidgetProperty[]} propertys
 * @return {WidgetProperty []}
 */
export function parsePropertys(propertys: DWidgetProperty[]) {
  return propertys.map((property) => parseProperty(property));
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
    new WidgetPropertyFieldClass(value.type, value.props),
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
 * @param {DWidgetProperty[]} propertys
 * @param {string} name
 * @return {string | menubar | Array<any> | null | undefined}
 */
export function getPropertyValueByName(propertys: DWidgetProperty[], name: string) {
  return (propertys || []).find((propery) => propery.key === name)?.value?.props?.value;
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
    const nameProperty = (_widget.propertys || []).find((_property) => _property.key === 'name');
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
