import { constrainedEditor } from 'constrained-editor-plugin';
import React, { forwardRef, memo, useMemo } from 'react';

import type { OnMount } from '@monaco-editor/react';

import MonacoEditorFormItem, {
  type MonacoEditorFormItemHandle,
  type MonacoEditorFormItemProps,
} from '../MonacoEditorFormItem';

const MonacoCSSEditorFormItem = forwardRef<MonacoEditorFormItemHandle, MonacoEditorFormItemProps>(
  ({ onMount, value, ...rest }, ref) => {
    const handleMount: OnMount = (editor, monaco) => {
      const restrictions: any[] = [];
      const constrainedInstance = constrainedEditor(monaco);
      const model = editor.getModel();
      constrainedInstance.initializeIn(editor);
      restrictions.push({
        range: [2, 1, 2, 1],
        allowMultiline: true,
        label: 'funcDefinition',
      });
      constrainedInstance.addRestrictionsTo(model, restrictions);
    };

    const targetValue = useMemo<string>(() => {
      if (!value) {
        return `element.style{\r\n
}\r\n`;
      }

      return value;
    }, [value]);

    return <MonacoEditorFormItem ref={ref} {...rest} value={targetValue} onMount={handleMount} />;
  },
);

MonacoCSSEditorFormItem.displayName = 'MonacoCSSEditorFormItem';

export default memo<MonacoEditorFormItemProps>(MonacoCSSEditorFormItem);
