import React from 'react';

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
  onChange: (editor: IDomEditor) => void;
  toolBarProps?: ToolBarProps;
  editorProps?: EditorProps;
  readOnly?: boolean;
  lang?: 'zh_CN' | 'en_US';
  bordered?: boolean;
}
