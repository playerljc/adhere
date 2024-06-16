import { ActionSheet } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons';
import React from 'react';
import type { FC } from 'react';

import type { ActionSheetTriggerProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-prsl-action-sheet-trigger';

/**
 * ActionSheetTrigger
 * @param config
 * @param actionSheetTrigger
 * @constructor
 */
const ActionSheetTrigger: FC<ActionSheetTriggerProps> = ({ config, actionSheetTrigger }) => {
  return (
    <span
      className={selectorPrefix}
      onClick={(e) => {
        e.stopPropagation();

        ActionSheet.show({
          actions: config.map((_config) => ({
            key: _config.key,
            disabled: !!_config.disabled,
            text: _config.text,
            onClick: _config?.onClick,
          })),
          closeOnAction: true,
        });
      }}
    >
      {actionSheetTrigger ?? <MoreOutline />}
    </span>
  );
};

export default ActionSheetTrigger;
