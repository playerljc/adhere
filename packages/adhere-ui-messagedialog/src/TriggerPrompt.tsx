import React, { forwardRef } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Trigger from './Trigger';
import type { TriggerPromptHandle, TriggerPromptProps } from './types';

/**
 * TriggerPrompt组件
 * 带确认按钮的触发器组件
 *
 * @param props - 组件属性
 * @param props.onSubmit - 提交回调函数
 * @param props.modalConfig - 模态框配置
 * @param props.okText - 确认按钮文本
 * @param ref - 组件引用
 * @returns 触发器提示组件
 */
const TriggerPrompt = forwardRef<TriggerPromptHandle, TriggerPromptProps>(
  ({ onSubmit, modalConfig, okText, actions, ...props }, ref) => {
    return (
      <Trigger
        ref={ref}
        {...props}
        modalConfig={modalConfig}
        actions={
          actions
            ? actions
            : [
                {
                  key: 'submit',
                  // @ts-ignore
                  type: 'primary',
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
