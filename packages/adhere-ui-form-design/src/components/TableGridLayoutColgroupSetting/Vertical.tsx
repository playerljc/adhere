import React, { useMemo } from 'react';
import type { FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import { TableGridLayoutVerticalColgroupSetting } from '../../types';
import ColgroupValueSetting from '../ColgroupValueSetting';

const selectorPrefix = `${SELECT_PREFIX}-components-table-grid-layout-colgroup-setting`;

/**
 * Vertical
 */
const Vertical: FC<TableGridLayoutVerticalColgroupSetting> = ({ columnCount, value, onChange }) => {
  const targetValue = useMemo(() => {
    return value ?? [];
  }, [value]);

  return (
    <ul className={selectorPrefix}>
      {Array.from({ length: columnCount }).map((_, index) => (
        <li key={index} className={`${selectorPrefix}-item`}>
          <div className={`${selectorPrefix}-item-title`}>
            {Intl.get('column_number', { index: index + 1 })}
          </div>

          <div className={`${selectorPrefix}-item-setting`}>
            <div className={`${selectorPrefix}-item-setting-value`}>
              <ColgroupValueSetting
                value={targetValue[index]}
                onChange={(_value) => {
                  const newValue = targetValue.map((item, i) => (i === index ? _value : item));
                  onChange?.(newValue);
                }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Vertical;
