import type { TextAreaProps } from 'antd/es/input';
import React from 'react';
/**
 * 优化的TextArea组件，使用useDeferredValue来减少快速输入时的卡顿
 */
declare const OptimizedTextArea: React.MemoExoticComponent<({ value, onChange, ...restProps }: TextAreaProps) => React.JSX.Element>;
export default OptimizedTextArea;
