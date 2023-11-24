import React, { memo } from 'react';

import Space from '../space';
import type { DisplayNameInternal, TagGroupProps } from '../types';
import Tag from './Tag';

/**
 * TagGroup
 * @description TagGroup
 * @constructor
 * @param direction
 * @param options
 * @param props
 */
const InternalTagGroup = memo<TagGroupProps>(({ direction, options, ...props }) => (
  <Space direction={direction} {...props}>
    {options?.map?.(({ value, ...tagProps }) => (
      <Tag key={value} {...tagProps} />
    ))}
  </Space>
));

const TagGroup = InternalTagGroup as DisplayNameInternal<typeof InternalTagGroup>;
TagGroup.displayName = 'TagGroup';

export default TagGroup;
