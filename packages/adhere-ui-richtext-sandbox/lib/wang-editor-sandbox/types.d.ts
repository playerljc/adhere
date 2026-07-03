import React, { NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { IDomEditor, IEditorConfig, SlateDescendant } from '@wangeditor/editor';
import * as wangEditor from '@wangeditor/editor';
export interface Theme {
    textareaBgColor?: string;
    textareaColor?: string;
    textareaBorderColor?: string;
    textareaSlightBorderColor?: string;
    textareaSlightColor?: string;
    textareaSlightBgColor?: string;
    textareaSelectedBorderColor?: string;
    textareaHandlerBgColor?: string;
    toolbarColor?: string;
    toolbarBgColor?: string;
    toolbarActiveColor?: string;
    toolbarActiveBgColor?: string;
    toolbarDisabledColor?: string;
    toolbarBorderColor?: string;
    modalButtonBgColor?: string;
    modalButtonBorderColor?: string;
}
/**
 * WangEditorSandboxHandler
 */
export interface WangEditorSandboxHandler {
    getEditor: () => IDomEditor | null;
    getWangEditor: () => any;
    getWindow: () => Window;
    getDocument: () => Document;
    setTheme: (theme: Theme) => void;
}
export interface ToolBarProps {
    defaultConfig?: Partial<wangEditor.IToolbarConfig>;
    mode?: string;
    style?: React.CSSProperties;
    className?: string;
}
export interface EditorProps {
    defaultContent?: SlateDescendant[];
    onCreated?: (editor: IDomEditor) => void;
    defaultHtml?: string;
    defaultConfig: Partial<IEditorConfig>;
    mode?: string;
    style?: React.CSSProperties;
    className?: string;
}
/**
 * WangEditorSandboxProps
 */
export interface WangEditorSandboxProps {
    wrapClassName?: string;
    wrapStyle?: React.CSSProperties;
    wangEditorStyle?: string;
    value?: string;
    onChange?: (html: string) => void;
    toolBarProps?: ToolBarProps;
    editorProps?: EditorProps;
    locales?: {
        [key: string]: Record<string, string>;
    };
    readOnly?: boolean;
    lang?: 'zh_CN' | 'en_US' | 'pt_PT' | 'ar_EG';
    bordered?: boolean;
    gap?: number;
    injectionScripts?: string[];
    injectionScriptsByString?: string[];
    injectionStyles?: string[];
    injectionStylesByString?: string[];
    direction?: 'ltr' | 'rtl';
    onRender: () => void;
}
export type WangEditorSandboxComponent = NamedExoticComponent<PropsWithoutRef<WangEditorSandboxProps> & RefAttributes<WangEditorSandboxHandler>> & {
    AntdFormRequireValidator: (editor: any, tip: any) => any;
};
