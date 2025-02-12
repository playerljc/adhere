import { forwardRef } from 'react';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import Trigger from './Trigger';
import type { TriggerPromptHandle, TriggerPromptProps } from './types';

/**
 * TriggerPrompt
 * @constructor
 */
const TriggerPrompt = forwardRef<TriggerPromptHandle, TriggerPromptProps>(
  ({ onSubmit, okText, ...props }, ref) => {
    return (
      <Trigger
        ref={ref}
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
  },
);

TriggerPrompt.displayName = 'TriggerPrompt';

export default TriggerPrompt;
