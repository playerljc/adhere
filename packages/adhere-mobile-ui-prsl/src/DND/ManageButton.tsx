import React from 'react';
import type { FC, ReactNode } from 'react';

import Intl from '@baifendian/adhere-util-intl';

const selectorPrefix = 'adhere-mobile-ui-prsl-dnd';

export type DNDManageButtonProps = {
  dndLabel?: ReactNode;
  dndFinishLabel?: ReactNode;
  dndCancelLabel?: ReactNode;
  isUseDNDMode: boolean;
  isUseNormalMode: boolean;
  onChange: (isUseDNDMode: boolean) => void;
  onFinish: () => void;
  onCancel: () => void;
};

/**
 * DNDManageButton
 * @param dndLabel
 * @param dndFinishLabel
 * @param dndCancelLabel
 * @param isUseDNDMode
 * @param isUseNormalMode
 * @param onChange
 * @param onFinish
 * @param onCancel
 * @constructor
 */
const DNDManageButton: FC<DNDManageButtonProps> = ({
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
