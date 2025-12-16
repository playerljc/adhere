import React from 'react';
import type { EditorProps } from '@monaco-editor/react';
export interface MonacoEditorFormItemProps extends Omit<EditorProps, 'value' | 'onChange'> {
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare const EmptyValidator: (tip: string) => {
    validator: (_: any, value: string, callback: (error?: any) => void) => void;
};
declare const _default: React.NamedExoticComponent<MonacoEditorFormItemProps>;
export default _default;
