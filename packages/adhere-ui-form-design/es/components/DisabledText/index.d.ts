import React, { PropsWithoutRef } from 'react';
export interface DisabledTextProps extends PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>> {
    /**
     * 子元素内容
     */
    children?: React.ReactNode;
}
/**
 * 禁用文本组件
 * 用于在表单设计器中显示禁用状态的文本内容
 */
declare const DisabledText: React.NamedExoticComponent<DisabledTextProps & React.RefAttributes<HTMLDivElement>>;
export default DisabledText;
