import type { Style } from 'css-to-react-native';
import WidgetProperty from './WidgetProperty/WidgetProperty';
import { DWidgetProperty } from './types/WidgetPropertyTypes';
import { GroupType, Type } from './types/WidgetTypes';
import { DLayoutWidget, DWidget, ILayoutWidget, IWidget } from './types/WidgetTypes';
/**
 * parseWidgets
 * @description 把数据转换成对象
 * @param {Array<DWidget | DLayoutWidget>} dataSource
 * @return Array<CWidget | CLayoutWidget>
 */
export declare function parseWidgets(dataSource: Array<DWidget | DLayoutWidget>): Array<IWidget | ILayoutWidget>;
/**
 * parseWidget
 * @param {DWidget | DLayoutWidget} widgetData
 * @return IWidget | ILayoutWidget
 */
export declare function parseWidget(widgetData: DWidget | DLayoutWidget): any;
/**
 * parseProperties
 * @param {DWidgetProperty[]} properties
 * @return {WidgetProperty []}
 */
export declare function parseProperties(properties: DWidgetProperty[]): WidgetProperty[];
/**
 * parseProperty
 * @param {DWidgetProperty} property
 * @return {WidgetProperty}
 */
export declare function parseProperty(property: DWidgetProperty): WidgetProperty;
/**
 * findWidgetById
 * @description 根据id寻找widget
 * @param {string} id
 * @param {Array<DWidget | DLayoutWidget>} dataSource
 * @return {DWidget | DLayoutWidget | null}
 */
export declare function findWidgetById(id: string, dataSource: Array<DWidget | DLayoutWidget>): DWidget | DLayoutWidget | null;
/**
 * findParentLayoutWidgetById
 * @description 根据id寻找widget的父亲
 * @param {string} id
 * @param {Array<DWidget | DLayoutWidget>} dataSource
 * @return {DWidget | DLayoutWidget | null}
 */
export declare function findParentLayoutWidgetById(id: string, dataSource: Array<DWidget | DLayoutWidget>): DLayoutWidget | null;
/**
 * getPropertyValueByName
 * @description 根据name获取property的value
 * @param {DWidgetProperty[]} properties
 * @param {string} name
 * @return {string | menubar | Array<any> | null | undefined}
 */
export declare function getPropertyValueByName(properties: DWidgetProperty[], name: string): any;
/**
 * copyWidget
 * @description 对Widget进行copy生成一个新的Widget
 * @param {DWidget | DLayoutWidget} sourceWidget
 * @return {DWidget | DLayoutWidget}
 */
export declare function copyWidget(sourceWidget: DWidget | DLayoutWidget): DWidget | DLayoutWidget;
/**
 * copyDataSource
 * @description 克隆dataSource
 * @param {Array<DWidget | DLayoutWidget>} dataSource
 * @return {Array<DWidget | DLayoutWidget>}
 */
export declare function copyDataSource(dataSource: Array<DWidget | DLayoutWidget>): Array<DWidget | DLayoutWidget>;
/**
 * transformInlineCSSToCSSProperties
 * @description inline css to CSSProperties
 * @param {string} inlineCSS
 * @return {CSSProperties}
 */
export declare function transformInlineCSSToCSSProperties(inlineCSS: string): Style;
/**
 * getDefaultFormItemProps
 * @description Form.Item的默认props
 * @param {WidgetProperty[]} properties
 * @return {{ [prop: string]: any }}
 */
export declare function getDefaultFormItemProps(properties: (DWidgetProperty | WidgetProperty)[]): {
    [prop: string]: any;
};
/**
 * getDefaultFieldProps
 * @description Field的默认props
 * @param {WidgetProperty[]} properties
 * @return {{ [prop: string]: any }}
 */
export declare function getDefaultFieldProps(properties: (DWidgetProperty | WidgetProperty)[]): {
    [prop: string]: any;
};
/**
 * getDefaultProperties
 * @description 获取缺省的属性
 * @param {GroupType} groupType
 * @param {Type} type
 * @return {WidgetProperty[]}
 */
export declare function getDefaultProperties(groupType: GroupType, type: Type): any;
/**
 * getInputValidationTypeDataSource
 * @description 获取所有验证类型的DataSource
 */
export declare function getInputValidationTypeDataSource(): {
    label: string;
    value: string;
}[];
