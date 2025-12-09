import React from 'react';
import type { FC } from 'react';

import { InputNumberInteger, Select } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import type { ColgroupValueSettingProps } from '../../types';

const selectorPrefix = `${SELECT_PREFIX}-components-colgroup-value-setting`;

const { usePropToState } = Hooks;

/**
 * ColgroupValueSetting
 */
const ColgroupValueSetting: FC<ColgroupValueSettingProps> = ({ value, onChange }) => {
  const [type, setType] = usePropToState<'number' | 'auto'>(
    typeof value === 'number' ? 'number' : 'auto',
  );

  return (
    <div className={selectorPrefix}>
      <div>
        <Select
          value={type}
          onChange={(_type) => {
            setType(_type);
            if (_type === 'auto') {
              onChange?.('auto');
            }
          }}
          placeholder="请选择"
          options={[
            {
              value: 'number',
              label: Intl.get('number'),
            },
            {
              value: 'auto',
              label: Intl.get('auto'),
            },
          ]}
        />
      </div>

      {type === 'number' && (
        <div>
          <InputNumberInteger.InputNegativeNumberInteger
            value={value}
            onChange={(_value) => {
              onChange?.(_value as number);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ColgroupValueSetting;
