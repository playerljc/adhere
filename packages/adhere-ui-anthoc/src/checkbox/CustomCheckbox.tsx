import type { CheckboxOptionType } from 'antd/es/checkbox';
import type { FC } from 'react';
import React, { memo } from 'react';

import type { CustomCheckboxProps } from '../types';
import Checkbox from './index';

/**
 * CustomCheckbox
 * @param children
 * @param options
 * @param props
 * @constructor
 */
const CustomCheckbox: FC<CustomCheckboxProps> = ({ children, options, ...props }) => (
  <Checkbox.Group {...props}>
    {children?.(
      options?.map?.((t) => {
        const option = t as CheckboxOptionType;

        return {
          data: option,
          defaultNode: (
            <Checkbox key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </Checkbox>
          ),
        };
      }) ?? [],
    )}
  </Checkbox.Group>
);

export default memo(CustomCheckbox);
