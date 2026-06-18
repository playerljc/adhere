import React from 'react';
import type { EditorProps, OnMount } from '@monaco-editor/react';
export interface MonacoEditorFormItemProps extends Omit<EditorProps, 'value' | 'onChange'> {
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
export interface MonacoEditorFormItemHandle {
    editor: Parameters<OnMount>[0] | null;
}
export declare const EmptyValidator: (tip: string) => {
    validator: (_: any, value: string, callback: (error?: any) => void) => void;
};
declare const _default: React.NamedExoticComponent<MonacoEditorFormItemProps & React.RefAttributes<MonacoEditorFormItemHandle>>;
export default _default;
