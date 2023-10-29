import type { CheckboxOptionType } from 'antd/es/checkbox';
import type { FC } from 'react';
import React, { memo } from 'react';

import type { CustomRadioProps } from '../types';
import Radio from './index';

/**
 * CustomRadio
 * @param children
 * @param options
 * @param props
 * @constructor
 */
const CustomRadio: FC<CustomRadioProps> = ({ children, options, ...props }) => (
  <Radio.Group {...props}>
    {children?.(
      options?.map?.((t) => {
        const option = t as CheckboxOptionType;

        return {
          data: option,
          defaultNode: (
            <Radio key={option.value as string} value={option.value} disabled={option.disabled}>
              {option.label}
            </Radio>
          ),
        };
      }) ?? [],
    )}
  </Radio.Group>
);

export default memo(CustomRadio);
