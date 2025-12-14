import type { ReactNode } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import type { DesignValue, DesignValueProps } from './Design';
import type { FieldType } from './Field';

// Item的基础
export interface BaseItem {
  // 控件类型
  type: FieldType;
}

// 设计的Item
export interface DesignItem extends BaseItem {
  // 设置视图上desktop下的渲染
  renderDesign: (props: { value: DesignValue }) => DataItemRow | ReactNode;
  // 设置视图上的mobile下的渲染
  renderDesignToMobile: (props: { value: DesignValue }) => DataItemRow | ReactNode;

  // 控件主属性的渲染
  renderMainProperty: (defaultValue: DesignValueProps) => ReactNode;
  // 控件样式属性的渲染
  renderStyleProperty: (defaultValue: DesignValueProps) => ReactNode;

  // 是否有表单属性
  hasFormProperty: boolean;
  // 表单属性的渲染
  renderFormProperty?: (defaultValue: DesignValueProps) => ReactNode;

  // 是否有Actions属性
  hasActionsProperty: boolean;
  // 是否有Actions属性
  renderActionsProperty?: (defaultValue: DesignValueProps) => ReactNode;
}

// 表单的Item
export interface FormItem extends BaseItem {
  renderForm: (props: DesignValue) => ReactNode;
  renderFormToMobile: (props: DesignValue) => ReactNode;
}

// 视图的Item
export interface ViewItem extends BaseItem {
  renderView: (props: DesignValue) => ReactNode;
  renderViewToMobile: (props: DesignValue) => ReactNode;
}
