import { ReactNode } from 'react';
import type WidgetProperty from '../WidgetProperty/WidgetProperty';
import { DWidgetProperty } from '../types/WidgetPropertyTypes';
import { IWidget } from '../types/WidgetTypes';
import type { GroupType, Type } from '../types/WidgetTypes';
/**
 * Widget
 * @description 小部件(在Area中的)
 */
declare abstract class Widget implements IWidget {
    /**
     * constructor
     * @param {string} id 唯一标志
     * @param {GroupType} groupType 分组类型
     * @param {WidgetType} type Widget类型
     * @param {WidgetProperty[]} properties 所有属性
     */
    constructor(id: string, groupType: GroupType, type: Type, properties: WidgetProperty[]);
    readonly id: string;
    readonly groupType: GroupType;
    readonly type: Type;
    properties: WidgetProperty[];
    /**
     * defineProperts
     * @description 定义缺省的properties
     * @return {Array<DWidgetProperty>}
     * @protected
     */
    protected defineProperts(): Array<DWidgetProperty>;
    /**
     * setProperties
     * @description 处理公共properties
     * @param properties
     * @private
     */
    protected setProperties(properties: WidgetProperty[]): void;
    /**
     * mergeProperties
     * @description 两个DWidgetProperty[]进行merge
     * @param {DWidgetProperty[]} sourceProperties
     * @param {DWidgetProperty[]} targetProperties
     * @return {DWidgetProperty[]}
     * @protected
     */
    protected mergeProperties(sourceProperties: DWidgetProperty[], targetProperties: Partial<DWidgetProperty>[]): Partial<DWidgetProperty>[];
    getId(): string;
    getGroupType(): GroupType;
    getType(): string;
    getProperties(): WidgetProperty[];
    /**
     * renderDesign
     * @description 包装一层DNDWidget
     * @param {ReactNode} children
     * @return {ReactNode}
     */
    renderDesign(children: ReactNode): ReactNode;
    /**
     * render
     * @description 公共处理的部分 处理className、style、title布局
     * @param {ReactNode} children
     * @return {ReactNode}
     */
    render(children: ReactNode): ReactNode;
}
export default Widget;
