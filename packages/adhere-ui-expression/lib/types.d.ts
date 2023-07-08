import type { CSSProperties } from 'react';
import type { EllipsisProps } from '@baifendian/adhere-ui-ellipsis/es/types';
export type OperatorType = 'unary' | 'binary' | 'ternary' | 'brackets';
/**
 * OperatorItem
 */
export type OperatorItem = {
    label: string;
    value: string;
    type: OperatorType;
};
/**
 * Operators
 */
export type Operators = Array<OperatorItem>;
/**
 * ExpressionProps
 * @interface ExpressionProps
 */
export interface ExpressionProps<T extends {
    label: string;
    value: string;
}> {
    className?: string;
    style?: CSSProperties;
    editorClassName?: string;
    editorStyle?: CSSProperties;
    operatorWrapClassName?: string;
    operatorWrapStyle?: CSSProperties;
    quickTipWrapClassName?: string;
    quickTipWrapStyle?: CSSProperties;
    textClassName?: string;
    operatorClassName?: string;
    /**
     * value
     */
    value?: string;
    /**
     * 运算符
     */
    operators?: Operators;
    /**
     * 触发弹出操作符layer的charCode
     */
    triggerCharCode?: number;
    /**
     * placeholder
     */
    placeholder?: string;
    /**
     * quickTipDataSource
     * @description 快速查询的数据
     */
    quickTipDataSource?: Array<T>;
    quickTipProp?: string;
    /**
     * disableQuickTip
     */
    disableQuickTip?: boolean;
    /**
     * onChange
     * @param value
     */
    onChange: (value?: string) => void;
    /**
     * 连续输入字符的回调
     * @param value
     */
    onContinuousTextChange: (continuousText: string) => void;
    /**
     * onEditorInputEnd
     * @description input输入
     * @param data
     * @param continuousText
     */
    onEditorInputEnd: (html: string, continuousText: string) => void;
    onEditorBlurEnd: (e: any) => void;
    onEditorKeyDownEnd: (e: any) => void;
    onEditorPasteEnd: (e: any) => void;
}
export interface ExpressionHandle {
    setValue(html: string): void;
    getValue(): string;
    isEditorEmpty(): boolean;
    hideQuickTip(): void;
    showQuickTip(): void;
    showOperators(): void;
    hideQuickTip(): void;
    hideOperators(): void;
}
export interface ViewProps extends EllipsisProps {
    wrapClassName?: string;
    wrapStyle?: CSSProperties;
    value?: string;
}
