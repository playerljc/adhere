import { forwardRef } from 'react';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Trigger from './Trigger';
import type { TriggerPromptHandle, TriggerPromptProps } from './types';

/**
 * TriggerPrompt组件
 * @description 带确认按钮的弹窗触发器组件
 * @param props - 组件属性
 * @param ref - 组件引用
 * @constructor
 */
const TriggerPrompt = forwardRef<TriggerPromptHandle, TriggerPromptProps>(
  ({ onSubmit, okText, actions, ...props }, ref) => {
    return (
      <Trigger
        ref={ref}
        {...props}
        actions={
          actions
            ? actions
            : [
                {
                  key: 'submit',
                  color: 'primary',
                  children: okText ?? Intl.get('confirm'),
                  onClick: () => onSubmit?.() ?? Promise.resolve(),
                },
              ]
        }
      />
    );
  },
);

TriggerPrompt.displayName = 'TriggerPrompt';

export default TriggerPrompt;
