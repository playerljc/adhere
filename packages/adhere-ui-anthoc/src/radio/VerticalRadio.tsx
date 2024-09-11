import { CheckboxOptionType } from 'antd/es/checkbox';
import type { RadioGroupProps } from 'antd/es/radio';
import React, { memo } from 'react';

import Space from '../space';
import type { DisplayNameInternal } from '../types';
import Radio from './index';

/**
 * VerticalRadio
 * @description 竖向的RadioGroup
 * @param options
 * @param props
 * @constructor
 */
const InternalVerticalRadio = memo<RadioGroupProps>(({ options, ...props }) => (
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
));

const VerticalRadio = InternalVerticalRadio as DisplayNameInternal<typeof InternalVerticalRadio>;
VerticalRadio.displayName = 'VerticalRadio';

export default VerticalRadio;
