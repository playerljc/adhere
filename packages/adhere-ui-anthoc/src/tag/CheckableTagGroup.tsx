import React, { memo } from 'react';
import type { FC } from 'react';

import Space from '../space';
import type { CheckableTagGroupProps } from '../types';
import Tag from './Tag';

const { CheckableTag } = Tag;

/**
 * CheckableTagGroup
 * @description
 * @constructor
 * @param direction
 * @param mode
 * @param options
 * @param value
 * @param onChange
 * @param props
 */
const CheckableTagGroup: FC<CheckableTagGroupProps> = ({
  direction = 'horizontal',
  mode = 'single',
  options,
  value,
  onChange,
  ...props
}) => {
  return (
    <Space direction={direction} {...props}>
      {options?.map?.(({ value: _value, ...tagProps }) => {
        let checked = false;

        if (mode === 'single') {
          checked = _value === value;
        } else if (mode === 'multiple') {
          checked = value?.includes(_value);
        }

        return (
          <CheckableTag
            key={_value}
            checked={checked}
            onChange={(_checked) => {
              if (mode === 'single') {
                onChange?.(_value, []);
              } else if (mode === 'multiple') {
                let values = [...value];

                if (_checked) {
                  values = [...values, _value];
                } else {
                  values = values.filter((_v) => _v !== _value);
                }

                onChange?.(values, []);
              }
            }}
            {...tagProps}
          />
        );
      })}
    </Space>
  );
};

export default memo(CheckableTagGroup);
