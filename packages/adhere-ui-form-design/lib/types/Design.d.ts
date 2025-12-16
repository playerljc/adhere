import type { CSSProperties, NamedExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import type { ActionsProps } from './Actions';
import type { FieldProps, FieldType } from './Field';
import type { FormItemProps } from './FormItem';
import type { DesignItem } from './Item';
import type { StyleProps } from './Style';
import type { DraggableToolItemProps, ToolBoxOption } from './ToolBox';
import type { Styles, Terminal } from './types';
export type DesignFieldWrapperProps = {
    id: string;
    children?: ReactNode;
};
export type ToolbarProps = {};
export type DesignValueProps = {
    formItemProps?: FormItemProps;
    fieldProps: FieldProps;
    styleProps?: StyleProps;
    actionsProps?: ActionsProps;
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
export interface DesignContextType {
    getDesignValue: () => DesignValue | undefined;
    getTerminal: () => Terminal;
    getActiveFieldId: () => string | null | undefined;
    getActiveDesignFieldValue: () => DesignValue | null;
    getItems: () => DesignItem[];
    getOverlayCursor: () => CSSProperties['cursor'];
    getActiveToolItemData: () => DraggableToolItemProps['data'] | null;
    setCurrentTerminal: (terminal: Terminal) => void;
    setActiveFieldId: (activeFieldId: string) => void;
    setFormItemProps: (id: string, props: FormItemProps) => void;
    setFieldProps: (id: string, props: FieldProps) => void;
    setStyleProps: (id: string, props: StyleProps) => void;
    setActionsProps: (id: string, props: ActionsProps) => void;
}
/**
 * DesignComponent
 */
export type DesignComponent = NamedExoticComponent<PropsWithoutRef<DesignProps> & RefAttributes<DesignHandler>>;
