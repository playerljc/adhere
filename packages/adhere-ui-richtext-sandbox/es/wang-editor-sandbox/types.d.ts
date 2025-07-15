import React, { NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { IDomEditor, IEditorConfig, SlateDescendant } from '@wangeditor/editor';
import * as wangEditor from '@wangeditor/editor';
/**
 * WangEditor沙箱处理器接口
 * 提供对WangEditor编辑器实例的操作方法
 */
export interface WangEditorSandboxHandler {
    /** 获取编辑器实例 */
    getEditor: () => IDomEditor | null;
    /** 获取WangEditor对象 */
    getWangEditor: () => typeof wangEditor;
    /** 获取iframe窗口对象 */
    getWindow: () => Window;
}
/**
 * 工具栏属性接口
 */
export interface ToolBarProps {
    /** 默认配置 */
    defaultConfig?: Partial<wangEditor.IToolbarConfig>;
    /** 模式 */
    mode?: string;
    /** 样式 */
    style?: React.CSSProperties;
    /** CSS类名 */
    className?: string;
}
/**
 * 编辑器属性接口
 */
export interface EditorProps {
    /** 默认内容 */
    defaultContent?: SlateDescendant[];
    /** 编辑器创建完成回调 */
    onCreated?: (editor: IDomEditor) => void;
    /** 默认HTML内容 */
    defaultHtml?: string;
    /** 默认配置 */
    defaultConfig: Partial<IEditorConfig>;
    /** 模式 */
    mode?: string;
    /** 样式 */
    style?: React.CSSProperties;
    /** CSS类名 */
    className?: string;
}
/**
 * WangEditor沙箱组件属性接口
 */
export interface WangEditorSandboxProps {
    /** 外层容器的CSS类名 */
    wrapClassName?: string;
    /** 外层容器的内联样式 */
    wrapStyle?: React.CSSProperties;
    /** WangEditor编辑器的内联样式字符串 */
    wangEditorStyle?: string;
    /** 编辑器内容值 */
    value?: string;
    /** 内容变化回调 */
    onChange?: (html: string) => void;
    /** 工具栏属性 */
    toolBarProps?: ToolBarProps;
    /** 编辑器属性 */
    editorProps?: EditorProps;
    /** 国际化配置 */
    locales?: {
        [key: string]: Record<string, string>;
    };
    /** 是否只读 */
    readOnly?: boolean;
    /** 语言设置 */
    lang?: 'zh_CN' | 'en_US' | 'pt_PT' | 'ar_EG';
    /** 是否显示边框 */
    bordered?: boolean;
    /** 高度调整值 */
    gap?: number;
    /** 注入的脚本URL列表 */
    injectionScripts?: string[];
    /** 注入的脚本字符串列表 */
    injectionScriptsByString?: string[];
    /** 注入的样式URL列表 */
    injectionStyles?: string[];
    /** 注入的样式字符串列表 */
    injectionStylesByString?: string[];
    /** 文本方向 */
    direction?: 'ltr' | 'rtl';
}
/**
 * WangEditor沙箱组件类型
 * 包含组件本身和静态方法
 */
export type WangEditorSandboxComponent = NamedExoticComponent<PropsWithoutRef<WangEditorSandboxProps> & RefAttributes<WangEditorSandboxHandler>> & {
    /** Antd表单验证器 */
    AntdFormRequireValidator: (editor: () => IDomEditor | null, tip: string) => {
        validator: (rule: any, value: any, callback: (error?: string) => void) => void;
    };
};
