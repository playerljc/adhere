import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

const selectorPrefix = 'adhere-mobile-ui-prsl-dnd';

/**
 * DNDManageButton
 * @param renderSelectionTrigger
 * @param isUseDNDMode
 * @param onChange
 * @constructor
 */
const DNDManageButton = ({
  dndLabel,
  dndFinishLabel,
  dndCancelLabel,
  isUseDNDMode,
  isUseNormalMode,
  onChange,
  onFinish,
  onCancel,
}) => {
  return (
    <div className={`${selectorPrefix}-manager-wrapper`}>
      {isUseNormalMode && (
        <div
          className={`${selectorPrefix}-manager-item`}
          onClick={() => {
            onChange(true);
          }}
        >
          {dndLabel ?? Intl.get('sort')}
        </div>
      )}

      {isUseDNDMode && (
        <>
          <div
            className={`${selectorPrefix}-manager-item`}
            onClick={() => {
              onChange(false);
              onFinish();
            }}
          >
            {dndFinishLabel ?? Intl.get('complete')}
          </div>
          <div
            className={`${selectorPrefix}-manager-item`}
            onClick={() => {
              onChange(false);
              onCancel();
            }}
          >
            {dndCancelLabel ?? Intl.get('cancel')}
          </div>
        </>
      )}
    </div>
  );
};

export default DNDManageButton;
