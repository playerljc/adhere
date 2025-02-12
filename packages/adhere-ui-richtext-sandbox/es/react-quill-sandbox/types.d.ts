import Quill, { DeltaStatic, Sources, StringMap } from 'quill';
import React, { NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { Range, UnprivilegedEditor, Value } from 'react-quill';
/**
 * ReactQuillSandboxHandler
 */
export interface ReactQuillSandboxHandler {
    focus: () => void;
    blur: () => void;
    getEditor: () => Quill;
    getQuill: () => Quill;
}
/**
 * ReactQuillProps
 */
export interface ReactQuillProps {
    bounds?: string | HTMLElement;
    children?: React.ReactElement<any>;
    className?: string;
    defaultValue?: Value;
    formats?: string[];
    id?: string;
    modules?: StringMap;
    onChange?(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void;
    onChangeSelection?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
    onFocus?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
    onBlur?(previousSelection: Range, source: Sources, editor: UnprivilegedEditor): void;
    onKeyDown?: React.EventHandler<any>;
    onKeyPress?: React.EventHandler<any>;
    onKeyUp?: React.EventHandler<any>;
    placeholder?: string;
    preserveWhitespace?: boolean;
    readOnly?: boolean;
    scrollingContainer?: string | HTMLElement;
    style?: React.CSSProperties;
    tabIndex?: number;
    theme?: string;
    value?: Value;
}
/**
 * ReactQuillSandboxProps
 */
export interface ReactQuillSandboxProps extends ReactQuillProps {
    wrapClassName?: string;
    wrapStyle?: React.CSSProperties;
    quillStyle?: string;
}
export type ReactQuillSandboxComponent = NamedExoticComponent<PropsWithoutRef<ReactQuillSandboxProps> & RefAttributes<ReactQuillSandboxHandler>> & {
    AntdFormRequireValidator: (editor: any, tip: any) => any;
};
