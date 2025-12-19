import React, { useMemo } from 'react';
import type { FC } from 'react';

import { InputNumberInteger, Select } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import type { ColgroupValueSettingProps } from '../../types';

const selectorPrefix = `${SELECT_PREFIX}-components-colgroup-value-setting`;

/**
 * ColgroupValueSetting
 */
const ColgroupValueSetting: FC<ColgroupValueSettingProps> = ({ value, onChange }) => {
  const type = useMemo(() => (typeof value === 'number' ? 'number' : 'auto'), [value]);

  return (
    <ul className={selectorPrefix}>
      <li>
        <Select
          value={type}
          onChange={(_type: string) => {
            if (_type === 'number') {
              if (value === 'auto') {
                onChange?.(120);
              }
            } else {
              onChange?.('auto');
            }
          }}
          placeholder={Intl.get('please_select')}
          options={[
            {
              label: Intl.get('number'),
              value: 'number',
            },
            {
              label: Intl.get('auto'),
              value: 'auto',
            },
          ]}
        />
      </li>

      {type === 'number' && (
        <li>
          <InputNumberInteger.InputPositiveNumberInteger
            value={value}
            onChange={(_value) => {
              onChange?.(_value as number);
            }}
          />
        </li>
      )}
    </ul>
  );
};

export default ColgroupValueSetting;
