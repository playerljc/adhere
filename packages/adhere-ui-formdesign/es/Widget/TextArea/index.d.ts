import type { ReactNode } from 'react';
import { GroupType, Type } from '../../types/WidgetTypes';
import Widget from '../index';
/**
 * TextAreaWidget
 * @description 多行文本
 */
declare class TextAreaWidget extends Widget {
    readonly groupType: GroupType;
    readonly type: Type;
    /**
     * defineProperts
     * @description 定义缺省的properties
     * @protected
     * @return {DWidget[]}
     */
    protected defineProperts(): Partial<import("../../types/WidgetPropertyTypes").DWidgetProperty>[];
    /**
     * renderDesign
     * @description 渲染设计视图
     * @return {ReactNode}
     */
    renderDesign(): ReactNode;
    /**
     * render
     * @description 渲染实际视图
     * @return {ReactNode}
     */
    render(): ReactNode;
}
export default TextAreaWidget;
