import type { NamedExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import type { FieldProps, FieldType } from './Field';
import type { FormItemProps } from './FormItem';
import type { DesignItem } from './Item';
import type { StyleProps } from './Style';
import type { ToolBoxOption } from './ToolBox';
import type { Styles, Terminal } from './types';
export type DesignFieldWrapperProps = {
    id: string;
    activeFieldId: string | null | undefined;
    onActiveFieldById: (id: string) => void;
    children?: ReactNode;
};
export type ToolbarProps = {};
export type DesignValueProps = {
    formItemProps?: FormItemProps;
    fieldProps: FieldProps;
    styleProps?: StyleProps;
    children?: DesignValue[];
};
/**
 * 设计值
 * 设置应该用一个布局开始
 */
export type DesignValue = {
    id: string;
    type: FieldType;
    props: DesignValueProps;
};
export interface DesignProps {
    className?: Styles['className'];
    style?: Styles['style'];
    toolbarClassName?: Styles['className'];
    toolbarStyle?: Styles['style'];
    toolboxClassName?: Styles['className'];
    toolboxStyle?: Styles['style'];
    editorClassName?: Styles['className'];
    editorStyle?: Styles['style'];
    propertiesClassName?: Styles['className'];
    propertiesStyle?: Styles['style'];
    terminal: Terminal;
    value?: DesignValue;
    toolBox: ToolBoxOption;
    items: DesignItem[];
}
export interface DesignHandler {
}
/**
 * DesignComponent
 */
export type DesignComponent = NamedExoticComponent<PropsWithoutRef<DesignProps> & RefAttributes<DesignHandler>>;
