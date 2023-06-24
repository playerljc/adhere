import type { CSSProperties, ReactNode } from 'react';

// 运算符的类型
// unary 单目运算符
// binary 双目运算符
// ternary 三目运算符
// brackets 括号
export type OperatorType = 'unary' | 'binary' | 'ternary' | 'brackets';

/**
 * ExpressionProps
 * @interface ExpressionProps
 */
export interface ExpressionProps {
  className?: string;
  style?: CSSProperties;
  value?: string;
  /**
   * 运算符
   */
  operators?: Array<{
    // 运算符显示的内容
    label: string;
    // 运算符的值
    value: string;
    // 运算符的类型
    type: OperatorType;
  }>;
  /**
   * 触发弹出操作符layer的charCode
   */
  triggerCharCode?: number;
  onChange: (value?: string) => void;
  /**
   * 连续输入字符的回调
   * @param value
   */
  onContinuousTextChange: (continuousText: string) => void;
  /**
   * onEditorInputEnd
   * @description input输入结束
   * @param data
   * @param continuousText
   */
  onEditorInputEnd: (data: string, continuousText: string) => void;
  /***
   * onKeyDownEnd
   * @param e
   */
  onEditorKeyDownEnd: (e) => void;
  /**
   * onEditorBlurEnd
   * @param e
   */
  onEditorBlurEnd: (e) => void;
  /**
   * onEditorBlurTimeOut
   * @param e
   */
  onEditorBlurTimeOut: (e) => void;
  children?: ReactNode;
}

export interface ExpressionHandle {}
