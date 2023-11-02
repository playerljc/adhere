import { CheckboxOptionType } from 'antd/es/checkbox';
import type { RadioGroupProps } from 'antd/es/radio';
import React from 'react';
import type { FC } from 'react';

import Space from '../space';
import Radio from './index';

/**
 * VerticalRadio
 * @description 竖向的RadioGroup
 * @param options
 * @param props
 * @constructor
 */
const VerticalRadio: FC<RadioGroupProps> = ({ options, ...props }) => (
  <Radio.Group {...props}>
    <Space direction="vertical">
      {options?.map?.((t) => {
        const { label, value, disabled } = t as CheckboxOptionType;

        return (
          <Radio key={value} value={value} disabled={disabled}>
            {label}
          </Radio>
        );
      })}
    </Space>
  </Radio.Group>
);

export default VerticalRadio;
