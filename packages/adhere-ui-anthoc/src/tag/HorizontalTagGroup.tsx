import React, { memo } from 'react';
import type { FC } from 'react';

import type { HorizontalTagGroupProps } from '../types';
import TagGroup from './TagGroup';

/**
 * HorizontalTagGroup
 * @description 横向的Tag
 * @constructor
 */
const HorizontalTagGroup: FC<HorizontalTagGroupProps> = (props) => (
  <TagGroup {...props} direction="horizontal" />
);

export default memo(HorizontalTagGroup);
