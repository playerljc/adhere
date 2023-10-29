import type { CheckboxGroupProps, CheckboxOptionType } from 'antd/es/checkbox';
import React, { memo } from 'react';
import type { FC } from 'react';

import Space from '../space';
import Checkbox from './index';

/**
 * VerticalCheckbox
 * @description 竖向的CheckboxGroup
 * @param options
 * @param props
 * @constructor
 */
const VerticalCheckbox: FC<CheckboxGroupProps> = ({ options, ...props }) => {
  return (
    <Checkbox.Group {...props}>
      <Space direction="vertical">
        {options?.map?.((t) => {
          const { value, disabled, label } = t as CheckboxOptionType;

          return (
            <Checkbox key={value} value={value} disabled={disabled}>
              {label}
            </Checkbox>
          );
        })}
      </Space>
    </Checkbox.Group>
  );
};

export default memo(VerticalCheckbox);
