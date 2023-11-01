import type { CheckboxOptionType } from 'antd/es/checkbox';
import type { FC } from 'react';
import React, { memo } from 'react';

import type { CustomCheckboxProps } from '../types';
import CheckboxGroup from './CheckboxGroup';
import Checkbox from './index';

/**
 * CustomCheckbox
 * @param props
 * @constructor
 */
const CustomCheckbox: FC<CustomCheckboxProps> = (props) => {
  const { children, options, value, disabled = false } = props;

  return (
    <CheckboxGroup {...props}>
      {(onChange) =>
        children?.(
          options?.map?.((t) => {
            const { value: itemValue, disabled: itemDisabled, label } = t as CheckboxOptionType;

            return {
              data: t as CheckboxOptionType,
              onChange,
              disabled: itemDisabled ?? disabled,
              checked: (props.value ?? []).includes(itemValue),
              defaultNode: (
                <Checkbox
                  key={itemValue}
                  value={value}
                  disabled={itemDisabled ?? disabled}
                  checked={(props.value ?? []).includes(itemValue)}
                  onChange={(e) => {
                    onChange(e, itemValue);
                  }}
                >
                  {label}
                </Checkbox>
              ),
            };
          }) ?? [],
        )
      }
    </CheckboxGroup>
  );
};

export default memo(CustomCheckbox);
