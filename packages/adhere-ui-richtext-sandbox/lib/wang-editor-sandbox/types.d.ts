import React, { NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { IDomEditor, IEditorConfig, SlateDescendant } from '@wangeditor/editor';
import * as wangEditor from '@wangeditor/editor';
/**
 * WangEditorSandboxHandler
 */
export interface WangEditorSandboxHandler {
    getEditor: () => IDomEditor | null;
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
    onChange?: (editor: IDomEditor) => void;
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
}
export type WangEditorSandboxComponent = NamedExoticComponent<PropsWithoutRef<WangEditorSandboxProps> & RefAttributes<WangEditorSandboxHandler>> & {
    AntdFormRequireValidator: (editor: any, tip: any) => any;
};
