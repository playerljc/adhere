import classNames from 'classnames';
import merge from 'lodash.merge';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Editor } from '@monaco-editor/react';
import type { EditorProps, OnMount } from '@monaco-editor/react';

import { SELECT_PREFIX } from '../../constant';

export interface MonacoEditorFormItemProps extends Omit<EditorProps, 'value' | 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface MonacoEditorFormItemHandle {
  editor: Parameters<OnMount>[0] | null;
}

const selectorPrefix = `${SELECT_PREFIX}-components-monaco-editor-form-item`;

const MonacoEditorFormItem = forwardRef<MonacoEditorFormItemHandle, MonacoEditorFormItemProps>(
  ({ value, onChange, className, style, onMount, options, ...rest }, ref) => {
    const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
    const lastEmittedValueRef = useRef<string | undefined>(undefined);
    const isFirstSyncRef = useRef(true);
    const [internalValue, setInternalValue] = useState<string>(() => value ?? '');
    // 仅在「非首次」外部重新载入 value 时递增，使 Editor 通过 key remount，避免受控/插件导致无法编辑
    const [mountKey, setMountKey] = useState(0);

    useImperativeHandle(ref, () => ({ editor: editorRef.current }));

    useEffect(() => {
      const next = value ?? '';
      if (next !== lastEmittedValueRef.current) {
        lastEmittedValueRef.current = next;
        setInternalValue(next);
        if (!isFirstSyncRef.current) setMountKey((k) => k + 1);
        else isFirstSyncRef.current = false;
      }
    }, [value]);

    const handleChange = (v: string | undefined) => {
      const next = v ?? '';
      lastEmittedValueRef.current = next;
      setInternalValue(next);
      onChange?.(next);
    };

    const handleMount: OnMount = (editor, monaco) => {
      editorRef.current = editor;
      onMount?.(editor, monaco);
    };

    const targetOptions = useMemo(() => {
      return merge(
        {
          // 核心配置：将悬浮窗设置为 Fixed 布局，防止被父容器 overflow:hidden 遮挡
          fixedOverflowWidgets: true,
          // 关键辅助：允许提示窗口超出编辑器的物理边界显示
          suggest: {
            showMethods: true,
            showFunctions: true,
            // 确保提示框不会被编辑器容器限制
            container: undefined,
          },
          lineNumbers: 'off', // 1. 关闭行号
          glyphMargin: false, // 2. 关闭左侧图标边距（断点、错误图标区域）
          folding: false, // 3. 关闭代码折叠功能（隐藏折叠箭头）
          lineDecorationsWidth: 0, // 4. 将行修饰宽度设为 0（彻底移除左侧留白）
          lineNumbersMinChars: 0, // 5. 设置行号最小字符数为 0
          hideCursorInOverviewRuler: true, // 可选：隐藏概览标尺中的光标标识
          scrollBeyondLastLine: false,
          scrollbar: {
            vertical: 'hidden', // 可选：如果你也不想要右侧滚动条
          },
          minimap: { enabled: false }, // 建议：通常去掉行号时也会关闭右侧小地图
          padding: {
            top: 0,
            bottom: 0,
          },
          fontSize: 16,
        },
        options ?? {},
      );
    }, [options]);

    return (
      <div className={classNames(selectorPrefix, className)} style={style}>
        <Editor
          key={mountKey}
          height={300}
          theme="light" // 可选: 'light' 或 'vs-dark'
          {...rest}
          options={targetOptions}
          value={internalValue}
          onChange={handleChange}
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

export default memo<
  PropsWithoutRef<MonacoEditorFormItemProps> & RefAttributes<MonacoEditorFormItemHandle>
>(MonacoEditorFormItem);
