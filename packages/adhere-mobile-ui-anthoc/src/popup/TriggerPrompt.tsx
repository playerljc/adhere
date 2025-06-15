import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { DisplayNameInternal, PopupTriggerPromptProps } from '../types';
import PopupTrigger from './Trigger';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-modal-trigger-prompt';

/**
 * InternalPopupTriggerPrompt
 */
const InternalPopupTriggerPrompt = memo<PopupTriggerPromptProps<any>>(
  ({ submitAction, ...popupTriggerProps }) => {
    const actions = useMemo(
      () =>
        submitAction
          ? [
              {
                ...submitAction,
                text: submitAction?.text ?? Intl.get('confirm'),
              },
            ]
          : [],
      [submitAction],
    );

    return (
      <PopupTrigger
        className={classNames(selectorPrefix, popupTriggerProps?.className ?? '')}
        actions={actions}
        {...(popupTriggerProps ?? {})}
      />
    );
  },
);

const PopupTriggerPrompt = InternalPopupTriggerPrompt as DisplayNameInternal<
  typeof InternalPopupTriggerPrompt
>;

PopupTriggerPrompt.displayName = 'PopupTriggerPrompt';

export default PopupTriggerPrompt;
