import type { InputProps } from 'antd';
import React, { useDeferredValue, useEffect, useState } from 'react';

import Input from './Input';

/**
 * 优化的Input组件，使用useDeferredValue来减少快速输入时的卡顿
 * 保持输入框的即时响应，同时延迟状态更新到父组件
 */
const OptimizedInput = React.memo(({ value, onChange, ...restProps }: InputProps) => {
  const [localValue, setLocalValue] = useState(value || '');
  const deferredValue = useDeferredValue(localValue);
  const prevDeferredValueRef = React.useRef(deferredValue);

  // 当外部value变化时同步本地状态（例如重置等情况）
  useEffect(() => {
    if (value !== localValue) {
      setLocalValue(value || '');
    }
  }, [value]);

  // 当deferredValue稳定后，通知父组件更新
  useEffect(() => {
    // 只有当deferredValue真正变化且与当前value不同时才触发更新
    if (deferredValue !== prevDeferredValueRef.current && deferredValue !== value) {
      prevDeferredValueRef.current = deferredValue;
      // 创建一个合成事件对象来模拟onChange事件
      const syntheticEvent = {
        target: { value: deferredValue },
        currentTarget: { value: deferredValue },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange?.(syntheticEvent);
    }
  }, [deferredValue, value, onChange]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
  };

  return <Input {...restProps} value={localValue} onChange={handleChange} />;
});

OptimizedInput.displayName = 'OptimizedInput';

export default OptimizedInput;
