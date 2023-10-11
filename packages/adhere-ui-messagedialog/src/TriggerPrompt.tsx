import type { FC } from 'react';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Trigger from './Trigger';
import type { TriggerPromptProps } from './types';

/**
 * TriggerPrompt
 * @param className
 * @param {ModalArgv} modalConfig MessageDialog的配置
 * @param {() => Promise<any>} onSubmit 点击确定按钮，在里面处理实际业务最后resolve的值为value
 * @param {ReactNode} okText 确定按钮文本
 * @constructor
 */
const TriggerPrompt: FC<TriggerPromptProps> = ({ onSubmit, modalConfig, okText, ...props }) => {
  return (
    <Trigger
      {...props}
      modalConfig={modalConfig}
      actions={[
        {
          key: 'submit',
          // @ts-ignore
          type: 'primary',
          children: okText ?? Intl.v('确定'),
          onClick: () => onSubmit?.() ?? Promise.resolve(),
        },
      ]}
    />
  );
};

export default TriggerPrompt;