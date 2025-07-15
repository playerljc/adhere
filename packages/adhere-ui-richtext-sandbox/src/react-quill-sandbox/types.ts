import Quill, { DeltaStatic, Sources, StringMap } from 'quill';
import React, { NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { Range, UnprivilegedEditor, Value } from 'react-quill';

/**
 * ReactQuill沙箱处理器接口
 * 提供对ReactQuill编辑器实例的操作方法
 */
export interface ReactQuillSandboxHandler {
  /** 使编辑器获得焦点 */
  focus: () => void;
  /** 使编辑器失去焦点 */
  blur: () => void;
  /** 获取Quill编辑器实例 */
  getEditor: () => Quill;
  /** 获取Quill类（用于创建新实例） */
  getQuill: () => Quill;
}

/**
 * ReactQuill组件属性接口
 * 继承自react-quill的原始属性
 */
export interface ReactQuillProps {
  /** 工具栏的边界元素 */
  bounds?: string | HTMLElement;
  /** 子元素 */
  children?: React.ReactElement<any>;
  /** CSS类名 */
  className?: string;
  /** 默认值 */
  defaultValue?: Value;
  /** 允许的格式列表 */
  formats?: string[];
  /** 元素ID */
  id?: string;
  /** Quill模块配置 */
  modules?: StringMap;
  /** 内容变化回调 */
  onChange?(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void;
  /** 选择变化回调 */
  onChangeSelection?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
  /** 获得焦点回调 */
  onFocus?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
  /** 失去焦点回调 */
  onBlur?(previousSelection: Range, source: Sources, editor: UnprivilegedEditor): void;
  /** 键盘按下事件 */
  onKeyDown?: React.EventHandler<any>;
  /** 键盘按下事件 */
  onKeyPress?: React.EventHandler<any>;
  /** 键盘释放事件 */
  onKeyUp?: React.EventHandler<any>;
  /** 占位符文本 */
  placeholder?: string;
  /** 是否保留空白字符 */
  preserveWhitespace?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 滚动容器 */
  scrollingContainer?: string | HTMLElement;
  /** 内联样式 */
  style?: React.CSSProperties;
  /** Tab索引 */
  tabIndex?: number;
  /** 主题名称 */
  theme?: string;
  /** 当前值 */
  value?: Value;
}

/**
 * ReactQuill沙箱组件属性接口
 * 扩展了ReactQuillProps，添加了沙箱特有的属性
 */
export interface ReactQuillSandboxProps extends ReactQuillProps {
  /** 外层容器的CSS类名 */
  wrapClassName?: string;
  /** 外层容器的内联样式 */
  wrapStyle?: React.CSSProperties;
  /** Quill编辑器的内联样式字符串 */
  quillStyle?: string;
}

/**
 * ReactQuill沙箱组件类型
 * 包含组件本身和静态方法
 */
export type ReactQuillSandboxComponent = NamedExoticComponent<
  PropsWithoutRef<ReactQuillSandboxProps> & RefAttributes<ReactQuillSandboxHandler>
> & {
  /** Antd表单验证器 */
  AntdFormRequireValidator: (editor: () => Quill | undefined, tip: string) => {
    validator: (rule: any, value: any, callback: (error?: string) => void) => void;
  };
};
