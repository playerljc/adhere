import type { TextAreaProps } from 'antd/es/input';
import React, { useDeferredValue, useEffect, useState } from 'react';

import TextArea from '../text-area';
import { createFactory } from '../util';

/**
 * 优化的TextArea组件，使用useDeferredValue来减少快速输入时的卡顿
 */
const InternalOptimizedTextArea = React.memo(({ value, onChange, ...restProps }: TextAreaProps) => {
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
      } as React.ChangeEvent<HTMLTextAreaElement>;
      onChange?.(syntheticEvent);
    }
  }, [deferredValue, value, onChange]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
  };

  return <TextArea {...restProps} value={localValue} onChange={handleChange} />;
});

InternalOptimizedTextArea.displayName = 'InternalOptimizedTextArea';

const OptimizedTextAreaHOC: typeof InternalOptimizedTextArea & {
  defaultProps?: Partial<TextAreaProps>;
  override?: (props: Partial<TextAreaProps>) => Partial<TextAreaProps>;
} = createFactory<TextAreaProps>(InternalOptimizedTextArea, {
  allowClear: true,
  maxLength: 1000,
  showCount: true,
  autoSize: false,
});

OptimizedTextAreaHOC.displayName = 'OptimizedTextArea';

export default OptimizedTextAreaHOC;
