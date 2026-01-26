import type { TextAreaProps } from 'antd-mobile';
import React, { useDeferredValue, useEffect, useState } from 'react';

import TextArea from '../text-area';

/**
 * 优化的TextArea组件，使用useDeferredValue来减少快速输入时的卡顿
 */
const OptimizedTextArea = React.memo(({ value, onChange, ...restProps }: TextAreaProps) => {
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
      // antd-mobile 的 onChange 直接接收字符串值
      onChange?.(deferredValue);
    }
  }, [deferredValue, value, onChange]);

  const handleChange = (val: string) => {
    setLocalValue(val);
  };

  return <TextArea {...restProps} value={localValue} onChange={handleChange} />;
});

OptimizedTextArea.displayName = 'OptimizedTextArea';

export default OptimizedTextArea;
