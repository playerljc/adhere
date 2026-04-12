import type { ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignContextType, DesignValue, DesignValueProps } from './Design';
import type { FieldType } from './Field';
/**
 * Item的基础接口
 */
export interface BaseItem {
    /**
     * 控件类型
     */
    type: FieldType;
}
/**
 * 设计模式下的Item接口，定义了控件在设计视图中的行为、属性配置及布局逻辑
 */
export interface DesignItem extends BaseItem {
    /**
     * 控件的渲染相关属性
     */
    /**
     * 设置视图在桌面端（Desktop）下的渲染内容
     * @param props - 渲染所需的参数对象
     * @param props.parentId - 父级组件ID，可选
     * @param props.value - 当前设计值
     * @param props.context - 设计上下文信息
     * @returns 返回数据行对象或React节点
     */
    renderDesign: (props: {
        parentId?: string;
        value: DesignValue;
        context: DesignContextType;
    }) => DataItemRow | ReactNode;
    /**
     * 设置视图在移动端（Mobile）下的渲染内容
     * @param props - 渲染所需的参数对象
     * @param props.parentId - 父级组件ID，可选
     * @param props.value - 当前设计值
     * @param props.context - 设计上下文信息
     * @returns 返回数据行对象或React节点
     */
    renderDesignToMobile: (props: {
        parentId?: string;
        value: DesignValue;
        context: DesignContextType;
    }) => DataItemRow | ReactNode;
    /**
     * 控件属性的设置相关属性
     */
    /**
     * --- 控件表单属性 ---
     */
    /**
     * 标识该控件是否具有表单属性配置
     */
    hasFormProperty: boolean;
    /**
     * 渲染表单属性配置面板
     * @param defaultValue - 默认的设计值属性
     * @returns 返回React节点，通常为表单配置组件
     */
    renderFormProperty?: (defaultValue: DesignValueProps) => ReactNode;
    /**
     * --- 控件自身属性 ---
     */
    /**
     * 渲染控件的主要属性配置面板
     * @param defaultValue - 默认的设计值属性
     * @returns 返回React节点，通常为主要配置组件
     */
    renderMainProperty: (defaultValue: DesignValueProps) => ReactNode;
    /**
     * --- 控件样式属性 ---
     */
    /**
     * 渲染控件的样式属性配置面板
     * @param defaultValue - 默认的设计值属性
     * @returns 返回React节点，通常为样式配置组件
     */
    renderStyleProperty: (defaultValue: DesignValueProps) => ReactNode;
    /**
     * --- 控件的工具菜单 ---
     * 在设计视图中的激活状态下显示。特殊的组件可能没有工具栏（如FlexLayout），因此为可选属性
     */
    /**
     * 渲染桌面端（Desktop）下的工具菜单操作项
     * @param id - 当前组件的ID
     * @returns 返回React节点，通常为操作按钮组
     */
    renderActions?: (id: string) => ReactNode;
    /**
     * 渲染移动端（Mobile）下的工具菜单操作项
     * @param id - 当前组件的ID
     * @returns 返回React节点，通常为操作按钮组
     */
    renderActionsToMobile?: (id: string) => ReactNode;
    /**
     * --- 控件事件属性 ---
     */
    /**
     * 标识该控件是否具有事件（Actions）属性配置
     */
    hasActionsProperty: boolean;
    /**
     * 渲染事件属性配置面板
     * @param defaultValue - 默认的设计值属性
     * @returns 返回React节点，通常为事件配置组件
     */
    renderActionsProperty?: (defaultValue: DesignValueProps) => ReactNode;
    /**
     * --- 控件Flex属性 ---
     */
    /**
     * 标识该控件是否具有Flex布局属性配置
     */
    hasFlexProperty: boolean;
    /**
     * 渲染Flex属性配置面板
     * @param defaultValue - 默认的设计值属性
     * @returns 返回React节点，通常为Flex配置组件
     */
    renderFlexProperty?: (defaultValue: DesignValueProps) => ReactNode;
    /**
     * 以下是对容器布局Reducer进行的处理相关属性
     */
    /**
     * --- 布局容器添加一个组件 ---
     * 定义当向布局容器中添加子组件时的状态更新逻辑
     * @param state - 当前的设计值状态
     * @param action - 动作对象，包含源设计值和目标ID
     * @param action.sourceDesignValue - 被拖拽/添加的源设计值
     * @param action.targetId - 目标容器的ID
     * @returns 更新后的子组件列表
     */
    layoutReducerToAdd?: (state: DesignValue, action: {
        sourceDesignValue: DesignValue;
        targetId: string;
    }) => NonNullable<DesignValueProps['children']>;
    /**
     * --- 布局容器删除一个组件 ---
     * 定义当从布局容器中删除子组件时的状态更新逻辑
     * @param state - 当前的设计值状态
     * @param action - 动作对象，包含源设计值和目标ID
     * @param action.sourceDesignValue - 被删除的源设计值
     * @param action.targetId - 目标容器的ID
     * @returns 更新后的子组件列表
     */
    layoutReducerToRemove?: (state: DesignValue, action: {
        sourceDesignValue: DesignValue;
        targetId: string;
    }) => NonNullable<DesignValueProps['children']>;
    /**
     * isDrop
     * @description 判断是否允许放置拖拽对象
     * @param {string} originType - 拖拽对象的类型
     * @returns {boolean} 如果允许放置则返回true，否则返回false
     */
    isDrop?: (originType: string) => boolean;
    /**
     * 组件designValue的默认值配置
     */
    defaultValue?: DesignValueProps;
}
/**
 * 表单模式下的Item接口，定义了控件在表单预览/运行时的渲染行为
 */
export interface FormItem extends BaseItem {
    /**
     * 渲染桌面端（Desktop）下的表单控件
     * @param props - 设计值属性
     * @returns 返回React节点
     */
    renderForm: (props: DesignValue) => ReactNode;
    /**
     * 渲染移动端（Mobile）下的表单控件
     * @param props - 设计值属性
     * @returns 返回React节点
     */
    renderFormToMobile: (props: DesignValue) => ReactNode;
}
/**
 * 视图模式下的Item接口，定义了控件在纯视图展示时的渲染行为
 */
export interface ViewItem extends BaseItem {
    /**
     * 渲染桌面端（Desktop）下的视图控件
     * @param props - 设计值属性
     * @returns 返回React节点
     */
    renderView: (props: DesignValue) => ReactNode;
    /**
     * 渲染移动端（Mobile）下的视图控件
     * @param props - 设计值属性
     * @returns 返回React节点
     */
    renderViewToMobile: (props: DesignValue) => ReactNode;
}
