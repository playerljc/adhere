import React, { memo } from 'react';
import type { FC } from 'react';

import Space from '../space';
import type { TagGroupProps } from '../types';
import Tag from './Tag';

/**
 * TagGroup
 * @description TagGroup
 * @constructor
 * @param direction
 * @param options
 * @param props
 */
const TagGroup: FC<TagGroupProps> = ({ direction, options, ...props }) => (
  <Space direction={direction} {...props}>
    {options?.map?.(({ value, ...tagProps }) => (
      <Tag key={value} {...tagProps} />
    ))}
  </Space>
);

export default memo(TagGroup);
