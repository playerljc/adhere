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
const DNDManageButton = ({ isUseDNDMode, isUseNormalMode, onChange, onFinish, onCancel }) => {
  return (
    <div className={`${selectorPrefix}-manager-wrapper`}>
      {isUseNormalMode && (
        <div
          className={`${selectorPrefix}-manager-item`}
          onClick={() => {
            onChange(true);
          }}
        >
          {Intl.v('排序')}
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
            {Intl.v('完成')}
          </div>
          <div
            className={`${selectorPrefix}-manager-item`}
            onClick={() => {
              onChange(false);
              onCancel();
            }}
          >
            {Intl.v('取消')}
          </div>
        </>
      )}
    </div>
  );
};

export default DNDManageButton;
