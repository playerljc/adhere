import React from 'react';
import type { FC, ReactNode } from 'react';

import Intl from '@baifendian/adhere-util-intl';

const selectorPrefix = 'adhere-mobile-ui-prsl-selection';

export type SelectionManageButtonProps = {
  selectionLabel?: ReactNode;
  selectionFinishLabel?: ReactNode;
  selectionCancelLabel?: ReactNode;
  isUseSelectionMode: boolean;
  isUseNormalMode: boolean;
  onChange: (isUseSelectionMode: boolean) => void;
  onFinish: () => void;
  onCancel: () => void;
};

/**
 * SelectionManageButton
 * @param selectionLabel
 * @param selectionFinishLabel
 * @param selectionCancelLabel
 * @param isUseSelectionMode
 * @param isUseNormalMode
 * @param onChange
 * @param onFinish
 * @param onCancel
 * @constructor
 */
const SelectionManageButton: FC<SelectionManageButtonProps> = ({
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
