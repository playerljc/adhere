import type { FC } from 'react';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Trigger from './Trigger';
import type { TriggerPromptProps } from './types';

/**
 * TriggerPrompt
 * @constructor
 */
const TriggerPrompt: FC<TriggerPromptProps> = ({ onSubmit, okText, ...props }) => {
  return (
    <Trigger
      {...props}
      actions={[
        {
          key: 'submit',
          // @ts-ignore
          color: 'primary',
          children: okText ?? Intl.v('确定'),
          onClick: () => onSubmit?.() ?? Promise.resolve(),
        },
      ]}
    />
  );
};

TriggerPrompt.displayName = 'TriggerPrompt';

export default TriggerPrompt;
