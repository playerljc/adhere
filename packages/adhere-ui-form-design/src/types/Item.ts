import type { ReactNode } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import type { DesignContextType, DesignValue, DesignValueProps } from './Design';
import type { FieldProps, FieldType } from './Field';

// Item的基础
export interface BaseItem {
  // 控件类型
  type: FieldType;
}

// 设计的Item
export interface DesignItem extends BaseItem {
  /***
      控件的渲染
  ***/
  // 设置视图上desktop下的渲染
  renderDesign: (props: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
  }) => DataItemRow | ReactNode;
  // 设置视图上的mobile下的渲染
  renderDesignToMobile: (props: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
  }) => DataItemRow | ReactNode;

  /***
      控件属性的设置
  ***/
  /***--- 控件表单属性 ---***/
  // 是否有表单属性
  hasFormProperty: boolean;
  // 表单属性的渲染
  renderFormProperty?: (defaultValue: DesignValueProps) => ReactNode;

  /***--- 控件自身属性 ---***/
  // 控件主属性的渲染
  renderMainProperty: (defaultValue: DesignValueProps) => ReactNode;

  /***--- 控件样式属性 ---***/
  // 控件样式属性的渲染
  renderStyleProperty: (defaultValue: DesignValueProps) => ReactNode;

  /***--- 控件的工具菜单，在设计视图中的激活状态下显示，特殊的组件是没有工具栏的，如FlexLayout就没有，所以是可选属性 ---***/
  // desktop的渲染
  renderActions?: (id: string) => ReactNode;
  // mobile的渲染
  renderActionsToMobile?: (id: string) => ReactNode;

  /***--- 控件事件属性 ---***/
  // 是否有Actions属性
  hasActionsProperty: boolean;
  // Actions属性的渲染
  renderActionsProperty?: (defaultValue: DesignValueProps) => ReactNode;

  /***--- 控件Flex属性 ---***/
  // 是否有Flex属性
  hasFlexProperty: boolean;
  // Flex属性的渲染
  renderFlexProperty?: (defaultValue: DesignValueProps) => ReactNode;

  /***
    以下是对容器布局reducer进行的处理
   ***/

  /***--- 布局容器添加一个组件 ---***/
  layoutReducerToAdd?: (
    state: DesignValue,
    action: { sourceDesignValue: DesignValue; targetId: string },
  ) => FieldProps;
  /***--- 布局容器删除一个组件 ---***/
  layoutReducerToRemove?: (state: DesignValue, action: { id: string }) => FieldProps;

  /***
    组件designValue的默认值
   ***/
  defaultValue?: DesignValueProps;
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
