import type { InputProps } from 'antd';
import React from 'react';
/**
 * 优化的Input组件，使用useDeferredValue来减少快速输入时的卡顿
 * 保持输入框的即时响应，同时延迟状态更新到父组件
 */
declare const OptimizedInput: React.MemoExoticComponent<({ value, onChange, ...restProps }: InputProps) => React.JSX.Element>;
export default OptimizedInput;
