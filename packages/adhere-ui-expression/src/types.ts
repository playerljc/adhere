import { FC, NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { CSSProperties, KeyboardEvent, ClipboardEvent, FocusEvent, CompositionEvent } from 'react';

import type { EllipsisProps } from '@baifendian/adhere-ui-ellipsis/es/types';

import { ElasticSearch, Math, Sql } from './operators';

/**
 * 运算符类型枚举
 * - unary: 单目运算符
 * - binary: 双目运算符  
 * - ternary: 三目运算符
 * - brackets: 括号
 */
export type OperatorType = 'unary' | 'binary' | 'ternary' | 'brackets';

/**
 * 运算符项配置接口
 */
export interface OperatorItem {
  /** 运算符显示的内容 */
  label: string;
  /** 运算符的值 */
  value: string;
  /** 运算符的类型 */
  type: OperatorType;
}

/**
 * 运算符配置数组类型
 */
export type Operators = Array<OperatorItem>;

/**
 * 快速提示数据项接口
 */
export interface QuickTipItem {
  /** 显示标签 */
  label: string;
  /** 值 */
  value: string;
  /** 其他可选属性 */
  [key: string]: any;
}

/**
 * 解析回调函数参数接口
 */
export interface ParseCallbackParams {
  /** 节点类型：1-元素节点，3-文本节点 */
  nodeType: number;
  /** 节点值 */
  value: string | null;
}

/**
 * 表达式组件属性接口
 */
export interface ExpressionProps<T extends QuickTipItem = QuickTipItem> {
  /** 容器类名 */
  className?: string;
  /** 容器样式 */
  style?: CSSProperties;
  /** 编辑器类名 */
  editorClassName?: string;
  /** 编辑器样式 */
  editorStyle?: CSSProperties;
  /** 运算符包装器类名 */
  operatorWrapClassName?: string;
  /** 运算符包装器样式 */
  operatorWrapStyle?: CSSProperties;
  /** 快速提示包装器类名 */
  quickTipWrapClassName?: string;
  /** 快速提示包装器样式 */
  quickTipWrapStyle?: CSSProperties;
  /** 文本元素类名，可以是字符串或函数 */
  textClassName?: ((text: string) => string) | string;
  /** 运算符元素类名，可以是字符串或函数 */
  operatorClassName?: ((operator: string) => string) | string;
  /** 当前值 */
  value?: string;
  /** 运算符配置 */
  operators?: Operators;
  /** 触发弹出操作符的字符代码，默认为空格(32) */
  triggerCharCode?: number;
  /** 是否使用字符代码触发运算符出现 */
  isUseTriggerCharCode?: boolean;
  /** 占位符文本 */
  placeholder?: string;
  /** 快速提示数据源 */
  quickTipDataSource?: Array<T>;
  /** 快速提示数据中用于计算的属性名 */
  quickTipProp?: string;
  /** 是否禁用快速提示 */
  disableQuickTip?: boolean;
  /** 是否显示清空按钮 */
  allowClear?: boolean;
  /** 值变化回调 */
  onChange: (value?: string) => void;
  /** 连续输入字符的回调 */
  onContinuousTextChange: (continuousText: string) => void;
  /** 编辑器输入结束回调 */
  onEditorInputEnd: (html: string, continuousText: string) => void;
  /** 编辑器失去焦点回调 */
  onEditorBlurEnd: (e: FocusEvent<HTMLDivElement>) => void;
  /** 编辑器按键回调 */
  onEditorKeyDownEnd: (e: KeyboardEvent<HTMLDivElement>) => void;
  /** 编辑器粘贴回调 */
  onEditorPasteEnd: (e: ClipboardEvent<HTMLDivElement>) => void;
}

/**
 * 表达式组件句柄接口
 */
export interface ExpressionHandle {
  /** 设置值 */
  setValue(html: string): void;
  /** 获取值 */
  getValue(): string;
  /** 检查编辑器是否为空 */
  isEditorEmpty(): boolean;
  /** 显示快速提示 */
  showQuickTip(): void;
  /** 显示运算符选择器 */
  showOperators(): void;
  /** 隐藏快速提示 */
  hideQuickTip(): void;
  /** 隐藏运算符选择器 */
  hideOperators(): void;
  /** 清空内容 */
  clear(): void;
  /** 运算符点击处理 */
  onOperatorsClick(operator: string, operatorType: OperatorType): void;
}

/**
 * 表达式视图组件属性接口
 */
export interface ViewProps extends EllipsisProps {
  /** 包装器类名 */
  wrapClassName?: string;
  /** 包装器样式 */
  wrapStyle?: CSSProperties;
  /** 显示的值 */
  value?: string;
}

/**
 * 表达式组件类型定义
 */
export type ExpressionComponent = NamedExoticComponent<
  PropsWithoutRef<ExpressionProps<any>> & RefAttributes<ExpressionHandle>
> & {
  /** 视图组件 */
  View: FC<ViewProps>;
  /** 解析HTML为文本的方法 */
  parse: (
    queryHtml: string,
    callback: (value: ParseCallbackParams) => string,
  ) => string;
  /** Antd表单必填验证器 */
  AntdFormRequireValidator: (tip: string) => {
    validator: (_: any, value: string, callback: (tip?: any) => {}) => void;
  };
  /** ElasticSearch运算符选项 */
  ElasticSearchOptions: typeof ElasticSearch;
  /** SQL运算符选项 */
  SqlOptions: typeof Sql;
  /** 数学运算符选项 */
  MathOptions: typeof Math;
};
