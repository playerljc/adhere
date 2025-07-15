import React, { ReactNode } from 'react';
import type { IConfig } from './types';
/**
 * Popup弹窗类
 * @class Popup
 * @description 管理弹窗的显示、隐藏、销毁等生命周期
 */
export declare class Popup {
    /** 弹窗唯一标识 */
    private readonly id;
    /** 弹窗配置 */
    private readonly config;
    /** 是否显示状态 */
    private isShow;
    /** 容器元素 */
    private el;
    /** 弹窗元素 */
    private popupEl;
    /** React根节点 */
    private root;
    /** 弹窗处理器映射 */
    private popupHandlers;
    /**
     * 构造函数
     * @param config - 弹窗配置
     */
    constructor(config: IConfig);
    /**
     * 创建遮罩层
     * @private
     */
    private createMask;
    /**
     * 渲染弹窗内容
     * @private
     */
    private render;
    /**
     * 触发回调函数
     * @param hookName - 回调名称
     * @private
     */
    private trigger;
    /**
     * 更新弹窗内容
     * @param newChildren - 新的子元素
     */
    update(newChildren?: ReactNode): void;
    /**
     * 显示弹窗
     * @returns 是否成功显示
     */
    show(): boolean;
    /**
     * 显示弹窗并关闭前一个弹窗
     * @returns 是否成功显示
     */
    showClosePrePopup(): boolean;
    /**
     * 关闭弹窗
     * @returns 是否成功关闭
     */
    close(): boolean;
    /**
     * 移除模态框类名
     * @private
     */
    private removeModalClasses;
    /**
     * 销毁弹窗
     * @returns 是否成功销毁
     */
    destroy(): boolean;
    /**
     * 检查是否已销毁
     * @returns 是否已销毁
     */
    isDestroy(): boolean;
    /**
     * 获取弹窗ID
     * @returns 弹窗ID
     */
    getId(): string;
    /**
     * 过渡动画结束回调
     * @private
     */
    private onInnerElTransitionend;
}
/**
 * Popup工厂类
 * @description 提供弹窗的创建、显示、关闭等静态方法
 */
declare const PopupFactory: {
    /**
     * 设置渲染包装器
     * @param _renderToWrapper - 渲染包装器函数
     */
    setRenderToWrapper(_renderToWrapper: (children: () => ReactNode) => ReactNode): void;
    /**
     * 创建弹窗实例
     * @param config - 弹窗配置
     * @returns 弹窗实例
     */
    create(config: IConfig): Popup;
    /**
     * 显示弹窗
     * @param popup - 弹窗实例
     * @returns 是否成功显示
     */
    show(popup: Popup): boolean;
    /**
     * 显示弹窗并关闭前一个
     * @param popup - 弹窗实例
     * @returns 是否成功显示
     */
    showClosePrePopup(popup: Popup): boolean;
    /**
     * 关闭弹窗
     * @param popup - 弹窗实例
     * @returns 是否成功关闭
     */
    close(popup: Popup): boolean;
    /**
     * 关闭所有弹窗
     * @returns 是否全部成功关闭
     */
    closeAll(): boolean;
    /**
     * 销毁弹窗
     * @param popup - 弹窗实例
     * @returns 是否成功销毁
     */
    destroy(popup: Popup): boolean;
    /**
     * 获取容器元素
     * @returns 容器元素
     */
    getEl(): HTMLElement;
    /**
     * 设置容器元素
     * @param containerEl - 容器元素
     */
    setEl(containerEl: HTMLElement): void;
    /** Trigger组件 */
    Trigger: React.ForwardRefExoticComponent<import("./types").TriggerProps & React.RefAttributes<import("./types").TriggerHandle>>;
    /** TriggerPrompt组件 */
    TriggerPrompt: React.ForwardRefExoticComponent<Omit<import("./types").TriggerProps, "actions"> & {
        isShowCloseAction?: boolean;
        onSubmit?: () => Promise<any>;
        okText?: string;
    } & React.RefAttributes<import("./types").TriggerPromptHandle>>;
};
export default PopupFactory;
