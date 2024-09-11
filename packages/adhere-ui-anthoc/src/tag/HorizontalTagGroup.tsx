import React, { memo } from 'react';

import type { DisplayNameInternal, HorizontalTagGroupProps } from '../types';
import TagGroup from './TagGroup';

/**
 * HorizontalTagGroup
 * @description 横向的Tag
 * @constructor
 */
const InternalHorizontalTagGroup = memo<HorizontalTagGroupProps>((props) => (
  <TagGroup {...props} direction="horizontal" />
));

const HorizontalTagGroup = InternalHorizontalTagGroup as DisplayNameInternal<
  typeof InternalHorizontalTagGroup
>;
HorizontalTagGroup.displayName = 'HorizontalTagGroup';

export default HorizontalTagGroup;
