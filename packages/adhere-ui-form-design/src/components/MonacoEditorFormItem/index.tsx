import classNames from 'classnames';
import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';

import { Editor } from '@monaco-editor/react';
import type { EditorProps, OnMount } from '@monaco-editor/react';

import { SELECT_PREFIX } from '../../constant';

export interface MonacoEditorFormItemProps extends Omit<EditorProps, 'value' | 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const selectorPrefix = `${SELECT_PREFIX}-components-monaco-editor-form-item`;

const MonacoEditorFormItem = forwardRef<HTMLDivElement, MonacoEditorFormItemProps>(
  ({ value, onChange, className, style, onMount, ...rest }, ref) => {
    const editorRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({ editor: editorRef.current } as any));

    const handleMount: OnMount = (editor, monaco) => {
      editorRef.current = editor;
      onMount?.(editor, monaco);
    };

    return (
      <div ref={ref} className={classNames(selectorPrefix, className)} style={style}>
        <Editor
          {...rest}
          value={value}
          onChange={(v) => onChange?.(v ?? '')}
          onMount={handleMount}
        />
      </div>
    );
  },
);

MonacoEditorFormItem.displayName = 'MonacoEditorFormItem';

export const EmptyValidator = (tip: string) => ({
  validator: (_: any, value: string, callback: (error?: any) => void) => {
    if (value == null || /^\s*$/.test(String(value))) {
      callback(tip);
    } else {
      callback();
    }
  },
});

export default memo<MonacoEditorFormItemProps>(MonacoEditorFormItem);
