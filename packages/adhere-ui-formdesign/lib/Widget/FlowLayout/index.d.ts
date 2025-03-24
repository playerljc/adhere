import type { ReactNode } from 'react';
import { GroupType, Type } from '../../types/WidgetTypes';
import LayoutWidget from '../LayoutWidget';
/**
 * FlowLayoutWidget
 * @description 流布局
 */
declare class FlowLayoutWidget extends LayoutWidget {
    readonly groupType: GroupType;
    readonly type: Type;
    /**
     * defineProperts
     * @description 定义缺省的properties
     * @protected
     * @return {DLayoutWIdget[]}
     */
    protected defineProperts(): Partial<import("../../types/WidgetPropertyTypes").DWidgetProperty>[];
    /**
     * renderDesign
     * @description 渲染设计视图
     * @return {ReactNode}
     */
    renderDesign(): ReactNode;
    render(): ReactNode;
}
export default FlowLayoutWidget;
