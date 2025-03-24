import type { ReactNode } from 'react';
import { IWidgetPropertyField, Type } from '../../types/WidgetPropertyFieldTypes';
/**
 * WidgetPropertyField
 * @description WidgetProperty的Field(字段)
 */
declare class WidgetPropertyField<P> implements IWidgetPropertyField<P> {
    constructor(key: any, name: any, required: any, type: any, props: any);
    readonly key: string;
    readonly name: string;
    readonly required: boolean;
    /**
     * type
     * @description field的类型
     * @private
     */
    readonly type: Type;
    /**
     * props
     * @description field的props
     * @private
     */
    readonly props: P;
    getKey(): string;
    getName(): string;
    getRequired(): boolean;
    getType(): string;
    getProps(): P;
    /**
     * render
     * @description 包装一层FormItem
     * @param {ReactNode} children
     * @return {ReactNode}
     */
    render(children: ReactNode): ReactNode;
}
export default WidgetPropertyField;
