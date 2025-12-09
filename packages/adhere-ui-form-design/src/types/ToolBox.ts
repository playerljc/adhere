import type { ReactNode } from 'react';

import type { IntlLanguage } from '@baifendian/adhere-ui-configprovider/es/types';

import type { FieldType } from './Field';
import type { Styles } from './types';

// 工具箱项
export type ToolBoxItem = {
  // 控件类型
  type: FieldType;
  // 工具箱项的icon
  icon?: ReactNode;
  // 工具箱项文本
  label?: string | ReactNode;
  // 查询的文本
  searchLabel?: string;
  // 工具箱项提示
  tooltip?: string;
  // 工具是否可用
  disabled?: boolean;
  // 自定义工具项的显示
  render?: (lang: IntlLanguage) => ReactNode;
};

// 工具箱分组
export type ToolBoxGroup = {
  // 分组的id
  id: string;
  // 分组名称
  label: string | ReactNode | ((lang: IntlLanguage) => ReactNode);
  // 分组名称的提示
  tooltip?: string | ((lang: IntlLanguage) => string);
  // 是否禁用
  disabled?: boolean;
  // 列数
  columns?: number;
  // 工具项
  items: ToolBoxItem[];
};

// ToolboxProps
export type ToolboxProps = {
  toolBox: ToolBoxOption;
};

// DraggableToolItemProps
export type DraggableToolItemProps = {
  id: FieldType;
  disabled?: boolean;
  children: ReactNode;
  data?: ToolBoxItem;
};

// ToolboxItemDragOverlayProps
export type ToolboxItemDragOverlayProps = {
  // activeToolItemData: DraggableToolItemProps['data'];
  // cursor: string;
};

// ToolboxItemProps
export type ToolboxItemProps = Styles & ToolBoxItem;

// 工具箱配置
export type ToolBoxOption = ToolBoxGroup[];
