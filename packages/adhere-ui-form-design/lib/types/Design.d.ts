import type { CSSProperties, NamedExoticComponent, PropsWithoutRef, ReactNode, RefAttributes, RefObject } from 'react';
import type { FormProps as AntdFormProps } from 'antd';
import type { Form as AnthocForm } from '@baifendian/adhere-ui-anthoc';
import type { ActionsProps } from './Actions';
import type { FieldProps, FieldType } from './Field';
import type { FlexProps } from './Flex';
import type { FormItemProps } from './FormItem';
import type { DesignItem } from './Item';
import type { StyleProps } from './Style';
import type { DraggableToolItemProps, ToolBoxOption } from './ToolBox';
import type { MobileViewportPresetId, Styles, Terminal } from './types';
/**
 * 渲染模式
 * - design: 设计器模式，DesignFieldWrapper/DroppableContainer 提供选中/拖拽交互
 * - form:   运行时表单模式，关闭交互层，仅做纯渲染
 */
export type DesignMode = 'design' | 'form';
export type DesignFieldWrapperProps = {
    className?: string;
    style?: CSSProperties;
    id: string;
    children?: ReactNode;
    fieldActionTypes?: DesignValueProps['fieldActionTypes'];
};
export type ToolbarProps = {
    toolbarGroup: ToolBar;
    menu: MenuBar;
    toolbarEllipseCount?: number;
    menuBarEllipseCount?: number;
};
/** 按终端覆盖的 fieldProps 差量（与 fieldProps 深度合并后参与渲染） */
export type FieldPropsByTerminal = Partial<Record<Terminal, Partial<FieldProps>>>;
export type DesignValueProps = {
    formItemProps?: FormItemProps;
    fieldProps: FieldProps;
    /** 各终端相对 fieldProps 的增量，常用 mobile */
    fieldPropsByTerminal?: FieldPropsByTerminal;
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
export type ToolBarItem = {
    key: string;
    label: string;
    icon: ReactNode;
    el: ReactNode;
};
export type ToolBarGroup = ToolBarItem[];
export type ToolBar = ToolBarGroup[];
export type MenuItem = {
    key: string;
    label: string;
    icon: ReactNode;
    el: ReactNode;
};
export type MenuBar = MenuItem[];
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
    renderToolBar?: (originGroup: ToolBarGroup[]) => ToolBar;
    toolbarEllipseCount?: number;
    renderMenuBar?: (originMenu: MenuItem[]) => MenuBar;
    menuBarEllipseCount?: number;
}
export interface DesignHandler {
    /** 将设计画布重置为默认空根布局，并清除当前选中项 */
    resetDesignValue: () => void;
}
export interface DesignContextType {
    /**
     * 渲染模式
     * @description 'design' 为设计器模式，'form' 为运行时表单模式（关闭交互层）
     * @default 'design'
     */
    mode?: DesignMode;
    /** 设计器根容器，用于全屏等绑定原生 Fullscreen API */
    fullscreenRootRef: RefObject<HTMLDivElement | null>;
    getDesignValue: () => DesignValue | undefined;
    getTerminal: () => Terminal;
    getActiveFieldId: () => string | null | undefined;
    getActiveDesignFieldValue: () => DesignValue | null;
    getItems: () => DesignItem[];
    getOverlayCursor: () => CSSProperties['cursor'];
    getActiveToolItemData: () => DraggableToolItemProps['data'] | null;
    getToolBox: () => ToolBoxOption;
    getRenderToolBar: () => DesignProps['renderToolBar'];
    getRenderMenuBar: () => DesignProps['renderMenuBar'];
    getToolbarEllipseCount: () => DesignProps['toolbarEllipseCount'];
    getMenuBarEllipseCount: () => DesignProps['menuBarEllipseCount'];
    setCurrentTerminal: (terminal: Terminal) => void;
    getMobileViewportPresetId: () => MobileViewportPresetId;
    setMobileViewportPresetId: (presetId: MobileViewportPresetId) => void;
    setActiveFieldId: (activeFieldId: string | undefined) => void;
    setFormItemProps: (id: string, props: FormItemProps) => void;
    setFieldProps: (id: string, props: FieldProps) => void;
    setStyleProps: (id: string, props: StyleProps) => void;
    setActionsProps: (id: string, props: ActionsProps) => void;
    setFlexProps: (id: string, props: FlexProps) => void;
    setDataSourceConfig: (id: string, config: DataSourceConfig) => void;
    addChildrenById: (id: string, child: DesignValue) => void;
    deleteFieldByChildren: (id: string) => void;
    updateChildrenById: (id: string, children: DesignValueProps['children']) => void;
    /** Outline 等场景：交换两个节点在设计树中的位置（各自父容器的 children 中下标互换） */
    swapOutlineNodes: (idA: string, idB: string) => void;
    /** 将设计画布重置为默认空根布局，并清除当前选中项 */
    resetDesignValue: () => void;
}
/**
 * DesignComponent
 */
export type DesignComponent = NamedExoticComponent<PropsWithoutRef<DesignProps> & RefAttributes<DesignHandler>>;
/**
 * Form 渲染组件的属性
 */
export interface FormProps extends Pick<AntdFormProps, 'name' | 'initialValues' | 'onFinish' | 'onFinishFailed' | 'onValuesChange' | 'onFieldsChange' | 'layout' | 'disabled' | 'colon' | 'labelAlign' | 'labelWrap' | 'preserve' | 'requiredMark' | 'scrollToFirstError' | 'size' | 'validateMessages' | 'validateTrigger' | 'variant'> {
    className?: Styles['className'];
    style?: Styles['style'];
    /** 表单设计值（设计器产物） */
    value: DesignValue;
    /** 终端 */
    terminal?: Terminal;
    /** 控件定义集合，与 DesignProps.items 一致 */
    items?: DesignItem[];
}
/**
 * FormHandler
 * @description 直接暴露 antd FormInstance（含 anthoc Form 的 proxy 增强方法），
 *  调用方使用 setFieldsValue/getFieldsValue/validateFields/resetFields/submit 等原生 API
 */
export type FormHandler = ReturnType<typeof AnthocForm.useForm>[0];
/**
 * FormComponent
 */
export type FormComponent = NamedExoticComponent<PropsWithoutRef<FormProps> & RefAttributes<FormHandler>>;
