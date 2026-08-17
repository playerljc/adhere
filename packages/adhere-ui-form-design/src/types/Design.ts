import type {
  CSSProperties,
  NamedExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
  RefObject,
} from 'react';
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
  /** 与 findTypeById(id) 等价；传入后不再整树查找 type */
  type?: FieldType;
  children?: ReactNode;
  fieldActionTypes?: DesignValueProps['fieldActionTypes'];
};

// Toolbar
export type ToolbarProps = {
  toolbarGroup: ToolBar;
  menu: MenuBar;
  toolbarEllipseCount?: number;
  menuBarEllipseCount?: number;
};

/** 按终端覆盖的 fieldProps 差量（与 fieldProps 深度合并后参与渲染） */
export type FieldPropsByTerminal = Partial<Record<Terminal, Partial<FieldProps>>>;

// 设计值属性
export type DesignValueProps = {
  // FormItem的props
  formItemProps?: FormItemProps;

  // 控件的props
  fieldProps: FieldProps;

  /** 各终端相对 fieldProps 的增量，常用 mobile */
  fieldPropsByTerminal?: FieldPropsByTerminal;

  // 控件样式的props
  styleProps?: StyleProps;

  // 控件事件的props
  actionsProps?: ActionsProps;

  // flex的props
  flexProps?: FlexProps;

  // 控件下的子项(一般是布局控件才有children)
  children?: DesignValue[];

  // 字段的动作类型的集合
  fieldActionTypes?: string[];
};

/**
 * DataSourceItemConfig
 * 一个数据源的配置
 */
export type DataSourceItemConfig = {
  // 数据源的id
  id: string;
  // 数据源的名字
  name: string;
  request: {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    headers?: Record<string, string>;
    data?: Record<string, any>;
    // 响应状态的key
    codeKey: string;
    // 响应状态的key
    codeSuccess: number;
    // 响应数据的key
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
  // 唯一值
  id: string;

  // 控件类型
  type: FieldType;

  // 控件的props
  props: DesignValueProps;

  // 数据源管理
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

// 设计器属性
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

  // 终端
  terminal: Terminal;
  // 值
  value?: DesignValue;
  // 工具箱
  toolBox: ToolBoxOption;
  // 控件
  items: DesignItem[];

  // 工具栏
  renderToolBar?: (originGroup: ToolBarGroup[]) => ToolBar;
  toolbarEllipseCount?: number;

  // 菜单栏
  renderMenuBar?: (originMenu: MenuItem[]) => MenuBar;
  menuBarEllipseCount?: number;
}

export interface DesignHandler {
  /** 将设计画布重置为默认空根布局，并清除当前选中项 */
  resetDesignValue: () => void;
  /** 用完整设计树替换当前画布，并清除当前选中项 */
  loadDesignValue: (designValue: DesignValue) => void;
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
  // --------- getters ---------
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
  /**
   * Form 运行态 disabled 覆盖
   * @description 当外层 Form 传入 disabled（无论 true/false）时，控件自身 fieldProps.disabled 必须让位
   * - undefined: 不覆盖，使用控件自身 disabled
   * - boolean: 覆盖所有控件 disabled
   */
  getFormDisabled?: () => boolean | undefined;
  // getDispatch: () => Dispatch<DesignValueAction>;
  // --------- setters ---------
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
  // --------- add -----------
  addChildrenById: (id: string, child: DesignValue) => void;
  // --------- delete -----------
  deleteFieldByChildren: (id: string) => void;
  updateChildrenById: (id: string, children: DesignValueProps['children']) => void;
  /** Outline 等场景：交换两个节点在设计树中的位置（各自父容器的 children 中下标互换） */
  swapOutlineNodes: (idA: string, idB: string) => void;
  /** 将设计画布重置为默认空根布局，并清除当前选中项 */
  resetDesignValue: () => void;
  /** 用完整设计树替换当前画布，并清除当前选中项 */
  loadDesignValue: (designValue: DesignValue) => void;
  /** 是否可撤销 */
  getCanUndo: () => boolean;
  /** 是否可重做 */
  getCanRedo: () => boolean;
  /** 撤销一步 */
  undo: () => void;
  /** 重做一步 */
  redo: () => void;
}

/**
 * DesignComponent
 */
export type DesignComponent = NamedExoticComponent<
  PropsWithoutRef<DesignProps> & RefAttributes<DesignHandler>
>;

/**
 * Form 渲染组件的属性
 */
export interface FormProps
  extends Pick<
    AntdFormProps,
    | 'name'
    | 'initialValues'
    | 'onFinish'
    | 'onFinishFailed'
    | 'onValuesChange'
    | 'onFieldsChange'
    | 'layout'
    | 'disabled'
    | 'colon'
    | 'labelAlign'
    | 'labelWrap'
    | 'preserve'
    | 'requiredMark'
    | 'scrollToFirstError'
    | 'size'
    | 'validateMessages'
    | 'validateTrigger'
    | 'variant'
  > {
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
export type FormComponent = NamedExoticComponent<
  PropsWithoutRef<FormProps> & RefAttributes<FormHandler>
>;
