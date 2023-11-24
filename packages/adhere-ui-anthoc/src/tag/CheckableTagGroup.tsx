import React, { memo } from 'react';

import Space from '../space';
import type { CheckableTagGroupProps, DisplayNameInternal } from '../types';
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
const InternalCheckableTagGroup = memo<CheckableTagGroupProps>(
  ({ direction = 'horizontal', mode = 'single', options, value, onChange, ...props }) => {
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
                  onChange?.(_value as any, _checked, _value as any);
                } else if (mode === 'multiple') {
                  let values = [...value];

                  if (_checked) {
                    values = [...values, _value];
                    onChange?.(values, checked, value);
                  } else {
                    values = values.filter((_v) => _v !== _value);
                    onChange?.(values, false, values);
                  }
                }
              }}
              {...tagProps}
            />
          );
        })}
      </Space>
    );
  },
);

const CheckableTagGroup = InternalCheckableTagGroup as DisplayNameInternal<
  typeof InternalCheckableTagGroup
>;
CheckableTagGroup.displayName = 'CheckableTagGroup';

export default CheckableTagGroup;
