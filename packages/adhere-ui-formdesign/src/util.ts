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
 * getPropertyValueByName
 * @description 根据name获取property的value
 * @param {DWidgetProperty[]} propertys
 * @param {string} name
 */
export function getPropertyValueByName(propertys: DWidgetProperty[], name: string) {
  return (propertys || []).find((propery) => propery.key === name)?.value?.props?.value;
}
