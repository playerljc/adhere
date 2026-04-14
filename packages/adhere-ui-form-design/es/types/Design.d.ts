import type { CSSProperties, NamedExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import type { ActionsProps } from './Actions';
import type { FieldProps, FieldType } from './Field';
import type { FlexProps } from './Flex';
import type { FormItemProps } from './FormItem';
import type { DesignItem } from './Item';
import type { StyleProps } from './Style';
import type { DraggableToolItemProps, ToolBoxOption } from './ToolBox';
import type { Styles, Terminal } from './types';
export type DesignFieldWrapperProps = {
    className?: string;
    style?: CSSProperties;
    id: string;
    children?: ReactNode;
    fieldActionTypes?: DesignValueProps['fieldActionTypes'];
};
export type ToolbarProps = {};
export type DesignValueProps = {
    formItemProps?: FormItemProps;
    fieldProps: FieldProps;
    styleProps?: StyleProps;
    actionsProps?: ActionsProps;
    flexProps?: FlexProps;
    children?: DesignValue[];
    fieldActionTypes?: string[];
};
/**
 * DataSourceItemConfig
 * 一个数据源的配置
 */
export type DataSourceItemConfig = {
    id: string;
    name: string;
    request: {
        url: string;
        method: 'get' | 'post' | 'put' | 'delete';
        headers?: Record<string, string>;
        data?: Record<string, any>;
        codeKey: string;
        codeSuccess: number;
        dataKey: string;
    };
    response: {
        headers?: Record<string, string>;
        labelKey?: string;
        valueKey?: string;
    };
};
/**
 * DataSourceConfig
 * 数据源的配置
 */
export type DataSourceConfig = DataSourceItemConfig[];
/**
 * 设计值
 * 设置应该用一个布局开始
 */
export type DesignValue = {
    id: string;
    type: FieldType;
    props: DesignValueProps;
    dataSourceConfig?: DataSourceConfig;
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
    getToolBox: () => ToolBoxOption;
    setCurrentTerminal: (terminal: Terminal) => void;
    setActiveFieldId: (activeFieldId: string) => void;
    setFormItemProps: (id: string, props: FormItemProps) => void;
    setFieldProps: (id: string, props: FieldProps) => void;
    setStyleProps: (id: string, props: StyleProps) => void;
    setActionsProps: (id: string, props: ActionsProps) => void;
    setFlexProps: (id: string, props: FlexProps) => void;
    setDataSourceConfig: (id: string, config: DataSourceConfig) => void;
    addChildrenById: (id: string, child: DesignValue) => void;
    deleteFieldByChildren: (id: string) => void;
    updateChildrenById: (id: string, children: DesignValueProps['children']) => void;
}
/**
 * DesignComponent
 */
export type DesignComponent = NamedExoticComponent<PropsWithoutRef<DesignProps> & RefAttributes<DesignHandler>>;
