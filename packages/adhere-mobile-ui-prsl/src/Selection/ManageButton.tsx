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
          {selectionLabel ?? Intl.v('管理')}
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
            {selectionFinishLabel ?? Intl.v('完成')}
          </div>
          <div
            className={`${selectorPrefix}-manager-item`}
            onClick={() => {
              onChange(false);
              onCancel();
            }}
          >
            {selectionCancelLabel ?? Intl.v('取消')}
          </div>
        </>
      )}
    </div>
  );
};

export default SelectionManageButton;
