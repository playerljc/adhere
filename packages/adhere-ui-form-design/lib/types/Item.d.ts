import type { ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignContextType, DesignValue, DesignValueProps } from './Design';
import type { FieldProps, FieldType } from './Field';
export interface BaseItem {
    type: FieldType;
}
export interface DesignItem extends BaseItem {
    /***
        控件的渲染
    ***/
    renderDesign: (props: {
        parentId?: string;
        value: DesignValue;
        context: DesignContextType;
    }) => DataItemRow | ReactNode;
    renderDesignToMobile: (props: {
        parentId?: string;
        value: DesignValue;
        context: DesignContextType;
    }) => DataItemRow | ReactNode;
    /***
        控件属性的设置
    ***/
    /***--- 控件表单属性 ---***/
    hasFormProperty: boolean;
    renderFormProperty?: (defaultValue: DesignValueProps) => ReactNode;
    /***--- 控件自身属性 ---***/
    renderMainProperty: (defaultValue: DesignValueProps) => ReactNode;
    /***--- 控件样式属性 ---***/
    renderStyleProperty: (defaultValue: DesignValueProps) => ReactNode;
    /***--- 控件的工具菜单，在设计视图中的激活状态下显示，特殊的组件是没有工具栏的，如FlowLayout就没有，所以是可选属性 ---***/
    renderActions?: (id: string) => ReactNode;
    renderActionsToMobile?: (id: string) => ReactNode;
    /***--- 控件事件属性 ---***/
    hasActionsProperty: boolean;
    renderActionsProperty?: (defaultValue: DesignValueProps) => ReactNode;
    /***
      以下是对容器布局reducer进行的处理
     ***/
    /***--- 布局容器添加一个组件 ---***/
    layoutReducerToAdd?: (state: DesignValue, action: {
        sourceDesignValue: DesignValue;
        targetId: string;
    }) => FieldProps;
    /***--- 布局容器删除一个组件 ---***/
    layoutReducerToRemove?: (state: DesignValue, action: {
        id: string;
    }) => FieldProps;
    /***
      组件designValue的默认值
     ***/
    defaultValue?: DesignValueProps;
}
export interface FormItem extends BaseItem {
    renderForm: (props: DesignValue) => ReactNode;
    renderFormToMobile: (props: DesignValue) => ReactNode;
}
export interface ViewItem extends BaseItem {
    renderView: (props: DesignValue) => ReactNode;
    renderViewToMobile: (props: DesignValue) => ReactNode;
}
