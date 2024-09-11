import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { DisplayNameInternal, ModalTriggerPromptProps } from '../types';
import ModalTrigger from './Trigger';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-modal-trigger-prompt';

/**
 * InternalModalTriggerPrompt
 */
const InternalModalTriggerPrompt = memo<ModalTriggerPromptProps<any>>(
  ({ submitAction, ...modalTriggerProps }) => {
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
      <ModalTrigger
        className={classNames(selectorPrefix, modalTriggerProps?.className ?? '')}
        actions={actions}
        {...(modalTriggerProps ?? {})}
      />
    );
  },
);

const ModalTriggerPrompt = InternalModalTriggerPrompt as DisplayNameInternal<
  typeof InternalModalTriggerPrompt
>;

ModalTriggerPrompt.displayName = 'ModalTriggerPrompt';

export default ModalTriggerPrompt;
