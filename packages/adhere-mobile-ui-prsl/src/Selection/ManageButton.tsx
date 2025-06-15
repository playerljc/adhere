import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

const selectorPrefix = 'adhere-mobile-ui-prsl-selection';

/**
 * SelectionManageButton
 * @param renderSelectionTrigger
 * @param isUseSelectionMode
 * @param onChange
 * @constructor
 */
const SelectionManageButton = ({
  selectionLabel,
  selectionFinishLabel,
  selectionCancelLabel,
  isUseSelectionMode,
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
          {selectionLabel ?? Intl.get('manage')}
        </div>
      )}

      {isUseSelectionMode && (
        <>
          <div
            className={`${selectorPrefix}-manager-item`}
            onClick={() => {
              onChange(false);
              onFinish();
            }}
          >
            {selectionFinishLabel ?? Intl.get('complete')}
          </div>
          <div
            className={`${selectorPrefix}-manager-item`}
            onClick={() => {
              onChange(false);
              onCancel();
            }}
          >
            {selectionCancelLabel ?? Intl.get('cancel')}
          </div>
        </>
      )}
    </div>
  );
};

export default SelectionManageButton;
