import type {
  CSSProperties,
  NamedExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from 'react';

import type { ActionsProps } from './Actions';
import type { FieldProps, FieldType } from './Field';
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

  // 控件下的子项(一般是布局控件才有children)
  children?: DesignValue[];
};

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
  // getDispatch: () => Dispatch<DesignValueAction>;
  // --------- setters ---------
  setCurrentTerminal: (terminal: Terminal) => void;
  setActiveFieldId: (activeFieldId: string) => void;
  setFormItemProps: (id: string, props: FormItemProps) => void;
  setFieldProps: (id: string, props: FieldProps) => void;
  setStyleProps: (id: string, props: StyleProps) => void;
  setActionsProps: (id: string, props: ActionsProps) => void;
  // --------- add -----------
  addChildrenById: (id: string, child: DesignValue) => void;
  // --------- delete -----------
  deleteFieldByChildren: (id: string) => void;
}

/**
 * DesignComponent
 */
export type DesignComponent = NamedExoticComponent<
  PropsWithoutRef<DesignProps> & RefAttributes<DesignHandler>
>;
