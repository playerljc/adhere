import { ReactNode } from 'react';
import WidgetProperty from '../WidgetProperty/WidgetProperty';
import { GroupType, ILayoutWidget, Type } from '../types/WidgetTypes';
import Widget from './index';
/**
 * LayoutWidget
 * @description 布局的Widget
 */
declare abstract class LayoutWidget extends Widget implements ILayoutWidget {
    /**
     * constructor
     * @param {string} id 唯一标识
     * @param {GroupType} groupType 分组类型
     * @param {WidgetType} type Widget类型
     * @param {WidgetProperty[]} properties 所有属性
     * @param {Widget[]} widgets 子容器
     */
    constructor(id: string, groupType: GroupType, type: Type, properties: WidgetProperty[], widgets: Array<Widget | LayoutWidget>);
    readonly widgets: Array<Widget | LayoutWidget>;
    getWidgets(): (Widget | LayoutWidget)[];
    /**
     * renderDesign
     * @description 包装一层DNDLayoutWidget
     * @param {ReactNode} children
     * @return {ReactNode}
     */
    renderDesign(children: ReactNode): ReactNode;
    /**
     * render
     * @description 处理className、style
     * @param {ReactNode} children
     * @return {ReactNode}
     */
    render(children: ReactNode): ReactNode;
}
export default LayoutWidget;
