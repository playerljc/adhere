import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { DialogTriggerPromptProps, DisplayNameInternal } from '../types';
import DialogTrigger from './Trigger';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-dialog-trigger-prompt';

/**
 * InternalDialogTriggerPrompt
 */
const InternalDialogTriggerPrompt = memo<DialogTriggerPromptProps<any>>(
  ({ submitAction, ...dialogTriggerProps }) => {
    const actions = useMemo(
      () =>
        submitAction
          ? [
              {
                ...submitAction,
                text: submitAction?.text ?? Intl.v('确定'),
              },
            ]
          : [],
      [submitAction],
    );

    return (
      <DialogTrigger
        className={classNames(selectorPrefix, dialogTriggerProps?.className ?? '')}
        actions={actions}
        {...(dialogTriggerProps ?? {})}
      />
    );
  },
);

const DialogTriggerPrompt = InternalDialogTriggerPrompt as DisplayNameInternal<
  typeof InternalDialogTriggerPrompt
>;

DialogTriggerPrompt.displayName = 'DialogTriggerPrompt';

export default DialogTriggerPrompt;
