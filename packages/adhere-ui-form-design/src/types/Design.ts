import type {
  CSSProperties,
  NamedExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from 'react';

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

// Toolbar
export type ToolbarProps = {};

// 设计值属性
export type DesignValueProps = {
  // FormItem的props
  formItemProps?: FormItemProps;

  // 控件的props
  fieldProps: FieldProps;

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
}

export interface DesignHandler {}

export interface DesignContextType {
  // --------- getters ---------
  getDesignValue: () => DesignValue | undefined;
  getTerminal: () => Terminal;
  getActiveFieldId: () => string | null | undefined;
  getActiveDesignFieldValue: () => DesignValue | null;
  getItems: () => DesignItem[];
  getOverlayCursor: () => CSSProperties['cursor'];
  getActiveToolItemData: () => DraggableToolItemProps['data'] | null;
  getToolBox: () => ToolBoxOption;
  // getDispatch: () => Dispatch<DesignValueAction>;
  // --------- setters ---------
  setCurrentTerminal: (terminal: Terminal) => void;
  setActiveFieldId: (activeFieldId: string) => void;
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
}

/**
 * DesignComponent
 */
export type DesignComponent = NamedExoticComponent<
  PropsWithoutRef<DesignProps> & RefAttributes<DesignHandler>
>;
