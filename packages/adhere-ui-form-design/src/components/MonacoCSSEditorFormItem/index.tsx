import { constrainedEditor } from 'constrained-editor-plugin';
import React, { forwardRef, memo, useEffect, useMemo, useRef } from 'react';

import type { OnMount } from '@monaco-editor/react';

import MonacoEditorFormItem, {
  type MonacoEditorFormItemHandle,
  type MonacoEditorFormItemProps,
} from '../MonacoEditorFormItem';

const FIRST_LINE_PREFIX = 'element.style{';
const LAST_LINE_SUFFIX = '}';

function isAllowedContent(fullText: string): boolean {
  const lines = fullText.split(/\r?\n/);
  if (lines.length < 2) return false;
  const first = (lines[0] ?? '').trimEnd();
  let last = '';
  for (let i = lines.length - 1; i >= 0; i--) {
    const t = (lines[i] ?? '').trimEnd();
    if (t !== '') {
      last = t;
      break;
    }
  }
  return first === FIRST_LINE_PREFIX && last === LAST_LINE_SUFFIX;
}

function applyRestrictions(
  constrainedInstance: ReturnType<typeof constrainedEditor>,
  model: NonNullable<ReturnType<Parameters<OnMount>[0]['getModel']>>,
) {
  const lineCount = model.getLineCount();
  if (lineCount < 2) return;
  const endLine = lineCount >= 3 ? lineCount - 1 : 2;
  const endColumn = lineCount >= 3 ? model.getLineContent(endLine).length + 1 : 1;
  const restrictions: Array<{ range: number[]; allowMultiline: boolean; label: string }> = [
    { range: [2, 1, endLine, endColumn], allowMultiline: true, label: 'funcDefinition' },
  ];
  constrainedInstance.addRestrictionsTo(model, restrictions);
}

const MonacoCSSEditorFormItem = forwardRef<MonacoEditorFormItemHandle, MonacoEditorFormItemProps>(
  ({ onMount, value, ...rest }, ref) => {
    const mountStateRef = useRef<{
      constrainedInstance: ReturnType<typeof constrainedEditor>;
      monaco: Parameters<OnMount>[1];
    } | null>(null);
    const lastValidValueRef = useRef<string>('');

    const handleMount: OnMount = (editor, monaco) => {
      const model = editor.getModel();
      if (!model) return;
      const constrainedInstance = constrainedEditor(monaco);
      constrainedInstance.initializeIn(editor);
      mountStateRef.current = { constrainedInstance, monaco };
      lastValidValueRef.current = model.getValue();
      applyRestrictions(constrainedInstance, model);

      // 兜底：插件可能未生效时，监听内容变化，若首行/末行被改则回滚
      const disposable = model.onDidChangeContent(() => {
        const current = model.getValue();
        if (!isAllowedContent(current)) {
          model.setValue(lastValidValueRef.current);
        } else {
          lastValidValueRef.current = current;
        }
      });
      editor.onDidDispose(() => disposable.dispose());
      onMount?.(editor, monaco);
    };

    const targetValue = useMemo<string>(() => {
      if (!value) {
        return `element.style{\r\n\r\n}\r\n`;
      }
      return value;
    }, [value]);

    useEffect(() => {
      lastValidValueRef.current = targetValue;
    }, [targetValue]);

    useEffect(() => {
      const refObj = ref && typeof ref === 'object' && 'current' in ref ? ref : null;
      const editor = refObj?.current?.editor;
      const state = mountStateRef.current;
      if (!editor || !state) return;
      const model = editor.getModel();
      if (!model) return;
      lastValidValueRef.current = model.getValue();
      const id = setTimeout(() => applyRestrictions(state.constrainedInstance, model), 0);
      return () => clearTimeout(id);
    }, [targetValue, ref]);

    return <MonacoEditorFormItem ref={ref} {...rest} value={targetValue} onMount={handleMount} />;
  },
);

MonacoCSSEditorFormItem.displayName = 'MonacoCSSEditorFormItem';

export default memo<MonacoEditorFormItemProps>(MonacoCSSEditorFormItem);
