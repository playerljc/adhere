import React, { memo } from 'react';
import type { FC } from 'react';

import type { VerticalTagGroupProps } from '../types';
import TagGroup from './TagGroup';

/**
 * VerticalTagGroup
 * @description 纵向的Tag
 * @constructor
 */
const VerticalTagGroup: FC<VerticalTagGroupProps> = (props) => (
  <TagGroup {...props} direction="vertical" />
);

export default memo(VerticalTagGroup);
